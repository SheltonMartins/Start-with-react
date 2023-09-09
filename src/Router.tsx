import { Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { History } from './components/History'
import { DeafaultLayout } from './layouts/DafaultLayout'

export function Router() {
    return (

        <Routes>
            <Route path='/' element={<DeafaultLayout/>}>
                <Route path='/' element={<Home />} />
                <Route path='/history' element={<History />} />
            </Route>
        </Routes>

    )
}