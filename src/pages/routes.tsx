import HomePage from "./HomePage";
import AuthPage from "./AuthPage";
import CompaniesPage from "./CompaniesPage";
import SearchPage from "./SearchPage";
import CompanyPage from "./CompanyPage";

export const privateRoutes = [
    {path: '/home', element: <HomePage/>},
    {path: '/companies', element: <CompaniesPage/>},
    {path: '/companies/:id', element: <CompanyPage/>},
    {path: '/search', element: <SearchPage/>},
    {path: '*', element: <HomePage/>}
]

export const publicRoutes = [
    {path: '/auth', element: <AuthPage/>},
    {path: '*', element: <AuthPage/>}
]