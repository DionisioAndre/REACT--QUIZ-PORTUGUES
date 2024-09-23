import { useContext, useEffect } from "react";
import "./App.css";
import Welcome from "./pages/Welcome";
import Questions from "./pages/Questions";
import { QuizContext } from "./context/quiz";
import GameOver from "./pages/GameOver";
function App() {
  const [quizState,dispatch]=useContext(QuizContext)
  useEffect(()=>{

  dispatch({type:"Reordenar"})},[])
  return (
    <div className="App">
      <h1>Quiz de Lingua Portuguesa</h1>
   {quizState.gamestage==="Start"&&<Welcome/>}
   {quizState.gamestage==="Playing"&&<Questions/>}
   {quizState.gamestage==="End" && <GameOver/>}
   </div>
  );
}


export default App;
