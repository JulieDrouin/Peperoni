import './App.css';
import { React } from "react";
import { BrowserRouter } from 'react-router-dom';
import Header from "./components/Header/Header";
// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <BrowserRouter>
        <div className="App">
          <Header/>
        </div>
    </BrowserRouter>
  );
};

export default App;
