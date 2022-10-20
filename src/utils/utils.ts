import { v4 } from 'uuid';

export const generateId = (): string => v4();

export const generateRandomColor = (): string => `#${(Math.random() * 0xFFFFFF << 0).toString(16)}`;
