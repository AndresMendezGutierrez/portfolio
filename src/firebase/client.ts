import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAAYW1eGIQUSjgiMwHGoun_hF71NfkSetQ",
  authDomain: "padawan-portfolio.firebaseapp.com",
  projectId: "padawan-portfolio",
  storageBucket: "padawan-portfolio.firebasestorage.app",
  messagingSenderId: "831376796485",
  appId: "1:831376796485:web:43b8769460de5716f6ec2c",
};

export const app = initializeApp(firebaseConfig);
