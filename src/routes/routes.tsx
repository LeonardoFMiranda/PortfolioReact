import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/pages/Home/Home';
import Portfolio from '../components/pages/Portfolio/Portfolio';

function Rotas() {

    const routes = (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/portfólio' element={<Portfolio />}></Route>
        </Routes>
    )

    return (
        <>
            {routes}
        </>
    )
}

export default Rotas