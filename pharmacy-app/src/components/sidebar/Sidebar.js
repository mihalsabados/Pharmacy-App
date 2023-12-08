import "./Sidebar.css";
import MedicationIcon from "@mui/icons-material/Medication";
import InfoIcon from "@mui/icons-material/Info";
import BarChartIcon from "@mui/icons-material/BarChart";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Sidebar() {
	const navigate = useNavigate();
	const [pageSelected, setPageSelected] = useState("");

	function navigateToPage(page) {
		navigate(page);
		setPageSelected(page);
	}

	return (
		<div className="sidebar">
			<h1>Mihal's Pharmacy</h1>
			<img src="logo.svg" className="logo" alt="logo"></img>

			<ul className="nav-items">
				<li
					onClick={() => navigateToPage("/products")}
					style={{
						backgroundColor:
							pageSelected === "/products" && "rgb(226, 174, 31)",
					}}
				>
					<MedicationIcon />
					&nbsp; Products
				</li>
				<li
					onClick={() => navigateToPage("/statistics")}
					style={{
						backgroundColor:
							pageSelected === "/statistics" && "rgb(226, 174, 31)",
					}}
				>
					<BarChartIcon />
					&nbsp; Statistics
				</li>
				<li
					onClick={() => navigateToPage("/about")}
					style={{
						backgroundColor: pageSelected === "/about" && "rgb(226, 174, 31)",
					}}
				>
					<InfoIcon />
					&nbsp; About
				</li>
			</ul>
		</div>
	);
}

export default Sidebar;
