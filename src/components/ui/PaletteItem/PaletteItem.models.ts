import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { ColorItem } from '../../../store/color/color.models';

export interface PaletteItemProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    item: ColorItem;
    onRemove: (id: string) => void;
    onSelectColor: (id: string, color: string) => void;
    needOpen: boolean;
    onFirstOpen: (id: string) => void;
}
