import React, { useContext } from 'react';
import { useAlert } from './alert/alertContext';
// import { AlertContext } from './alert/alertContext';

export default function Main() {
	// const alert = useContext(AlertContext);
	const alert = useAlert();

	return (
		<div>
			<h3>Hello in template useContext</h3>
			<button className="btn btn-success" onClick={alert.toggle}>
				Alert
			</button>
		</div>
	);
}
