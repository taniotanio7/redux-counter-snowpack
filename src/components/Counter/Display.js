import React from "react";
import { connect } from "react-redux";
import { css } from "@emotion/core";

const Display = ({ count }) => {
  return (
    <div
      css={css`
        margin-right: 15px;
      `}>
      Stan licznika:{" "}
      <span
        css={css`
          font-size: 1.05em;
          font-weight: 700;
        `}>
        {count}
      </span>
    </div>
  );
};

const mapStateToProps = state => ({
  count: state.count,
});

export default connect(mapStateToProps)(Display);
