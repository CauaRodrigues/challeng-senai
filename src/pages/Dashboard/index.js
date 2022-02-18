import React from "react";
import Avanco from "../../components/Avanco";
import Card from "../../components/Card";
import Header from "../../components/Header";
import Rotacao from "../../components/Rotacao";
import Temperatura from "../../components/Temperatura";
import "./styles/style.css";

const Dashboard = () => {
  return (
    <>
      <Header />

      <article className="container">
        <section className="cards">
          <Card cardType="temp" iconType="temperature">
            <h3>80º</h3>
            <p>Temperatura Máxima</p>
          </Card>

          <Card cardType="avance" iconType="avance">
            <h3>5s</h3>
            <p>Velo. de Avanço Máxima</p>
          </Card>

          <Card cardType="rotation" iconType="rotation">
            <h3>100000 RPM</h3>
            <p>Velo. de Rotação Máxima</p>
          </Card>
        </section>

        <section className="charts">
          <div className="chart-main">
            <Rotacao />
          </div>

          <div className="double-chart">
            <div className="chart">
              <Avanco />
            </div>

            <div className="chart">
              <Temperatura />
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default Dashboard;
