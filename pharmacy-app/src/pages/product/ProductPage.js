import "./ProductPage.css";
import { useSelector, useDispatch } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../../features/products/productsSlice";

function ProductPage() {
	const products = useSelector((state) => state.products);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	function formatDate(date) {
		return (
			date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear()
		);
	}

	function handleEdit(productId) {
		navigate("/edit-product/" + productId);
	}

	function handleDelete(productId) {
		dispatch(deleteProduct(productId));
	}

	return (
		<div className="products-div">
			<h1>Products</h1>
			<TableContainer component={Paper} sx={{ width: "70%", margin: "0 auto" }}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell>Manufacturer</TableCell>
							<TableCell>Price</TableCell>
							<TableCell>Expiry Date</TableCell>
							<TableCell></TableCell>
							<TableCell></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{products.map((product, index) => (
							<TableRow
								key={index}
								sx={{
									"&:last-child td, &:last-child th": { border: 0 },
								}}
							>
								<TableCell component="th" scope="row">
									{product.name}
								</TableCell>
								<TableCell>{product.manufacturer.name}</TableCell>
								<TableCell>{product.price + " €"}</TableCell>
								<TableCell>{formatDate(product.expiryDate)}</TableCell>
								<TableCell>
									<Tooltip title="Edit">
										<IconButton
											aria-label="edit"
											sx={{ color: "blue" }}
											onClick={() => handleEdit(product.id)}
										>
											<EditIcon />
										</IconButton>
									</Tooltip>
								</TableCell>
								<TableCell>
									<Tooltip title="Delete">
										<IconButton
											aria-label="delete"
											sx={{ color: "red" }}
											onClick={() => handleDelete(product.id)}
										>
											<DeleteIcon />
										</IconButton>
									</Tooltip>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<div className="createProduct">
				<Button
					variant="contained"
					startIcon={<AddIcon />}
					onClick={() => navigate("/new-product", { preventScrollReset: true })}
				>
					New Product
				</Button>
			</div>
		</div>
	);
}

export default ProductPage;
