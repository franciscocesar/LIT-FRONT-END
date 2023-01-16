import { useFormContext } from "react-hook-form"
import { TextInput } from "../../atoms/Inputs"


export const DateInput = () => {
    const { control, formState: { errors } } = useFormContext()
    return (
        <TextInput control={control} icon={''} errors={errors.date} name={'date'} size={'small'} label={''} type={'date'} />
    )
}