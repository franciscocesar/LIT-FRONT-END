import { IRoleEntity } from "../../entities/RoleEntity"
import { api } from "./api"

export const requestAllRoles = async () => {
    const response = await api.get<{ data: IRoleEntity[] }>('v1/role')

    return response
}

export const responseRole = async (name: string) => {
    const response = await api.post('v1/role', { name })

    return response
}