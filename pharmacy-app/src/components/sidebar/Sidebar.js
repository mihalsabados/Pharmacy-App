import "./Sidebar.css";
import MedicationIcon from "@mui/icons-material/Medication";
import InfoIcon from "@mui/icons-material/Info";
import BarChartIcon from "@mui/icons-material/BarChart";
import { useNavigate } from "react-router-dom";

function Sidebar() {
	const navigate = useNavigate();

	function navigateToPage(page) {
		navigate(page);
	}

	return (
		<div className="sidebar">
			<h1>Mihal's Pharmacy</h1>
			<img src="logo.svg" className="logo" alt="logo"></img>

			<ul className="nav-items">
				<li onClick={() => navigateToPage("/products")}>
					<MedicationIcon />
					&nbsp; Products
				</li>
				<li onClick={() => navigateToPage("/about")}>
					<InfoIcon />
					&nbsp; About
				</li>
				<li onClick={() => navigateToPage("/statistics")}>
					<BarChartIcon />
					&nbsp; Statistics
				</li>
			</ul>
		</div>
	);
}

export default Sidebar;
