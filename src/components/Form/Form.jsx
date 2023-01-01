import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './Form.module.css'


export class Form extends Component {
    state = {
        name: '',
        number: '' 
    }

    inputChange = (e) => {
        this.setState({[e.currentTarget.name]: e.currentTarget.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.props.onSubmit({
        id: nanoid(),
        name: this.state.name,
        number: this.state.number
        })

        this.reset()
    } 

    reset = () => {
        this.setState({name: '', number: ''})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className={css.form}>
                <label htmlFor='name' className={css.label}>
                    Name
                    <input
                        id='name'
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={this.state.name}
                        onChange={this.inputChange} />
                </label>
                <label htmlFor='tel' className={css.label}>
                    Phone
                    <input                 
                        id='tel'
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={this.state.number}
                        onChange={this.inputChange}/>
                </label>
                <button className={css.form__btn} type='submit'>Add contact</button>
            </form>
    )
    }
    
}