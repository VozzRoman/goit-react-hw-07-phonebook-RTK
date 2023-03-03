import { Button, EnterName, FildName, Forms } from './ContactFormStyle';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addContact } from 'redux/operations/operations';
import { selectContactsList } from 'redux/selectors/selectors';


export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList);
  //   console.log(addContact());
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: 'all',
  });
  const onFormSubmit = data => {
    console.log(data.name);
    console.log(data.phone);
    const { name, phone } = data;
    console.log(name, phone);
    if (contacts.find(item => item.name === name)) {
      return alert('this name alredy exist');
    }
    if (contacts.find(item => item.phone === phone)) {
      return alert('this number alredy exist');
    }

    dispatch(addContact(data));
    reset();
  };

  return (
    <>
      <Forms onSubmit={handleSubmit(onFormSubmit)}>
        <FildName htmlFor="name">
          Name
          <EnterName
            {...register('name', {
              required: 'please enter name',
              pattern: {
                value:
                  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
                message:
                  'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore dArtagnan',
              },
            })}
            id="name"
            type="text"
            name="name"
            placeholder="Enter name"
          />
        </FildName>
        {errors?.name && (
          <span style={{ display: 'block', marginBottom: 5, color: 'red' }}>
            {errors?.name?.message || 'Error'}
          </span>
        )}
        <FildName htmlFor="phone">
          Number
          <EnterName
            {...register('phone', {
              required: 'please enter phone number',
              pattern: {
                value: /\d{3}[-]\d{2}[-]\d{2}/,
                message:
                  'Phone number must be digits and can contain spaces, dashes, parentheses',
              },
              maxLength: 9,
              message: 'phone number has 7 digits',
            })}
            id="phone"
            type="tel"
            name="phone"
            placeholder="345-90-90"
          />
        </FildName>
        {errors?.phone && (
          <span style={{ display: 'block', marginBottom: 5, color: 'red' }}>
            {errors?.phone?.message || 'phone number has 7 digits'}
          </span>
        )}
        <Button type="submit" disabled={!isValid}>
          Add contact
        </Button>
      </Forms>
      {!contacts.length ? <h2>The phonebook is empty</h2> : <h2>Contacts</h2>}
    </>
  );
};
