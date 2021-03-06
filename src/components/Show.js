import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'


const Show = () => {
    const [show, setShow] = useState({});
    const { idShow } = useParams();

 

    const getShow = async () => {
        const SINGLE_SHOW_URL = `https://api.tvmaze.com/shows/${idShow}`
        const { data } = await axios.get(SINGLE_SHOW_URL);
        setShow(data);
    }

    useEffect(() => {
        getShow();
    }, []);




    return (
        <>
            <h1>
                Show
            </h1>
            {
                show.name
                    ? <h2>{show.name}</h2>
                    : <h2>Cargando...</h2>

            }
            <div>
                <p>Official WebSite</p>
                {
                    <Link to="/">{show.officialSite}</Link>
                }
            </div>
        </>
    )
}
export default Show