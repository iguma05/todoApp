import './App.css';

import './components/stylesAll.css';
import { Header } from './components/header';
import { Main } from './components/main';

function App() {
	return (
		<div className='todoapp'>
			<Header />
			<Main />
		</div>
	);
}

export default App;
