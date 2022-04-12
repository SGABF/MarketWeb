import React, { useEffect, useState } from "react";
import "./Home.css";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function Home() {
	const [banner, setBanner] = useState([]);

	useEffect(() => {
		getBannerAPI();
	}, []);

	const getBannerAPI = () => {
		axios
			.get("http://192.168.0.150:8080/MainView/getCanUseList")
			.then((res) => {
				setBanner(res.data);
			});
	};

	return (
		<div>
			<div>
				<Carousel variant="dark">
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
									width="100vw"
									height="300px"
								/>
							</Carousel.Item>
						);
					})}
				</Carousel>
			</div>
		</div>
	);
}

export default Home;
