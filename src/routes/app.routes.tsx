import { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import { SideMenu } from "../components/organisms/SideMenu"
import { CreateEmployeer } from "../pages/CreateEmployeesForm"
import { Employeers } from "../pages/Employees"
import { useMenuStore } from "../shared/hooks/useMenuStore/useMenuStore"


export const AppRoutes = () => {
    const setMenuOptions = useMenuStore(state => state.setMenuOptions)
    useEffect(() => {
        setMenuOptions([
            { label: 'Funcionários', icon: 'wallet', path: '/employyers' },
            { label: 'Cadastrar', icon: 'confirmation_number_sharp', path: '/create-employerr' },
        ])
    }, [])
    return (
        <SideMenu>
            <Routes>
                <Route
                    path="/employyers"
                    element={<Employeers />}
                />
                <Route
                    path="/create-employerr"
                    element={<CreateEmployeer />}
                />
            </Routes>
        </SideMenu>
    )
}