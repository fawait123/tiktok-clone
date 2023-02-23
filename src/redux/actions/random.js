import firebase from "firebase";
require("firebase/firestore");
require("firebase/firebase-storage");

export const saveToStorage = (media, path) =>
  new Promise((resolve, reject) => {
    let fileRef = firebase.storage().ref().child(path);

    fetch(media)
      .then((res) => res.blob())
      .then((data) => fileRef.put(data))
      .then((task) => task.ref.getDownloadURL())
      .then((downloadURL) => resolve(downloadURL))
      .catch((err) => reject(err));
  });
