
import { Box, Modal as ModalContainer, Typography } from '@mui/material'
import { ReactNode } from 'react'

interface IModal {
    open: boolean
    handleClose: () => void
    children: ReactNode
}


export const Modal = ({ open, handleClose, children }: IModal) => {
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };
    return (
        <ModalContainer
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                {children}
            </Box>
        </ModalContainer>
    )
}