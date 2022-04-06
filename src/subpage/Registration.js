import React, { useState } from "react";
import "./Registration.css";
import Footer from "components/Footer";
import ISell from "./ISell";
import IBuy from "./IBuy";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

// const label = { inputProps: { "aria-label": "Checkbox demo" } };
// const Input = styled("input")({
// 	display: "none",
// });

function Registration(props) {
	// const style = {
	// 	position: "absolute",
	// 	top: "50%",
	// 	left: "50%",
	// 	transform: "translate(-50%, -50%)",
	// 	width: 400,
	// 	bgcolor: "background.paper",
	// 	border: "2px solid #000",
	// 	boxShadow: 24,
	// 	pt: 2,
	// 	px: 4,
	// 	pb: 3,
	// };
	const [key, setKey] = useState("isell");

	return (
		<>
			<div className="Subpage">
				<div className="registration_form">
					<Tabs
						id="controlled-tab-example"
						activeKey={key}
						onSelect={(k) => setKey(k)}
						className="mb-3"
						variant="pills"
					>
						<Tab eventKey="isell" title="판매등록">
							<ISell />
						</Tab>
						<Tab eventKey="ibuy" title="구매희망등록">
							<IBuy />
						</Tab>
					</Tabs>
				</div>
			</div>
			<br /> <br /> <br /> <br /> <br />
			<Footer />
		</>
	);
}

export default Registration;
