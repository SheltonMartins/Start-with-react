import { Header } from '../../components/Header';
import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styles';

export function DeafaultLayout() {
    return (
        <>
            <LayoutContainer>
                <Header></Header>
                <Outlet></Outlet>    
            </LayoutContainer>
            
        </>
    )
}