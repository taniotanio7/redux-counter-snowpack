import React from "react";
import { connect } from "react-redux";
import { add, subtrack } from "../../store.js";

const Change = ({ add, subtrack }) => {
  return (
    <div>
      <button onClick={add}>+</button>
      <button onClick={subtrack}>–</button>
    </div>
  );
};

const mapDispatchToProps = { add, subtrack };

export default connect(null, mapDispatchToProps)(Change);
