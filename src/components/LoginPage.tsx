import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Form } from 'react-bootstrap';
import React, { useState } from 'react';

export const LoginPage = (props: { setUserName: React.Dispatch<React.SetStateAction<string>>, setPassword: React.Dispatch<React.SetStateAction<string>> }): JSX.Element =>
	<Row>
		<Col>
			<Form>
				<Form.Group className="mb-3" controlId="formBasicUsername">
					<Form.Label>Username</Form.Label>
					<Form.Control type="text" placeholder="Enter username" onChange={
						(e) => {
							props.setUserName(e.target.value);
						}
					}/>
					<Form.Text className="text-muted">
						Username is Case-Sensitive
					</Form.Text>
				</Form.Group>
			</Form>
		</Col>
		<Col>
			<Form>
				<Form.Group className="mb-4" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Enter password" onChange={
						(e) => {
							props.setPassword(e.target.value);
						}
					}/>
					<Form.Text className="text-muted">
						Password is Case-Sensitive
					</Form.Text>
				</Form.Group>
			</Form>
		</Col>
	</Row>;

