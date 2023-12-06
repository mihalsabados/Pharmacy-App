import "./Sidebar.css";
import MedicationIcon from "@mui/icons-material/Medication";
import InfoIcon from "@mui/icons-material/Info";
import BarChartIcon from "@mui/icons-material/BarChart";

function Sidebar() {
	return (
		<div className="sidebar">
			<h1>Mihal's Pharmacy</h1>
			<img src="logo.svg" className="logo" alt="logo"></img>

			<ul className="nav-items">
				<li>
					<MedicationIcon />
					&nbsp; Products
				</li>
				<li>
					<InfoIcon />
					&nbsp; About
				</li>
				<li>
					<BarChartIcon />
					&nbsp; Statistics
				</li>
			</ul>
		</div>
	);
}

export default Sidebar;
