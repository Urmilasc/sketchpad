import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileArrowDown,
  faPencil,
  faEraser,
  faRotateRight,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.css";
import { activeMenuItemClicked  , actionMenuItemClicked} from "@/slice/menuSlice";
import { MENU_ITEMS } from "@/constants";
import { useDispatch, useSelector } from "react-redux";
import cx from "classnames";
const Menu = () => {
  const dispatch = useDispatch();

  const handleMenuItemClicked = (menuItems) => {
    dispatch(activeMenuItemClicked(menuItems));
  };

  const handleActionMenuItemClicked = (menuItems) =>{
    dispatch(actionMenuItemClicked(menuItems))
  }

  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem); // this selector is for taki agar hum pencil pe hai to wo pencil ka background colour highligthed rahe jo ke highlighted colour index.module.css class me &.active karke ek diya waha se aaraha hai
  return (
    <div className={styles.menuContainer}>
      <div
        className={cx(styles.iconWrapper, {
          [styles.active]: activeMenuItem === MENU_ITEMS.PENCIL,
        })}
        onClick={() => handleMenuItemClicked(MENU_ITEMS.PENCIL)}
      >
        <FontAwesomeIcon icon={faPencil} className={styles.icon} />
      </div>
      <div
        className={cx(styles.iconWrapper, {
          [styles.active]: activeMenuItem === MENU_ITEMS.ERASER,
        })}
        onClick={() => handleMenuItemClicked(MENU_ITEMS.ERASER)}
      >
        <FontAwesomeIcon icon={faEraser} className={styles.icon} />
      </div>
      <div
        className={styles.iconWrapper}
        onClick={() => handleActionMenuItemClicked(MENU_ITEMS.UNDO)}
      >
        <FontAwesomeIcon icon={faRotateLeft} className={styles.icon} />
      </div>
      <div
        className={styles.iconWrapper}
        onClick={() => handleActionMenuItemClicked(MENU_ITEMS.REDO)}
      >
        <FontAwesomeIcon icon={faRotateRight} className={styles.icon} />
      </div>
      <div
        className={styles.iconWrapper}
        onClick={() => handleActionMenuItemClicked(MENU_ITEMS.SAVE)}
      >
        <FontAwesomeIcon icon={faFileArrowDown} className={styles.icon} />
      </div>
    </div>
  );
};

export default Menu;
