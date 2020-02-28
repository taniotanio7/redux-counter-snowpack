import React from "react";
import { connect } from "react-redux";

const Display = ({ count }) => {
  return <div>Stan licznika: {count}</div>;
};

const mapStateToProps = state => ({
  count: state.count,
});

export default connect(mapStateToProps)(Display);
