import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import { Box, TableBody, TableHead, TableRow } from "@mui/material"
import { ReactNode, useState } from "react"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { IEmployeeEntity } from "../../../entities/EmployeeEntity"
import { Icon } from "../../atoms/Icon"
import { Modal } from "../../atoms/Modal"
import { StyledTableCell } from "../../atoms/StyledTableCell"
import { StyledTableRow } from "../../atoms/StyledTableRow"
import { ConfirmedPasswordInput } from "../../molecules/ConfirmedPasswordInput"
import { PasswordInput } from "../../molecules/PasswordInput"
import { Table } from "../../molecules/Table"


interface IListEmployeers {
    body?: IEmployeeEntity[]
}

export const ListEmployeers = ({ body }: IListEmployeers) => {

    const [isOpenModal, setOpenModal] = useState<boolean>(false)

    const formSubmitHandler: SubmitHandler<any> = async (data: any) => {
        console.log(data)
    }

    const schema = yup.object().shape({
        password: yup.string()
            .required("O Campo de senha é obrigatório")
            .matches(
                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
                "A senha cadastrada pelo usuário deve ser composta de pelo menos 8 caracteres, ter uma letra maiúsculas e uma letra minúsculas além de conter pelo menos 1 caractere especial"
            ),
        confirmedPassword: yup
            .string()
            .required("Confirme sua senha")
            .oneOf([yup.ref('password'), null], "Senhas não confere"),
    })

    const methods = useForm({
        resolver: yupResolver(schema),
        delayError: 2000
    })

    const rows = ['Nome', 'CPF', 'E-mail', 'Status', 'Cargo', 'Ações']

    return (
        <Table>
            <Modal open={isOpenModal} handleClose={() => setOpenModal(false)} >
                <FormProvider {...methods} >
                    <form onSubmit={methods.handleSubmit(formSubmitHandler)}>
                        <PasswordInput />
                        <ConfirmedPasswordInput />
                    </form>
                </FormProvider>
            </Modal>
            <TableHead>
                <TableRow>
                    {rows.map(row => (
                        <StyledTableCell>{row}</StyledTableCell>
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
                                    <Box>
                                        <Icon name="edit" />
                                    </Box>
                                    <Box>
                                        <Icon name="settings_remote" />
                                    </Box>
                                    <Box sx={{ cursor: 'pointer' }} onClick={() => setOpenModal(true)}>
                                        <Icon name="rate_review" />
                                    </Box>

                                </Box>
                                : <Box display={'flex'} justifyContent={'center'}>
                                    <Icon name="backup" />
                                </Box>}
                        </StyledTableCell>
                    </StyledTableRow>
                ))}


            </TableBody>
        </Table>
    )
}