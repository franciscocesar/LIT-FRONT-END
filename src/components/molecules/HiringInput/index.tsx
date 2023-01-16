import { useFormContext } from "react-hook-form"
import { TextInput } from "../../atoms/Inputs"



export const HiringInput = () => {
    const { control, formState: { errors } } = useFormContext()
    return (
        <TextInput control={control} icon={'auto_stories'} errors={errors.hiring} name={'hiring'} size={'small'} label={'Matrícula'} />
    )
}