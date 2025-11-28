import { FC } from 'react';
import './Navigation.style.scss';

interface NavigationProps {
    activeView: 'hooks' | 'styles';
    onViewChange: (view: 'hooks' | 'styles') => void;
}

export const Navigation: FC<NavigationProps> = ({ activeView, onViewChange }) => {
    return (
        <div className="navigation">
            <button
                className={`nav-button ${activeView === 'hooks' ? 'active' : ''}`}
                onClick={() => onViewChange('hooks')}
            >
                Хуки
            </button>
            <button
                className={`nav-button ${activeView === 'styles' ? 'active' : ''}`}
                onClick={() => onViewChange('styles')}
            >
                Стили
            </button>
        </div>
    );
};
