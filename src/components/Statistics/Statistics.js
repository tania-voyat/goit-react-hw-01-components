import React from "react";
import styles from "./Statistics.module.css";
import PropTypes from "prop-types";

function getRandomColor() {
  let r = function () {
    return Math.floor(Math.random() * 256);
  };
  return `rgb(${r()},${r()},${r()})`;
}
function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map((data) => (
          <li
            className={styles.item}
            key={data.id}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className={styles.label}>{data.label}</span>
            <span className={styles.percentage}>{data.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.defaultProps = {
  title: "",
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Statistics;
