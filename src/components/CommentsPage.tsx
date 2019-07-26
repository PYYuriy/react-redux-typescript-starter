import { createElement, Fragment, PureComponent } from 'react'
import { connect } from '../utils/connect'
import { getComments } from '../state/actions/comments'
import { commentsSelector } from '../state/selectors/comments'
import { Comment } from '../state/reducers-types/entities/Comment'
import { LocationDescriptorObject } from 'history'
import { getUsers } from '../state/actions/users'
import { Col, Row } from 'reactstrap'
import Card from './blocks/Card'
import styled from 'styled-components'
import Pagination from './blocks/Pagination'
import { PaginationModel } from '../state/reducers-types/PaginationModel'

interface CommentCardModel {
    color: string
}

const CardContent = styled(Card.Content)<CommentCardModel>`
  background-color: ${({color}) => color};
`

namespace CommentsPage {
    export interface Props {
        comments: Comment[]
        pagination: PaginationModel
    }
    export interface Dispatch {
        getComments: typeof getComments
        getUsers: typeof getUsers
    }

    export type Model = Props & Dispatch & LocationDescriptorObject
}

@connect<CommentsPage.Props, CommentsPage.Dispatch, LocationDescriptorObject>(
    state => ({
        comments: commentsSelector(state),
        pagination: state.subjects.comments.pagination,
    }),
    {
        getComments,
        getUsers,
    }
)
export default class CommentsPage extends PureComponent<CommentsPage.Model> {
    constructor(props) {
        super(props)

        this.onPaginationChange = this.onPaginationChange.bind(this)
    }

    componentDidMount() {
        this.onPaginationChange()
    }

    onPaginationChange(page?) {
        this.props.getComments(page)
    }

    render() {
        const {
            comments,
            pagination,
        } = this.props

        return <Card.Content>
            <Row>
                {comments.map(comment =>
                    <Col md={2} key={'comment_' + comment.id}>
                        <Card>
                            <Card.Header>{comment.name}</Card.Header>
                            <CardContent color={comment.color}>
                                <Card.Label>{comment.year}</Card.Label>
                                <Card.Text>{comment.pantoneValue}</Card.Text>
                            </CardContent>
                        </Card>
                    </Col>
                )}
            </Row>
            <Pagination
                pagination={pagination}
                onPaginationChange={this.onPaginationChange}
            />
        </Card.Content>
    }
}
