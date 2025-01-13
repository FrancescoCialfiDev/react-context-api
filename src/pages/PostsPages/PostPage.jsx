import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { SingleCardShow } from "../../components/CardComponent/SingleCardShow";
const apiUrl = "http://localhost:3000"

export const PostPage = () => {
    const { id } = useParams(); // Recupera i parametri dall'URL
    const [post, setPost] = useState(null)

    function getData() {

        axios.get(apiUrl + "/foods/" + id)
            .then((res) => {
                setPost([res.data.item])
            })

    }

    useEffect(getData, [id])
    return (

        <main>
            <section className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    {post && <SingleCardShow data={post} />}
                </div>
            </section>
        </main>


    );
};