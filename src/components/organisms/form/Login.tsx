import React, { useState } from "react";
import Button from "../../atoms/Button/common";
import { marginM } from "../../../constrants/styles/spacing";
import PasswordForm from "../../molecules/form/Password";
import UsernameForm from "../../molecules/form/Username";
import { View } from "react-native";
import Session from "../../../store/container/Session";

const LoginForm: React.FC = () => {
  const session = Session.useContainer();
  const { login } = session;
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const submit = () => {
    const postData = { name, password };
    console.log(postData);
    // ログイン処理
    login();
  };

  return (
    <View>
      <UsernameForm
        label={"ユーザー名"}
        value={name}
        onChangeText={setName}
        style={{ marginBottom: marginM }}
      />
      <PasswordForm
        label={"パスワード"}
        value={password}
        onChangeText={setPassword}
        style={{ marginBottom: marginM }}
      />
      <Button text={"ログインする"} onPress={() => submit()} />
    </View>
  );
};

export default LoginForm;
