import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom"
import { Icon } from "../../atoms/Icon"

interface IListButton {
    label: string
    icon: string
    onClick?: (() => void)
    to: string
}


export const ListButton = ({ icon, label, to, onClick }: IListButton) => {
    const navigate = useNavigate()
    const resolvedPath = useResolvedPath(to)
    const match = useMatch({ path: resolvedPath.pathname, end: false })

    const handleClick = () => {
        navigate(to)

        onClick?.()
    }

    return (
        <ListItemButton selected={!!match} onClick={handleClick}>
            <ListItemIcon>
                <Icon name={icon} />
            </ListItemIcon>
            <ListItemText primary={label} />
        </ListItemButton>
    )
}