import { createElement, memo } from 'react'
import Card from '../blocks/Card'
import ReduxForm from '../elements/form/ReduxForm'
import { Field } from 'redux-form'
import InputField from '../elements/form/InputField'
import { Button } from '../elements/Button'
import { Alert } from 'reactstrap'

const EditUserCard = ({onSubmit, user}) =>
    <Card>
        <Card.Header>Update user {user.id ? user.firstName + ' ' + user.lastName : ''}</Card.Header>
        <Card.Content>
            <Alert color="primary">
                Test api doesn't allow to change current user =(
            </Alert>
            <ReduxForm
                form="editUserForm"
                onSubmit={onSubmit}
                initialValues={user}
            >
                <Field
                    name="name"
                    label="User name"
                    component={InputField}
                />
                <Field
                    name="job"
                    label="User job"
                    component={InputField}
                />
                <Button
                    type="submit"
                    disabled={!user.id}
                    modifiers="action"
                >
                    Update
                </Button>
            </ReduxForm>
        </Card.Content>
    </Card>

export default memo(EditUserCard)
