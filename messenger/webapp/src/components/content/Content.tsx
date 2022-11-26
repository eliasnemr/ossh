import styled from "@emotion/styled";
import React from "react";
import styles from "./Content.module.css";

const Wrapper = styled("div")`
  margin: 8px;
`;
interface IProps {
  children: React.ReactNode;
}
const Content = ({ children }: IProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Content;
