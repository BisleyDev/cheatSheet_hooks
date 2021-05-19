import React from 'react';
import { useAlert } from './alert/alertContext';

export default function Main() {
	const alert = useAlert();

	return (
		<div>
			<h3>Hello in template useContext</h3>
			<button
				className="btn btn-success"
				onClick={() => alert.show('Use reducer')}
			>
				Alert
			</button>
		</div>
	);
}

