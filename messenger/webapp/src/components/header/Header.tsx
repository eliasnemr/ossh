import React from "react";
import styled from "@emotion/styled";

const Toolbar = styled("header")`
  min-height: 64px;
  width: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;

  > div h4 {
    margin: 0;
    padding: 0;
    font-weight: 300;
  }
`;

interface IProps {
  children: React.ReactNode;
}
const Header = ({ children }: IProps) => {
  return <Toolbar>{children}</Toolbar>;
};

export default Header;
