import { arrayOf, number, string } from "prop-types";
import React from "react";

export const Progress = ({ values, colors }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "0.5rem",
        borderRadius: "0.25rem",
        overflow: "hidden",
        marginBottom: "var(--ifm-leading)",
      }}
    >
      {values.map((value, id) => {
        return (
          <div
            style={{
              flex: `${value} 0 0`,
              background: colors[id],
            }}
          />
        );
      })}
    </div>
  );
};

Progress.propTypes = {
  values: arrayOf(number),
  colors: arrayOf(string),
};

Progress.defaultProps = {
  colors: [
    "var(--ifm-color-primary)",
    "var(--ifm-color-warning)",
    "var(--ifm-color-secondary)",
  ],
};
