import React, { useState, useContext } from 'react';

export const AlertContext = React.createContext();

export const useAlert = () => {
	return useContext(AlertContext);
};

export default function AlertProvider({ children }) {
	const [visible, setVisible] = useState(false);

	function toggle() {
		setVisible((prev) => !prev);
	}

	return (
		<AlertContext.Provider value={{ isVisible: visible, toggle }}>
			{children}
		</AlertContext.Provider>
	);
}
