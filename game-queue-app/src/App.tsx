import './styles/App.css';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';
import { HeaderComponent } from './Components/Basic/Header';
import { RoutesComponent } from './Components/Basic/Routes';
import { FooterComponent } from './Components/Basic/Footer';

function App() {
    return (
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
            <BrowserRouter>
                <HeaderComponent />

                <div className="container">
                    <main role="main" className="pb-3">
                        <RoutesComponent />
                    </main>
                </div>

                <FooterComponent />
            </BrowserRouter>
        </ErrorBoundary>
    );
}

export default App;
