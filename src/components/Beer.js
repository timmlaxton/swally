import React from 'react';
import { Card } from 'react-bootstrap';

const Beer = ({ beer }) => {
	return (
		<Card className="card my-3 p-3">
			<a href={`/beer/${beer._id}`}>
				<Card.Img src={beer.image} variant="top" />
			</a>
			<Card.Body>
				<a href={`/beer/${beer._id}`}>
					<Card.Title className="beer-brand" as="div">
						<strong>{beer.brand}</strong>
					</Card.Title>
					<Card.Title className="beer-name" as="div">
						<strong>{beer.name}</strong>
					</Card.Title>
				</a>
				<Card.Text className="beer-price" as="h5">
					£{beer.price}
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default Beer;
