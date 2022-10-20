import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface HeaderModels extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
}

export interface NavigationLinks {
    title: string;
    link: string;
    end?: boolean;
}

export const links: NavigationLinks[] = [
    {title: 'Форма', link: '/', end: true},
    {title: 'Палитра', link: '/palette'}
];
