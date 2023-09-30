import styles from "./index.module.css"
import { COLOUR } from "../../../constants";
const ToolBox = () => {

const updateBrushSize = () =>{

}

  return (
    <div className={styles.toolboxContainer}>
      <div className={styles.toolItem}>
        <h4 className={styles.toolText}>Stroke Colour:</h4>
        <div className={styles.itemContainer}>
          <div  className={styles.colorBox} style={{backgroundColor:COLOUR.BLACK}} />
          <div  className={styles.colorBox} style={{backgroundColor:COLOUR.ORANGE}} />
          <div  className={styles.colorBox} style={{backgroundColor:COLOUR.GREEN}} />
          <div  className={styles.colorBox} style={{backgroundColor:COLOUR.BLUE}} />
          <div  className={styles.colorBox} style={{backgroundColor:COLOUR.RED}} />
          <div  className={styles.colorBox} style={{backgroundColor:COLOUR.PINK}} />
        </div>
      </div>

      <div className={styles.toolItem}>
        <h4 className={styles.toolText}>Brush Size : </h4>
        <div className={styles.itemContainer}>
            <input type="range" min={1} max={10} onChange={updateBrushSize}/>
        </div>
      </div>
    </div>
  );
};

export default ToolBox;
