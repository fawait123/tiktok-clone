import firebase from "firebase";
require("firebase/auth");
require("firebase/firestore");
import { saveToStorage } from "./random";
import uuid from "uuid-random";
import { USER_STATE_POST_CHANGE } from "../constants";

export const saveCreatePost = (description, video, thumbnail) => (dispatch) =>
  new Promise((resolve, reject) => {
    let storagePostId = uuid();
    let saveAllPromises = Promise.all([
      saveToStorage(
        video,
        `post/${firebase.auth().currentUser.uid}/${storagePostId}/video`
      ),
      saveToStorage(
        thumbnail,
        `post/${firebase.auth().currentUser.uid}/${storagePostId}/thumbnail`
      ),
    ]);
    saveAllPromises.then((data) => {
      firebase
        .firestore()
        .collection("post")
        .add({
          creator: firebase.auth().currentUser.uid,
          media: data,
          description: description,
          commentCount: 0,
          likesCount: 0,
          creation: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          console.log("err", err);
          reject(err);
        });
    });
  });

export const getPostByUser =
  (uid = firebase.auth().currentUser.uid) =>
  (dispatch) =>
    new Promise((resolve, reject) => {
      firebase
        .firestore()
        .collection("post")
        .where("creator", "==", uid)
        .onSnapshot((snapShot) => {
          const data = snapShot.docs.map((doc) => {
            const data = doc.data();
            const id = doc.id;

            return { id, ...data };
          });
          console.log(data);
          return dispatch({
            type: USER_STATE_POST_CHANGE,
            currentPost: data,
          });
        });
    });
