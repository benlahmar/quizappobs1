import { createAction, props } from "@ngrx/store";

export const incrementer=createAction('[counter ] Increment')
export const decrementer=createAction('[counter ] Decrement')
export const reest=createAction('[counter ] Rest')
export const setcounter=createAction('[Counter] setcounter',props<{value:number}>())


export const allowreview=createAction('[Counter] Allowreview')
export const allowreview2=createAction('[Counter] Allowreview2')

export const showclock=createAction('[Config] Showclock')