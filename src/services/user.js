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
