import {Navigate, Route, Routes} from "react-router";
import {routes} from "../routes/index.js";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map((route) => (
                <Route
                    path={route.path}
                    element={<route.element/>}
                    exact={route.exact}
                    key={route.path}
                />
            ))}
            <Route path='/*' element={<Navigate to='/error'/>}></Route>
        </Routes>
    );
};

export default AppRouter;