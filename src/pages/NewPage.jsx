import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router";
import {useFetching} from "../hooks/useFetching.jsx";
import FetchData from "../service/FetchData.js";
import {CircularProgress} from "@mui/material";

const NewPage = () => {

    const params = useParams();
    const [data, setData] = useState([]);

    const [fetchPostById, Loading, Error] = useFetching(async (postId) => {
        const response = await FetchData.getPostById(postId);
        setData(response.data);
        console.log(data)
    });

    useEffect(() => {
        fetchPostById(params.id);
    }, [])

    return (
        <div style={{
            display: "flex", flexDirection: 'column', justifyContent: 'space-between', alignItems: 'stretch', gap: '2rem'
        }} className="main">
            {Loading
                ? <>
                    {Error
                        ? <h2 style={{
                            color: 'white', fontSize: '2rem'
                        }}>{Error}</h2>
                        : <CircularProgress size='8rem' style={{
                            alignSelf: 'center', margin: '10rem'
                        }}/>
                    }
                </>
                : <>
                    <h1>ID новости: {params.id}</h1>
                    <h2 style={{
                        color: 'white', fontSize: '2rem'
                    }}>{data?.title}</h2>
                    <p>{data?.body}</p>
                  </>
            }

            <Link to='/'>Назад</Link>
        </div>
    );
};

export default NewPage;