import React, { useState } from 'react';
import { Carousel, Col, Row, Image, Container, Card } from 'react-bootstrap';
import Beer from '../components/Beer';
import beers from '../beers';
import Gin from '../components/Gin';
import gins from '../gins';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeScreen = ({ beer }) => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	AOS.init();

	return (
		<>
			<Carousel activeIndex={index} onSelect={handleSelect}>
				<Carousel.Item data-aos="zoom-in">
					<img className="carousel" src="" alt="First slide" />
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="carousel" src="" alt="Second slide" />

					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="carousel" src="" alt="Third slide" />

					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>

			<Container className="containter-1">
				<Row>
					<Image className="skulls" src="images/skull.jpg" />
					<div className="text">
						<p> efwef wefwef ewfwef cweferg regerg rgerg rffw vervfer</p>
						<p> efwef wefwef ewfwef cweferg regerg rgerg rffw vervfer</p>
						<p> efwef wefwef ewfwef cweferg regerg rgerg rffw vervfer</p>
						<p> efwef wefwef ewfwef cweferg regerg rgerg rffw vervfer</p>
						<p> efwef wefwef ewfwef cweferg regerg rgerg rffw vervfer</p>
						<p> efwef wefwef ewfwef cweferg regerg rgerg rffw vervfer</p>
						<p> efwef wefwef ewfwef cweferg regerg rgerg rffw vervfer</p>
						<p> efwef wefwef ewfwef cweferg regerg rgerg rffw vervfer</p>
					</div>
				</Row>
			</Container>

			<Container data-aos="fade-up">
				<h2 className="beer-tag">Beers</h2>
				<Row className="cards-row">
					{beers.map((beer) => (
						<Col data-aos="fade-up" className="cards" key={beer._id} sm={3} md={3} lg={3} xl={3}>
							<Beer beer={beer} />
						</Col>
					))}
				</Row>
			</Container>

			<Container className="containter-2">
				<Row>
					<Col>
						<Card className="card my-3 p-3">
							<a href="https://images.unsplash.com/photo-1583195502574-bc095eb3df40?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHdpbmUlMjBib3R0bGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60">
								<Card.Img
									className="card-image"
									src="https://images.unsplash.com/photo-1583195502574-bc095eb3df40?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHdpbmUlMjBib3R0bGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
									variant="top"
								/>
							</a>
						</Card>
						<Card className="card my-3 p-3">
							<a href="https://images.unsplash.com/photo-1583195502574-bc095eb3df40?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHdpbmUlMjBib3R0bGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60">
								<Card.Img
									className="card-image"
									src="https://images.unsplash.com/photo-1583195502574-bc095eb3df40?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHdpbmUlMjBib3R0bGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
									variant="top"
								/>
							</a>
						</Card>
						<Card className="card my-3 p-3">
							<a href="https://images.unsplash.com/photo-1583195502574-bc095eb3df40?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHdpbmUlMjBib3R0bGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60">
								<Card.Img
									className="card-image"
									src="https://images.unsplash.com/photo-1583195502574-bc095eb3df40?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHdpbmUlMjBib3R0bGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
									variant="top"
								/>
							</a>
						</Card>
					</Col>
				</Row>
			</Container>

			<Container data-aos="fade-up" className="categories-gin">
				<h2 className="gin-tag">Gins</h2>
				<Row className="cards-row">
					{gins.map((gin) => (
						<Col data-aos="fade-right" className="cards" key={gin._id} sm={3} md={3} lg={3} xl={3}>
							<Gin gin={gin} />
						</Col>
					))}
				</Row>
			</Container>
		</>
	);
};

export default HomeScreen;
