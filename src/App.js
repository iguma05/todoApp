import './App.css';

import './components/stylesAll.css';
import { Header } from './components/header';
import { Main } from './components/main';

function App() {
	const data = [
		{ text: 'Completed task' },
		{ text: 'Editing task' },
		{ text: 'Active task' },
	];

	return (
		<section className='todoapp'>
			<Header />
			<Main content={data} />
		</section>
	);
}

export default App;
