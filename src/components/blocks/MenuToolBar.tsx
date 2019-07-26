import {createElement, PureComponent} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap'
import { Link } from 'react-router-dom'

namespace MenuToolBar {
    export interface State {
        isOpen: boolean
    }
}

export default class MenuToolBar extends PureComponent<null, MenuToolBar.State> {
    constructor(props) {
        super(props)

        this.toggle = this.toggle.bind(this)
        this.state = {
            isOpen: false,
        }
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }
    render() {
        return <Navbar expand="md">
            <NavbarBrand href="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink>
                            <Link to="/">Users</Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            <Link to="/comments">Comments</Link>
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    }
}
