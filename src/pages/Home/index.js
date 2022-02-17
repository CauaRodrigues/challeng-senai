import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import "./styles/style.css";

const Home = () => {
	const { username } = useParams();

	return (
		<>
			<Header />

			<article className="container-main">
				<section className="content-top">
					<h2>
						Boa tarde <span>{username}</span>
					</h2>

					<div className="container-btn-navs">
						<div>Page</div>
						<div>Período</div>
					</div>
				</section>

				<section className="content">
					<div className="cards-totals">
						<div className="card">
							<div>Cards Totals</div>
						</div>

						<div className="card">
							<div>Cards Totals</div>
						</div>

						<div className="card">
							<div>Cards Totals</div>
						</div>
					</div>

					<div className="cards-quadros">
						<div>Quadros</div>
					</div>
				</section>
			</article>
		</>
	);
};

export default Home;
