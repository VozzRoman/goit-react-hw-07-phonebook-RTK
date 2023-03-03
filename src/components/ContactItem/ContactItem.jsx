import {
  ButtonContact,
  DialeName,
} from 'components/ContcatList/ContactListStyle';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations/operations';
import PropTypes from 'prop-types';

export const ContactItem = ({ name, phone, id }) => {
  const dispatch = useDispatch();

  //   console.log(id);
  return (
    <>
      <DialeName>
        {name} : <span>{phone}</span>
      </DialeName>
      <ButtonContact onClick={() => dispatch(deleteContact(id))}>
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
