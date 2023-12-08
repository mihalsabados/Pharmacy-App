import "./NewProductPage.css";
import {
	TextField,
	OutlinedInput,
	InputAdornment,
	Button,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { addNewProduct } from "../../features/products/productsSlice";
import { useNavigate } from "react-router-dom";

function NewProductPage() {
	const products = useSelector((state) => state.products);
	const dispatch = useDispatch();

	const [manufacturers, setManufacturers] = useState([]);
	const [newProduct, setNewProduct] = useState({
		id: 0,
		name: "",
		manufacturer: "",
		price: 0,
		expiryDate: new Date(),
	});
	const [existingId, setExistingId] = useState(false);

	const navigate = useNavigate();

	useEffect(() => {
		function getManufacturers() {
			const manufacturerList = Array.from(
				new Set(products.map((product) => product.manufacturer.name))
			);
			setManufacturers(manufacturerList);
		}

		if (products) {
			getManufacturers();
		}
	}, [products]);

	function handleSubmit(event) {
		event.preventDefault();

		let idExists = products
			.map((product) => product.id)
			.includes(newProduct.id);
		setExistingId(idExists);
		let data = {
			...newProduct,
			manufacturer: products.find(
				(product) => product.manufacturer.name === newProduct.manufacturer
			)?.manufacturer,
		};
		if (!idExists) {
			dispatch(addNewProduct(data));
			navigate("/products");
		}
	}

	function handleFieldChange(event) {
		let propName = event.target.name;
		let value = event.target.value;

		if (propName === "expiryDate") {
			value = new Date(value);
		}

		setNewProduct({
			...newProduct,
			[propName]: value,
		});
	}

	return (
		<div>
			<h1>Create a new Product</h1>
			<div>
				<form className="new-product-form" onSubmit={handleSubmit}>
					<TextField
						required
						id="id-field"
						label="Id"
						placeholder="1,2,3..."
						fullWidth
						margin="normal"
						name="id"
						onChange={handleFieldChange}
						error={existingId}
						helperText={existingId && "Id already exist."}
					/>
					<TextField
						required
						id="name-field"
						label="Name"
						placeholder="Probiotic..."
						fullWidth
						margin="normal"
						name="name"
						onChange={handleFieldChange}
					/>
					<FormControl
						sx={{ textAlign: "left" }}
						margin="normal"
						fullWidth
						required
					>
						<InputLabel id="manu-select-label">Manufacturer</InputLabel>
						{manufacturers && (
							<Select
								labelId="manu-select"
								id="manu-select"
								value={newProduct.manufacturer}
								label="Manufacturer"
								onChange={handleFieldChange}
								name="manufacturer"
							>
								{manufacturers.map((manufacturer, index) => (
									<MenuItem key={index} value={manufacturer}>
										{manufacturer}
									</MenuItem>
								))}
							</Select>
						)}
					</FormControl>
					<FormControl
						fullWidth
						margin="normal"
						name="price"
						required
						onChange={handleFieldChange}
					>
						<InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
						<OutlinedInput
							id="outlined-adornment-amount"
							startAdornment={
								<InputAdornment position="start">€</InputAdornment>
							}
							label="Price"
							type="number"
							name="price"
						/>
					</FormControl>
					<TextField
						required
						id="expiry-date-field"
						label="Expiry Date"
						fullWidth
						margin="normal"
						type="date"
						InputLabelProps={{
							shrink: true,
						}}
						name="expiryDate"
						onChange={handleFieldChange}
					/>
					<Button
						variant="contained"
						startIcon={<AddIcon />}
						sx={{ m: 2 }}
						type="submit"
					>
						Add Product
					</Button>
				</form>
			</div>
		</div>
	);
}

export default NewProductPage;
