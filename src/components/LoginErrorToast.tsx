import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Toast } from 'react-bootstrap';

export const LoginErrorToast = () => {
	const [show, setShow] = useState<boolean>(true);

	const toggleShow = () => setShow(!show);

	return (
		<Toast show={show} onClose={toggleShow}>
			<Toast.Header>
				<strong className='me-auto' >Login Error</strong>
			</Toast.Header>
			<Toast.Body>
				You must enter in values for username and password
			</Toast.Body>
		</Toast>
	);
};
