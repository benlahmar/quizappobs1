import { quizdata } from "../data1";
import { QuizConfig } from "../models/quiz-config";

export interface AppState
{
    counter:number;
    config:QuizConfig
    allowreview:boolean
}

export const initState:AppState={
    counter:0,
    config:new QuizConfig(quizdata.config),
    allowreview:true

    
}