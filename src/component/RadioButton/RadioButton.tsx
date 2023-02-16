import { RadioButtonProps } from './RadioButton.props';

export const RadioButton = ({ type, value, setSort }: RadioButtonProps): JSX.Element => {
	return (
		<label className='radioButton'>
			<input type='radio' name={type} className='input' onClick={() => setSort({ type, value: typeof (value) === 'object' ? value.length : value })} /> {value}
			<span className='radio'></span>
		</label>
	);
}