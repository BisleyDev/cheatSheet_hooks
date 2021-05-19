import React, { useContext } from 'react';
import { useAlert } from './alertContext';
// import { AlertContext } from './alertContext';

export default function Alert() {
	// const alert = useContext(AlertContext);
	const alert = useAlert();

	if (!alert.isVisible) return null;
	return (
		<div className="alert alert-warning" onClick={alert.toggle}>
			It's alert is very important!
		</div>
	);
}
