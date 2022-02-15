import React from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

// import IconButton from "@mui/material/IconButton";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import InputLabel from "@mui/material/InputLabel";
// import InputAdornment from "@mui/material/InputAdornment";
// import FormControl from "@mui/material/FormControl";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";

import "./styles/style.css";

const Fields = styled(TextField)({
	"& label.Mui-focused": {
		color: "#7582EB",
	},
	"& label": {
		color: "#A0AEC0",
	},
	"& .MuiOutlinedInput-root": {
		"& input": {
			color: "#a0aec0",
		},
		"& label": {
			color: "#A0AEC0",
		},
		"& fieldset": {
			borderColor: "#A0AEC0",
			color: "#A0AEC0",
		},
		"&:hover fieldset": {
			borderColor: "#A0AEC0",
		},

		"&.Mui-focused fieldset": {
			borderColor: "#7582EB",
		},
	},
});

const Form = () => {
	// const [values, setValues] = useState({
	// 	amount: "",
	// 	password: "",
	// 	weight: "",
	// 	weightRange: "",
	// 	showPassword: false,
	// });

	// const handleChange = (prop) => (event) => {
	// 	setValues({ ...values, [prop]: event.target.value });
	// };

	// const handleClickShowPassword = () => {
	// 	setValues({
	// 		...values,
	// 		showPassword: !values.showPassword,
	// 	});
	// };

	// const handleMouseDownPassword = (event) => {
	// 	event.preventDefault();
	// };

	return (
		<section className="form">
			<div className="form-hero">
				{/* <img src={logo} alt="Logo Senai" /> */}

				<h1>SENAI</h1>

				<h2>Faça seu login e conheça as novidades</h2>
			</div>

			<div className="fieldset">
				<div className="fields">
					<div className="field">
						<Fields
							fullWidth
							id="outlined-basic"
							label="E-mail"
							variant="outlined"
							type="email"
						/>
					</div>

					<div className="field">
						<Fields
							fullWidth
							id="outlined-basic"
							label="Senha"
							variant="outlined"
							type="password"
						/>

						{/* <FormControl variant="outlined">
							<InputLabel htmlFor="outlined-adornment-password">
								Password
							</InputLabel>
							<OutlinedInput
								id="outlined-adornment-password"
								type={values.showPassword ? "text" : "password"}
								value={values.password}
								onChange={handleChange("password")}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}
											edge="end"
										>
											{values.showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								}
								label="Password"
							/>
						</FormControl> */}
					</div>
				</div>

				<div className="container-btn">
					<button type="submit">Entrar</button>
				</div>
			</div>

			<div className="footer-form">
				<hr className="line" />

				<p>Esqueceu a senha?</p>
			</div>
		</section>
	);
};

export default Form;
