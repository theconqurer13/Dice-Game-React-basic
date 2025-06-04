import React from 'react';
import styles from './buttons.module.css';
const Buttons = (props) => {
  return (
    <>
        <button {...props} className={props.isoutline ? styles.outline_btn : StyleSheet.primary_btn}>
            {props.text}
        </button>
    </>
  )
}

export default Buttons