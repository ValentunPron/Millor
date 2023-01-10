import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';
import { sortByInterface } from '../../pages/Coffe/Coffe';

export interface FilterProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	sortBy: sortByInterface[];
	sortActive: string;
	setSort: Function,
}
