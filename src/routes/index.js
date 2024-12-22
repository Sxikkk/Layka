import Main from "../pages/Main/Main.jsx";
import characters from "../pages/Characters.jsx";
import News from "../pages/News.jsx";
import Error from "../pages/404.jsx";
import NewPage from "../pages/NewPage.jsx";
import Faq from "../pages/FAQ/FAQ.jsx";

export const routes = [
    {element: Main, path: '/', exact: true, name: "Главная"},
    {element: News, path: '/news', exact: true, name: "Новости"},
    {element: characters, path: '/characters', exact: true, name: "Персонажи"},
    {element: Faq, path: '/faq', exact: true, name: "Помощь"},
    {element: Error, path: '/error', exact: true},
    {element: NewPage, path: '/news/:id', exact: true},
]