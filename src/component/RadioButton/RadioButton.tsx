import { RadioButtonProps } from './RadioButton.props';
import styles from './RadioButton.module.scss';

export const RadioButton = ({ type, name }: RadioButtonProps): JSX.Element => {
	return (
		<label className={styles.label}>
			<input type='checkbox' name={type} className={styles.input} /> {name}
			<span className={styles.radio}></span>
		</label>
	);
}