import React, { useState, useEffect } from "react";
import { Carousel, className, DropdownButton, Dropdown } from "react-bootstrap";
import "./Registration.css";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import Moment from "react-moment";
import Button from "@mui/material/Button";
import Footer from "components/Footer";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Checkbox from "@mui/material/Checkbox";
import axios from "axios";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { UserAddOutlined } from "@ant-design/icons";
import { loggedInUser } from "../pages/Home";
import FileUploadService from "service/FileUploadService";
import ISell from "./ISell";
import IBuy from "./IBuy";

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

	return (
		<>
			<div className="Subpage">
				<div className="Subpage-container">
					<div className="title">
						<FormControl>
							<FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
							<RadioGroup
								row
								aria-labelledby="demo-row-radio-buttons-group-label"
								name="row-radio-buttons-group"
							>
								<FormControlLabel
									value="0"
									control={<Radio />}
									label="판매글"
								/>
								<FormControlLabel
									value="1"
									control={<Radio />}
									label="구매글"
								/>
							</RadioGroup>
						</FormControl>

						<ISell></ISell>
						<IBuy></IBuy>
					</div>
				</div>
			</div>
			<br /> <br /> <br /> <br /> <br />
			<Footer />
		</>
	);
}

export default Registration;
