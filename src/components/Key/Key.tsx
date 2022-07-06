import { Container } from "./styles";

interface KeyProps {
  svgX: number;
  svgY: number;
  rectWidth: number;
  rectHeight: number;
  text: string;
  dataKey?: string;
}

export function Key(props: KeyProps) {
  let texts = props.text.split("\n");
  console.log(texts);
  return (
    <Container x={props.svgX} y={props.svgY}>
      <rect
        width={props.rectWidth}
        height={props.rectHeight}
        x={0}
        y={0}
      ></rect>
      {texts.map((tx) => {
        return (
          <text
            x={10}
            y={15 + (texts.length == 1 ? 10 : tx == texts[0] ? 0 : 20)}
          >
            {tx}
          </text>
        );
      })}
    </Container>
  );
}
