



import { Link } from "react-router-dom";

export const SingleCardShow = ({ data }) => (
    data.map((element) => (
        <div className="col-6 col-md-4 col-lg-3" key={element.id}>
            <div className="card" id={element.id}>
                <img src={element.image} className="card-img-top" alt={element.title} />
                <div className="card-body">
                    <h5 className="card-title">{element.title}</h5>
                    <p className="card-text m-0">{element.content}</p>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <Link to="/posts" className="btn btn-primary mx-2">Torna alla Home</Link>
                <Link to={`/posts/${element.id - 1}`} className="btn btn-primary mx-1">&#8678;</Link>
                <Link to={`/posts/${element.id + 1}`} className="btn btn-primary mx-1">&#8680;</Link>
            </div>
        </div>
    ))
);
