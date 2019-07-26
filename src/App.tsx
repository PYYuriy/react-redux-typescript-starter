import { createElement } from 'react'
import { Provider } from 'react-redux'
import { Route, Switch} from 'react-router-dom'
import ReactDOM from 'react-dom'
import UsersPage from './components/users/UsersPage'
import { ConnectedRouter } from 'connected-react-router'
import store from './state/store'

import { createBrowserHistory } from 'history'
import GlobalStyle from './components/elements/GlobalStyles'
import MenuToolBar from './components/blocks/MenuToolBar'
import CommentsPage from './components/CommentsPage'
import ReduxToastr from 'react-redux-toastr'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
const history = createBrowserHistory()

ReactDOM.render(
    <Provider store={store}>
        <GlobalStyle/>
        <ReduxToastr/>
        <ConnectedRouter history={history}>
            <Route path="/" component={MenuToolBar}/>
            <Switch>
                <Route exact path="/" component={UsersPage} />
                <Route exact path="/comments" component={CommentsPage}/>
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
)
