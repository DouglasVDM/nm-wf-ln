import { Fragment, useEffect, useState } from 'react';
import './App.css';

// components
import InputDepartment from './components/InputDepartment';
import ListDepartment from './components/ListDepartments';

// NODE_ENV = 'development'
// NODE_ENV = 'production

// if we are in production baseURL = /departments
// else baseURL = http://localhost:5001/departments

// const baseURL = 'http://localhost:5001/departments'

const baseURL = process.env.NODE_ENV==='production' ? "/departments" : "http://localhost:5001/departments"

function App() {
	const [departments, setDepartments] = useState([]);

	const getDepartments = async () => {
		try {
			const response = await fetch(
				baseURL
			);
			const jsonData = await response.json();

			setDepartments(jsonData);
			console.log('jsonData', jsonData)
			console.log('appJs departments', departments);
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		getDepartments();
	}, []);


	return (
		<Fragment>
			<div className="container">
				<InputDepartment departments={departments} setDepartments={setDepartments} />
				<ListDepartment departments={departments} setDepartments={setDepartments} />
			</div>
		</Fragment>
	);
}

export default App;
