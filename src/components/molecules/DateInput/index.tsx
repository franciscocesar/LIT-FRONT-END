import { useFormContext } from "react-hook-form"
import { TextInput } from "../../atoms/Inputs"

interface IDateInput {
    defaultValue?: string | any
}
export const DateInput = ({ defaultValue }: IDateInput) => {
    const { control, formState: { errors } } = useFormContext()
    return (
        <TextInput control={control} icon={''} errors={errors.date} name={'date'} size={'small'} label={''} type={'date'} defaultValue={defaultValue} />
    )
}