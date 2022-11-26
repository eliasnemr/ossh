import React from "react";
import styled from "@emotion/styled";

const Toolbar = styled("header")`
  min-height: 64px;
  width: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 16px;

  > div h4 {
    margin: 0;
    padding: 0;
  }
`;

interface IProps {
  children: React.ReactNode;
}
const Header = ({ children }: IProps) => {
  return <Toolbar>{children}</Toolbar>;
};

export default Header;
