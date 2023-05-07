import styles from "../../next-app/styles/Home.module.css";
import React, { useState, useEffect } from "react";

interface Message {
  action: string;
  inputValue: string;
}

export default function Home() {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    console.log("useEffect triggered");
    chrome.runtime.onMessage.addListener(
      (message: Message, sender, sendResponse) => {
        console.log(message.inputValue)
        if (message.action === "setInputValue") {
          setInputValue(message.inputValue);
        }
      }
    );
    chrome.runtime.sendMessage({ action: "setQueryParamValue" });
  }, []);

  return (
    <div>
      <h1>{inputValue}</h1>
      <h1>Hello Huy</h1>
    </div>
  );
}
