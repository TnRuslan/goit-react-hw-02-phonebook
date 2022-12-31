import {Contact} from './Contact'

export const ContactsList = ({ contacts }) => {
    return (
            <ul>
                {contacts.map(contact => {
                    return (<Contact 
                                name={contact.name} 
                                number={contact.number} 
                                key={contact.id} />)
                })}
            </ul>
    )
}