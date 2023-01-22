import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';
import { sortByRadioInterface } from '../../pages/Coffe/Coffe';

export interface FilterProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	sortByRadioItems: sortByRadioInterface;
	sortActive: string;
	setSortBy: Function;
	setSortRadio: Function;

}
