import "./NewProductPage.css";
import { TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

function NewProductPage() {
	const products = useSelector((state) => state.products);
	const [manufacturers, setManufacturers] = useState([]);
	const [selectedManufacturer, setSelectedManufacturer] = useState("");

	function handleManufacturerChange(event) {
		setSelectedManufacturer(event.target.value);
	}

	function getManufacturers() {
		const manufacturerList = Array.from(
			new Set(products.map((el) => el.manufacturer.name))
		);
		console.log(manufacturerList);
		setManufacturers(manufacturerList);
	}

	useEffect(() => {
		if (products) {
			getManufacturers();
		}
	}, [products]);

	return (
		<div className="newProduct">
			<h1>Create a new Product</h1>
			<div>
				<form>
					<TextField
						required
						id="outlined-required"
						label="Id"
						defaultValue="1,2,3..."
					/>
					<TextField
						required
						id="outlined-required"
						label="Name"
						defaultValue="Probiotic..."
					/>
					<FormControl fullWidth>
						<InputLabel id="demo-simple-select-label">Manufacturer</InputLabel>
						{manufacturers && (
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={selectedManufacturer}
								label="Age"
								onChange={handleManufacturerChange}
							>
								{manufacturers.map((manufacturer, index) => (
									<MenuItem key={index} value={manufacturer}>
										{manufacturer}
									</MenuItem>
								))}
							</Select>
						)}
					</FormControl>
				</form>
			</div>
		</div>
	);
}

export default NewProductPage;
