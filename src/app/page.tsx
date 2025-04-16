"use client";
import { useState } from "react";
import { latinToMorse } from "./annexe1";
import { morseToLatin } from "./annexe2";
import "./page.css";

export default function Home() {
  const [latinInput, setLatinInput] = useState("");
  const [morseEncoded, setMorseEncoded] = useState("");

  const [morseInput, setMorseInput] = useState("");
  const [latinDecoded, setLatinDecoded] = useState("");

  const encode = (text: string) => {
    const characters = text.toUpperCase().split("");
    return characters
      .map((character) => latinToMorse[character] || "")
      .join(" ");
  };

  const decode = (text: string) => {
    const characters = text.trim().split(" ");
    return characters.map((morse) => morseToLatin[morse] || "").join("");
  };

  const handleEncode = () => {
    const result = encode(latinInput);
    setMorseEncoded(result);
  };

  const handleDecode = () => {
    const result = decode(morseInput);
    setLatinDecoded(result.toLowerCase());
  };

  return (
    <div id="main-container">
      <h1>Morse</h1>

      <div className="encode">
        <label htmlFor="encode-latin">Encode Latin to Morse</label>
        <input
          id="encode-latin"
          type="text"
          maxLength={10}
          value={latinInput}
          onChange={(e) => setLatinInput(e.target.value)}
          placeholder="Enter your Latin name"
        />
        <div className="result-encode-container" style={{ color: "white" }}>
          {morseEncoded}
        </div>
        <button onClick={handleEncode} type="button">
          START
        </button>
      </div>

      <div className="decode">
        <label htmlFor="decode-morse">Decode Morse to Latin</label>
        <input
          id="decode-morse"
          type="text"
          value={morseInput}
          onChange={(e) => setMorseInput(e.target.value)}
          placeholder="Enter your Morse name"
        />
        <div
          className="result-decode-container"
          style={{ color: "white", textTransform: "lowercase" }}
        >
          {latinDecoded}
        </div>
        <button onClick={handleDecode} type="button">
          START
        </button>
      </div>
    </div>
  );
}
