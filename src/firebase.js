// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import config from "../config.json";


// Initialize Firebase
const app = initializeApp(config);
const db = getDatabase(app);

export { db };