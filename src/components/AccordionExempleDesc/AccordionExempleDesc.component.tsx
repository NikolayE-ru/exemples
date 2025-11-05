import { FC, useState } from 'react';
import { AccordionExempleDescProps } from './AccordionExempleDesc.type';
import './AccordionExempleDesc.style.scss';

const AccordionExempleDesc: FC<AccordionExempleDescProps> = ({
    title,
    children,
    defaultOpen = false,
    className = '',
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);

    const toggleAccordion = (): void => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`accordion-example ${className}`}>
            <button className='accordion-header' onClick={toggleAccordion} aria-expanded={isOpen}>
                <span className='accordion-title'>{title}</span>
                <span className={`accordion-icon ${isOpen ? 'open' : ''}`}>
                    <svg width='12' height='12' viewBox='0 0 12 12' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M2 4L6 8L10 4' stroke='currentColor' strokeWidth='2' fill='none' />
                    </svg>
                </span>
            </button>
            <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
                <div className='accordion-inner'>{children}</div>
            </div>
        </div>
    );
};

export default AccordionExempleDesc;
