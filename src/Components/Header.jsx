import { Toolbar, Divider, IconButton, Typography, Badge } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SideDrawer from "./Drawer";

const Header = () => {
  return (
    <>
      <Toolbar>
        <SideDrawer>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
        </SideDrawer>

        <Typography style={{ flexGrow: "1" }} variant="h6">
          Blogging Website
        </Typography>

        <IconButton color="inherit">
          <Badge badgeContent={4} color="info">
            <NotificationsIcon />
          </Badge>
        </IconButton>

        <IconButton color="inherit">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>

      <Divider />

      <Toolbar
        style={{
          flexGrow: "1",
          fontSize: 20,
          textTransform: "uppercase",
          justifyContent: "center",
          fontFamily: "Montserrat",
        }}
      >
        Express your emotions through words.
      </Toolbar>
    </>
  );
};

export default Header;
