import React from "react";
import styled from "@emotion/styled";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { Avatar } from "@mui/material";

const ChatField = styled("input")`
  font-size: 1.2rem;
  padding: 0px 8px;
  border: none;
  height: 100%;
  width: 100%;
`;

const ChatWrapper = styled("div")`
  position: fixed;
  height: 68px;
  bottom: 0;
  left: 240px;
  right: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  background: #fff;
  padding: 8px 8px;
`;
const ChatInput = () => {
  return (
    <ChatWrapper>
      <Avatar sx={{ bgcolor: "#153D72" }}>P</Avatar>
      <ChatField placeholder="Type a message.." type="text" />
    </ChatWrapper>
  );
};

export default ChatInput;
