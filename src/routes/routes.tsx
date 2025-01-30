import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from '../components/pages/Home/Home';
import Portfolio from '../components/pages/Portfolio/Portfolio';
import Certificados from '../components/pages/Certificados/Certificados';
import Aboutme from '../components/pages/Aboutme/Aboutme';
import NotFound from '../components/pages/NotFound/NotFound';

function Rotas() {

    const routes = (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/portfolio' element={<Portfolio />}></Route>
            <Route path='/certificados' element={<Certificados />}></Route>
            <Route path='/sobre-mim' element={<Aboutme />}></Route>
            <Route path='*' element={<NotFound />}></Route>
        </Routes>
    )

    return (
        <>
            {routes}
        </>
    )
}

export default Rotas