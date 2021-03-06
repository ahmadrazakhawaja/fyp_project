import React from "react";
import { Link } from "react-router-dom";

const setclass = (active) => {
  let classname = "nav-link";
  classname += active === true ? " active" : "";
  return classname;
};

export default function NavItem(props) {
  return (
    <li onClick={() => props.OnClick(props.item)} className="nav-item">
      <Link 
       style={{
        color : "white",
        backgroundColor: props.item.active ? '#306b99' : null,
        marginRight : "10px"
      }}className={setclass(props.item.active)} to={props.item.link}
      >
        {props.item.name}
      </Link>
    </li>
    
  );
}
