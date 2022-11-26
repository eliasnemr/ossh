import styled from "@emotion/styled";
import { Box, Drawer } from "@mui/material";
import { DRAWER__WIDTH } from "../../../constants";
import Chat from "../../Chat";
import Sidebar from "../../sidebar/Sidebar";
import ChatInput from "../chatinput/ChatInput";

const ChatWrapper = styled("div")``;

const ChatContainer = () => {
  return (
    <ChatWrapper>
      <Box>
        <Drawer
          variant="temporary"
          open={true}
          onClose={() => console.log("closing..")}
          ModalProps={{ keepMounted: true }}
          sx={drawerdisplay}
        >
          <Sidebar />
        </Drawer>
        <Drawer variant="permanent" sx={drawerdisplaydesktop}>
          <Sidebar />
        </Drawer>
      </Box>

      <Chat />

      <ChatInput />
    </ChatWrapper>
  );
};

export default ChatContainer;

const drawerdisplay = {
  display: { xs: "block", sm: "none" },
  "& .MuiDrawer-paper": { boxSizing: "border-box", width: DRAWER__WIDTH },
};
const drawerdisplaydesktop = {
  display: { xs: "none", sm: "block" },
  "& .MuiDrawer-paper": { width: DRAWER__WIDTH },
};
