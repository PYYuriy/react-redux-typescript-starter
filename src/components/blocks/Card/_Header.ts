import styled from 'styled-components'
import { borderColor, cardPadding } from '../../../utils/variables'
import Flex from '../../elements/Flex'

interface FlexModel {
    padding?: string
}

export default styled(Flex)`
    padding: ${(props: FlexModel) => props.padding || cardPadding};
    border-bottom: 1px solid ${borderColor};
    overflow: auto;
    font-size: 16px;
`
