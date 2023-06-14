import "./App.css";
import Header from "./component/header";
import { BrowserRouter} from "react-router-dom";
import Home from "./component/home";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
       <Home/>
      </BrowserRouter>
    </>
  );
}

export default App;