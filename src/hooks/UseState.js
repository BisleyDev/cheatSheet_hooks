import React, { useState } from 'react';

// если исходное состояние - сложная операция, то лучше значение передать через колбек, так оно посчитается 1 раз при инициализации
function getInititalState() {
	return Math.trunc(Math.random() * 10);
}

function UseState() {
	const [counter, setCounter] = useState(getInititalState);
	// через колбек правильнее изменять стейт
	function increment() {
		setCounter((prevState) => prevState + 1);
	}
	function decrement() {
		setCounter((prevState) => prevState - 1);
	}

	return (
		<div>
			<h3>Counter: {counter}</h3>
			<button className="btn btn-primary" onClick={increment}>
				добавить
			</button>
			<button className="btn btn-danger" onClick={decrement}>
				удалить
			</button>
		</div>
	);
}

export default UseState;
