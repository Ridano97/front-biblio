import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageAccueil from "./Pages/PageAccueil";
import NavBar from "./Components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Components/Footer";
import PageAuteurs from "./Pages/PageAuteurs";
import PageLivres from "./Pages/PageLivres"
import PageConnexion from "./Pages/PageConnexion";
import PageInscription from "./Pages/PageInscription";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageDetailsLivre from "./Pages/PageDetailsLivre";
import PageUtilisateur from "./Pages/PageUtilisateur";
import PageConnexionInscription from "./Pages/PageConnexionInscription";

function App() {
  return <>
  <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/pageconnexion-inscription" element={<PageConnexionInscription />}/>
      <Route path="/" element={<PageAccueil />}/>
      <Route path="/livre" element={<PageLivres />}/>
      <Route path="/auteur" element={<PageAuteurs />}/>
      <Route path="/connexion" element={<PageConnexion />}/>
      <Route path="/inscription" element={<PageInscription/>}/>
      <Route path="/detailslivre/:id" element={<PageDetailsLivre/>}/>
      <Route path="/utilisateur" element={<PageUtilisateur/>}/>
    </Routes>
    <Footer/>
    <ToastContainer
      position="top-right"
      autoClose={5000}
    />
{/* Same as */}
<ToastContainer />
  </BrowserRouter>
  </>
}

export default App;