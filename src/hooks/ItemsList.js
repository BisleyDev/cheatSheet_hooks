import React, { useEffect, useState } from 'react';

export default function ItemList({ getItems }) {
	const [items, setItems] = useState([]);

	useEffect(() => {
		const newItems = getItems();
		setItems(newItems);
		console.log('render');
	}, [getItems]);

	if (!getItems) return <p>Нет записей</p>;

	return (
		<ul>
			{items.map((item) => (
				<li key={item}>{item}</li>
			))}
		</ul>
	);
}
