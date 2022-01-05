import React from "react";
import summary from "./summary.json";
import styles from "./styles.module.css";

export const Done = () => {
  return <span className={`badge badge--success`}>已完成</span>;
};

export const InProgress = () => {
  return <span className={`badge badge--warning`}>进行中</span>;
};

export const TBD = () => {
  return <span className={`badge badge--secondary`}>待翻译</span>;
};

const STATUS_MAP = [<TBD />, <InProgress />, <Done />];

export const Table = () => {
  return (
    <ul className={styles.ul}>
      {summary.map((page) => (
        <React.Fragment key={page.title}>
          <li
            className={styles.li}
            style={{
              paddingLeft: `${page.depth * 1}rem`,
              fontWeight: page.depth === 0 ? "bold" : "normal",
            }}
          >
            {page.title}
            {STATUS_MAP[page.status]}
          </li>
        </React.Fragment>
      ))}
    </ul>
  );
};
