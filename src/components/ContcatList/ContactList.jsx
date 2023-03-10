import { ItemList, ListContacts } from './ContactListStyle';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getFilterList, seletorFilter } from 'redux/selectors/selectors';
import { useGetContactQuery } from 'redux/cotactsSlice/slice';
import Loader from 'components/Loader/Loader';




export const ContactList = (
	// {dataContacts}
	) => {

//НЕ РАБОТАЕТ!!!
const {data, error, isLoading} = useGetContactQuery() // хук получения данных
const dataInput = useSelector(seletorFilter);
const filterList = getFilterList(data, dataInput);

// const dataInput = useSelector(seletorFilter);
// const filterList = getFilterList(dataContacts, dataInput);
// console.log(filterList);
// console.log(dataInput);


console.log(data);
// console.log(error);
// console.log(isLoading);


  return (
    <>
      <ListContacts>
			{isLoading && <Loader/>}
			{error && <p>{error}</p>}
			{data && <>
			{filterList.map(({ id, name, phone }) => (
          <ItemList key={id}>
            <ContactItem name={name} phone={phone} id={id} />
          </ItemList>
        ))}
			
			</>}
	
			
			
     
      </ListContacts>
    </>
  );
};
