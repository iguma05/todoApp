import './App.css';

import './components/stylesAll.css';
import { Header } from './components/header';
import { Main } from './components/main';

function App() {
	const data = ['Completed task', 'Editing task', 'Active task'];

  
	return (
		<section className='todoapp'>
			<Header />
			<Main props={data} />
		</section>
	);
}

export default App;
