import React from 'react';

const styles = {
  main: {
    border: '1px solid #ccc',
    width: '47px',
    height: '26px',
    borderRadius: '13px',
    cursor: 'pointer',
    display: 'inline-block',
    float: 'left'
  },
  toggle: {
    border: '1px solid #999',
    boxShadow: '1px 1px 1px #ccc',
    width: '25px',
    height: '24px',
    left: '0px',
    borderRadius: '12px',
    background: 'white',
    position: 'relative',
    transition: 'left .1s ease-in-out'
  },
  on: {
    background: 'green'
  },
  toggleOn: {
    left: '20px',
    color: 'green'
  }
};

export default ({ on, onClick, onIcon, offIcon, style, labelStyle, children }) => (
  <div style={style}>
    <div style={on ? { ...styles.main, ...styles.on } : styles.main} onClick={onClick}>
      <div style={on ? { ...styles.toggle, ...styles.toggleOn } : styles.toggle }>
        { on ? onIcon : offIcon }
      </div>
    </div>
    {children ? <div style={labelStyle}>{children}</div> : null}
  </div>
);
