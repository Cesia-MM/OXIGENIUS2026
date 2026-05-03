
import CO2Chart from "./components/CO2Chart";

import CardPH from "./components/CardPH";

function App() {
  return (
    <>
      {/* NAVBAR */}
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        style={{ backgroundColor: "#026102" }}
      >
        <div className="container-fluid justify-content-center">
          <a className="navbar-brand fw-bold" href="#">
            OXIGENIUS
          </a>

          </div>
      </nav>

      {/* CONTENIDO (FUERA DEL NAV) */}
      <div style={{ marginTop: "70px",marginBottom: "70px"  }}>
        <div className="container mt-4">
          <CO2Chart />
        </div>

        <CardPH/>
        <footer
  className="navbar navbar-dark fixed-bottom"
  style={{ backgroundColor: "#026102" }}
>
  <div className="container-fluid justify-content-center">
    <span className="navbar-text fw-bold text-white">
      
    </span>
  </div>
</footer>
``

        
      </div>
    </>
  );
}

export default App;
``