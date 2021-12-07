import Square from "../components/Square";
interface Props {
  board: string[];
  handleClick(index: number): void;
}
const Game = (props: Props) => {
  const { board, handleClick } = props;
  const styles = {
    board: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      width: "300px"
    },
    center: {
      paddingTop: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  };
  return (
      <div style={styles.center}>
        <div style={styles.board}>
          {board.map((value, index) => (
            <Square
              key={index}
              value={value}
              index={index}
              handleClick={handleClick}
            />
          ))}
        </div>
      </div>
  );
};
export default Game;
