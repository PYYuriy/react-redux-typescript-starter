import { applyStyleModifiers } from 'styled-components-modifiers'
import styled from 'styled-components'
import { createElement, memo } from 'react'
import { MODIFIER_MARGIN_CONFIG, MODIFIER_PADDING_CONFIG } from '../../../utils/spaceModifiers'
import { cardPadding } from '../../../utils/variables'
import TransparentOverlay from '../../elements/TransparentOverlay'
import Spinner from '../../elements/Spinner'

const TextInfo = styled.div`
    position: absolute;
    text-align: center;
    font-weight: bold;
    font-size: 17px;
    margin: auto;
    z-index: 11;
    width: 100%;
    top: 53%;
`

interface LoadingContentPropsModel {
    children: JSX.Element | JSX.Element[]
    preloadTextInfo?: string
    isLoading?: boolean
    className?: string
    disabled?: boolean
    padding?: string
}

const MODIFIER_SCROLLABLE_CONTENT_CONFIG = {
    scrollContent: ({heightCorrection, isLoading}) => `
        ${isLoading ? '' : 'overflow-y: auto'};
        height: calc(100% - ${heightCorrection || 0}px);
    `,
}

const LoadingContent = memo(({
    preloadTextInfo,
    isLoading,
    className,
    children,
    disabled,
}: LoadingContentPropsModel) =>
    <div className={className}>
        {(disabled || isLoading ) && <TransparentOverlay/>}
        {!disabled && isLoading && <Spinner />}
        {isLoading && preloadTextInfo && <TextInfo>{preloadTextInfo}</TextInfo>}
        {children}
    </div>
)

export default styled(LoadingContent)<LoadingContentPropsModel>`
    padding: ${props => props.padding || cardPadding};
    position: relative;
    ${props => props.isLoading && `
        overflow: hidden;
    `}
    ${applyStyleModifiers(MODIFIER_MARGIN_CONFIG)}
    ${applyStyleModifiers(MODIFIER_PADDING_CONFIG)}
    ${applyStyleModifiers(MODIFIER_SCROLLABLE_CONTENT_CONFIG)}
`
