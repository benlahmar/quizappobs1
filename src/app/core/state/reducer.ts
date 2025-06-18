import { createReducer, on } from "@ngrx/store";
import { allowreview, allowreview2, decrementer, incrementer, reest, setcounter } from "./actions";
import { initState } from "./appstate";
import { QuizConfig } from "../models/quiz-config";

//export const initstate=0;
export const reduce= createReducer(
    initState,
    on(incrementer, (state)=> { console.log('increment'); return {...state,counter:state.counter+1}}),
    on(decrementer, (state)=>{ return {...state,counter:state.counter-1}}),
    on(reest, (state)=>{ return {...state,counter:0}}),
    on(setcounter, (state,{value})=>{  return {...state,counter:value}} ),

    on(allowreview, (state)=>{return  {...state,allowreview:!state.allowreview}} ),
    
    on(allowreview2, (state)=>{
        let config2=state.config;
        config2.allowReview=!state.config.allowReview;
        return  {...state,config:config2} })


)