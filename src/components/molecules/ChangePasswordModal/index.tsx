import { yupResolver } from "@hookform/resolvers/yup"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { ConfirmedPasswordInput } from "../ConfirmedPasswordInput"
import { PasswordInput } from "../PasswordInput"
import * as yup from 'yup'
import { Modal } from "../../atoms/Modal"
import { Button } from "../../atoms/Button"
import { Box } from "@mui/material"
import { updateEmployeePassword } from "../../../shared/clients/EmployeeClient"
import { IChangePasswordEntity } from "../../../entities/ChangePasswordEntity"
import { SnackbarAlert } from "../../atoms/SnackbarAlert"
import { IResultRequest } from "../../organisms/FormRegisterEmployee"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


interface IChangePasswordModal {
    isOpen: boolean
    handleClose: () => void
    document: string
}

export const ChangePasswordModal = ({ isOpen, handleClose, document }: IChangePasswordModal) => {

    const [result, setResult] = useState<IResultRequest>()
    const navigate = useNavigate()

    const formSubmitHandler: SubmitHandler<any> = async (data: IChangePasswordEntity) => {
        try {
            await updateEmployeePassword(document, { password: data.password })
            setResult({ message: 'Senha alterada com sucesso', type: 'success' })

            navigate(0)

        } catch (error: any) {
            setResult({ message: error.response.data.errors[0] ?? error.response.data.errors.message, type: 'error' })
        }
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

    return (
        <Modal handleClose={handleClose} open={isOpen}>
            <Box sx={{ position: 'absolute' }}>
                <SnackbarAlert description={result?.message} open={!!result?.message} handleClose={() => setResult(undefined)} result={result?.type} />
            </Box>

            <FormProvider {...methods} >
                <form onSubmit={methods.handleSubmit(formSubmitHandler)}>
                    <Box display={'flex'} flexDirection={'column'}>
                        <PasswordInput />
                        <ConfirmedPasswordInput />
                        <Button type={"submit"} description={"Alterar Senha"} variant={"contained"} isLoading={false} />
                    </Box>
                </form>
            </FormProvider>





        </Modal>

    )
}