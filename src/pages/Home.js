import React, { useEffect, useState } from "react";
import "./Home.css";
import Product from "components/Product";
import { Carousel, className, DropdownButton, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "components/Footer";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Navbar from "../components/Navbar";
import { Route, Link } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { Token } from "@mui/icons-material";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "components/StateProvider";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import { getImageListItemBarUtilityClass } from "@mui/material";

function Home() {
	const [banner, setBanner] = useState([]);
	const [home, setHome] = useState([]);
	// const [house, setHouse] = useState([]);

	useEffect(() => {
		getBannerAPI();
		getHome();
		// getHouse();
	}, []);

	const getBannerAPI = () => {
		axios
			.get("http://192.168.0.150:8080/MainView/getCanUseList")
			.then((res) => {
				setBanner(res.data);
			});
	};

	const getHome = async () => {
		await axios
			.post("http://192.168.0.76:8080/home/main")
			.then((res) => {
				// console.log("가져온값 : " + res.data.length);
				// console.log("가져온값 : " + JSON.stringify(res.data));
				setHome(res.data);
			})
			.catch((error) => {
				console.log(`getHome 에러 :  ${error.message}`);
			});
	};

	// const getHouse = async () => {
	//   const token = localStorage.getItem("token");
	//   await axios
	//     .post("http://192.168.0.76:8080/home/boardList", {
	//       headers: { Authorization: "Bearer " + token },
	//     })
	//     .then((res) => {
	//       // console.log("가져온값 : " + res.data.length);
	//       console.log("가져온값 : " + JSON.stringify(res.data));
	//       setHouse(res.data);
	//     })
	//     .catch((error) => {
	//       console.log(`getHome 에러 :  ${error.message}`);
	//     });
	// };

	return (
		<div className="home">
			<div className="home-container">
				<div className="carousel">
					<Carousel variant="dark">
						<Carousel.Item>
							<img
								className="d-block w-100"
								src="image/logo1.jpg"
								alt="First slide"
							/>

							<Carousel.Caption></Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src="image/logo2.jpg"
								alt="Second slide"
							/>
							<Carousel.Caption></Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src="image/logo4.jpg"
								alt="Third slide"
							/>
							<Carousel.Caption></Carousel.Caption>
						</Carousel.Item>

						{banner.map((item) => {
							return (
								<Carousel.Item>
									<img
										className="d-block w-100"
										src={
											"http://192.168.0.150:8080/imagePath/" +
											item.banner_saveName
										}
										alt="Third slide"
										width="1000px"
										height="250px"
									/>
									<Carousel.Caption></Carousel.Caption>
								</Carousel.Item>
							);
						})}
					</Carousel>
				</div>
				<div className="menubar">
					<Navbar />

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
					<div>
						<Link to="../Registration">
							<Button variant="contained" endIcon={<SendIcon />}>
								제품등록
							</Button>
						</Link>
					</div>
				</div>
				<h3>최근 등록된 상품</h3>
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
				{home &&
					home.map((item) => {
						return (
							<div className="home">
								<div className="home-container">
									<div className="home_row">
										<div className="product">
											<Link
												to={{
													pathname: "subpage/Subpage",
													state: item.board_idx,
												}}
											>
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
											</Link>
											<div className="product_info">{item.board_name}</div>
											<p className="product_price">
												가격 : {item.board_price}원
											</p>
											<div>
												<button className="bastket">
													<ShoppingBasket />
												</button>
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
														pathname: "subpage/Subpage",
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

export default Home;
