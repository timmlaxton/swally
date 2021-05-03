import React, { useState } from 'react';
import { Carousel, Col, Row, Image, Container } from 'react-bootstrap';
import Beer from '../components/Beer';
import beers from '../beers';
import Gin from '../components/Gin';
import gins from '../gins';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeScreen = () => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	AOS.init();

	return (
		<>
			<Carousel activeIndex={index} onSelect={handleSelect}>
				<Carousel.Item data-aos="zoom-in">
					<img className="carousel" src="images/skull.jpg" alt="First slide" />
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="carousel" src="images/BeaverTown.jpg" alt="Second slide" />

					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="carousel" src="images/wine.jpg" alt="Third slide" />

					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>

			<Container>
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

			<Container>
				<Row>
					<div className="text-2">
						<p> efwef wefwef ewfwef cweferg regerg rgerg rffw vervfer</p>
						<p> efwef wefwef ewfwef cweferg regerg rgerg rffw vervfer</p>
						<p> efwef wefwef ewfwef cweferg regerg rgerg rffw vervfer</p>
						<p> efwef wefwef ewfwef cweferg regerg rgerg rffw vervfer</p>
						<p> efwef wefwef ewfwef cweferg regerg rgerg rffw vervfer</p>
						<p> efwef wefwef ewfwef cweferg regerg rgerg rffw vervfer</p>
						<p> efwef wefwef ewfwef cweferg regerg rgerg rffw vervfer</p>
						<p> efwef wefwef ewfwef cweferg regerg rgerg rffw vervfer</p>
					</div>
					<Image className="skulls-2" src="images/skull.jpg" />
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
