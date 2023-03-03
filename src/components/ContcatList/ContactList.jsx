import { ItemList, ListContacts } from './ContactListStyle';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors/selectors';


export const ContactList = () => {

  const contactsList = useSelector(selectFilteredContacts);
//   console.log(contactsList);

  return (
    <>
      <ListContacts>
        {contactsList.map(({ id, name, phone }) => (
          <ItemList key={id}>
            <ContactItem name={name} phone={phone} id={id} />
          </ItemList>
        ))}
      </ListContacts>
    </>
  );
};
