import { applyStyleModifiers } from 'styled-components-modifiers'
import styled from 'styled-components'
import { MODIFIER_MARGIN_CONFIG } from '../../../utils/spaceModifiers'

interface TextModel {
    modifiers?: Array<keyof typeof MODIFIER_MARGIN_CONFIG>
}

const Text = styled.p<TextModel>`
    font-size: 15px;
    ${applyStyleModifiers(MODIFIER_MARGIN_CONFIG)}
`
export default Text
