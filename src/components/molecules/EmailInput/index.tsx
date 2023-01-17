import { useFormContext } from "react-hook-form"
import { TextInput } from "../../atoms/Inputs"

interface IEmailInput {
    defaultValue?: string
}
export const EmailInput = ({ defaultValue }: IEmailInput) => {
    const { control, formState: { errors } } = useFormContext()
    return (
        <TextInput control={control} icon={'mail_outline_outlined'} errors={errors.email} name={'email'} size={'small'} label={'E-mail'} defaultValue={defaultValue} />
    )
}