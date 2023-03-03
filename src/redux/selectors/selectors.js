
// значение берем через стор

import { createSelector } from "@reduxjs/toolkit";

export const selectContactsList = state => {
	// console.log(state.contacts.items);
	return state.contacts.items;
};
export const selectIsLoading = state => {
	// console.log(state.contacts.isLoading);
	return state.contacts.isLoading;
}
export const selectError = state => {
	// console.log(state.contacts.error);
	return state.contacts.error
}
export const selectFilterValue = state => state.filter.filter;

// export const selectFilteredContacts = state => {
// 	const contacts = selectContactsList(state);
// 	const inputData = selectFilterValue(state);
// 	console.log("Calculating task count");
// 	return contacts.filter(contact => contact.name.toLowerCase().includes(inputData));
// }

//Функция createSelector
// Процесс оптимизации селекторов называется мемоизация - сохранение результатов выполнения 
// функции для предотвращения повторных вычислений.

export const selectFilteredContacts = createSelector(
	[selectContactsList, selectFilterValue],
	(contacts, inputData) => {
		return contacts.filter(contact => contact.name.toLowerCase().includes(inputData));
	})