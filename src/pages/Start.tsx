import { useState, useMemo, FormEvent } from "react";
import {Button, Card} from "@material-ui/core";
interface Props {
  handleStart(players: string[]): void;
}
const Start = (props: Props) => {
  const { handleStart } = props;
  const [players, setPlayers] = useState(["", ""]);
  const styles = {
    center: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  };
  const handleInput = (event: FormEvent<HTMLInputElement>, index: number) => {
    const newPlayers = [...players];
    newPlayers.splice(index, 1, event.currentTarget.value);
    setPlayers(newPlayers);
  };
  const canStart = useMemo(
    () => players.every((player) => player && player.length > 0),
    [players]
  );
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canStart) return;
    handleStart(players);
  };

  return (
    <div style={styles.center}>
      <Card style={{ width: '38rem' }}>
        <h1 style={styles.center}>Tic Tac Toe</h1>
        <form onSubmit={handleSubmit} style={{padding: '150px'}}>
          <div className="row">
            <div className="col-md-6">
            <label htmlFor="player1">First Player Name</label>
            </div>
            <div className="col-md-6">
            <input
                type="text"
                value={players[0]}
                onInput={(e) => handleInput(e, 0)}
            />
            </div>
          </div>
          <div>
            <br/>
            <div className="row">
              <div className="col-md-6">
            <label htmlFor="player2">Second Player Name</label>
              </div>
              <div className="col-md-6">
            <input
                type="text"
                value={players[1]}
                onInput={(e) => handleInput(e, 1)}
            />
              </div>
            </div>
          </div>
          <div>
            <br/>

            <button type="submit" disabled={!canStart}>
              Start
            </button>
            <br/>
          </div>
        </form>
        <br/>
      </Card>
    </div>
  );
};
export default Start;
