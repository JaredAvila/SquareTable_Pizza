import React from "react";

import * as styles from "./Modal.module.css";

const Modal = props => <div className={styles.Modal}>{props.children}</div>;

export default Modal;
