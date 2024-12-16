import './App.css'
import {BrowserRouter} from "react-router";
import AppRouter from "./components/AppRouter.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
          <Header/>
          <main className="main">
              <AppRouter/>
          </main>
          <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
