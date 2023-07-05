import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Pokemons } from './pokemons'
import { getPokemons } from '../services/get-pokemons'

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Pokemons />} />
            
        </Routes>
    </BrowserRouter>
)

export { AppRoutes }