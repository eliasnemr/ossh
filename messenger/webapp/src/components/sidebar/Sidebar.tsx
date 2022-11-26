import styled from "@emotion/styled";
import { useMediaQuery, useTheme } from "@mui/material";
import Header from "../header/Header";

import styles from "./Sidebar.module.css";

interface IProps {}
const Sidebar = () => {
  const theme = useTheme();
  const media = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
      <Header>
        {media ? (
          <img
            className={styles["icon"]}
            src="../assets/messenger.png"
            alt="appIcon"
          />
        ) : null}
      </Header>
      <ChatList>
        <ChatItem>
          <h6>live agent #2</h6>
          <p>Yes will get...</p>
        </ChatItem>
        <ChatItem>
          <h6>live agent #4</h6>
          <p>Yes will get...</p>
        </ChatItem>
        <ChatItem>
          <h6>live agent #3</h6>
          <p>Yes will get...</p>
        </ChatItem>
        <ChatItem>
          <h6>Dr. Giannakis</h6>
          <p>Yes will get...</p>
        </ChatItem>
        <ChatItem>
          <h6>Dr. George</h6>
          <p>Yes will get...</p>
        </ChatItem>
      </ChatList>
    </>
  );
};

export default Sidebar;

const ChatList = styled("ul")`
  margin: 0;
  padding: 0;

  > li {
    margin-bottom: 8px;
  }

  > :last-of-type {
    margin-bottom: 0;
  }
`;

const ChatItem = styled("li")`
  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 12px;
  padding: 16px;
  background-color: #153d72;
  color: #fff;
  text-align: left;
  min-height: 32px;
  max-height: 32px;
  > h6 {
    font-size: 0.975rem;
  }
  > p {
    font-size: 0.775rem;
    opacity: 0.8;
  }
  > * {
    margin: 0;
    padding: 0;
  }
`;
