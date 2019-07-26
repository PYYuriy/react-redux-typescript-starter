import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { borderColor } from '../../../utils/variables'
import { MODIFIER_MARGIN_CONFIG } from '../../../utils/spaceModifiers'
import Card from './index'

const MODIFIERS_CARD_CONFIG = {
    info: () => `
      background-color: #d9edf7;
      color: #31708f;
      font-size: 14px;
      border-color: #bce8f1;
      ${Card.Content} {
        line-height: 25px;
      }
    `,
    error: () => `
      background-color: #fde9e9;
      color: #931b0f;
      font-weight: bold;
      font-size: 14px;
      border-color: #ebccd1;
      ${Card.Content} {
        line-height: 25px;
      }
    `,
    warning: () => `
      background-color: #fcf8e3;
      color: #8a6d3b;
      font-weight: bold;
      font-size: 14px;
      border-color: #faebcc;
      ${Card.Content} {
        line-height: 25px;
      }
    `,
}

export default styled.div`
    background-color: #fff;
    position: relative;
    border: 1px solid ${borderColor};
    border-radius: 3px;
    box-shadow: 0px 2px 4px 0px rgba(200,207,211,0.5);
    margin: 0 0 20px 0;
    ${applyStyleModifiers(MODIFIERS_CARD_CONFIG)}
    ${applyStyleModifiers(MODIFIER_MARGIN_CONFIG)}
`
