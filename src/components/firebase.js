// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, onMessage, getToken } from "firebase/messaging";
import { BASE_URL } from "./service/service";
import axios from "axios";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA3Fjr82ZUWWIcYW9uBEfYAaQKucNc6Wis",
    authDomain: "lotuscheckin-343fc.firebaseapp.com",
    projectId: "lotuscheckin-343fc",
    storageBucket: "lotuscheckin-343fc.appspot.com",
    messagingSenderId: "893883420160",
    appId: "1:893883420160:web:cff5320fe78ff8151252e5"
};
// const SAVE_SUB = BASE_URL + "api/subscriber";

// Initialize Firebase
// initializeApp(firebaseConfig);

//  export function registerUserFCM() {
//     if (!("Notification" in window)) {
//         // Check if the browser supports notifications
//     } else if (Notification.permission === "granted") {
//         // Check whether notification permissions have already been granted;
//         // if so, create a token for that user and send to server
//        console.log("granted")
//     } else if (Notification.permission !== "denied") {
//         // We need to ask the user for permission
//         Notification.requestPermission().then((permission) => {
//             // If the user accepts, create a token and send to server
//             if (permission === "granted") {
//                 console.log("granted after asking");
//             }
//         });
//     }
// }

// const messaging = getMessaging();
// export const requestForToken = async () => {
//     try {
//         const currentToken = await getToken(messaging, { vapidKey: 'BDvsO7dFBGs-FiHvZO58Ur1GZdxuhm9SKX2x26rgrznYgztnVEKlA15Eo01wfjd2Uh2VRwp0CZfcpX0JlBkmWc4' });
//         if (currentToken) {
//             const sub = {
//                 platform: navigator.platform,
//                 token: currentToken
//             }
//             try{
//                 axios.post(SAVE_SUB,sub).then((res)=> {
//                     console.log(res)
//                   })
//             } catch(err){
//                 console.log("error saving token:",err)
//             }
//         } else {
//             // Show permission request UI
//             console.log('No registration token available. Request permission to generate one.');
//         }
//     } catch (err) {
//         console.log('An error occurred while retrieving token. ', err);
//     }
//   };

//   requestForToken();

//   export const onMessageListener = () =>
//   new Promise((resolve) => {
//     onMessage(messaging, (payload) => {
//       console.log("payload: ", payload)
//       resolve(payload);
//     });
//   });
//   export const onMessageListening = () =>
//   new Promise((resolve) => {
//     onMessage(messaging, (payload) => {
//         console.log(payload)
//         window.location.href="/list"
//       resolve(payload);
//     });
//   });
