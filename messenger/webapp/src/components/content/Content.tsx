import { Box, Drawer } from "@mui/material";
import { Routes, Route } from "react-router";
import { DRAWER__WIDTH } from "../../constants";

const Content = () => {
  return (
    <>
      <Box component="main" sx={[appwidth, contentPadding]}>
        <Routes>
          <Route path="/" element={<Navigate replace to="/balance" />} />
          <Route path="/balance" element={<Balance />} />
        </Routes>
      </Box>
      <Box component="nav" sx={nav} aria-label="mailbox folders">
        <Drawer
          variant="temporary"
          open={open}
          onClose={handleDrawerClose}
          ModalProps={{ keepMounted: true }}
          sx={drawerdisplay}
        >
          <SideMenu
            handleDrawerOpen={handleDrawerOpen}
            handleDrawerClose={handleDrawerClose}
          />
        </Drawer>
        <Drawer variant="permanent" sx={drawerdisplaydesktop}>
          <SideMenu
            handleDrawerOpen={handleDrawerOpen}
            handleDrawerClose={handleDrawerClose}
          />
        </Drawer>
      </Box>
    </>
  );
};

export default Content;

const nav = {
  width: { sm: DRAWER__WIDTH },
  flexShrink: { sm: 0 },
};
const start = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
};
const appwidth = {
  width: { sm: `calc(100% - ${DRAWER__WIDTH}px)` },
  ml: { sm: `${DRAWER__WIDTH}px` },
};
const drawerdisplay = {
  display: { xs: "block", sm: "none" },
  "& .MuiDrawer-paper": { boxSizing: "border-box", width: DRAWER__WIDTH },
};
const drawerdisplaydesktop = {
  display: { xs: "none", sm: "block" },
  "& .MuiDrawer-paper": { width: DRAWER__WIDTH },
};

/**
 * Content
 */
const SideMenu = () => {};
