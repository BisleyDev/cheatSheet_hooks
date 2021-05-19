import React, { useState, useEffect, useRef } from 'react';

export default function UseRef() {
	const [value, setValue] = useState('');

	let renderCount = useRef(1);
	let inputRef = useRef(null);
	let prefValue = useRef('');

	// он сохраняет стате но не вызывает сам рендеринг
	useEffect(() => {
		renderCount.current++;
		console.log(inputRef);
	});
	// через useRef можно получить когда нужно верстку (где задано ref)
	const focus = () => {
		inputRef.current.focus();
	};
	// получение предыдущего стейта
	useEffect(() => {
		prefValue.current = value;
	}, [value]);
	return (
		<div>
			<h1>Use Ref</h1>
			<h3>Quantity renders: {renderCount.current}</h3>
			<h5>Previous value: {prefValue.current}</h5>
			<input
				ref={inputRef}
				type="text"
				onChange={(event) => setValue(event.target.value)}
				value={value}
			/>
			<button className="btn btn-success" onClick={focus}>
				Click
			</button>
		</div>
	);
}
