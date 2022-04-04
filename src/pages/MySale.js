import React from "react";
import "./MySale.css";
import { Link } from "react-router-dom";
import Footer from "components/Footer";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";

function MySale() {
	return (
		<>
			<h3>나의 판매</h3>
			<CardGroup>
				<Card>
					<Card.Img variant="top" src="holder.js/100px160" />
					<Card.Body>
						<Card.Title>Card title</Card.Title>
						<Card.Text>
							This is a wider card with supporting text below as a natural
							lead-in to additional content. This content is a little bit
							longer.
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small className="text-muted">Last updated 3 mins ago</small>
					</Card.Footer>
				</Card>
				<Card>
					<Card.Img variant="top" src="holder.js/100px160" />
					<Card.Body>
						<Card.Title>Card title</Card.Title>
						<Card.Text>
							This card has supporting text below as a natural lead-in to
							additional content.{" "}
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small className="text-muted">Last updated 3 mins ago</small>
					</Card.Footer>
				</Card>
				<Card>
					<Card.Img variant="top" src="holder.js/100px160" />
					<Card.Body>
						<Card.Title>Card title</Card.Title>
						<Card.Text>
							This is a wider card with supporting text below as a natural
							lead-in to additional content. This card has even longer content
							than the first to show that equal height action.
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small className="text-muted">Last updated 3 mins ago</small>
					</Card.Footer>
				</Card>
			</CardGroup>
			<Footer />
		</>
	);
}

export default MySale;
