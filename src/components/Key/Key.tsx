interface KeyProps {
  svgX: number;
  svgY: number;
  rectWidth: number;
  rectHeight: number;
  text: string;
  dataKey?: string;
}

export function Key(props: KeyProps) {
  return (
    <svg x={props.svgX} y={props.svgY}>
      <rect width={props.rectWidth} height={props.rectHeight}></rect>
      <text>{props.text}</text>
    </svg>
  );
}
