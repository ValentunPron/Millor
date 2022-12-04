import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface CatalogItemProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	name: string,
	image: string,
}
