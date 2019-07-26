import { createElement, memo } from 'react'
import { WrappedFieldInputProps, WrappedFieldMetaProps } from 'redux-form'
import Error from './Error'
import Input from '../Input'
import Label from '../Label'
import InputGroup from '../InputGroup'

interface FieldGroupModel {
    input: WrappedFieldInputProps
    meta: WrappedFieldMetaProps
    label?: string
    showErrorInfo?: boolean
}

const InputField = ({
    input,
    label,
    showErrorInfo,
    meta,
    ...props
}: FieldGroupModel) =>
    <InputGroup>
        <Label>{label}</Label>
        <Input {...input} {...props}/>
        {showErrorInfo && <Error meta={meta}/>}
    </InputGroup>

export default memo(InputField)
