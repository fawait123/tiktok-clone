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
import { QueryClient, QueryClientProvider } from "react-query";

const store = createStore(rooReducer, applyMiddleware(thunk));

if (firebase.apps.length === 0) {
  firebase.initializeApp(Constants.manifest.web.config.firebase);
}

export const db = firebase.firestore();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: false,
      staleTime: Infinity,
    },
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Route />
      </QueryClientProvider>
      <StatusBar style="auto" />
    </Provider>
  );
}
