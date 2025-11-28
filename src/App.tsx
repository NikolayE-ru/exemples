import { FC, useState } from 'react';
import { HooksShowcase } from './pages/HooksDemo.component';
import { StylesShowcase } from './pages/StylesDemo.component';
import { Navigation } from './components/Navigation/Navigation.component';
import './styles/index.style.scss';

const App: FC = () => {
    const [activeView, setActiveView] = useState<'hooks' | 'styles'>('hooks');

    return (
        <div className="app">
            <Navigation activeView={activeView} onViewChange={setActiveView} />
            {activeView === 'hooks' ? <HooksShowcase /> : <StylesShowcase />}
        </div>
    );
};

export default App;
