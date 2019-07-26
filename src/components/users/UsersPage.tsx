import { createElement, PureComponent } from 'react'
import { connect } from '../../utils/connect'
import { getUsers, updateUser } from '../../state/actions/users'
import { usersSelector } from '../../state/selectors/users'
import { User } from '../../state/reducers-types/entities/User'
import { Button } from '../elements/Button'
import { CardImg, Col, Row } from 'reactstrap'
import Card from '../blocks/Card'
import { PaginationModel } from '../../state/reducers-types/PaginationModel'
import Pagination from '../blocks/Pagination'
import { LocationDescriptorObject } from 'history'
import EditUserCard from './EditUserCard'

const SelectUserBtn = ({user, onSelect}) => {
    const selectUser = () => onSelect(user)
    return <Button modifiers="primary" onClick={selectUser}>Edit</Button>
}

namespace UsersPage {
    export interface Props {
        pagination: PaginationModel
        users: User[]
    }
    export interface Dispatch {
        updateUser: typeof updateUser
        getUsers: typeof getUsers
    }
    export interface State {
        selectedUser
    }
    export type Model = Props & Dispatch & LocationDescriptorObject
}

@connect<UsersPage.Props, UsersPage.Dispatch, LocationDescriptorObject>(
    state => ({
        pagination: state.subjects.users.pagination,
        users: usersSelector(state),
    }),
    {
        updateUser,
        getUsers,
    }
)
export default class UsersPage extends PureComponent<UsersPage.Model, UsersPage.State> {
    constructor(props) {
        super(props)
        this.state = {
            selectedUser: {},
        }
        this.onPaginationChange = this.onPaginationChange.bind(this)
        this.updateUser = this.updateUser.bind(this)
        this.selectUser = this.selectUser.bind(this)

    }

    componentDidMount() {
        this.props.getUsers()
    }

    onPaginationChange(page) {
        this.props.getUsers(page)
    }

    updateUser(data) {
        this.props.updateUser(this.state.selectedUser.id, data)
    }

    selectUser(user) {
        this.setState({ selectedUser:  user })
    }

    render() {
        const {
            users,
            pagination,
        } = this.props
        return <Card.Content>
            <Row>
                <Col md={7}>
                    <Row>
                        {users.map(user =>
                            <Col md={4} key={'user_' + user.id}>
                                <Card>
                                    <CardImg variant="top" src={user.avatar} />
                                    <Card.Content>
                                        <Card.Label>{user.firstName} {user.lastName}</Card.Label>
                                        <Card.Text>{user.email}</Card.Text>
                                        <SelectUserBtn user={user} onSelect={this.selectUser}/>
                                    </Card.Content>
                                </Card>
                            </Col>
                        )}
                    </Row>
                    <Pagination
                        pagination={pagination}
                        onPaginationChange={this.onPaginationChange}
                    />
                </Col>
                <Col md={5}>
                    <EditUserCard
                        onSubmit={this.updateUser}
                        user={this.state.selectedUser}
                    />
                </Col>
            </Row>
        </Card.Content>
    }
}
