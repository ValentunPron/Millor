import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface LoginWindowProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	status: boolean,
	setStatus: Function,
}
