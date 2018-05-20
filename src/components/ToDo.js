import React from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'

import { add, del, newTaskTextChanged } from '../state/todo'
import { RaisedButton } from 'material-ui';

const ToDo = (props) => (
    <div>
        <TextField
            name={'new-task'}
            value={props.newTaskText}
            onChange={props.onNewTaskTextChanged}
        />
        <RaisedButton
            label={'Add task!'}
            onClick={props.onAddTaskClick}
        />
        <ul>
            {
                props.tasks.map((task, i) => (
                    <li
                        onClick={() => props.deleteTaskHandler(i)}
                    >
                        {task.text}
                    </li>
                ))
            }
        </ul>
    </div>
)

const mapStateToProps = state => ({
    tasks: state.todos.tasks,
    newTaskText: state.todos.newTaskText
})

const mapDispatchToProps = dispatch => ({
    deleteTaskHandler: (index) => dispatch(del(index)),
    onNewTaskTextChanged: (event, value) => dispatch(newTaskTextChanged(value)),
    onAddTaskClick: () => dispatch(add())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDo)