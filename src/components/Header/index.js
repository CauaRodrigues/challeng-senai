import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./styles/style.css";
import { Button, IconButton } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Header = () => {
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
				</ThemeProvider>

				<Button>
					<img src={profileIcon} alt="profile image" />
				</Button>
			</div>
		</header>
	);
};

export default Header;
