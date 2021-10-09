import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Form, Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

export type rdBoolean = React.Dispatch<React.SetStateAction<boolean>>;

export type rdStringArr = React.Dispatch<React.SetStateAction<string[]>>;

export type rdNumber = React.Dispatch<React.SetStateAction<number>>;

export const CreateNoteModal = (props: { editModal: rdBoolean, setNoteNames: rdStringArr, setCurrentIndex: rdNumber, noteNames: string[]}): JSX.Element => {
	const [show, setShow] = useState<boolean>(true);
	const [currText, setCurrText] = useState<string>('');

	const changeFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCurrText(e.target.value); // title of new page
	};

	const clickFunc = () => {
		props.setCurrentIndex(props.noteNames.length);
		const tmpNotes: string[] = [...props.noteNames];
		tmpNotes.push(currText);
		props.setNoteNames(tmpNotes);
		localStorage.setItem(currText, '');
	};

	return (
		<Modal show={ show } >
			<Form>
				<Form.Label>
					Enter the name of the new note
				</Form.Label>
				<Form.Control type="text" placeholder="enter name here" onChange={changeFunc}/>
				<Form.Text>
					Note Viewer Version 1.0.0
				</Form.Text>
			</Form>
			<Button variant="primary" onClick={ () => {
				setShow(false);
				props.editModal(false);
				clickFunc();
			} }>
				Save New Note
			</Button>
		</Modal>
	);
};

