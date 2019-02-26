import * as firebase from 'firebase';

class FirebaseService {
    constructor() {
        console.log('firebase',firebase);
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

    addUser(data, callback) {
        return new Promise((resolve, reject) => {
            this.db.collection("users").add(data).then(newData => {
                // console.log("Document written with ID: ", newData.id,newData.get());
                data.id = newData.id;
                resolve(data);
            });
        })
    }

    getUsers() {
        return new Promise((resolve, reject) => {
            let out = [];
            this.db.collection("users").get().then(querySnapshot => {
                querySnapshot.forEach(function (doc) {
                    let current = doc.data();
                    current.id = doc.id;
                    out.push(current);
                    // // doc.data() is never undefined for query doc snapshots
                    // console.log(doc.id, " => ", doc.data());
                });
                resolve(out);
            });
        })
    }
}

export default FirebaseService;
