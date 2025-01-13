import { Link } from "react-router-dom";
const url = import.meta.env.VITE_URL_POSTS;
const endPoint = "/posts"
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

export const CreateCard = () => {
    const { reactData } = useContext(GlobalContext)
    console.log(reactData);

    reactData?.map((element) => (

        //  element.published && ( // Questa condizione ci permettere di mostrare le card se la proprietà published risulta "true"
        <div className="col-6 col-md-4 col-lg-3" key={element.id} >
            <div className="card" id={element.id}>
                <img src={element.image} className="card-img-top" alt={element.title} />
                <div className="card-body">
                    <h5 className="card-title">{element.title}</h5>
                    <p className="card-text m-0">{element.content}</p>
                    <p className="m-0">{"Available:" + " " + String(element.published)}</p>
                    <Link to={`${url}${endPoint}/${element.id}`} className="btn btn-primary">Show Details</Link>
                    <button type="button" className="btn btn-danger mx-1" >Delete</button>
                </div>
            </div>
        </div >
        //  )
    )
    )

};



{/*onClick={() => remove(element.id)}*/ }