//importações
import { Details } from "../pages/Details"
import { Route, Routes } from "react-router-dom"
import { Layout } from "./layout"
import { Admin } from "../pages/Admin"
import { NotFound } from "../pages/NotFound"
import { New } from "../pages/New"
import { Home } from "../pages/Home"

export function AdminRoutes() {
    return (
        <Routes>
            <Route
                element={<Layout/>}
            >
                <Route 
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/details/:id"
                    element={<Details />}
                />
                <Route
                    path="/new"
                    element={<New />}
                />
                <Route
                    path="/edit/:id"
                    element={<New />}
                />
                <Route
                    path="/admin"
                    element={<Admin />}
                />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}