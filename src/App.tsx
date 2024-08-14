import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SiteHeader from '@/components/SiteHeader';

const App = () => {
   

    return (
        <>
           
            <BrowserRouter>
             <SiteHeader />
                <Routes>
                    <Route path="/" element={<h1>Menu</h1>} />
                    <Route
                        path="/bolalaruchun"
                        element={<h1>Bolalar uchun</h1>}
                    />
                    <Route path="/filiallar" element={<h1>Filiallar</h1>} />
                </Routes>
            </BrowserRouter>

            
        </>
    );
};

export default App;
