import {Card} from "@material-ui/core";

interface Props {
  name: string | null;
  restart(): void;
}
const Finished = (props: Props) => {
  const { name, restart } = props;
    const styles = {
        center: {
            paddingTop: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }
    };
  return (
    <div style={styles.center}>
        <Card style={{ width: '38rem' }}>
        <div className="row" >
          <h1 style={styles.center}>
              {name && `Player ${name} won the game`}
            {!name && "It's a tie "}
          </h1>
        </div>
        <br/>
        <br/>
        <div className="row" style={styles.center}>
            <button onClick={restart}>Restart</button>
        </div>
            <br/>
        </Card>
    </div>
  );
};
export default Finished;
