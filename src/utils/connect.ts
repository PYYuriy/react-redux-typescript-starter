// USE THIS CONNECT
// instead of
// import {connect} 'react-redux'

import {
    connect as originalConnect,
    MapDispatchToPropsParam,
    MapStateToPropsParam,
} from 'react-redux'
import { ElementType } from 'react'
import { AppStoreState } from '../state/reducers-types'

type InferableComponentEnhancerWithProps<InjectedProps, NeedsProps> = <
    Component extends ElementType<InjectedProps & NeedsProps>
    >(component: Component) => Component

export type Connect = <StateProps = {}, DispatchProps = {}, PathProps = {}>(
        mapStateToProps?: MapStateToPropsParam<StateProps, PathProps, AppStoreState>,
        mapDispatchToProps?: MapDispatchToPropsParam<DispatchProps, PathProps>
) => InferableComponentEnhancerWithProps<StateProps & DispatchProps, PathProps>

export const connect = originalConnect as Connect
