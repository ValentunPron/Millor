import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface CategoryButtonProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	name: string,
	children: any,
}
