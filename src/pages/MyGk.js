import React, { useEffect, useState } from "react";
import "./MyMarket.css";
import { Link } from "react-router-dom";
import Footer from "components/Footer";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import axios from "axios";

function MyAuction() {
	const [myauction, setMyauction] = useState([]);
	const token = localStorage.getItem("token");
	const username = localStorage.getItem("authenticatedUser");

	useEffect(() => {
		getMyauction();
	}, []);

	const getMyauction = async () => {
		await axios({
			method: "post",
			url: "http://192.168.0.76:8080/myGK",
			headers: { Authorization: "Bearer " + token, user_id: username },
		})
			.then((res) => {
				console.log("가져온값 : " + JSON.stringify(res.data));
				setMyauction(res.data);
			})
			.catch((error) => {
				console.log(`getMyauction 에러 :  ${error.message}`);
			});
	};

	return (
		<div>
			<div className="mypage">
				<h3>My Market</h3> <br />
				<ButtonGroup
					variant="outlined"
					aria-label="outlined button group"
					className="home_buttons"
				>
					<Link to="../mysale">
						<Button>판매</Button>
					</Link>
					<Link to="../myauction">
						<Button>구매</Button>
					</Link>
				</ButtonGroup>
				<CardGroup>
					{myauction.map((item) => {
						<Card>
							<Card.Img variant="top" src="holder.js/100px160" />
							<Card.Body>
								<Card.Title>Card title</Card.Title>
								<Card.Text></Card.Text>
							</Card.Body>
							<Card.Footer>
								<small className="text-muted"></small>
								<Link
									to={{
										pathname: "subpage/Subpage",
										state: item.board_idx,
									}}
								>
									<button className="icon_buttons">
										<ZoomInIcon />
									</button>
								</Link>
							</Card.Footer>
						</Card>;
					})}
				</CardGroup>
			</div>
			<Footer />
		</div>
	);
}

export default MyAuction;
