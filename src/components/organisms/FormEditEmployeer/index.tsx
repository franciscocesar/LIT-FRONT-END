import { yupResolver } from "@hookform/resolvers/yup"
import { Box } from "@mui/material"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { Button } from "../../atoms/Button"
import { Modal } from "../../atoms/Modal"
import * as yup from 'yup'
import { EmailInput } from "../../molecules/EmailInput"
import { CPFInput } from "../../molecules/CPFInput"
import { HiringInput } from "../../molecules/HiringInput"
import { DateInput } from "../../molecules/DateInput"
import { IsActiveCheckBox } from "../../molecules/IsActiveCheckbox"
import { NameInput } from "../../molecules/NameInput"
import { RoleInput } from "../../molecules/RolesListInput"
import { IEmployeeEntity } from "../../../entities/EmployeeEntity"
import { updateEmployee } from "../../../shared/clients/EmployeeClient"
import { SnackbarAlert } from "../../atoms/SnackbarAlert"
import { IResultRequest } from "../FormRegisterEmployee"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

interface IFormEditEmployee {
    onClose: () => void,
    isOpen: boolean
    document?: string
    items?: IEmployeeEntity
}


export const FormEditEmployee = ({ isOpen, onClose, document, items }: IFormEditEmployee) => {

    const [result, setResult] = useState<IResultRequest>()
    const navigate = useNavigate()

    const schema = yup.object().shape({
        email: yup.string().email('O campo deve conter um e-mail válido').required('O campo é obrigatório'),
        name: yup.string().min(3, 'Adicione um Nome válido').required('O campo é obrigatório'),
        cpf: yup.string().required('O Campo de CPF é obrigatório').matches(/^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/, 'Obrigatório forncer um CPF Válido'),
        hiring: yup.string().required('O Campo de matrícula é obrigatório'),
        roles: yup.string().required()
    })

    const methods = useForm({
        resolver: yupResolver(schema),
        delayError: 2000
    })




    const formSubmitHandler: SubmitHandler<any> = async (data: any) => {

        try {
            await updateEmployee({
                active: data.active,
                document: data.cpf.replace(/\D/g, ''),
                email: data.email,
                name: data.name,
                hiringDate: data.date,
                registrationNumber: data.hiring,
                role: data.roles

            }, data.document)

            setResult({ message: 'Usuário editado com sucesso', type: 'success' })
            navigate(0)
        } catch (error: any) {
            setResult({ message: error.response.data.errors[0] ?? error.response.data.errors.message, type: 'error' })
        }

    }

    return (
        <>
            <SnackbarAlert description={result?.message} open={!!result?.message} handleClose={() => setResult(undefined)} result={result?.type} />
            <Modal open={isOpen} handleClose={onClose}>
                <FormProvider {...methods} >
                    <form onSubmit={methods.handleSubmit(formSubmitHandler)} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                        <Box display='flex' flexDirection="column">
                            <NameInput defaultValue={items?.name} />
                            <EmailInput defaultValue={items?.email} />
                            <RoleInput addRole={false} />
                            <CPFInput defaultValue={items?.document} />
                            <HiringInput defaultValue={items?.registrationNumber} />
                            <DateInput defaultValue={items?.hiringDate} />
                            <IsActiveCheckBox />
                        </Box>
                        <Button variant="contained" type="submit" description="Editar Funcionário" isLoading={false} />
                    </form>
                </FormProvider>
            </Modal>
        </>

    )
}