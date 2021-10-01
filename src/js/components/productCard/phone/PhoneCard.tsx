import { isNil, isString } from "lodash";
import React, { CSSProperties, FC, memo, ReactNode, useMemo } from "react";
import styles from "./phoneCard.module.scss";

interface IPhoneCardProps {
  image: string | ReactNode;
  title: string;
  price: string;
  priceClassName?: string;
  priceStyles?: CSSProperties;
  titleClassName?: string;
  titleStyles?: CSSProperties;
  imageClassName?: string;
  imageStyles?: CSSProperties;
  className?: string;
  onClick?: () => void;
  button?: React.ReactNode;
}

const PhoneCard: FC<IPhoneCardProps> = (props) => {
  const {
    className,
    onClick,
    image,
    imageClassName,
    imageStyles,
    title,
    titleClassName,
    titleStyles,
    price,
    priceClassName,
    priceStyles,
    button,
    ...otherProps
  } = props;

  const imageElement = useMemo(() => {
    if (!isNil(image) && isString(image)) {
      const className = `${styles.imgInCard} ${styles.insideCardMargin} ${imageClassName}`;
      return <img src={image} className={className} style={imageStyles} />;
    }

    return <image className={imageClassName} />;
  }, [image, imageClassName, imageStyles]);

  const titleElement = useMemo(() => {
    if (!isNil(title)) {
      const className = `${styles.title} ${styles.insideCardMargin} ${titleClassName}`;
      return (
        <h2 className={className} onClick={onClick} style={titleStyles}>
          {title}
        </h2>
      );
    }
  }, [onClick, title, titleClassName, titleStyles]);

  return (
    <div className={`${styles.productCard} ${className}`} {...otherProps}>
      {imageElement}
      {titleElement}
      <div className={styles.bottom}>
        {button && button}
        <p className={`${styles.price} ${priceClassName}`} style={priceStyles}>
          {price}
        </p>
      </div>
    </div>
  );
};

export default memo(PhoneCard);
