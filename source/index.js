import React from 'react';
import dva from 'dva';
import { Router, Route, Switch } from 'dva/router';
import styles from './index.css';

class Hello extends React.Component {
    render() {
        return (
            <div className={ styles.appContent }>Hello World!</div>
        );        
    }
}

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);

// 4. Router
app.router(({ history }) => (
    <Router history={ history }>
        <Switch>
           <Route path="/" exact component={ Hello } />
        </Switch>
    </Router>
));
  
// 5. Start
app.start('#root');