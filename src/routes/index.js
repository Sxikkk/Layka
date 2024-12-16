import Main from "../pages/Main/Main.jsx";
import FAQ from "../pages/FAQ.jsx";
import characters from "../pages/Characters.jsx";
import News from "../pages/News.jsx";
import Error from "../pages/404.jsx";
import NewPage from "../pages/NewPage.jsx";

export const routes = [
    {element: Main, path: '/', exact: true, name: "Главная"},
    {element: News, path: '/news', exact: true, name: "Новости"},
    {element: characters, path: '/characters', exact: true, name: "Персонажи"},
    {element: FAQ, path: '/faq', exact: true, name: "FAQ"},
    {element: Error, path: '/error', exact: true},
    {element: NewPage, path: '/news/:id', exact: true},
]