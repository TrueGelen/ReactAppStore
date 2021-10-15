import React, { CSSProperties, FC, memo } from "react";
import _s from "./styles.module.scss";
import { NavLink } from "react-router-dom";
import { CART } from "../../../utils/localization";
import { useLocalization } from "../../../utils/decorators/withLoc/useLocalization";
import { routesMap } from "../../../routes/routes";

export interface TCartButtonProps {
  styles?: CSSProperties;
  className?: string;
}

// todo: дописать использование стора через useRootStore
export const CartButton: FC<TCartButtonProps> = (props) => {
  const { styles, className } = props;
  const localization = useLocalization();

  return (
    <div className={`${_s.cart} ${className}`} style={styles}>
      <NavLink to={routesMap.cart} activeClassName={_s.activeLink}>
        {localization.getLocalized(CART)}
      </NavLink>
      {/* <div className={_s.totalInCart}>{this.cartStore.totalPositionsInCart}</div> */}
      {/* <div className={_s.totalInCart}>
                    <p>
                      {
                        // @ts-ignore
                        this.cartStore.totalProductsInCart
                      }
                    </p>
                  </div> */}
    </div>
  );
};

export default memo(CartButton);
