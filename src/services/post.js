import firebase from "firebase";

export const getPosts = () =>
  new Promise((resolve, reject) => {
    firebase
      .firestore()
      .collection("post")
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

export const getUserById = (id) =>
  new Promise((resolve, reject) => {
    firebase
      .firestore()
      .collection("user")
      .doc(id)
      .get()
      .then((snapShot) => {
        resolve(snapShot.exists ? snapShot.data() : null);
      })
      .catch((err) => {
        reject(err);
      });
  });
