import { Box, InputAdornment, TextField, Typography, useMediaQuery, useTheme } from "@mui/material"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { CardBox } from "../../atoms/CardBox"
import * as yup from 'yup'
import { EmailInput } from "../../molecules/EmailInput"
import { yupResolver } from '@hookform/resolvers/yup'
import { CPFInput } from "../../molecules/CPFInput"
import { NameInput } from "../../molecules/NameInput"
import { HiringInput } from "../../molecules/HiringInput"
import { useState } from "react"
import { Button } from "../../atoms/Button"
import { RoleInput } from "../../molecules/RolesListInput"
import { useQuery } from "react-query"
import { requestAllRoles, responseRole } from "../../../shared/clients/RoleClient"
import { PasswordInput } from "../../molecules/PasswordInput"
import { ConfirmedPasswordInput } from "../../molecules/ConfirmedPasswordInput"
import { DateInput } from "../../molecules/DateInput"
import { Modal } from "../../atoms/Modal"
import { RoleName } from "../../molecules/RoleName"
import { SnackbarAlert } from "../../atoms/SnackbarAlert"
import { useNavigate } from "react-router-dom"
import { IsActiveCheckBox } from "../../molecules/IsActiveCheckbox"
import { responseEmployee } from "../../../shared/clients/EmployeeClient"

export interface IResultRequest {
    message: string,
    type: 'error' | 'success' | 'info' | 'warning' | undefined
}

export const FormRegisterEmployee = () => {
    const { breakpoints } = useTheme()

    const [isOpenModal, setOpenModal] = useState<boolean>(false)

    const navigate = useNavigate()


    const [result, setResult] = useState<IResultRequest>()

    const openModal = () => {
        setOpenModal(true)
    }

    const smDown = useMediaQuery(breakpoints.down('sm'))

    const schema = yup.object().shape({
        email: yup.string().email('O campo deve conter um e-mail válido').required('O campo é obrigatório'),
        name: yup.string().min(3, 'Adicione um Nome válido').required('O campo é obrigatório'),
        cpf: yup.string().required('O Campo de CPF é obrigatório').matches(/^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/, 'Obrigatório forncer um CPF Válido'),
        hiring: yup.string().required('O Campo de matrícula é obrigatório'),
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
        roles: yup.string().required()

    })

    const methods = useForm({
        resolver: yupResolver(schema),
        delayError: 2000
    })

    const formSubmitHandler: SubmitHandler<any> = async (data: any) => {
        try {
            await responseEmployee({ active: data.active, document: data.cpf.replace(/\D/g, ''), email: data.email, hiringDate: data.date, registrationNumber: data.hiring, name: data.name, role: data.roles, password: data.password })
            setResult({ message: 'Cadastro Realizado com sucesso', type: 'success' })
            navigate(0)
        } catch (error: any) {
            setResult({ message: error.response.data.errors[0] ?? error.response.data.errors.message, type: 'error' })
        }
    }


    const createNewRole = async (name: string) => {
        try {
            await responseRole(name)
            setResult({ message: 'Cargo criado com sucesso', type: 'success' })

            navigate(0)

        } catch (error: any) {
            setResult({ message: error.response.data.errors.message, type: 'error' })
        }

    }

    return (
        <CardBox>
            <SnackbarAlert description={result?.message} open={!!result?.message} handleClose={() => setResult(undefined)} result={result?.type} />
            <Modal open={isOpenModal} handleClose={() => setOpenModal(false)}>
                <RoleName createNewRole={createNewRole} />
            </Modal>
            <Typography variant='h4' fontSize={smDown ? 24 : 32}>Criar funcionário</Typography>
            <FormProvider {...methods} >
                <form onSubmit={methods.handleSubmit(formSubmitHandler)} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                    <Box display='flex' flexDirection="column">
                        <NameInput />
                        <EmailInput />
                        <CPFInput />
                        <HiringInput />
                        <RoleInput onClick={openModal} />
                        <DateInput />
                        <IsActiveCheckBox />
                        <PasswordInput />
                        <ConfirmedPasswordInput />
                    </Box>
                    <Button variant="contained" type="submit" description="Cadastrar Funcionário" isLoading={false} />
                </form>
            </FormProvider>
        </CardBox>
    )
}


