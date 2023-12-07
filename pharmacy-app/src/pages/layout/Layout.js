import "./Layout.css";
import Sidebar from "../../components/sidebar/Sidebar";
import MainView from "../../components/mainView/MainView";

function Layout() {
	return (
		<div className="layout">
			<Sidebar></Sidebar>
			<MainView></MainView>
		</div>
	);
}

export default Layout;
