import React from 'react';
import {Link, useParams} from "react-router";

const NewPage = () => {

    const params = useParams();

    return (
        <div>
            <h1>НУ тут новость: </h1>{params.id}
            <Link to='/'>Дуй назад</Link>
        </div>
    );
};

export default NewPage;