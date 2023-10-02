import {createAction, createSlice } from "@reduxjs/toolkit";
import { MENU_ITEMS, COLOUR } from "@/constants";

const initialState = {
   [MENU_ITEMS.PENCIL]:{
      color: COLOUR.BLACK,
      size:  3
   },
   [MENU_ITEMS.ERASER]:{
      color: "white",
      size: 3
   },
   [MENU_ITEMS.UNDO]:{},
   [MENU_ITEMS.REDO]:{},
   [MENU_ITEMS.SAVE]:{}
}

const toolboxSlice = createSlice({
    name:"toolbox",
    initialState,
    reducers:{
        changeColour:(state, action) =>{      // action.payload is a object jisme colour and size aayega .. soo changeColour reducer me hum colour ko change karnge
            state[action.payload.item].color  = action.payload.color
        },
        changeBrushSize:(state, action) => {      // yaha pe hum brush k size ko adapt kar rahe hai, yani k brush ka size frontend se yaha pe aayega 
            state[action.payload.item].size  = action.payload.size
        }
    }
})

export  const { changeColour , changeBrushSize } = toolboxSlice.actions;
export default toolboxSlice.reducer ;