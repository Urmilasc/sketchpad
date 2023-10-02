import { createSlice} from "@reduxjs/toolkit";
import { MENU_ITEMS } from "@/constants";

const initialState = {
    activeMenuItem: MENU_ITEMS.PENCIL,
    actionMenuItem:null
}
const menuSlice = createSlice({
    name:"menu",
    initialState,
    reducers:{
        activeMenuItemClicked : (state, action) =>{    
            state.activeMenuItem = action.payload;
        },

        actionMenuItemClicked:(state, action) =>{
            state.actionMenuItem = action.payload
        }
    }
})

export  const { activeMenuItemClicked , actionMenuItemClicked } =  menuSlice.actions;
export default menuSlice.reducer;