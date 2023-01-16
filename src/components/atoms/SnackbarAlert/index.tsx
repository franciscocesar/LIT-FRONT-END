import { Alert, Snackbar } from "@mui/material"


interface ISnackbarAlert {
    result?: 'error' | 'success' | 'info' | 'warning' | undefined,
    description?: string
    open?: boolean
    handleClose?: () => void | undefined
}

export const SnackbarAlert = ({ result, description, open, handleClose }: ISnackbarAlert) => {
    return (
        <Snackbar open={open} onClose={handleClose}>
            <Alert onClose={handleClose} severity={result} sx={{ width: '100%' }}>
                {description}
            </Alert>
        </Snackbar>
    )
}