import React, { Component } from 'react';
import { render } from 'react-dom';
import styles from './index.css';
import dva from 'dva';

class Appp extends Component {
    render() {
        return (
            <div>Hello World!</div>
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
// app.router(require('./router').default);

function RouterConfig({ history }) {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Appp} />
        </Switch>
      </Router>
    );
}

app.router(RouterConfig);
  
// 5. Start
app.start('#root');

// class App extends Component {
//     render() {
//         return (
//             <div className={ styles.appContent }>
//                 Hello World!
//             </div>
//         );
//     }
// }

// render(<App />, document.getElementById('root'));