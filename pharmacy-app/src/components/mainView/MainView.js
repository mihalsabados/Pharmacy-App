import "./MainView.css";
import { Outlet } from "react-router-dom";

function MainView() {
	return (
		<div className="view">
			<Outlet />
		</div>
	);
}

export default MainView;
