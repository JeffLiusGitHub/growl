import logo from './logo.svg';
import './App.css';
import { Growl, useGrowl } from 'growl-package';
function App() {
	const [active, setActive] = useGrowl();
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>

				<a className="App-link" href="#" onClick={() => void setActive(true)}>
					Clik here to activate the growl
				</a>
			</header>
			<Growl
				onDismissed={() => setActive(false)}
				active={active}
				message=" Hello World!"
				// time={5000}
			/>
		</div>
	);
}

export default App;
