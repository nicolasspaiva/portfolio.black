import type { ReactNode } from 'react';
import { useReveal } from '../hooks/useReveal';

type Props = {
    children: ReactNode;
    delay?: number;
    className?: string;
    as?: 'div' | 'section' | 'article' | 'footer';
};

/** Envelope de revelação — mantém o markup das seções limpo. */
const Reveal = ({ children, delay = 0, className = '', as: Tag = 'div' }: Props) => {
    const { ref, className: revealClass, style } = useReveal<HTMLDivElement>(delay);
    return (
        <Tag
            ref={ref as React.Ref<never>}
            className={`${revealClass} ${className}`.trim()}
            style={style}
        >
            {children}
        </Tag>
    );
};

export default Reveal;
