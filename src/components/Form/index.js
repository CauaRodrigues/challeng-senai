import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

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
	const navigate = useNavigate();

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const submit = (e) => {
		if (!username || !password) {
			console.log("Preencha os campos");
		} else {
			e.preventDefault();
			navigate(`/admin/${username}`);
		}
	};

	return (
		<section className="form">
			<div className="form-hero">
				<h1>DashFront</h1>

				<h2>Faça seu login e conheça as novidades</h2>
			</div>

			<form onSubmit={submit} className="fieldset">
				<div className="fields">
					<div className="field">
						<Fields
							fullWidth
							autoComplete="off"
							id="outlined-basic"
							label="Usuário"
							variant="outlined"
							type="text"
							onChange={(event) => {
								setUsername(event.target.value);
							}}
						/>
					</div>

					<div className="field">
						<Fields
							fullWidth
							label="Senha"
							variant="outlined"
							type="password"
							onChange={(event) => {
								setPassword(event.target.value);
							}}
						/>
					</div>
				</div>

				<div className="container-btn">
					<button type="submit">Entrar</button>
				</div>
			</form>

			<div className="footer-form">
				<hr className="line" />

				<p>Esqueceu a senha?</p>
			</div>
		</section>
	);
};

export default Form;
