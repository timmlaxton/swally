import React from 'react';
import { Card } from 'react-bootstrap';
import gins from '../gins';

const Gin = ({ gin }) => {
	return (
		<Card className="card my-3 p-3">
			<a href={`/beer/${gin._id}`}>
				<Card.Img src={gin.image} variant="top" />
			</a>
			<Card.Body>
				<a href={`/gin/${gin._id}`}>
					<Card.Title className="gin-brand" as="div">
						<strong>{gin.brand}</strong>
					</Card.Title>
				</a>
				<Card.Text className="gin-price" as="h5">
					£{gin.price}
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default Gin;
