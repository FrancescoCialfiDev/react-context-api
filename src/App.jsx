import { HomePage } from "./pages/HomePage/HomePage"; // Importiamo la pagina Home
import { MainComponent } from "./pages/PostsPages/PostsPages"; // Importiamo il componente principale dei post
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Importiamo le funzionalità di routing
import { ContactPage } from "./pages/ContatcPage.jsx/ContactPage"; // Importiamo la pagina dei contatti
import { DefaultLayout } from "./layout/DefaultLayout"; // Importiamo il layout principale
import { PostPage } from "./pages/PostsPages/PostPage"; // Importiamo la pagina che mostra un singolo post
import { ErrorPage } from "./pages/ErrorPages/ErrorPage"; // Importiamo la pagina di errore
import { FormPage } from "./pages/FormPage.jsx/FormPage"; // Importiamo la pagina Form
import { GlobalContext } from "./contexts/GlobalContext";
import { useState, useEffect } from "react";
import axios from "axios"



export const App = () => {


  // Stato per i dati e per la gestione del form
  const [reactData, setReactData] = useState([]);

  // Funzione per ottenere i dati dal backend
  const getData = () => {
    axios
      .get("http://localhost:3000/foods")
      .then((res) =>
        setReactData(res.data.foods))
      .catch((error) => console.error(error))
      .finally(() => console.log("Data fetch completed"));
  };

  // Eseguiamo la chiamata API al caricamento del componente
  useEffect(getData, []);


  return (

    <>
      < GlobalContext.Provider value={reactData} >
        <BrowserRouter>                                          {/* BrowserRouter avvolge tutta l'app e abilita il routing */}
          <Routes>

            <Route Component={DefaultLayout}>                    {/*layout di default */}

              <Route path="/" element={<HomePage />} />          {/* Home page */}

              <Route path="/contact">                            {/* Pagina dei contatti */}
                <Route index element={<ContactPage />} />
              </Route>

              <Route path="/posts">                              {/* Gestione dei post */}
                <Route index element={<MainComponent />} />      {/* Pagina principale dei post */}
                <Route path="addPost" element={<FormPage />} />  {/* Pagina per aggiungere un  post */}
                <Route path=":id" element={<PostPage />} />      {/* Pagina per un singolo post, identificato da un id */}
                <Route path="*" element={<ErrorPage />} />       {/* Pagina di errore per percorsi non validi sotto /posts */}
              </Route>

            </Route>

            <Route path="*" element={<ErrorPage />} />           {/* Rotta globale per tutti i percorsi non validi */}

          </Routes>
        </BrowserRouter>
      </ GlobalContext.Provider >
    </>

  )

};
