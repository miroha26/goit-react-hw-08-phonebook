import React from 'react';
import { useEffect } from 'react';
import {
  fetchContacts,
  deleteContact,
} from '../../redux/Contacts/ContactsOperations';
import {  useDispatch } from 'react-redux';
import Notification from './notafication/Notafication';
import {
  Span,
  SpanWrapper,
  ContactsList,
  ContactsItem,
  Button,
} from './Contacts.styled';
import { useSelectors } from '../hooks/UseSelector';

const Contact = () => {
  const { contacts, filter, isLoggedIn } = useSelectors();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getVisibleContacts = () => {
    const normalizedFilter = filter ? filter.toLowerCase() : '';
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };
  return (
    <ContactsList>
      {isLoggedIn ? (
        getVisibleContacts().map(({ id, name, number }) => (
          <ContactsItem key={id}>
            <SpanWrapper>
              <Span>{name}:</Span>
              <Span>{number}</Span>
            </SpanWrapper>
            <Button onClick={e => dispatch(deleteContact(id))}>Delete</Button>
          </ContactsItem>
        ))
      ) : (
        <Notification />
      )}
    </ContactsList>
  );
};
export default Contact;
