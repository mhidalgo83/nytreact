import React from "react";

const Button = ({ type = "default", className, children, onClick}) => (
    <button
    onClick={onClick}
    className={["btn btn-md", `btn-${type}`, className].join(" ")}
    >
    {children}
    </button>
);

export default Button;