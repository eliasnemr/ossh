import Header from "../header/Header";
import Content from "../content/Content";
import styled from "@emotion/styled";
import ChatContainer from "./chatcontainer/ChatContainer";
import { Box, Stack } from "@mui/material";
import { DRAWER__WIDTH } from "../../constants";
import React from "react";

import MenuIcon from "../svgs/MenuIcon";

const ModuleWrapper = styled("div")`
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  flex-direction: column;
  row-gap: 16px;
`;

const ChatModule = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };
  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };

  return (
    <ModuleWrapper>
      <Box component="main" sx={[appwidth]}>
        <Header>
          <Stack
            alignItems="center"
            justifyContent="space-between"
            flexDirection="row"
          >
            <MenuIcon handleOnClick={handleOpenDrawer} size={32} />
            <h4>Chatting with Live Agent #1</h4>
          </Stack>
        </Header>
        <Content>
          <ChatContainer open={openDrawer} closeDrawer={handleCloseDrawer} />
        </Content>
      </Box>
    </ModuleWrapper>
  );
};

export default ChatModule;

const appwidth = {
  width: { sm: `calc(100% - ${DRAWER__WIDTH}px)` },
  ml: { sm: `${DRAWER__WIDTH}px` },
};
