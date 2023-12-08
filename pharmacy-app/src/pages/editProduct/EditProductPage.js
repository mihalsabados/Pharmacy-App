import "./EditProductPage.css";
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
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate, useParams } from "react-router-dom";
import { editProduct } from "../../features/products/productsSlice";

function EditProductPage() {
	const products = useSelector((state) => state.products);
	const dispatch = useDispatch();
	const { productId } = useParams();

	const [manufacturers, setManufacturers] = useState([]);
	const [existingProduct, setExistingProduct] = useState();
	const [formatedDate, setFormatedDate] = useState();

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
			const foundProduct = products.find((product) => product.id === productId);
			setExistingProduct({
				...foundProduct,
				manufacturer: foundProduct.manufacturer.name,
			});
			formatDate(foundProduct.expiryDate);
		}
	}, [productId, products]);

	function handleSubmit(event) {
		event.preventDefault();
		const data = {
			...existingProduct,
			manufacturer: products.find(
				(product) => product.manufacturer.name === existingProduct.manufacturer
			)?.manufacturer,
		};

		dispatch(editProduct(data));
		navigate("/products");
	}

	function handleFieldChange(event) {
		let propName = event.target.name;
		let value = event.target.value;

		if (propName === "expiryDate") {
			value = new Date(value);
			setFormatedDate(value);
		}

		setExistingProduct({
			...existingProduct,
			[propName]: value,
		});
	}

	function formatDate(date) {
		var d = new Date(date),
			month = (d.getMonth() + 1).toString().padStart(2, "0"),
			day = d.getDate().toString().padStart(2, "0"),
			year = d.getFullYear();
		setFormatedDate([year, month, day].join("-"));
	}

	return (
		<div>
			<h1>Edit Product</h1>
			{existingProduct && (
				<div>
					<form className="edit-product-form" onSubmit={handleSubmit}>
						<TextField
							required
							id="id-field"
							label="Id"
							fullWidth
							margin="normal"
							name="id"
							value={existingProduct.id}
							InputLabelProps={{
								shrink: true,
							}}
							disabled
						/>
						<TextField
							required
							id="name-field"
							label="Name"
							placeholder="Probiotic..."
							fullWidth
							margin="normal"
							name="name"
							value={existingProduct.name}
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
									value={existingProduct.manufacturer}
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
							value={existingProduct.price}
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
								value={existingProduct.price}
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
							defaultValue={formatedDate}
							onChange={handleFieldChange}
						/>
						<Button
							variant="contained"
							startIcon={<EditIcon />}
							sx={{ m: 2 }}
							type="submit"
						>
							Edit Product
						</Button>
					</form>
				</div>
			)}
		</div>
	);
}

export default EditProductPage;
