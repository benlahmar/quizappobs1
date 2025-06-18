import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "./appstate";

export const selectorcounterstate = createFeatureSelector<AppState>('counter')

export const selectorcountervalue =createSelector(
    selectorcounterstate,
    (state)=>state.counter
)

export const selectorallowreviewvalue =createSelector(
    selectorcounterstate,
    (state)=>state.allowreview
)

export const selectorallowreviewvalue2 =createSelector(
    selectorcounterstate,
    (state)=>state.config
)