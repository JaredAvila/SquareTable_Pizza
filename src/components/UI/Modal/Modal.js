import React, { Component } from "react";
import PropTypes from "prop-types";

import * as styles from "./Modal.module.css";

import Aux from "../../../hoc/AuxComponent/AuxComponent";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
  shouldComponentUpdate = (nextProps, nextState) => {
    return nextProps.show !== this.props.show;
  };

  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={styles.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0"
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

Modal.propTypes = {
  show: PropTypes.bool,
  modalClosed: PropTypes.func
};

export default Modal;
