export default class FirebaseService {
    constructor(firebase) {
        var config = {
            apiKey: "AIzaSyA_lrqVKPbCWfCH16JuUrCfmADzIeAlTA4",
            authDomain: "jayt-3fe91.firebaseapp.com",
            databaseURL: "https://jayt-3fe91.firebaseio.com",
            projectId: "jayt-3fe91",
            storageBucket: "jayt-3fe91.appspot.com",
            messagingSenderId: "352502944613"
        };
        firebase.initializeApp(config);
        this.db = firebase.firestore();
    }

    addUser(data) {
        return new Promise((resolve, reject) => {
            this.db.collection("users").add(data).then(newData => {
                data.id = newData.id;
                resolve(data);
            });
        })
    }
}
