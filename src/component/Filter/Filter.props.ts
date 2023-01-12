import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';
import { sortByRadioInterface, sortByInterface } from '../../pages/Coffe/Coffe';

export interface FilterProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	sortBy: sortByInterface[];
	sortByRadioItems: sortByRadioInterface;
	sortActive: string;
	setSortBy: Function;
	setSortRadio: Function;

}
