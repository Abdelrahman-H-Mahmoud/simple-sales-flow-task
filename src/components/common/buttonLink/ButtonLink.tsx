import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import "./ButtonLink.css"
interface ButtonLinkProps {
  href: string;
  children: any;
}
function ButtonLink(props: ButtonLinkProps): ReactElement {
  return (
    <Link to={props.href} className="app-btn">
      {props.children}
    </Link>
  );
}

export default ButtonLink;
