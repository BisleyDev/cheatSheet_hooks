import React, { useState, useEffect } from 'react';

export default function UseEffect() {
	const [type, setType] = useState('users');
	const [data, setData] = useState([]);
	const [pos, setPos] = useState({
		x: 0,
		y: 0,
	});

	//Вызывается при каждом рендеринге компонента
	// useEffect(() => {
	// 	console.log('render');
	// });
	//второй параметр в useEffect - стейт, если он изменится запустится и этот эффект
	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/${type}`)
			.then((response) => response.json())
			.then((json) => setData(json));
		return () => {
			console.log(
				'Здесь указывается отписка, потому что каждый раз при перерендеривании код сюда заходит'
			);
		};
	}, [type]);
	//чтобы отприсатся от слушателя при удалении компонента, вернуть колбек с юзЭфекта с отключением слушателя
	useEffect(() => {
		window.addEventListener('mousemove', getPositionMouse);
		return () => {
			window.removeEventListener('mousemove', getPositionMouse);
		};
	}, []);
	function getPositionMouse(event) {
		setPos({
			x: event.clientX,
			y: event.clientY,
		});
	}

	return (
		<div>
			<h1>Use Effect</h1>
			<h3>Resurs: {type}</h3>
			<button onClick={() => setType('users')}>Users</button>
			<button onClick={() => setType('todos')}>Todos</button>
			<button onClick={() => setType('posts')}>Posts</button>
			{/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
			<pre>{JSON.stringify(pos, null, 2)}</pre>
		</div>
	);
}
