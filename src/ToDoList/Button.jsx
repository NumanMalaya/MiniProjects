export default function Button({ HandleClick, value, bgColor }) {
  return (
    <button className={bgColor} onClick={HandleClick}>
      {value}
    </button>
  );
}