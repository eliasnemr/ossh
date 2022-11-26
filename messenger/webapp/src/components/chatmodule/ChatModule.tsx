import Header from "../header/Header";
import Content from "../content/Content";
import styled from "@emotion/styled";
import ChatContainer from "./chatcontainer/ChatContainer";
import { Box, Stack } from "@mui/material";
import { DRAWER__WIDTH } from "../../constants";

const ModuleWrapper = styled("div")`
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  flex-direction: column;
  row-gap: 16px;
`;

const ChatModule = () => {
  return (
    <ModuleWrapper>
      <Box component="main" sx={[appwidth]}>
        <Header>
          <Stack alignItems="center" justifyContent="space-between">
            <h4>Chatting with Live Agent #1</h4>
          </Stack>
        </Header>
        <Content>
          <ChatContainer />
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
