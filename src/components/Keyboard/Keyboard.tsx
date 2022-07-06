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
  let svgX = 0;
  let keyWidthProportion = 1;
  let keyHeightProportion = 1;

  useEffect(() => {
    if (!keys.length) {
      for (const row of keyboardLayout) {
        svgX = 0;
        for (const element of row) {
          if (typeof element == "string") {
            const newKey = {
              svgX: svgX,
              svgY: svgY,
              rectWidth: KEY_SIZE * keyWidthProportion,
              rectHeight: KEY_SIZE * keyHeightProportion,
              text: element,
            };
            keys.push(newKey);
            svgX += KEY_SIZE * keyWidthProportion;
            keyWidthProportion = 1;
            keyHeightProportion = 1;
          } else {
            if (element?.x !== undefined) {
              svgX += element.x * KEY_SIZE;
            }
            if (element?.y !== undefined) {
            }
            if (element?.w !== undefined) {
              keyWidthProportion = element.w;
            }
            if (element?.h !== undefined) {
              keyHeightProportion = element.h;
            }
          }
        }
        svgY += KEY_SIZE;
      }
      setKeys([...keys]);
    }
  }, []);

  console.log(keys.length);

  return (
    <Container>
      <svg viewBox="0 0 1000 250" className="background">
        <rect
          x="0"
          y="0"
          width="1000"
          height="250"
          rx="10"
          ry="10"
          className="rectbackground"
        ></rect>
        {keys.map((key) => {
          return (
            <Key
              key={Math.random()}
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
