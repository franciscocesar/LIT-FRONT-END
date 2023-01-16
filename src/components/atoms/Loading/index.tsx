import { CircularProgress } from "@mui/material"

interface ILoading {
    color: 'primary' | 'secondary' | 'success'
}

export const Loading = ({ color }: ILoading) => {
    return <CircularProgress color={color} />
}