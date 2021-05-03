import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Beer from '../components/Beer';
import beers from '../beers';

const BeerScreen = () => {
	return (
		<>
			<h1 className="beer-title">Beers</h1>
			<Row>
				{beers.map((beer) => (
					<Col sm={12} md={6} lg={4} xl={3}>
						<Beer beer={beer} />
					</Col>
				))}
			</Row>
		</>
	);
};

export default BeerScreen;
