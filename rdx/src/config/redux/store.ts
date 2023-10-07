import {configureStore} from '@reduxjs/toolkit'
import cartslice from './reducers/cartslice'

const store = configureStore({
    reducer:{
        cart:cartslice
    }
})

export default store 