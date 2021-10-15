import React, { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { routesMap } from "../../routes/routes";

export const ShopLogo: FC<Record<string, never>> = () => {
  return (
    <div className={styles.logo}>
      <Link to={routesMap.home}>
        <span className={styles.logoParody}>{"Gparody"}</span>
        {"Shop"}
      </Link>
    </div>
  );
};

export default ShopLogo;
