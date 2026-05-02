
import CO2Chart from "./components/CO2Chart";
import { CardBody } from "./components/Card";
import CardPH from "./components/CardPH";

function App() {
  return (
    <>
      {/* NAVBAR */}
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        style={{ backgroundColor: "#026102" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">
            OXIGENIUS
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">Monitoreo</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Proyecto</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* CONTENIDO (FUERA DEL NAV) */}
      <div style={{ marginTop: "70px" }}>
        <div className="container mt-4">
          <CO2Chart />
        </div>

        <CardPH/>
        
        <CardBody
          title="Oxigenius"
          subtitle="Biofiltro"
          text="El texto"
        />
      </div>
    </>
  );
}

export default App;
``