import { FC, ReactNode } from 'react'

import { Controller } from 'react-hook-form'

import {
    TextField,
    InputAdornment,
} from '@mui/material'
import { Icon } from '../Icon'

interface ITextInput {
    name: string
    control: any
    icon: string
    label: string
    size: 'small' | 'medium'
    errors: any
    children?: ReactNode
    defaultValue?: string
    selected?: boolean
    type?: string
}

export const TextInput: FC<ITextInput> = ({ name, control, icon, label, size, errors, children, defaultValue = '', selected = false, type }) => {


    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={({ field }) => (
                <TextField
                    {...field}
                    select={selected}
                    size={size}
                    label={label}
                    margin='normal'
                    type={type}
                    InputProps={{
                        endAdornment: icon && <InputAdornment position='start'><Icon name={icon} /></InputAdornment>,
                    }}
                    helperText={errors ? errors.message : ''}
                    error={!!errors}
                >
                    {children}
                </TextField>
            )}
        />
    )
}