import { Icon as CustomIcon } from '@mui/material'

interface IIcon {
    name: string
}

export const Icon = ({ name }: IIcon) => {
    return (
        <CustomIcon>{name}</CustomIcon>
    )
}