import {
  ButtonContact,
  DialeName,
} from 'components/ContcatList/ContactListStyle';

import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/cotactsSlice/slice';

export const ContactItem = ({ name, phone, id }) => {
const [deleteContact] = useDeleteContactMutation();

  //   console.log(id);
  return (
    <>
      <DialeName>
        {name} : <span>{phone}</span>
      </DialeName>
      <ButtonContact onClick={() => deleteContact(id)}>
        Delete
      </ButtonContact>
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
