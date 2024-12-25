import {Link} from "react-router";

const Error = () => {
    return (
        <div style={{
            display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: '3rem'
        }}>
            <h1>ERROR 404</h1>
            <h3
                style={{color: 'white', fontSize: '2rem'}}
            >Page not found</h3>
            <Link to='/' key='404'>Back to main</Link>
        </div>
    );
};

export default Error;