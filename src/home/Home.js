import React, { useState } from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "components/Footer";
import Button from "@mui/material/Button";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { Link } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import Sale from "home/Sale";
import Buy from "home/Buy";
import SaleAndBuy from "home/SaleAndBuy";
import NewItems from "home/NewItems";
import Carousel from "home/Carousel";

function Home() {
	const [key, setKey] = useState("sale");

	return (
		<div>
			<br />
			<Carousel />
			<Link to="../Registration">
				<Button variant="contained" endIcon={<SendIcon />}>
					제품등록
				</Button>
			</Link>
			<Tabs
				id="controlled-tab-example"
				activeKey={key}
				onSelect={(k) => setKey(k)}
				className="mb-3"
				variant="pills"
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
			<NewItems />
			<div
				style={{
					clear: "both",
				}}
			>
				<Footer />
			</div>
		</div>
	);
}
export default Home;
