import './App.css';

import './components/stylesAll.css';
import { Header } from './components/header';
import { Main } from './components/main';

function App() {
	const data = [
		{ text: 'Completed task', id: 1 },
		{ text: 'Editing task', id: 2 },
		{ text: 'Active task', id: 3 },
	];

	return (
		<section className='todoapp'>
			<Header />
			<Main content={data} />
		</section>
	);
}

export default App;
