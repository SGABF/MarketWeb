import React, { useState } from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "components/Footer";
import Button from "@mui/material/Button";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { Link } from "react-router-dom";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import Sale from "home/Sale";
import Buy from "home/Buy";
import SaleAndBuy from "home/SaleAndBuy";
import NewItems from "home/NewItems";
import Carousel from "home/Carousel";

function Home() {
	const [key, setKey] = useState("sale");
	// const hideNewItems = () => {

	return (
		<div
			style={{
				backgroundColor: "rgb(243, 243, 239)",
				marginLeft: "10%",
				marginRight: "10%",
			}}
		>
			<br />
			<Carousel />
			<br />
			<div style={{ textAlign: "center" }}>
				<Link to="../Registration">
					<Button
						variant="contained"
						color="warning"
						size="large"
						endIcon={<CreateOutlinedIcon />}
					>
						제품등록
					</Button>
				</Link>
				<Tabs
					id="controlled-tab-example"
					activeKey={key}
					onSelect={(k) => setKey(k)}
					className="mb-5"
					variant="pills"
					// onClick={hideNewItems}
				>
					<Tab eventKey="sell" title="팝니다">
						<Sale />
					</Tab>
					<Tab eventKey="buy" title="삽니다">
						<Buy />
					</Tab>
					<Tab eventKey="saleandbuy" title="모아보기">
						<SaleAndBuy />
					</Tab>
				</Tabs>
			</div>
			<div
				style={{
					clear: "both",
				}}
			></div>
			<br />
			<hr />
			<br />
			<NewItems />
			<br />
			<br />
		</div>
	);
}
export default Home;
