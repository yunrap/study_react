import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/CSSModule.module.css';

const CSSModule = (props) => {
  return (
    <div className={styles.wrapper}>
      안녕하세요 저는 <span className="something">CSS MODULE!</span>
    </div>
  );
};

export default CSSModule;
