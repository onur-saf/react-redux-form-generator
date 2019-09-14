import React from 'react' 
import {Router, Switch,Route} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import routes from '../routes/routes'
const history = createBrowserHistory()
class App extends React.Component{
    render(){
        return (
            <div>
                <Router history={history}>
                    <Switch>
                    {routes.map(({path,exact,component}) =>{
                        return <Route exact={exact} path={path} component={component}/>
                    })}
                    </Switch>
                </Router>
            </div>
        )
    }
}
export default App