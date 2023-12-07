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
		price: 100,
		expiryDate: new Date(2025, 2, 13),
	},
];

export const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {},
});

// export const { getManufacturers } = productsSlice.actions;

export default productsSlice.reducer;
