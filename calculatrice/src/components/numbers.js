const operators = ["AC", "+/-", "%", "/", "x", "-", "+", "="];

function Numbers(props) {
  return (
    <div
      className={operators.includes(props.number) ? "operators" : "numbers"}
      onClick={() => props.onClick(props.number)}
    >
      {props.number}
    </div>
  );
}

export default Numbers;
