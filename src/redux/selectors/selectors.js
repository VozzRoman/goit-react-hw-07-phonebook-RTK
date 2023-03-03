
export const seletorFilter = state => state.filter.filter;

export const getFilterList = (contacts, dataInput) => {
	return contacts.filter(contact => contact.name.toLowerCase().includes(dataInput));
}