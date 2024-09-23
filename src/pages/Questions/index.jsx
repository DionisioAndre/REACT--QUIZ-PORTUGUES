import { useContext } from "react";
import { QuizContext } from "../../context/quiz";
import "./Questions.css"
import Options from "../Options";


const Questions =()=>{
    const[quizState,dispatch]=useContext(QuizContext)
    const currentQuestions1=quizState.questions[quizState.currentQuestions]
    const onSelectedOption=(options)=>{
        dispatch({
            type:"CHECK_ANSWER",
            payload:{answer:currentQuestions1.answer,options}
        })
    }
    return(
        <div id="question">
            <p>Pergunta {quizState.currentQuestions +1} de {quizState.questions.length} </p>
            <h2>{currentQuestions1.question}</h2>
            <div id="options-container">
                {currentQuestions1.options.map((options)=>(
                 <Options Option={options} key={options}
                  answer={currentQuestions1.answer}
                  selectOption={()=>onSelectedOption(options) } />) )}
                 </div>
            {quizState.answerSelected && (<button onClick={()=>dispatch({type:"CHANGE_QUESTION"})}>Continuar</button>
           )}
        </div>
    )
}

export default Questions;