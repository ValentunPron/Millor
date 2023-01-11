import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface RadioButtonProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
	type: string,
	name: string | number | any[],
	setCategory: any
}
