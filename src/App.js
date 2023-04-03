import { useState } from "react";
import "./App.css";

function App() {
  const [player1, setPlayer1] = useState(0);
  const [player2, setPlayer2] = useState(0);

  const red = 1;
  const yellow = 2;
  const green = 3;
  const brown = 4;
  const blue = 5;
  const pink = 6;
  const black = 7;

  function notZero() {
    const dif = player1 >= player2 ? player1 - player2 : player2 - player1;
    if (dif < 0) {
      return 0;
    }
    return dif;
  }

  return (
    <div className="App">
      <div className="player1">
        <input type={"text"} autoComplete="off" placeholder="Jogador 1" />
        <div className="p1score">
          <span>Pontos</span>
          <h1 id="pts">{player1}</h1>
        </div>
        <fieldset className="bolls">
          <legend>Bolas</legend>
          <div id="snooker">
            <abbr title="valor 1">
              <div
                id="ball1"
                red={red}
                onClick={() => setPlayer1(player1 + red)}
              ></div>
            </abbr>
            <abbr title="valor 2">
              <div
                id="ball2"
                yellow={yellow}
                onClick={() => setPlayer1(player1 + yellow)}
              ></div>
            </abbr>
            <div
              id="ball3"
              green={green}
              onClick={() => setPlayer1(player1 + green)}
            ></div>
            <div
              id="ball4"
              brown={brown}
              onClick={() => setPlayer1(player1 + brown)}
            ></div>
            <div
              id="ball5"
              blue={blue}
              onClick={() => setPlayer1(player1 + blue)}
            ></div>
            <div
              id="ball6"
              pink={pink}
              onClick={() => setPlayer1(player1 + pink)}
            ></div>
            <div
              id="ball7"
              black={black}
              onClick={() => setPlayer1(player1 + black)}
            ></div>
          </div>
        </fieldset>
      </div>
      <div className="infos">
        <h1>Sinuca</h1>
        <div className="infosPla">
          <fieldset>
            <legend>Placar do jogo</legend>
            <h1 id="dif">{notZero()}</h1>
          </fieldset>
          <button onClick={() => window.location.reload()}>Resetar</button>
        </div>
      </div>
      <div className="player2" id={player2}>
        <input type={"text"} autoComplete="off" placeholder="Jogador 2" />

        <div className="p1score">
          <span>Pontos</span>
          <h1 id="pts">{player2}</h1>
        </div>

        <fieldset className="bolls">
          <legend>Bolas</legend>
          <div id="snooker">
            <abbr title="valor 1">
              <div id="ball1" onClick={() => setPlayer2(player2 + red)}></div>
            </abbr>
            <abbr title="valor 2">
              <div
                id="ball2"
                onClick={() => setPlayer2(player2 + yellow)}
              ></div>
            </abbr>
            <div id="ball3" onClick={() => setPlayer2(player2 + green)}></div>
            <div id="ball4" onClick={() => setPlayer2(player2 + brown)}></div>
            <div id="ball5" onClick={() => setPlayer2(player2 + blue)}></div>
            <div id="ball6" onClick={() => setPlayer2(player2 + pink)}></div>
            <div id="ball7" onClick={() => setPlayer2(player2 + black)}></div>
          </div>
        </fieldset>
      </div>
    </div>
  );
}

export default App;
