import React from 'react';
import Alert from './alert/Alert';
import AlertProvider from './alert/alertContext';
import Main from './Main';

export default function UseContext() {
	return (
		<AlertProvider>
			<Alert />
			<Main />
		</AlertProvider>
	);
}
