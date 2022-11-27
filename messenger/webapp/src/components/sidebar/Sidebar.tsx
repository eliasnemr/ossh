import styled from "@emotion/styled";
import { Stack, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import Header from "../header/Header";
import Note from "../svgs/Note";
import PrescriptionRenewal from "../svgs/PrescriptionRenewal";
import Timeline from "../svgs/Timeline";

import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const [showForm, setShowForm] = React.useState("");

  return (
    <Stack
      sx={{ height: "100%", width: "100%", overFlow: "hidden" }}
      alignItems="space-between"
    >
      <>
        <Header>
          <img
            className={styles["icon"]}
            src="../assets/messenger.png"
            alt="appIcon"
          />
          {/* {media ? (
        ) : null} */}
        </Header>
        {showForm.length > 0 // <SidebarActions>
          ? //   <SidebarDoneButton onClick={() => setShowForm("")}>
            //     Done
            //   </SidebarDoneButton>
            // </SidebarActions>
            null
          : // <SidebarActions>
            //   <SidebarAction>
            //     <SidebarButton onClick={() => setShowForm("HISTORY")}>
            //       <Timeline size={48} />
            //     </SidebarButton>
            //   </SidebarAction>
            //   <SidebarAction>
            //     <SidebarButton onClick={() => setShowForm("NOTICE")}>
            //       <Note size={48} />
            //     </SidebarButton>
            //   </SidebarAction>
            //   <SidebarAction>
            //     <SidebarButton onClick={() => setShowForm("RENEWAL")}>
            //       <PrescriptionRenewal size={48} />
            //     </SidebarButton>
            //   </SidebarAction>
            // </SidebarActions>
            null}
        {showForm.length === 0 ? (
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
        ) : null}
        {showForm === "HISTORY" ? <form>User's history</form> : null}
        {showForm === "NOTICE" ? (
          <form onSubmit={() => console.log("submitting..")}>
            <FormField>
              <label>Reason:</label>
              <input type="text" />
              <button type="button">Request</button>
            </FormField>
          </form>
        ) : null}
        {showForm === "RENEWAL" ? (
          <form onSubmit={() => console.log("submitting..")}>
            <FormField>
              <label>Select a prescription:</label>
              <select name="prescription" id="prescription">
                <option value="Xanax">Xanax</option>
                <option value="Panadol">Panadol</option>
                <option value="Xanax">Xanax</option>
                <option value="Panadol">Panadol</option>
              </select>
              <button type="button">Request</button>
            </FormField>
          </form>
        ) : null}
      </>
    </Stack>
  );
};

export default Sidebar;

const FormField = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: fit-content;
  margin: 16px 16px;
  > label {
    float: left;
    font-weight: 600;
  }
  > input {
    padding: 8px;
    border-radius: 8px;
    height: 48px;
  }
  > select {
    width: 100%;
    height: 48px;
  }
  > button {
    color: #fefeff;
    border: none;
    background-color: #153d72;
    padding: 8px;
    width: 100%;
    border-radius: 8px;
    height: 48px;
    font-size: 1.2rem;
  }
`;

const SidebarActions = styled("ul")`
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
  margin: 16px 16px;
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
`;

const SidebarDoneButton = styled("button")`
  padding: 8px;
  border: none;
  width: 100%;
  font-weight: 600;
  border-radius: 8px;
  :hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;

const SidebarAction = styled("li")``;

const SidebarButton = styled("button")`
  border: none;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  > svg {
    fill: white;
  }
  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

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
