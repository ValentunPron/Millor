import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface ReviewsProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
	title: string,
	date: string,
	rating: number,
	description: string,
	user: { avatar: string, name: string, city: string }
}
