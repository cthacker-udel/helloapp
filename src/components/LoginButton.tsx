import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

export const LoginButton = (props: { clickfunc: (username: string, password: string) => void, user: string, pass: string }): JSX.Element =>
	<Button variant="success" onClick={ () => props.clickfunc(props.user, props.pass) }>Login</Button>;
