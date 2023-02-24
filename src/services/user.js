import firebase from "firebase";
import { saveToStorage } from "../redux/actions/random";

export const userProfileImage = (image) =>
  new Promise((resolve, reject) => {
    saveToStorage(
      image,
      `profileImage/${firebase.auth().currentUser.uid}`
    ).then((res) => {
      firebase
        .firestore()
        .collection("user")
        .doc(firebase.auth().currentUser.uid)
        .update({
          photoURL: res,
        })
        .then((user) => {
          resolve(user);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });

export const userNameSave = (name) =>
  new Promise((resolve, reject) => {
    firebase
      .firestore()
      .collection("user")
      .doc(firebase.auth().currentUser.uid)
      .update({
        displayName: name,
      })
      .then((user) => {
        resolve(user);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const searchByUserEmail = (email) =>
  new Promise((resolve, reject) => {
    if (email === "") {
      resolve([]);
    }
    firebase
      .firestore()
      .collection("user")
      .where("email", ">=", email)
      .where("email", "<=", email + "\uf8ff")
      .get()
      .then((snapShot) => {
        const data = snapShot.docs.map((el) => {
          let data = el.data();
          let id = el.id;

          return { id, ...data };
        });

        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
