import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import MainView from "./components/mainView/MainView";

function App() {
	return (
		<div className="App">
			<Sidebar></Sidebar>
			<MainView></MainView>
		</div>
	);
}

export default App;
