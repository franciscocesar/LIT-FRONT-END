
import { Box, TableBody, TableHead, TableRow } from "@mui/material"
import { ReactNode, useState } from "react"
import { useNavigate } from "react-router-dom"
import { IEmployeeEntity } from "../../../entities/EmployeeEntity"
import { enableOrDisableStatusEmployee } from "../../../shared/clients/EmployeeClient"
import { Icon } from "../../atoms/Icon"
import { Modal } from "../../atoms/Modal"
import { StyledTableCell } from "../../atoms/StyledTableCell"
import { StyledTableRow } from "../../atoms/StyledTableRow"
import { ChangePasswordModal } from "../../molecules/ChangePasswordModal"
import { Table } from "../../molecules/Table"
import { FormEditEmployee } from "../FormEditEmployeer"


interface IListEmployeers {
    body?: IEmployeeEntity[]
}

export const ListEmployeers = ({ body }: IListEmployeers) => {

    const [isOpenChangePasswordModal, setChangePasswordModal] = useState<boolean>(false)
    const [isOpenEditEmployeerModal, setOpenEditEmployeerModal] = useState<boolean>(false)
    const [item, setItem] = useState<IEmployeeEntity>()

    const [document, setDocument] = useState<string>('')
    const navigate = useNavigate()

    const handleIsCloseChangePasswordModal = () => {
        setChangePasswordModal(false)
        navigate(0)
    }

    const handleIsCloseEditEmployeerModal = () => {
        setOpenEditEmployeerModal(false)
        navigate(0)
    }

    const enableOrDisableStatus = async (document: string) => {
        await enableOrDisableStatusEmployee(document)
        navigate(0)
    }


    const rows = ['Nome', 'CPF', 'E-mail', 'Status', 'Cargo', 'Ações']

    return (
        <Table>
            <ChangePasswordModal handleClose={handleIsCloseChangePasswordModal} isOpen={isOpenChangePasswordModal} document={document} />
            <FormEditEmployee isOpen={isOpenEditEmployeerModal} onClose={handleIsCloseEditEmployeerModal} items={item} />
            <TableHead>
                <TableRow>
                    {rows.map(row => (
                        <StyledTableCell key={row}>{row}</StyledTableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {body?.map(item => (
                    <StyledTableRow>
                        <StyledTableCell >{item.name}</StyledTableCell>
                        <StyledTableCell >{item.document}</StyledTableCell>
                        <StyledTableCell >{item.email}</StyledTableCell>
                        <StyledTableCell >{item.active ? 'Ativo' : 'Desativado'}</StyledTableCell>
                        <StyledTableCell >{item.role}</StyledTableCell>
                        <StyledTableCell >

                            {item.active ?
                                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                                    <Box sx={{ cursor: 'pointer' }} onClick={() => {
                                        setOpenEditEmployeerModal(true)
                                        setItem(item)
                                    }}>

                                        <Icon name="edit" />
                                    </Box>
                                    <Box sx={{ cursor: 'pointer' }} onClick={() => {
                                        enableOrDisableStatus(item.document)
                                    }}>
                                        <Icon name="settings_remote" />
                                    </Box>
                                    <Box sx={{ cursor: 'pointer' }} onClick={() => {
                                        setChangePasswordModal(true)
                                        setDocument(item.document)
                                    }}>
                                        <Icon name="rate_review" />
                                    </Box>

                                </Box>
                                : <Box sx={{ cursor: 'pointer' }} display={'flex'} justifyContent={'center'} onClick={() => enableOrDisableStatus(item.document)}>
                                    <Icon name="backup" />
                                </Box>}
                        </StyledTableCell>
                    </StyledTableRow>
                ))}


            </TableBody>
        </Table>
    )
}