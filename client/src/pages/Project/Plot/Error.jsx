export default function Error(props) {
  const { width, height, message } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox={[0, 0, width, height].join(",")}
      style={{ maxWidth: "100%", height: "auto intrinsic" }}
      strokeLinecap="round"
      strokeLinejoin="round"
      fontFamily="sans-serif"
      fontSize={20}
    >
      <text x={width / 2} y={height / 2} textAnchor="middle" fill="lightgray">
        {message}
      </text>
    </svg>
  );
}
