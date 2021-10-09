import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { LoginPage } from './LoginPage';
import { LoginButton } from './LoginButton';
import { LoginErrorToast } from './LoginErrorToast';

export const MainPage = (): JSX.Element => {
	const [userName, setUserName] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [borderColor, setBorderColor] = useState<string>('black');
	const [displayToast, setDisplayToast] = useState<boolean>(false);

	const signIn = (theUserName: string, thePass: string) => {
		if (theUserName.length === 0 || thePass.length === 0) {
			setBorderColor('red');
			setDisplayToast(true);
			setTimeout(() => {
				setDisplayToast(false);
				setBorderColor('green');
			}, 5000);
		} else {
			setBorderColor('green');
		}
	};

	return (
		<>
			<Container>
				<br />
				<Row>
					<Col style={{ textAlign: 'center' }}>
						<h1><Badge bg="primary">Login Page</Badge></h1>
					</Col>
				</Row>
				<br />
				<br />
				<Row style={{ border: `1px solid ${borderColor}` }}>
					<Col>
						<br />
						<Row>
							<Col>
								<LoginPage setUserName={setUserName} setPassword={setPassword} />
							</Col>
						</Row>
						<Row>
							<Col style={{ textAlign: 'center' }}>
								<LoginButton clickfunc={signIn} user={userName} pass={password} />
							</Col>
						</Row>
						<br />
					</Col>
				</Row>
				<Row>
					<Col>
						{displayToast && <LoginErrorToast /> }
					</Col>
				</Row>
			</Container>
		</>
	);
};
