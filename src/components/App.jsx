
import React, { Component } from 'react';
import { Form } from './Form/Form';

import { ContactsList } from './ContactsList/ContactsList'
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }

  formSubmitHandler = (date) => {
    
    this.setState(prevState => {
      const names = []

      prevState.contacts.map(contact => {
       return names.push(contact.name)
      })

      if (names.includes(date.name)) {
        return alert('zalupa')
      }
      
      return { contacts: [date, ...prevState.contacts]}
    })
    
      
  }

  

  filterChange = (e) => {
    this.setState({ filter: e.currentTarget.value })
  }

  render() {
    const normalizeFilter = this.state.filter.toLowerCase()
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter))

    return (
        <div>
          <h1>Phonebook</h1>

          <Form onSubmit={this.formSubmitHandler} />

          <h2>Contacts:</h2>
          <Filter
            value={this.state.filter}
            onChange={this.filterChange} />
        
          <ContactsList contacts={filteredContacts} />

        </div>
    );
  }
  
};
