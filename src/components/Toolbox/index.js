import styles from "./index.module.css";
import { COLOUR, MENU_ITEMS } from "../../constants";
import { useSelector , useDispatch } from "react-redux";
import { changeBrushSize, changeColour } from "@/slice/toolboxSlice";

import { faDisplay } from "@fortawesome/free-solid-svg-icons";
import cx from "classnames";
const ToolBox = () => {
  const dispatch = useDispatch();
  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
  const showStrokeToolOption = activeMenuItem === MENU_ITEMS.PENCIL;
  const showBrushToolOption  = activeMenuItem === MENU_ITEMS.PENCIL || MENU_ITEMS.ERASER;
  
  const { color , size } = useSelector((state) => state.toolbox[activeMenuItem]);  // ye useSelector taki hum frontend se press kiye gaye colour ko store me se le aa paye toolbox par or uss specific active colour ko humne jo css me active class diya hai wo laha paye in classNames attribute of every colour .
  
  const updateBrushSize = (e) => {
    dispatch(changeBrushSize({item: activeMenuItem , size: e.target.value }))   //this function changeBrushSize declared in toolboxSlice gone take 2 paramets one is item like pensil, eraser , undo etc, and the oother is size which is coming from the below written brush code in an input feild , soo we can target that value becuase it's an input field
  };

  const updateColour = (newColor) =>{
    dispatch(changeColour({item : activeMenuItem , color : newColor}))  
  }
 
   
                                                                                  // basicaaly jo colour ka hum use kar rahe hai uske around ek border dekhaye dege jab tak hum wo colour ko change nahi kar dete 
  
  
  return (
    <div className={styles.toolboxContainer}>
      { showStrokeToolOption && 
      <div className={styles.toolItem}>
        <h4 className={styles.toolText}>Stroke Colour </h4>
        <div className={styles.itemContainer}>
          <div
            className={cx(styles.colorBox , {[styles.active]:  color === COLOUR.BLACK})}
            style={{ backgroundColor: COLOUR.BLACK }}
            onClick={() => updateColour(COLOUR.BLACK)}
          />
          <div
            className={cx(styles.colorBox , {[styles.active]: color === COLOUR.ORANGE})}
            style={{ backgroundColor: COLOUR.ORANGE }}
            onClick={() => updateColour(COLOUR.ORANGE)}
          />
          <div
            className={cx(styles.colorBox , {[styles.active]: color === COLOUR.GREEN})}
            style={{ backgroundColor: COLOUR.GREEN }}
            onClick={() => updateColour(COLOUR.GREEN)}
          />
          <div
            className={cx(styles.colorBox , {[styles.active]:  color === COLOUR.BLUE})}
            style={{ backgroundColor: COLOUR.BLUE }}
            onClick={() => updateColour(COLOUR.BLUE)}
          />
          <div
            className={cx(styles.colorBox , {[styles.active]:  color === COLOUR.RED})}
            style={{ backgroundColor: COLOUR.RED }}
            onClick={() => updateColour(COLOUR.RED)}
          />
          <div
            className={cx(styles.colorBox , {[styles.active]:  color === COLOUR.PINK})}
            style={{ backgroundColor: COLOUR.PINK }}
            onClick={() => updateColour(COLOUR.PINK)}
          />
        </div>
      </div>
      }
     
      { showBrushToolOption ?
      <div className={styles.toolItem}>
        <h4 className={styles.toolText}>Brush Size </h4>
        <div className={styles.itemContainer}>
          <input type="range" min={1} max={10} onChange={updateBrushSize} value={size} />
        </div>
      </div>
      : null
      }
    </div>
  );
};

export default ToolBox;
