
import s from './Message.module.css'


const Message = (props) => {
   
    return (
        <div className={s.display}>
            <div>
                <div className={s.sms}>{props.message}</div>
            </div>
        </div>)
}





export default Message