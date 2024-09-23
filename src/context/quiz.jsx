import { createContext, useReducer } from "react";
import questions from "../data/questions";

const stages=["Start","Playing","End"]

const initialstage={
    gamestage:stages[0],
    questions,
    currentQuestions:0,
    score:0,
    answerSelected:false,
}

const quizReducer=(state,action)=>{
    switch (action.type) {
        case "CHANGE_STATE":
            return (
                {...state,
                gamestage:stages[1]}
            )

        case "Reordenar":
            const reordenadQuestions=questions.sort(()=>{
                return Math.random()-0.5;
            })
            return {
                ...state,
                questions:reordenadQuestions
            }
        case "CHANGE_QUESTION":
                const nextQuestion=state.currentQuestions+1;
                let endGame=false
                if(!questions[nextQuestion]){
                    endGame=true
                }
                return{
                    ...state,
                    currentQuestions:nextQuestion,
                    gamestage: endGame?stages[2]:state.gamestage,
                    answerSelected:false,
                }
        case "NEW_GAME":
            return initialstage
        case "CHECK_ANSWER":
            if(state.answerSelected) return state
            const answer=action.payload.answer
            const option=action.payload.options
            let correctAnswer=0
            if(answer===option) correctAnswer+=1
            return{
                ...state,score:state.score+correctAnswer,
                answerSelected:option,
            }
        default:
            return state
    }
}
export const QuizContext =createContext()
export const QuizProvider=({children})=>{
    const value=useReducer(quizReducer,initialstage)
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}