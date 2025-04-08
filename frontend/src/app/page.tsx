"use client"
import { useEffect } from "react";
import { latinToMorse } from "./annexe1";
import { morseToLatin } from "./annexe2";
import "./page.css";

export default function Home() {
  useEffect(() => {
    // ENCODE MORSE

    const encodeLatinToMorse = document.querySelector("#encode-latin");
    const encodeButton = document.querySelector("#start-encode");
    const resultEncodeContainer = document.querySelector(
      ".result-encode-container"
    );

    encodeButton.addEventListener("click", function () {
      function getLatinCharacterList(textArray) {
        return textArray.toUpperCase().split("");
      }
      function translateLatinCharacter(characterLatin) {
        return latinToMorse[characterLatin];
      }
      function encode(a) {
        const resultA = getLatinCharacterList(a);
        const characterLatinAdd = [];
        for (let i = 0; i < resultA.length; i++) {
          characterLatinAdd.push(translateLatinCharacter(resultA[i]));
        }
        return characterLatinAdd.join(" ");
      }

      let encodeValue = encodeLatinToMorse.value;
      const resultEncode = encode(encodeValue);
      resultEncodeContainer.textContent = `${resultEncode}`;
      resultEncodeContainer.style.color = "white";
    });

    // DECODE MORSE

    const decodeLatinToMorse = document.querySelector("#decode-morse");
    const decodeButton = document.querySelector("#start-decode");
    const resultDecodeContainer = document.querySelector(
      ".result-decode-container"
    );

    decodeButton.addEventListener("click", function () {
      function getMorseCharacterList(text2Array) {
        return text2Array.split(" ");
      }

      function translateMorseCharacter(characterMorse) {
        return morseToLatin[characterMorse];
      }

      function decode(b) {
        const resultB = getMorseCharacterList(b);
        const characterMorseAdd = [];
        for (let i = 0; i < resultB.length; i++) {
          characterMorseAdd.push(translateMorseCharacter(resultB[i]));
        }
        return characterMorseAdd.join("");
      }
      let decodeValue = decodeLatinToMorse.value;
      const resultDecode = decode(decodeValue);
      resultDecodeContainer.textContent = `${resultDecode}`;
      resultDecodeContainer.style.textTransform = "lowercase";
      resultDecodeContainer.style.color = "white";
    });
  }, []);

  return (
    <div>
      <div id="main-container">
        <h1>Morse</h1>

        <div className="encode">
          <label id="label-encode" for="encode-latin">
            Encode Latin to Morse
          </label>
          <input
            id="encode-latin"
            type="text"
            maxlength="10"
            placeholder="Enter your Latin name"
          />
          <div className="result-encode-container"></div>
          <button id="start-encode" type="submit">
            START
          </button>
        </div>

        <div className="decode">
          <label id="label-decode" for="decode-morse">
            Decode Morse to Latin
          </label>
          <input
            id="decode-morse"
            type="text"
            placeholder="Enter your Morse name"
          />
          <div className="result-decode-container"></div>
          <button id="start-decode" type="submit">
            START
          </button>
        </div>
      </div>
    </div>
  );
}
