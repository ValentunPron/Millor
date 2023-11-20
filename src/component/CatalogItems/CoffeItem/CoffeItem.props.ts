import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';
import { CoffeInterface } from '../../../types/ICoffe';

export interface CoffeItemProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	currentCoffe: CoffeInterface,
	onClickAddCoffe: any,
}
