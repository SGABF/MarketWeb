import React, { useEffect, useState } from "react";
import "./MyMarket.css";
import { Link } from "react-router-dom";
import Footer from "components/Footer";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
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
		<div className="home">
			<div className="home-container">
				<div className="menubar">
					<ButtonGroup
						variant="outlined"
						aria-label="outlined button group"
						className="home_buttons"
					>
						{/* <Link to="/">
              <Button>전체글</Button>
            </Link> */}
						<Link to="../Sale">
							<Button>판매글</Button>
						</Link>
						<Link to="../Buy">
							<Button>구매글</Button>
						</Link>

						<Link to="../Auction">
							<Button>경매글</Button>
						</Link>
					</ButtonGroup>
					<div></div>
				</div>
				<h3>My Market</h3>
				{/* {products.map((item) => {
          return item.map((item2) => {
            return (
              <div className="home_row">
                {item2.id} <br /> {item2.title} <br /> 가격{item2.price} <br />
                {item2.image} <br />
                코드{item2.code}
              </div>
            );
          });
        })} */}
				{mysale &&
					mysale.map((item) => {
						return (
							<div className="home">
								<div className="home-container">
									<div className="home_row">
										<div className="product">
											<img
												className="image_max"
												src={
													"http://192.168.0.76:8080/imagePath/" +
													item.board_profile
												}
												alt=""
												width="1000px"
												height="250px"
											/>
											<div className="product_info">{item.board_name}</div>
											<p className="product_price">
												가격 : {item.board_price}원
											</p>
											<div>
												{/* <img
                            src={
                              "http://192.168.0.76:8080/imagePath/" +
                              item.boardImageList[0].boardImage_saveName
                            }
                            alt="Third slide"
                            width="1000px"
                            height="250px"
                          /> */}

												<Link
													to={{
														pathname: "/subpagelogin",
														state: item.board_idx,
													}}
												>
													<button className="icon_buttons">
														<ZoomInIcon />
													</button>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				<div
					style={{
						clear: "both",
					}}
				>
					<Footer />
				</div>
			</div>
		</div>
	);
}

export default MySale;
