import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const MainPage = (): JSX.Element => {
	useEffect(() => {
		console.log('using effect');
	});

	return (
		<Container>
			<Row>
				<Col>
				</Col>
			</Row>
		</Container>
	);
};
