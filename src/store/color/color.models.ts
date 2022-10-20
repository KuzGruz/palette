export interface ColorState {
    colors: ColorItem[];
    lastId: string | null;
}

export interface ColorItem {
    id: string;
    color: string;
}
