import { useContext } from "react";
import quiz from "../../img/quiz.svg" ;
import "./Welcome.css";
import { QuizContext } from "../../context/quiz";

const Welcome=() =>{
    const[quizState,dispatch]=useContext(QuizContext)
    return (
        <div id="Welcome">
        <h2>Bem vindo</h2>
        <p>Clique no botão para iniciar</p>
        <button onClick={()=>dispatch({type:"CHANGE_STATE"})}>iniciar</button>
        <img src={quiz} alt="inicio"/>
        </div>)
}
export default Welcome;