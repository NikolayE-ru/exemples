import { FC, useState } from 'react';
import { StyleExample, StyleCategory } from './StylesDemo.type';
import './StylesDemo.style.scss';
import SassExample from '../components/StylesExemples/SassEx/SassExample.component';
import AdvancedTechniquesExemple from '../components/StylesExemples/AdvancedTechniquesEx/AdvancedTechniquesExemple.component';
import CssModulesExample from '../components/StylesExemples/CssModulesEx/CssModulesExample.component';
import PseudoClassesExample from '../components/StylesExemples/PseudoClassesEx/PseudoClassesExample.component';
import BemExample from '../components/StylesExemples/BemEx/BemExample.component';
import ClassNamingExample from '../components/StylesExemples/ClassNamingEx/ClassNamingExample.component';
import MediaFuncExample from '../components/StylesExemples/MediaFuncEx/MediaFuncExample.component';
import ResponsExample from '../components/StylesExemples/ResponsEx/ResponsExample.component';
import FlexboxGridExample from '../components/StylesExemples/FlexboxGridEx/FlexboxGridExample.component';

export const StylesShowcase: FC = () => {
    const [activeStyle, setActiveStyle] = useState<StyleExample>('sassScss');

    const renderStyleExample = () => {
        switch (activeStyle) {
            case 'sassScss':
                return <SassExample />;
            case 'advancedTechniques':
                return <AdvancedTechniquesExemple />;
            case 'PseudoClasses':
                return <PseudoClassesExample />;
            case 'bem':
                return <BemExample />;
            case 'classNaming':
                return <ClassNamingExample />;
            case 'cssModules':
                return <CssModulesExample />;
            case 'flexboxGrid':
                return <FlexboxGridExample />;
            case 'responsiveness':
                return <ResponsExample />;
            case 'mediaFunctions':
                return <MediaFuncExample />;
            default:
                return <SassExample />;
        }
    };

    const getCategoryItems = (category: StyleCategory): StyleExample[] => {
        switch (category) {
            case 'preprocessors':
                return ['sassScss', 'advancedTechniques', 'PseudoClasses'];
            case 'methodologies':
                return ['bem', 'classNaming', 'cssModules'];
            case 'modernCss':
                return ['flexboxGrid', 'responsiveness', 'mediaFunctions'];
            default:
                return [];
        }
    };

    const getCategoryTitle = (category: StyleCategory): string => {
        switch (category) {
            case 'preprocessors':
                return 'Препроцессор и псевдоклассы';
            case 'methodologies':
                return 'Методология и архитектура CSS';
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
            case 'PseudoClasses':
                return 'Псевдоклассы';
            case 'bem':
                return 'Методология БЭМ';
            case 'classNaming':
                return 'Именование классов';
                case 'cssModules':
                    return 'Модули CSS';
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
