import {Link} from "react-router";

const Error = () => {
    return (
        <div>
            <h1>ERROR 404</h1>
            <h3>Page not found</h3>
            <Link to='/' key='404'>Back to main</Link>
        </div>
    );
};

export default Error;