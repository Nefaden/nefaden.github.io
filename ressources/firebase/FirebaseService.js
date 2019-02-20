export default class FirebaseService {
    constructor(firebase){
        var config = {
            apiKey: "AIzaSyDg9ur_yi8Kj3p2By1dZ-7n7mI6Ia3H3Ho",
            authDomain: "cours-firebase-19ff7.firebaseapp.com",
            databaseURL: "https://cours-firebase-19ff7.firebaseio.com",
            projectId: "cours-firebase-19ff7",
            storageBucket: "cours-firebase-19ff7.appspot.com",
            messagingSenderId: "370368090547"
        };
        firebase.initializeApp(config);
        this.db = firebase.firestore();
    }
}

