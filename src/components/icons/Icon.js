/** @jsx jsx */
import { jsx } from "@emotion/core";

const Icon = ({ children, onClick }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    css={{ cursor: "pointer" }}
    onClick={onClick}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    {children}
  </svg>
);

export default Icon;
