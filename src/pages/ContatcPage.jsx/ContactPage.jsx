export const ContactPage = () => (
    <main className="container my-5 p-5 bg-secondary rounded-4">
        <h1 className="text-center mb-4 text-white">Contattaci</h1>

        <div className="content d-flex justify-content-center">
            <div className="row mb-4">
                {/* Sezione Informazioni di Contatto */}
                <div className="col-md-6 bg-white p-3 rounded-3 m-1 w-100">
                    <h2 className="mb-3">Informazioni di Contatto</h2>
                    <ul className="list-unstyled">
                        <li>
                            <strong>Indirizzo:</strong> Via Roma, 123, 00100 Roma, Italia
                        </li>
                        <li>
                            <strong>Telefono:</strong>
                            <a href="tel:+391234567..." className="text-decoration-none">
                                +39 123 456...
                            </a>
                        </li>
                        <li>
                            <strong>Email:</strong>
                            <a href="mailto:info@example.com" className="text-decoration-none">
                                info@example.com
                            </a>
                        </li>
                        <li>
                            <strong>Orari:</strong> Lunedì - Venerdì: 9:00 - 18:00
                        </li>
                    </ul>
                </div>

                {/* Sezione Dove Trovarci */}
                <div className="col-md-6 bg-white p-3 rounded-3 m-1 w-100">
                    <h2 className="mb-3">Dove Trovarci</h2>
                    <div className="ratio ratio-16x9">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509847!2d144.9537352153178!3d-37.8162791797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d7bfb8da8a8e!2sExample%20Location!5e0!3m2!1sit!2sit!4v1618570823417!5m2!1sit!2sit"
                            allowFullScreen=""
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </div>

        {/* Bottone per contattarci */}
        <div className="text-center">
            <a href="#contact-form" className="btn btn-primary btn-lg">Contattaci</a>
        </div>
    </main>
);
