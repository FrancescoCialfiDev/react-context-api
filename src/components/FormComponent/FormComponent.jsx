import { useState } from "react";
import axios from "axios";

export const FormComponent = () => {
    // Variabili di stato
    const [image, setImage] = useState("");
    const [formData, setFormData] = useState({
        title: "",
        image: "",
        content: "",
        available: false,
    });

    // Funzione per gestire la selezione dell'immagine
    const selectImage = (event) => {
        const file = event.target.files[0];
        setImage(file);
    };

    // Funzione generica per aggiornare i dati del form
    const handleFormData = (event) => {
        const { name, type, value, checked } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    // Funzione per gestire l'invio del form
    const submitFunction = (event) => {
        event.preventDefault();

        const newCardModel = {
            title: formData.title,
            image: image ? image.name : "",
            content: formData.content,
            available: formData.available,
        };

        // Invio dei dati al server
        axios
            .post("http://localhost:3000/foods", newCardModel)
            .then((res) => {
                console.log("Dati inviati con successo:", res.data);
                alert("The card has been generated");
            })
            .catch((error) => {
                console.error("Errore durante l'invio dei dati:", error);
            });

    };

    return (
        <div className="formContainer w-50">
            <form className="p-5 bg-white rounded-3" onSubmit={submitFunction}>
                <div className="form-group">
                    {/* Nome della card */}
                    <label htmlFor="titleForm">
                        <span className="fw-bold">Card&apos;s Name</span>
                    </label>
                    <input
                        name="title"
                        type="text"
                        value={formData.title}
                        className="form-control"
                        id="titleForm"
                        placeholder="Es: React Components"
                        onChange={handleFormData}
                    />

                    {/* Immagine della card */}
                    <label htmlFor="imageForm">
                        <span className="fw-bold">Card&apos;s Image</span>
                    </label>
                    <input
                        name="image"
                        type="file"
                        className="form-control"
                        id="imageForm"
                        onChange={selectImage}
                    />

                    {/* Contenuto della card */}
                    <label htmlFor="contentForm">
                        <span className="fw-bold">Card&apos;s Content</span>
                    </label>
                    <input
                        name="content"
                        type="text"
                        value={formData.content}
                        className="form-control"
                        id="contentForm"
                        placeholder="Es: Text of the content"
                        onChange={handleFormData}
                    />

                    {/* Disponibilità della card */}
                    <div className="d-flex flex-column align-items-start py-2 bg-warning rounded-2 p-2 my-2 border">
                        <label htmlFor="available" className="fw-bold">
                            Availability
                        </label>
                        <div className="d-flex gap-2">
                            <label htmlFor="available">True</label>
                            <input
                                name="available"
                                checked={formData.available}
                                onChange={handleFormData}
                                id="available"
                                type="checkbox"
                            />
                        </div>
                    </div>
                </div>

                {/* Pulsante di invio */}
                <button type="submit" className="btn btn-primary mt-2">
                    Submit
                </button>
            </form>
        </div>
    );
};
