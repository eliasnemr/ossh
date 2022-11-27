import styles from "./Svg.module.css";
interface IProps {
  size: number;
}
const Note = ({ size }: IProps) => {
  return (
    <>
      <svg
        className={styles["zoom"]}
        xmlns="http://www.w3.org/2000/svg"
        height={size}
        width={size}
      >
        <path d="M11 44q-1.2 0-2.1-.9Q8 42.2 8 41V7q0-1.2.9-2.1Q9.8 4 11 4h18.05L40 14.95V41q0 1.2-.9 2.1-.9.9-2.1.9Zm16.55-27.7V7H11v34h26V16.3ZM11 7v9.3V7v34V7Z" />
      </svg>
    </>
  );
};

export default Note;
