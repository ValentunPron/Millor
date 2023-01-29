import { CategoryButtonProps } from './CategoryButton.props';
import styles from './CategoryButton.module.scss';

export const CategoryButton = ({ name, onClick, children }: CategoryButtonProps): JSX.Element => {
	return (
		<button className={styles.categoryButton} onClick={onClick}>
			<h3 className={styles.categoryTitle}>{name}</h3>
			{children}
		</button>
	);
}