import { RadioButtonProps } from './RadioButton.props';
import styles from './RadioButton.module.scss';

export const RadioButton = ({ type, value, setSort }: RadioButtonProps): JSX.Element => {
	return (
		<label className={styles.label}>
			<input type='radio' name={type} className={styles.input} onClick={() => setSort({ type, value: typeof (value) === 'object' ? value.length : value })} /> {value}
			<span className={styles.radio}></span>
		</label>
	);
}