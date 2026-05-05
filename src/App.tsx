import CO2Chart from "./components/CO2Chart";
import CardPH from "./components/CardPH";

function App() {
  return (
    <>
      {/* NAVBAR SUPERIOR */}
      <nav
        className="navbar navbar-dark fixed-top"
        style={{ backgroundColor: "#026102" }}
      >
        <div className="container-fluid justify-content-center">
          <span className="navbar-brand fw-bold text-white">
            OXIGENIUS
          </span>
        </div>
      </nav>

      
      <div style={{ marginTop: "70px", marginBottom: "70px" }}>
        
        
        <div className="container-fluid px-1 mt-4">
          <CO2Chart />
        </div>

     
        <CardPH />

      </div>

      
      <footer
        className="navbar navbar-dark fixed-bottom"
        style={{ backgroundColor: "#026102" }}
      >
        <div className="container-fluid justify-content-center">
          <span className="navbar-text fw-bold text-white">
            
          </span>
        </div>
      </footer>
    </>
  );
}

export default App;
