import "./StatisticsPage.css";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	ArcElement,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function StatisticsPage() {
	const products = useSelector((state) => state.products);
	const [barChartData, setBarChartData] = useState();
	const [pieChartData, setPieChartData] = useState();

	useEffect(() => {
		function loadBarChartData() {
			let mostExpensive = [...products];
			let leastExpensive = [...products];

			// sorting product by price
			leastExpensive.sort(
				(product1, product2) => product1.price - product2.price
			);
			mostExpensive.sort(
				(product1, product2) => product2.price - product1.price
			);
			// slicing them to 5 elements
			mostExpensive = mostExpensive.slice(0, 5);
			leastExpensive = leastExpensive.slice(0, 5);
			// generating labels for chart
			const labels = [
				...mostExpensive.map((product) => product.name),
				...leastExpensive.map((product) => product.name),
			];
			// generating data for chart
			const data = [
				...mostExpensive.map((product) => product.price),
				...leastExpensive.map((product) => product.price),
			];
			// generating bgColors for chart
			const backgroundColor = data.map(
				(item) => "#" + Math.floor(Math.random() * 16777215).toString(16)
			);

			setBarChartData({
				labels: labels,
				datasets: [
					{
						label: "Price of Medicine",
						data,
						backgroundColor,
						borderWidth: 1,
					},
				],
			});
		}

		function loadPieChartData() {
			const groupedByManufacturers = products.reduce((group, product) => {
				const manufacturerName = product.manufacturer.name;
				group[manufacturerName] = group[manufacturerName] ?? [];
				group[manufacturerName].push(product);
				return group;
			}, {});

			const labels = Object.keys(groupedByManufacturers);
			const data = labels.map((label) => groupedByManufacturers[label].length);

			// generating bgColors for chart
			const backgroundColor = labels.map(
				(item) => "#" + Math.floor(Math.random() * 16777215).toString(16)
			);

			setPieChartData({
				labels,
				datasets: [
					{
						label: "Manufacturer products count",
						data,
						backgroundColor,
						borderWidth: 1,
					},
				],
			});
		}

		if (products) {
			loadBarChartData();
			loadPieChartData();
		}
	}, [products]);

	ChartJS.register(
		CategoryScale,
		LinearScale,
		BarElement,
		Title,
		Tooltip,
		Legend,
		ArcElement
	);

	const optionsBar = {
		responsive: true,
		plugins: {
			legend: {
				position: "top",
			},
			title: {
				display: true,
				text: "Price of Medicine",
			},
		},
	};

	return (
		<div className="statisctics-div">
			<h1>Statistics</h1>
			<div className="bar-chart">
				{barChartData && <Bar options={optionsBar} data={barChartData} />}
			</div>
			<div className="bar-chart">
				{pieChartData && <Pie data={pieChartData} />}
			</div>
		</div>
	);
}

export default StatisticsPage;
