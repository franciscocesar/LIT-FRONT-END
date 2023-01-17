import { useFormContext } from "react-hook-form"
import { TextInput } from "../../atoms/Inputs"

interface INameInput {
    defaultValue?: string
}
export const NameInput = ({ defaultValue }: INameInput) => {
    const { control, formState: { errors } } = useFormContext()
    return (
        <TextInput control={control} icon={'person_outline'} errors={errors.name} name={'name'} size={'small'} label={'Nome'} defaultValue={defaultValue} />
    )
}