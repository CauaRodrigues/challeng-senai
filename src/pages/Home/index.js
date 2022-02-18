import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import CardsNav from "../../components/CardsNav";
import DashIcon from "../../assets/dataAnalytics.png";
import ConfigIcon from "../../assets/settings.png";
import MachineIcon from "../../assets/manufacturing.png";
import ClientsIcon from "../../assets/rating.png";
import OperatorsIcon from "../../assets/trabalhador.png";
import NotificationIcon from "../../assets/notification.png";
import AdminIcon from "../../assets/admin.png";
import "./styles/style.css";

const Home = () => {
	const { username } = useParams();

	return (
		<>
			<Header />

			<article className="container-main">
				<section className="content-top">
					<h2>
						Olá, bem vindo de volta <span>{username}</span>
					</h2>
				</section>

				<section className="content">
					<div className="cards-quadros">
						<CardsNav name="Dashboard" img={DashIcon} page="dashboard" />

						<CardsNav name="Configurações" img={ConfigIcon} page="" />

						<CardsNav name="Visualizar Máquinas" img={MachineIcon} page="" />

						<CardsNav name="Clientes" img={ClientsIcon} page="" />

						<CardsNav name="Operadores" img={OperatorsIcon} page="" />

						<CardsNav
							name="Gerenciar Notificações"
							img={NotificationIcon}
							page=""
						/>

						<CardsNav
							name="Gerenciamento Avançado (para administradores)"
							img={AdminIcon}
							page=""
						/>
					</div>
				</section>
			</article>
		</>
	);
};

export default Home;
