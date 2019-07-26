import { createElement, memo } from 'react'
import styled from 'styled-components'
import { dangerColor } from '../../../utils/variables'
import { WrappedFieldMetaProps } from 'redux-form'

const HasError = styled.div`
  color: ${dangerColor};
`

interface ErrorModel {
    meta: Partial<WrappedFieldMetaProps>
}
const Error = memo(({ meta: { touched, error, warning } }: ErrorModel) =>
    (touched && (error || warning)) ? <HasError>{error || warning}</HasError> : null
)
export default Error
