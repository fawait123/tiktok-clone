import firebase from "firebase/app";
import "firebase/firestore";
import Constants from "expo-constants";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rooReducer from "./src/redux/reducers";
import AuthScreen from "./src/screens/Auth";
import { StatusBar } from "expo-status-bar";
import Route from "./src/navigation";

const store = createStore(rooReducer, applyMiddleware(thunk));

if (firebase.apps.length === 0) {
  firebase.initializeApp(Constants.manifest.web.config.firebase);
}

export const db = firebase.firestore();

export default function App() {
  return (
    <Provider store={store}>
      <Route />
      <StatusBar style="auto" />
    </Provider>
  );
}
