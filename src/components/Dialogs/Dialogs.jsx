
import { Redirect } from 'react-router-dom'
import styles from './Dialogs.module.css'
import DialogItem from './DialogsItem/DialogsItem'
import Message from './Massege/Message'
import React from 'react'
import { Field, reduxForm } from 'redux-form'

<div>
    <DialogItem />
    <Message />
</div>

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} src={d.src} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} id={m.id} />)


    if (!props.isAuth) return <Redirect to={'/login'} />

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageText);
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                <div>{messagesElements}</div>
                <DialogReduxForm onSubmit={addNewMessage} />
            </div>
        </div>)
}

const DialogForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field className={styles.textarea} component='textarea' name='newMessageText' placeholder='Your message...' />
            </div>
            <div>
                <button className={styles.button}>Add message</button>
            </div>
        </form>
    )
}




const DialogReduxForm = reduxForm({form: 'dialog'})(DialogForm)

export default Dialogs