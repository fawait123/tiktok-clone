import firebase from "firebase";
require("firebase/firebase-auth");
import { USER_STATE_CHANGE } from "../constants";
import { getPostByUser } from "./post";

export const userAuthStateListener = () => (dispatch) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      dispatch(getCurrentUser());
      dispatch(getPostByUser(firebase.auth().currentUser.uid));
    } else {
      dispatch({ type: USER_STATE_CHANGE, currentUser: null, loaded: true });
    }
  });
};

export const getCurrentUser = () => (dispatch) => {
  firebase
    .firestore()
    .collection("user")
    .doc(firebase.auth().currentUser.uid)
    .onSnapshot((user) => {
      if (user.exists) {
        return dispatch({
          type: USER_STATE_CHANGE,
          currentUser: user.data(),
          loaded: true,
        });
      }
    });
};
export const login = (email, password) => (dispatch) =>
  new Promise((resolve, reject) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        resolve(userCredentials);
      })
      .catch((error) => {
        reject(error);
      });
  });

export const register = (email, password) => (dispatch) =>
  new Promise((resolve, reject) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        resolve(userCredentials);
      })
      .catch((error) => {
        reject(error);
      });
  });
