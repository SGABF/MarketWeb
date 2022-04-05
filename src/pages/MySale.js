import React, { useEffect, useState } from "react";
import "./MySale.css";
import { Link } from "react-router-dom";
import Footer from "components/Footer";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import axios from "axios";

function MySale() {
	const [mysale, setMysale] = useState([]);
	const token = localStorage.getItem("token");
	const username = localStorage.getItem("authenticatedUser");

	useEffect(() => {
		getMysale();
	}, []);

	const getMysale = async () => {
		console.log("가긴가니?");
		await axios({
			method: "post",
			url: "http://192.168.0.76:8080/myMarket",
			headers: { Authorization: "Bearer " + token, user_id: username },
		})
			.then((res) => {
				console.log("가져온값 : " + JSON.stringify(res.data));
				setMysale(res.data);
			})
			.catch((error) => {
				console.log(`getMysale 에러 :  ${error.message}`);
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
					{/* <Link to="../mysale">
						<Button>판매</Button>
					</Link>
					<Link to="../myauction">
						<Button>구매</Button>
					</Link> */}
				</ButtonGroup>
				<CardGroup>
					{mysale.map((item) => {
						<Card>
							<Card.Img variant="top" src="holder.js/100px160" />
							<Card.Body>
								<Card.Title>{item.board_name}</Card.Title>
								<Card.Text>
									<img
										className="image_max"
										src={
											"http://192.168.0.76:8080/imagePath/" + item.board_profile
										}
										alt=""
										width="1000px"
										height="250px"
									/>{" "}
									<br />
									가격 : {item.board_price}원
								</Card.Text>
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

export default MySale;
