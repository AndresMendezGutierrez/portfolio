import { app } from "./server";
import { getRemoteConfig } from "firebase-admin/remote-config";

const remoteConfig = getRemoteConfig(app);

// Cache the template to avoid repeated API calls
let cachedTemplate: Awaited<ReturnType<typeof remoteConfig.getTemplate>> | null = null;
let cacheTimestamp = 0;
const CACHE_TTL_MS = 60 * 1000; // 1 minute cache

/**
 * Fetches the Remote Config template from Firebase (with caching).
 */
async function fetchTemplate() {
  const now = Date.now();
  if (cachedTemplate && now - cacheTimestamp < CACHE_TTL_MS) {
    return cachedTemplate;
  }

  try {
    cachedTemplate = await remoteConfig.getTemplate();
    cacheTimestamp = now;
    return cachedTemplate;
  } catch (error) {
    console.error("Error fetching Remote Config template:", error);
    return null;
  }
}

/**
 * Get a single Remote Config value by key.
 * Returns the default value if the key doesn't exist or on error.
 *
 * @param key - The Remote Config parameter key
 * @param defaultValue - Fallback value if key is not found
 */
export async function getRemoteConfigValue(
  key: string,
  defaultValue: string = ""
): Promise<string> {
  const template = await fetchTemplate();

  if (!template?.parameters?.[key]) {
    return defaultValue;
  }

  const param = template.parameters[key];

  // Get the default value from the parameter
  if (param.defaultValue && "value" in param.defaultValue) {
    return param.defaultValue.value as string;
  }

  return defaultValue;
}

/**
 * Get multiple Remote Config values at once.
 * Pass an object with keys as parameter names and values as defaults.
 *
 * @param defaults - Object with { parameterKey: defaultValue } pairs
 * @returns Object with the same keys but resolved values from Remote Config
 */
export async function getRemoteConfigValues(
  defaults: Record<string, string>
): Promise<Record<string, string>> {
  const template = await fetchTemplate();
  const result: Record<string, string> = {};

  for (const [key, defaultValue] of Object.entries(defaults)) {
    if (
      template?.parameters?.[key]?.defaultValue &&
      "value" in template.parameters[key].defaultValue
    ) {
      result[key] = template.parameters[key].defaultValue.value as string;
    } else {
      result[key] = defaultValue;
    }
  }

  return result;
}

/**
 * Get a boolean Remote Config value.
 *
 * @param key - The Remote Config parameter key
 * @param defaultValue - Fallback value if key is not found
 */
export async function getRemoteConfigBoolean(
  key: string,
  defaultValue: boolean = false
): Promise<boolean> {
  const value = await getRemoteConfigValue(key, String(defaultValue));
  return value.toLowerCase() === "true";
}

/**
 * Get a number Remote Config value.
 *
 * @param key - The Remote Config parameter key
 * @param defaultValue - Fallback value if key is not found
 */
export async function getRemoteConfigNumber(
  key: string,
  defaultValue: number = 0
): Promise<number> {
  const value = await getRemoteConfigValue(key, String(defaultValue));
  const parsed = Number(value);
  return isNaN(parsed) ? defaultValue : parsed;
}
