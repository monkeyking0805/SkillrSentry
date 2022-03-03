import React from "react";
import classNames from "classnames";

import styles from "./Section.module.css";

export default function Section({ image, altText, title, description, flip, index }) {
  return (
    <div className={classNames(styles.section, { [styles.flip]: flip }, index !== "2" ? (index !== "3" ? styles.section_mt_1 : styles.section_mt_3) : styles.section_mt_2)}>
      <div className={styles.section__left}>
        <div>
          <h2 className={index !== "2" ? (index !== "3" ? styles.title : styles.title_3) : styles.title_2}>{title}</h2>
          <div className="desktop">{description}</div>
        </div>
      </div>
      <div className={styles.section__right}>
        <div className={styles.mobileFrame}>
          <img src={image} alt={altText} />
        </div>
        <div className="tablet">{description}</div>
      </div>
    </div>
  );
}
