import NewsList from "../components/NewsList/NewsList.jsx";
import React from "react";

const News = () => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: '3rem',
            marginTop: '2rem'
        }}>
            <main className="main">
                <h1>НОВОСТИ</h1>
                <NewsList isPage={false}/>
            </main>

        </div>
    );
};

export default News;