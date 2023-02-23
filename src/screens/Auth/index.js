import { View, Text } from "react-native";
import React from "react";
import style from "./style";
import AuthMenu from "../../components/auth/menu";
import { useState } from "react";
import AuthDetail from "../../components/auth/detail";

export default function AuthScreen() {
  const [authPage, setAuthPage] = useState(0);
  const [authDetail, setAuthDetail] = useState(false);
  return (
    <View style={style.container}>
      {authDetail ? (
        <AuthDetail
          authDetail={authDetail}
          setAuthDetail={setAuthDetail}
          authPage={authPage}
          setAuthPage={setAuthPage}
        />
      ) : (
        <AuthMenu
          authPage={authPage}
          setAuthPage={setAuthPage}
          authDetail={authDetail}
          setAuthDetail={setAuthDetail}
        />
      )}
    </View>
  );
}
