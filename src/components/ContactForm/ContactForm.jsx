import { Button, EnterName, FildName, Forms } from './ContactFormStyle';
import { useForm } from 'react-hook-form';
import { useAddContactMutation, useGetContactQuery } from 'redux/cotactsSlice/slice';



export const ContactForm = () => {
	const {data} = useGetContactQuery();
	// console.log(data);
	
	const [addContact] = useAddContactMutation(); // хук для добавления контактов addContact - функция которая принемает 
	// обьект который нужно бодавить, resul - isLoading если нужен
	

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: 'all',
  });
  const onFormSubmit = async data => {
    console.log(data.name);
    console.log(data.phone);
	
	 try{
		await addContact(data)
	 } catch (errore){
		console.log(errore);
	 }
  
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
     {!data ? <h2>The phonebook is empty</h2> : <h2>Contacts</h2>}
    </>
  );
};
