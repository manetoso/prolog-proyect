import React from "react";
import PropTypes from "prop-types";
import "./column.css";
import Form from "../form/Form";
import Button from "../../button/Button";

const MainColumn = (props) => {
  return (
    <div className="column">
      <div className="column-bk">
        <Form />        
      </div>
    </div>
  );
};

MainColumn.propTypes = {};

export default MainColumn;
