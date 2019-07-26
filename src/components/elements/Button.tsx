import styled from 'styled-components'
import { applyStyleModifiers, applyResponsiveStyleModifiers } from 'styled-components-modifiers'

import {
    actionColor,
    dangerColor,
    darkGrey,
    primaryColor,
    secondaryLightColor,
    warningColor,
    secondaryDarkColor,
    primaryLightColor,
    primaryDarkColor,
    actionLightColor,
    actionDarkColor,
    warningLightColor,
    dangerLightColor,
    dangerDarkColor,
    warningDarkColor,
} from '../../utils/variables'
import { MODIFIER_MARGIN_CONFIG, MODIFIER_PADDING_CONFIG } from '../../utils/spaceModifiers'

export const MODIFIER_BUTTON_CONFIG = {
    secondary: () => `
        background-color: ${darkGrey};
        &:hover {
            background-color: ${secondaryLightColor};
        }
        &:active, &:focus {
            background-color: ${secondaryDarkColor};
            box-shadow: none;
        }
        &:disabled {
            background-color: ${secondaryLightColor};
        }
    `,
    primary: () => `
        background-color: ${primaryColor};
        &:hover {
            background-color: ${primaryLightColor};
        }
        &:active, &:focus {
            background-color: ${primaryDarkColor};
            box-shadow: none;
        }
        &:disabled {
            background-color: ${primaryLightColor};
        }
        .icon {
            color: ${primaryColor};
            background-color: #fff;
        }
    `,
    action: () => `
        background-color: ${actionColor};

        &:hover {
            background-color: ${actionLightColor};
        }
        &:active, &:focus {
            background-color: ${actionDarkColor};
            box-shadow: none;
        }
        &:disabled {
            background-color: ${actionLightColor};
        }
        .icon {
            color: ${actionColor};
            background-color: #fff;
        }
    `,
    danger: () => `
        background-color: ${dangerColor};

        &:hover {
            background-color: ${dangerLightColor};
        }
        &:active, &:focus {
            background-color: ${dangerDarkColor};
            box-shadow: none;
        }
        &:disabled {
            background-color: ${dangerLightColor};
        }
        .icon {
            color: ${dangerColor};
            background-color: #fff;
        }
    `,
    warning: () => `
        background-color: ${warningColor};

        &:hover {
            background-color: ${warningLightColor};
        }
        &:active, &:focus {
            background-color: ${warningDarkColor};
            box-shadow: none;
        }
        &:disabled {
            background-color: ${warningLightColor};
        }
        .icon {
            color: ${warningColor};
            background-color: #fff;
        }
    `,
    btnIcon: ({btnIconSize}) => `
        line-height: ${btnIconSize || 35}px;
        height: ${btnIconSize || 35}px;
        width: ${btnIconSize || 35}px;
        display: inline-block;
        padding: 0;
    `,
}

export type ModifierButtonConfigModel = keyof typeof MODIFIER_BUTTON_CONFIG
    | keyof typeof MODIFIER_MARGIN_CONFIG
    | keyof typeof MODIFIER_PADDING_CONFIG

interface ButtonPropsModel {
    modifiers?: ModifierButtonConfigModel | ModifierButtonConfigModel[]
    btnIconSize?: number
}
export const Button = styled.button.attrs(props => ({ type: props.type || 'button' }))<ButtonPropsModel>`
    transition: background 200ms ease;
    cursor: pointer;
    border-radius: 3px;
    padding: 7px 14px;
    border: none;
    color: #fff;
    text-align: center;
    font-size: 15px;
    &:hover, &:active, &:focus {
        color: #fff;
    }
    &:disabled {
      cursor: not-allowed;
    }
    ${applyStyleModifiers(MODIFIER_BUTTON_CONFIG)}
    ${applyStyleModifiers(MODIFIER_MARGIN_CONFIG)}
    ${applyStyleModifiers(MODIFIER_PADDING_CONFIG)}
    ${applyResponsiveStyleModifiers(MODIFIER_BUTTON_CONFIG)}
`
