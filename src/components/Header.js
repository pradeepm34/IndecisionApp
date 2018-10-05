
import React from 'react';
const Header = (props) => (
  <div className="Header">
  <div className="container">
    <h1 className="header__title">{props.title}</h1>
    {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  </div>
);
  
  Header.defaultProps = {
    title: 'Indecision'
  };
console.log(234)

  export default  Header;