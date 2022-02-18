import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/style.css";

const CardsNav = ({ name, img, page }) => {
	const navigation = useNavigate();

	const nextPage = () => {
		if (page) {
			navigation(page);
		}
	};

	return (
		<div className="card" onClick={nextPage}>
			<div className="box-img">
				<img src={img} alt={`${name} logo`} />
			</div>

			<p>{name}</p>
		</div>
	);
};

export default CardsNav;
