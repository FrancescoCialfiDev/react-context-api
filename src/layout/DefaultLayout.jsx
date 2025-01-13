
import { HeaderComponent } from "../components/HeaderComponent/HeaderComponent"; // Header della pagina
import { FooterComponent } from "../components/FooterComponent/FooterComponent"; // Footer della pagina
import { Outlet } from "react-router-dom"; // Punto di caricamento per i componenti figli

export const DefaultLayout = () => (
    <div>
        <HeaderComponent />            {/* Header Default */}
        <Outlet />                     {/* Componente figlio verrà caricato qui */}
        <FooterComponent />            {/* Footer Default */}
    </div>
);

// Un layout definisce la struttura comune di una pagina, garantendo coerenza visiva
// e funzionalità condivise tra diverse sezioni dell'applicazione. 

