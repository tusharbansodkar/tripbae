import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';


function Router() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home} />
        </BrowserRouter>
    )
}

export default Router;