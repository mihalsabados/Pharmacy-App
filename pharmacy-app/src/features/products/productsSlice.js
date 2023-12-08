import { createSlice } from "@reduxjs/toolkit";

// products initial data
const initialState = [
	{
		id: "1",
		name: "Famotidin",
		manufacturer: {
			id: "1",
			name: "Hemofarm",
		},
		price: 20,
		expiryDate: new Date(2024, 6, 20),
	},
	{
		id: "2",
		name: "Panklav",
		manufacturer: {
			id: "2",
			name: "Pfizer",
		},
		price: 50,
		expiryDate: new Date(2025, 6, 20),
	},
	{
		id: "3",
		name: "Amoksicilin",
		manufacturer: {
			id: "3",
			name: "Bayer",
		},
		price: 100,
		expiryDate: new Date(2025, 2, 13),
	},
	{
		id: "4",
		name: "Voltaren Gel",
		manufacturer: {
			id: "1",
			name: "Hemofarm",
		},
		price: 30,
		expiryDate: new Date(2026, 11, 5),
	},
	{
		id: "5",
		name: "Probiotik",
		manufacturer: {
			id: "1",
			name: "Hemofarm",
		},
		price: 10,
		expiryDate: new Date(2026, 11, 5),
	},
	{
		id: "6",
		name: "Pantenol",
		manufacturer: {
			id: "2",
			name: "Pfizer",
		},
		price: 25,
		expiryDate: new Date(2026, 11, 5),
	},
	{
		id: "7",
		name: "Tothema kapsule",
		manufacturer: {
			id: "3",
			name: "Bayer",
		},
		price: 33,
		expiryDate: new Date(2026, 11, 5),
	},
	{
		id: "8",
		name: "Klometol",
		manufacturer: {
			id: "3",
			name: "Bayer",
		},
		price: 92,
		expiryDate: new Date(2026, 11, 5),
	},
	{
		id: "9",
		name: "Smecta",
		manufacturer: {
			id: "1",
			name: "Hemofarm",
		},
		price: 44,
		expiryDate: new Date(2026, 11, 5),
	},
	{
		id: "10",
		name: "Bulardi",
		manufacturer: {
			id: "1",
			name: "Hemofarm",
		},
		price: 31,
		expiryDate: new Date(2026, 11, 5),
	},
];

export const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		addNewProduct: (state, action) => {
			state.push(action.payload);
		},
		editProduct: (state, action) => {
			const editedProduct = action.payload;
			let existingProductId = state.findIndex(
				(product) => product.id === editedProduct.id
			);
			state[existingProductId] = { ...editedProduct };
		},
		deleteProduct: (state, action) => {
			const deleteProductId = action.payload;
			let existingProductId = state.findIndex(
				(product) => product.id === deleteProductId
			);
			state.splice(existingProductId, 1);
		},
	},
});

export const { addNewProduct, editProduct, deleteProduct } =
	productsSlice.actions;

export default productsSlice.reducer;
