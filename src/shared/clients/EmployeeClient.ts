import { api } from "./api"
import { IEmployeeEntity } from "../../entities/EmployeeEntity"
import { IChangePasswordEntity } from "../../entities/ChangePasswordEntity"
import { IUpdateEmployeeEntity } from "../../entities/UpdateEmployeeEntity"

export const requestAllEmployees = async () => {
    const response = await api.get<{ data: IEmployeeEntity[] }>('v1/employee')

    return response
}

export const responseEmployee = async (data: IEmployeeEntity) => {
    const response = await api.post('v1/employee', data)

    return response
}

export const updateEmployee = async (data: IUpdateEmployeeEntity, document: string) => {
    const response = await api.put(`v1/employee/${document}`, data)

    return response
}

export const updateEmployeePassword = async (document: string, data: IChangePasswordEntity) => {
    const response = await api.put(`v1/employee/update-password/${document}`, data)
    return response
}

export const enableOrDisableStatusEmployee = async (document: string) => {
    const response = await api.put(`v1/employee/enable-or-disabled/${document}`)

    return response
}

export const searchEmployeeByName = async (param: string) => {
    const response = await api.get(`v1/employee/search${param}`)

    return response
}