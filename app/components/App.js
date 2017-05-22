import React from 'react';
import { ReactRouter, Switch, Route, BrowserRouter } from 'react-router-dom';
import Nav from './nav';
import Popular from './popular';
import Home from './home';
import Battle from './battle';
import Results from './results';


class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div className='container'>
				<Nav />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/battle' component={Battle} />
					<Route path='/battle/results' component={Results} />
					<Route path='/popular' component={Popular} />
					<Route render={function() {
						return <p>Not Found</p>
					}} />
				</Switch>
				</div>
			</BrowserRouter>
		)
	}
}

export default App;