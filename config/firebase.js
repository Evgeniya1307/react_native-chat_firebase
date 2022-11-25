//подключаю приложение к firebase

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import Constants from 'expo-constants';


// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyBg5p6Orcd3Mvip0amqAVjRmAlh7E3DUM4",
    authDomain: "reactnative-chat-99646.firebaseapp.com",
    projectId: "reactnative-chat-99646",
    storageBucket: "reactnative-chat-99646.appspot.com",
    messagingSenderId: "904580995134",
    appId: "1:904580995134:web:daaf49e8cc59714e69d96f"
};

// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
