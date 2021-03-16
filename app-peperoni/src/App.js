import './App.css';
import { React } from "react";
import { BrowserRouter } from 'react-router-dom';
import Header from "./components/Header/Header";
import AllRoutes from "./components/router/AllRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <div class="container-fluid px-0">
          <AllRoutes />
        </div>
      </div>
    </BrowserRouter>
    );
  };

  export default App;
