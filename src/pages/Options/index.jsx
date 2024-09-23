
import { useContext } from "react";
import { QuizContext } from "../../context/quiz";
import "./Options.css"
const Options=({Option,selectOption,answer})=>{
    const [quizState,dispatch]=useContext(QuizContext)
    let cor="i",cor2="u";
    if(quizState.answerSelected && Option===answer){
        cor="correct"
    }
    if (quizState.answerSelected&& Option!==answer) {
        cor="wrong"
    }
    return(
        
        <div id={cor}className="Options" onClick={()=>selectOption()}>
            <p>{Option}
               
            </p>
        </div>
    )
}
export default Options;