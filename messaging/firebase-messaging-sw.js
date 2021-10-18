
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-messaging.js');

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCJRxaswa6Z61EhOX_72bmh_584Yqk1hIU",
    authDomain: "chat-app-c677b.firebaseapp.com",
    databaseURL: "https://chat-app-c677b-default-rtdb.firebaseio.com",
    projectId: "chat-app-c677b",
    storageBucket: "chat-app-c677b.appspot.com",
    messagingSenderId: "1093796874936",
    appId: "1:1093796874936:web:abb16491e582172d1bc24d",
    measurementId: "G-Y6D2BJWJ0W"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'You have new message';
    const notificationOptions = {
        body: payload.data.message,
        icon: payload.data.icon
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});



