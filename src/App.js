import './App.css';
import { useForm } from 'react-hook-form';

const App = () => {
	const { register, handleSubmit, errors } = useForm();

	const onSubmit = data => {
		console.log(data);
	};

	console.log(errors);
	return (
		<form className="App" onSubmit={handleSubmit(onSubmit)}>
			<input
				type="text"
				placeholder="Username"
				name="username"
				ref={register({ required: true })}
			/>
			{errors.username && <p>Username required</p>}
			<input
				type="email"
				placeholder="Email"
				name="email"
				ref={register({ required: true })}
			/>
			<input
				type="password"
				placeholder="Password"
				name="password"
				ref={register({ required: true })}
			/>

			<input type="submit" />
		</form>
	);
};

export default App;

// import React, { useState } from 'react';

// const App = () => {
// 	const [firstName, setFirstName] = useState('');
// 	return (
// 		<form className="App">
// 			<input
// 				type="text"
// 				placeholder="First name"
// 				name="firstname"
// 				value={firstName}
// 				onChange={e => setFirstName(e.target.value)}
// 			/>
// 			<input type="submit" />
// 		</form>
// 	);
// };

// export default App;
