
//import axios from "axios";
import { CreateCard } from "../../components/CardComponent/CardComponent"; // Import del componente card


//const apiUrl = "http://localhost:3000/foods"; // URL dell'API

export const MainComponent = () => {



    // Funzione per eliminare un elemento
    // const removeDataItem = (id) => {
    //     axios
    //         .delete(`${apiUrl}/${id}`)
    //         .then(() => {
    //             setReactData((prevData) => prevData.filter((item) => item.id !== id));
    //             console.log("Item deleted successfully");
    //         })
    //         .catch((error) => console.error("Error deleting item:", error));
    // };

    return (
        <main className="d-flex">
            {/* Card Section */}
            <div className="container">
                <div className="row align-items-center">
                    <CreateCard />
                </div>
            </div>
        </main>
    );
};
