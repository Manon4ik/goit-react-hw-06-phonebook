import { createStore } from "@reduxjs/toolkit";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { rootReducer } from "./reducer";


const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);