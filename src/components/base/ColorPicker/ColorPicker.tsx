import React, { ForwardedRef, forwardRef } from 'react';
import { ColorPickerProps } from './ColorPicker.models';

const ColorPicker = forwardRef((props: ColorPickerProps, ref: ForwardedRef<HTMLInputElement>) => (
    <input {...props} type="color" ref={ref}/>)
);

ColorPicker.displayName = 'ColorPicker';

export default ColorPicker;
