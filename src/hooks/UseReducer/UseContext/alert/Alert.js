import React from 'react';
import { useAlert } from './alertContext';

export default function Alert() {
	const alert = useAlert();

	if (!alert.isVisible) return null;
	return (
		<div className="alert alert-warning" onClick={() => alert.hide()}>
			{alert.text}
		</div>
	);
}
