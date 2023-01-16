import { List } from "@mui/material"
import { ReactNode } from "react"

interface IListNav {
    children: ReactNode
}

export const ListNav = ({ children }: IListNav) => {
    return (
        <List component={'nav'}>
            {children}
        </List>
    )
}