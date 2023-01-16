import { Button as MuiButton, CircularProgress } from '@mui/material'

interface IButton {
    description: string
    variant: 'text' | 'contained' | 'outlined'
    disabled?: boolean
    isLoading: boolean
    type?: 'button' | 'submit'
    onClick?: () => void | any
}

export const Button = ({ description, variant, disabled = false, isLoading, type, onClick }: IButton) => {


    return (
        <MuiButton variant={variant} onClick={onClick} type={type} disabled={disabled}> {isLoading ? <CircularProgress color="primary" /> : description}</MuiButton>
    )
}