import React, { useContext, useReducer } from 'react';

export const AlertContext = React.createContext();

export const useAlert = () => {
	return useContext(AlertContext);
};

export default function AlertProvider({ children }) {
	const SHOW_ALERT = 'show';
	const HIDE_ALERT = 'hide';

	const show = (text) => dispatch({ type: SHOW_ALERT, text });
	const hide = () => dispatch({ type: HIDE_ALERT });

	const reducer = (state, action) => {
		switch (action.type) {
			case SHOW_ALERT:
				return { ...state, isVisible: true, text: action.text };
			case HIDE_ALERT:
				return { ...state, isVisible: false };

			default:
				return state;
		}
	};

	const [state, dispatch] = useReducer(reducer, {
		isVisible: false,
		text: '',
	});

	return (
		<AlertContext.Provider
			value={{ isVisible: state.isVisible, text: state.text, show, hide }}
		>
			{children}
		</AlertContext.Provider>
	);
}
