import React from "react";
import { Link, useParams } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./styles/style.css";
import { Button, IconButton } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Popper from "@mui/material/Popper";
import { Avatar } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";

const Header = () => {
  const { username } = useParams();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const colorIconButton = createTheme({
    palette: {
      primary: {
        main: "#9CA3AF",
      },
    },
  });

  const profileIcon =
    "https://minimal-kit-react.vercel.app/static/mock-images/avatars/avatar_default.jpg";

  return (
    <header className="container">
      <h1>DashFront</h1>

      <div className="icons">
        <ThemeProvider theme={colorIconButton}>
          <IconButton>
            <SearchIcon color="primary" />
          </IconButton>

          <IconButton>
            <NotificationsIcon color="primary" />
          </IconButton>

          <Button aria-describedby={id} onClick={handleClick}>
            <img src={profileIcon} alt="Imagem user" />
          </Button>
          <Popper id={id} open={open} anchorEl={anchorEl}>
            <div className="propper-profile">
              <div className="profile">
                <Avatar
                  alt="Profile image"
                  src={profileIcon}
                  sx={{ width: 56, height: 56 }}
                />

                <div className="info-account">
                  <p>{username}</p>
                  <p className="smaller">Acme Inc.</p>
                </div>
              </div>

              <div className="options">
                <div>
                  <Button>
                    <AccountCircleIcon color="primary" />
                    <p>Perfil</p>
                  </Button>
                </div>

                <div>
                  <Button>
                    <SettingsIcon color="primary" />
                    <p>Configurações</p>
                  </Button>
                </div>

                <div>
                  <Link to={`/admin/${username}`}>
                    <Button>
                      <HomeIcon color="primary" />
                      <p>Overview</p>
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="logout">
                <div>
                  <Link to="/">
                    <Button>
                      <LogoutIcon />

                      <p className="text-logout">Sair</p>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Popper>
        </ThemeProvider>
      </div>
    </header>
  );
};

export default Header;
