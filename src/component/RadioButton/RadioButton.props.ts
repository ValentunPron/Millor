import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface RadioButtonProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
	type: string,
	value: string | number | any[],
	setSort: Function,
}
