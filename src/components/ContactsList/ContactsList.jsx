import { Contact } from './Contact'
import css from './ContactsList.module.css'

export const ContactsList = ({ contacts, onDeletContact}) => {
    return (
            <ul className={css.contacts__list}>
                {contacts.map(contact => {
                    return (<Contact 
                        name={contact.name}
                        number={contact.number}
                        key={contact.id}
                        id={contact.id}
                        onDeletContact={onDeletContact} />)
                })}
            </ul>
    )
}