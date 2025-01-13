
export const ErrorPage = () => {
    return (
        <div className="d-flex vh-100 align-items-center justify-content-center bg-light">
            <div className="text-center">
                <h1 className="display-1 fw-bold text-danger">404</h1>
                <p className="fs-3"> <span className="text-danger">Oops!</span> Pagina non trovata.</p>
                <p className="lead">La pagina che stai cercando non esiste o è stata rimossa.</p>
                <a href="/" className="btn btn-primary">Torna alla Home</a>
            </div>
        </div>
    )
}
