import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface CartPaymentProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	totalPrice: number
}
