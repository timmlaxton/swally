import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Gin from '../components/Gin';
import gins from '../gins';

const GinScreen = () => {
	return (
		<>
			<h1 className="gin-title">Gins</h1>
			<Row>
				{gins.map((gin) => (
					<Col sm={12} md={6} lg={4} xl={3}>
						<Gin gin={gin} />
					</Col>
				))}
			</Row>
		</>
	);
};

export default GinScreen;
