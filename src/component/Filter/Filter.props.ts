import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';
import { categoryListInterface, sortByInterface } from '../../pages/Coffe/Coffe';

export interface FilterProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	sortBy: sortByInterface[];
	sortActive: string;
	category: categoryListInterface,
	setFilter: Function,

}
