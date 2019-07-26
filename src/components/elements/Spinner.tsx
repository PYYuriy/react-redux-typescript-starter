import styled from 'styled-components'
import { createElement, memo } from 'react'
import { primaryColor } from '../../utils/variables'

const Circle = styled.circle`
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
  stroke-linecap: round;
  stroke: ${primaryColor};
`

interface SpinnerPropsModel {
    className?: string
}
const Spinner = memo(
    (props: SpinnerPropsModel) =>
        <svg className={props.className} viewBox="25 25 50 50">
            <Circle cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10"/>
        </svg>
)

export default styled(Spinner)<{size?: number}>`
  width: ${props => props.size || 50}px;
  animation: rotate 2s linear infinite;
  transform-origin: center center;
  position: absolute;
  margin: auto;
  z-index: 11;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
`
