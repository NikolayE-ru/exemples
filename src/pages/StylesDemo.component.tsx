import { FC, useState } from 'react';
import { StyleExample, StyleCategory } from './StylesDemo.type';
import './StylesDemo.style.scss';

export const StylesShowcase: FC = () => {
    const [activeStyle, setActiveStyle] = useState<StyleExample>('sassScss');

    const renderStyleExample = () => {
        switch (activeStyle) {
            case 'sassScss':
                return <div className="example-placeholder">Sass/SCSS</div>;
            case 'advancedTechniques':
                return <div className="example-placeholder">Продвинутые техники</div>;
            case 'integration':
                return <div className="example-placeholder">Интеграция</div>;
            case 'bem':
                return <div className="example-placeholder">Методология БЭМ</div>;
            case 'classNaming':
                return <div className="example-placeholder">Именование классов</div>;
            case 'flexboxGrid':
                return <div className="example-placeholder">CSS Flexbox и Grid</div>;
            case 'responsiveness':
                return <div className="example-placeholder">Адаптивность</div>;
            case 'mediaFunctions':
                return <div className="example-placeholder">Медиа-функции</div>;
            default:
                return <div className="example-placeholder">Sass/SCSS</div>;
        }
    };

    const getCategoryItems = (category: StyleCategory): StyleExample[] => {
        switch (category) {
            case 'preprocessors':
                return ['sassScss', 'advancedTechniques', 'integration'];
            case 'methodologies':
                return ['bem', 'classNaming'];
            case 'modernCss':
                return ['flexboxGrid', 'responsiveness', 'mediaFunctions'];
            default:
                return [];
        }
    };

    const getCategoryTitle = (category: StyleCategory): string => {
        switch (category) {
            case 'preprocessors':
                return 'Препроцессоры';
            case 'methodologies':
                return 'Методологии и архитектура CSS';
            case 'modernCss':
                return 'Современный CSS и адаптивный дизайн';
            default:
                return '';
        }
    };

    const getExampleTitle = (example: StyleExample): string => {
        switch (example) {
            case 'sassScss':
                return 'Sass/SCSS';
            case 'advancedTechniques':
                return 'Продвинутые техники';
            case 'integration':
                return 'Интеграция';
            case 'bem':
                return 'Методология БЭМ';
            case 'classNaming':
                return 'Именование классов';
            case 'flexboxGrid':
                return 'CSS Flexbox и Grid';
            case 'responsiveness':
                return 'Адаптивность';
            case 'mediaFunctions':
                return 'Медиа-функции';
            default:
                return '';
        }
    };

    return (
        <div className='styles-demo'>
            <header className='demo-header'>
                <h1>Современный CSS</h1>
            </header>

            <nav className='demo-nav demo-nav--styles'>
                {(['preprocessors', 'methodologies', 'modernCss'] as StyleCategory[]).map((category) => (
                    <div key={category} className='nav-category'>
                        <h3 className='category-title'>{getCategoryTitle(category)}</h3>
                        <div className='category-buttons'>
                            {getCategoryItems(category).map((example) => (
                                <button
                                    key={example}
                                    className={`nav-button ${activeStyle === example ? 'active' : ''}`}
                                    onClick={() => setActiveStyle(example)}
                                >
                                    {getExampleTitle(example)}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </nav>

            <main className='demo-content'>{renderStyleExample()}</main>
        </div>
    );
};
