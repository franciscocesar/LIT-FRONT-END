import { api } from "./api"
import { IEmployeeEntity } from "../../entities/EmployeeEntity"

export const requestAllEmployees = async () => {
    const response = await api.get<{ data: IEmployeeEntity[] }>('v1/employee')

    return response
}

export const responseEmployee = async (data: IEmployeeEntity) => {
    const response = await api.post('v1/employee', data)

    return response
}