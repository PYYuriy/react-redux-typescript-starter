import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { metaTextColor } from '../../../utils/variables'
import { MODIFIER_MARGIN_CONFIG } from '../../../utils/spaceModifiers'

export default styled.label`
    text-transform: uppercase;
    color: ${metaTextColor};
    font-weight: 500;
    margin-bottom: 6px;
    font-size: 12px;
    display: block;
    ${applyStyleModifiers(MODIFIER_MARGIN_CONFIG)}
`
