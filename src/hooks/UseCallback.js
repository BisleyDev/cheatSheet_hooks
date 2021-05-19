import React, { useState, useCallback } from 'react';
import ItemsList from './ItemsList';

export default function UseCallback() {
	const [number, setNumber] = useState(0);
	const [colored, setColor] = useState(false);

	const styles = {
		color: colored ? 'red' : 'black',
	};
	// Если в данном случае не использовать useCallback
	const getGenerationItems = useCallback(() => {
		return new Array(number)
			.fill('')
			.map((_, index) => `Element №${index + 1}`);
	}, [number]);

	return (
		<>
			<h1>Use Callback</h1>
			<h2 style={styles}>Properties: {number}</h2>
			<button
				className="btn btn-success"
				onClick={() => setNumber((prev) => prev + 1)}
			>
				Add
			</button>
			<button
				className="btn btn-danger"
				onClick={() => setNumber((prev) => prev - 1)}
			>
				Dict
			</button>
			<button
				className="btn btn-warning"
				onClick={() => setColor((prev) => !prev)}
			>
				Change color
			</button>
			<ItemsList getItems={getGenerationItems} />
		</>
	);
}
