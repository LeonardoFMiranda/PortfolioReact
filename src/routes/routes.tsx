import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/pages/Home/Home';
import Portfolio from '../components/pages/Portfolio/Portfolio';
import Certificados from '../components/pages/Certificados/Certificados';
import Aboutme from '../components/pages/Aboutme/Aboutme';

function Rotas() {

    const routes = (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/portfólio' element={<Portfolio />}></Route>
            <Route path='/certificados' element={<Certificados />}></Route>
            <Route path='/sobre-mim' element={<Aboutme />}></Route>
        </Routes>
    )

    return (
        <>
            {routes}
        </>
    )
}

export default Rotas