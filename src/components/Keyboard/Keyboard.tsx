import { useEffect, useState } from "react";
import keyboardLayoutJson from "../../assets/keyboard-layout.json";
import { Container } from "./styles";
import { Key } from "../Key/Key";

type KeyType = {
  svgX: number;
  svgY: number;
  rectWidth: number;
  rectHeight: number;
  text: string;
  dataKey?: string;
};

type offset = {
  x?: number;
  y?: number;
  w?: number;
  h?: number;
};

type keyboardLayoutElement = string | offset;
const keyboardLayout: keyboardLayoutElement[][] = keyboardLayoutJson;

export function Keyboard() {
  const [keys, setKeys] = useState<KeyType[]>([]);
  const KEY_SIZE = 40;
  const KEY_OFFSET = 2;

  let svgY = 0;

  useEffect(() => {
    for (const row of keyboardLayout) {
      let svgX = 0;
      //console.log("ROW: ", row);
      for (const element of row) {
        if (typeof element == "string") {
          const newKey = {
            svgX: svgX,
            svgY: svgY,
            rectWidth: KEY_SIZE,
            rectHeight: KEY_SIZE,
            text: element,
          };
          setKeys((keys) => [...keys, newKey]);
        }
      }
      svgY += KEY_SIZE + KEY_OFFSET;
    }
  }, []);

  console.log(keys);

  return (
    <Container>
      <svg viewBox="0 0 1000 250">
        <rect x="0" y="0" width="1000" height="250" rx="10" ry="10"></rect>
        {keys.map((key) => {
          return (
            <Key
              key={key.text}
              svgX={key.svgX}
              svgY={key.svgY}
              rectWidth={key.rectWidth}
              rectHeight={key.rectHeight}
              text={key.text}
            />
          );
        })}
      </svg>
    </Container>
  );
}
