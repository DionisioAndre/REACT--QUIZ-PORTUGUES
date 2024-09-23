import { useContext } from "react";
import weldone from "../../img/welldone.svg";
import "./GameOver.css"
import { QuizContext } from "../../context/quiz";

const GameOver=()=>{
    const [quizState,dispatch]=useContext(QuizContext);
    return(
        <div id="GameOver">
            <h2>Fim de jogo!</h2>
            <p>pontuacao:{quizState.score}</p>
            <p>voce acertou {quizState.score} de {quizState.questions.length} perguntas</p>
            <img src={weldone} alt="Fim de quiz" />
            <button onClick={()=>dispatch({type:"NEW_GAME"})}>Reiniciar</button>
            <h2>Desenvolvido por Dionisio Andre</h2>
        </div>
    )
}

export default GameOver;