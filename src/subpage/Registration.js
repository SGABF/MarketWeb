import React, { useState } from "react";
import "./Registration.css";
import ISell from "./ISell";
import IBuy from "./IBuy";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

function Registration(props) {
	const [key, setKey] = useState("isell");

	return (
		<div
			style={{
				backgroundColor: "rgb(243, 243, 239)",
				marginLeft: "10%",
				marginRight: "10%",
			}}
		>
			<br />
			<br />
			<Tabs
				activeKey={key}
				onSelect={(k) => setKey(k)}
				className="mb-2"
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
	);
}

export default Registration;
