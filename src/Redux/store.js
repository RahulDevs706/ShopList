import {configureStore} from "@reduxjs/toolkit"
import { shopReducer } from "./reducers/shopReducer"

const store = configureStore({
    reducer:{
        shopState:shopReducer
    }
})

export default store