import { createElement, PureComponent } from 'react'
import { reduxForm } from 'redux-form'

// @ts-ignore
@reduxForm()
export default class ReduxForm extends PureComponent<any> {
    render() {
        const { handleSubmit, children } = this.props

        return (
            <form onSubmit={handleSubmit}>
                {children}
            </form>
        )
    }
}
