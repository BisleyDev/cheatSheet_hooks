import React, { useMemo, useState } from 'react';

function complexCalc(num) {
	console.log('Долгая или трудоемкая функция');
	let i = 0;
	while (i < 1000000000) {
		i++;
	}
	return num;
}

export default function UseMemo() {
	const [number, setNumber] = useState(42);
	const [colored, setColor] = useState(false);
	// Также ним можно кэшировать данные, если они не меняются - то не нужно их создавать при каждом рендеринге

	const styles = useMemo(
		() => ({
			color: colored ? 'red' : 'black',
		}),
		[colored]
	);

	// UseMemo нужно для того, что бы вызывать какуюту функцию только тогда, тогда изменились указанные зависимости, а не при каждом рендеринге

	const computed = useMemo(() => {
		return complexCalc(number);
	}, [number]);

	return (
		<>
			<h1>Use Memo</h1>
			<h2 style={styles}>Properties: {computed}</h2>
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
		</>
	);
}
