import styles from "./index.module.css";
import { COLOUR, MENU_ITEMS } from "../../constants";
import { useSelector } from "react-redux";
const ToolBox = () => {
  const updateBrushSize = () => {};

  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
  const showStrokeToolOption = activeMenuItem === MENU_ITEMS.PENCIL;
  const showBrushToolOption  = activeMenuItem === MENU_ITEMS.PENCIL || MENU_ITEMS.ERASER;
  return (
    <div className={styles.toolboxContainer}>
      { showStrokeToolOption && 
      <div className={styles.toolItem}>
        <h4 className={styles.toolText}>Stroke Colour </h4>
        <div className={styles.itemContainer}>
          <div
            className={styles.colorBox}
            style={{ backgroundColor: COLOUR.BLACK }}
          />
          <div
            className={styles.colorBox}
            style={{ backgroundColor: COLOUR.ORANGE }}
          />
          <div
            className={styles.colorBox}
            style={{ backgroundColor: COLOUR.GREEN }}
          />
          <div
            className={styles.colorBox}
            style={{ backgroundColor: COLOUR.BLUE }}
          />
          <div
            className={styles.colorBox}
            style={{ backgroundColor: COLOUR.RED }}
          />
          <div
            className={styles.colorBox}
            style={{ backgroundColor: COLOUR.PINK }}
          />
        </div>
      </div>
      }
     
      { showBrushToolOption ?
      <div className={styles.toolItem}>
        <h4 className={styles.toolText}>Brush Size </h4>
        <div className={styles.itemContainer}>
          <input type="range" min={1} max={10} onChange={updateBrushSize} />
        </div>
      </div>
      : null
      }
    </div>
  );
};

export default ToolBox;
