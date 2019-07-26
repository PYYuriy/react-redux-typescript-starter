import { createElement, PureComponent } from 'react'
import Content from './_Content'
import Header from './_Header'
import Label from './_Label'
import Text from './_Text'
import Meta from './_Meta'
import CardContainer from './_Card'

class Card extends PureComponent {
    static Content = Content
    static Header = Header
    static Label = Label
    static Text = Text
    static Meta = Meta
    render() { return <CardContainer {...this.props}/> }
}

export default Card
