import { applyStyleModifiers } from 'styled-components-modifiers'
import styled from 'styled-components'
import { MODIFIER_MARGIN_CONFIG, MODIFIER_PADDING_CONFIG } from '../../utils/spaceModifiers'

const MODIFIER_FLEX_CONFIG = {
    justifyCenter: () => `
        justify-content: center;
    `,
    justifyEnd: () => `
        justify-content: flex-end;
    `,
    justifySpaceBetween: () => `
        justify-content: space-between;
    `,
    justifySpaceAround: () => `
        justify-content: space-around;
    `,
    alignCenter: () => `
        align-items: center;
    `,
    alignSelfCenter: () => `
        align-self: center;
    `,
    alignSelfEnd: () => `
        align-self: end;
    `,
    alignItemsEnd: () => `
        align-items: flex-end;
    `,
    directionColumn: () => `
        flex-direction: column;
    `,
    fullWidth: () => `
        width: 100%
    `,
}

export type FlexModifierModel = keyof typeof MODIFIER_FLEX_CONFIG
    | keyof typeof MODIFIER_MARGIN_CONFIG
    | keyof typeof MODIFIER_PADDING_CONFIG

interface FlexPropsModel {
    modifiers?: FlexModifierModel | FlexModifierModel[]
}

const Flex = styled.div<FlexPropsModel>`
    display: flex;
    ${applyStyleModifiers(MODIFIER_MARGIN_CONFIG)}
    ${applyStyleModifiers(MODIFIER_PADDING_CONFIG)}
    ${applyStyleModifiers(MODIFIER_FLEX_CONFIG)}
`

export default Flex
