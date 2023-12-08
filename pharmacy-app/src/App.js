import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/product/ProductPage";
import Layout from "./pages/layout/Layout";
import AboutPage from "./pages/about/AboutPage";
import StatisticsPage from "./pages/statisctics/StatisticsPage";
import NewProductPage from "./pages/newProduct/NewProductPage";
import EditProductPage from "./pages/editProduct/EditProductPage";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<ProductPage />} />
						<Route path="*" element={<ProductPage />} />
						<Route path="products" element={<ProductPage />} />
						<Route path="about" element={<AboutPage />} />
						<Route path="statistics" element={<StatisticsPage />} />
						<Route path="new-product" element={<NewProductPage />} />
						<Route
							path="edit-product/:productId"
							element={<EditProductPage />}
						/>
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
