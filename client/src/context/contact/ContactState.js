import React, { useReducer } from 'react';
import uuid from 'uuid';
import ConactContext from './ContactContext';
import ContactReducer from './ContactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACT,
    CLEAR_FILTER
} from '../types';
import contactContext from './ContactContext';

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name:'Sara Louis',
                email:'s@gmail.com',
                phone: '222-222-2222',
                type: 'personal'
            },
            {
                id: 2,
                name:'ken Lou',
                email:'k@gmail.com',
                phone: '299-222-2222',
                type: 'personal'
            },
            {
                id: 3,
                name:'Tom Litman',
                email:'t@gmail.com',
                phone: '222-222-000',
                type: 'professional'
            }
        ]
    };

    const [state, dispatch] = useReducer(ContactReducer, initialState);

    // Add Contact

    // Delete Contact

    // Clear Current Contact

    //Update Contact

    // Filter Contacts

    //Clear filter


    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts
            }}
            >
                {props.children}
            </ContactContext.Provider>
    );
};

export default ContactState;