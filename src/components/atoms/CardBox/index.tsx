import { Box, Paper } from "@mui/material"
import { ReactNode } from "react"

interface ICardBox {
    children: ReactNode
}

export const CardBox = ({ children }: ICardBox) => {
    return (
        <Box component={Paper} elevation={3} p={4} display='flex' flexDirection='column' m='auto' maxWidth={650}>{children}</Box>
    )
}