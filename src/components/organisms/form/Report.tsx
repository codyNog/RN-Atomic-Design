import React, { useState } from "react";
import { View } from "react-native";
import SelectForm from "../../molecules/form/Select";
import TextForm from "../../molecules/form/Text";
import Button from "../../atoms/Button/common";
import { marginM } from "../../../constrants/styles/spacing";

const items = [
  { label: "☺ 健康", value: "fine" },
  { label: "☺ 普通", value: "usual" },
  { label: "😣 不調", value: "bad" },
  { label: "😷 病気", value: "sick" }
];

const ReportForm: React.FC = () => {
  const [name, setName] = useState("");
  const [health, setHealth] = useState("");

  const submit = () => {
    const date = new Date();
    const postData = { name, health, date };
    console.log(postData);
    // 送信する処理
    // 送信できない場合ストレージに保存する処理
  };

  return (
    <View>
      <TextForm
        label={"選手名"}
        value={name}
        onChangeText={setName}
        style={{ marginBottom: marginM }}
      />
      <SelectForm
        placeholder={{ label: "健康状態を選択してください", value: null }}
        label={"健康状態"}
        value={health}
        items={items}
        onValueChange={value => setHealth(value)}
        style={{ marginBottom: marginM }}
      />
      <Button text={"送信する"} onPress={submit} />
    </View>
  );
};

export default ReportForm;
