import { useState } from "react";
import Home from "./components/Home";
import GamePlay from "./components/GamePlay";

const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGameplay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>{isGameStarted ? <GamePlay /> : <Home toggle={toggleGameplay} />}</>
  );
};

export default App;