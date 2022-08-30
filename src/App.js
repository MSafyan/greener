import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'animate.css';
import './App.css';
import { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DashboardPanel from "./components/dashboardpanel/dashboardpanel";
import Expedition from './pages/Expedition';
import Preloader from "./components/preloader/preloader";

function App() {
  useEffect(() => {
    window.onload = function () {
      document.querySelector(".preloader").style.display = "none";
      document.querySelector(".App").style.display = "block";
    }
  }, [])

  return (
    <>
    <Preloader />
    <div className="App">
      <Router>
        <Route exact path={'/'} component={DashboardPanel} />
        <Route exact path={'/expedition'} component={Expedition} />
      </Router>
    </div >
    </>
  );
}

export default App;
