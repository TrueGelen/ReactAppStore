import React, { CSSProperties, FC, memo, ReactNode, useMemo } from "react";
import styles from "./styles.module.scss";
import { map } from "lodash";

export interface TMenuProps {
  items: Array<string | ReactNode>;
  menuStyles?: CSSProperties;
  menuClassName?: string;
  ulStyles?: CSSProperties;
  ulClassName?: string;
  itemStyle?: CSSProperties;
  itemClassName?: string;
}

export const Menu: FC<TMenuProps> = (props) => {
  const { items, menuStyles, menuClassName, ulStyles, ulClassName, itemStyle, itemClassName } = props;

  const _items = useMemo(() => {
    return map(items, (item) => {
      return (
        <li className={`${styles.menu__li} ${itemClassName}`} style={itemStyle}>
          {item}
        </li>
      );
    });
  }, [itemClassName, itemStyle, items]);

  return (
    <menu className={`${styles.menu} ${menuClassName}`} style={menuStyles}>
      <ul className={ulClassName} style={ulStyles}>
        {_items}
      </ul>
    </menu>
  );
};

export default memo(Menu);
