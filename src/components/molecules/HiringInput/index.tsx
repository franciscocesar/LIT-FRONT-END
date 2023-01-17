import { useFormContext } from "react-hook-form"
import { TextInput } from "../../atoms/Inputs"

interface IHiringInput {
    defaultValue?: string | any
}

export const HiringInput = ({ defaultValue }: IHiringInput) => {
    const { control, formState: { errors } } = useFormContext()
    return (
        <TextInput control={control} icon={'auto_stories'} errors={errors.hiring} name={'hiring'} size={'small'} label={'Matrícula'} defaultValue={defaultValue} />
    )
}