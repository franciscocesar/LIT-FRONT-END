import { Paper, TableContainer, Table as TableContent, TableHead, TableRow, TableBody } from "@mui/material"
import { ReactNode } from "react"


interface ITable {
    children: ReactNode
}

export const Table = ({ children }: ITable) => {
    return (
        <TableContainer component={Paper}>
            <TableContent sx={{ minWidth: 700 }} aria-label="customized table">
                {children}
            </TableContent>
        </TableContainer>
    )
}