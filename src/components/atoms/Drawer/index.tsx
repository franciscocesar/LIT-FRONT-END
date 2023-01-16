import { Drawer as DrawerContainer } from '@mui/material'
import { ReactNode } from 'react'

interface IDrawer {
    variant: 'temporary' | 'permanent'
    isOpen: boolean
    onClose: () => void
    children: ReactNode
}


export const Drawer = ({ variant, isOpen, onClose, children }: IDrawer) => {
    return (
        <DrawerContainer variant={variant} open={isOpen} onClose={onClose}>
            {children}
        </DrawerContainer>
    )
}