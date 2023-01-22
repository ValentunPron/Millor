import styles from './TeaItem.module.scss';
import { TeaItemProps } from './TeaItem.props';

import { Poput } from '../../Poput/Poput';
import darkTea from '../../../assets/image/tea/darkTea.jpg';
import { Link } from 'react-router-dom';

export const TeaItem = (): JSX.Element => {

	const arrStar: any[] = ['', '', '', '', ''];

	const checkStart = (rating: number) => {
		return arrStar.map((value: any, index: number) => rating >= index + 1
			? <svg key={index} width={25} height={25} viewBox="0 0 25 23" fill="#F9B300" xmlns="http://www.w3.org/2000/svg">
				<path d="M12.5 0L15.3064 8.63729H24.3882L17.0409 13.9754L19.8473 22.6127L12.5 17.2746L5.15268 22.6127L7.95911 13.9754L0.611794 8.63729H9.69357L12.5 0Z" />
			</svg>
			: <svg key={index} width={25} height={25} viewBox="0 0 25 23" fill="#F0F0F0" xmlns="http://www.w3.org/2000/svg">
				<path d="M12.5 0L15.3064 8.63729H24.3882L17.0409 13.9754L19.8473 22.6127L12.5 17.2746L5.15268 22.6127L7.95911 13.9754L0.611794 8.63729H9.69357L12.5 0Z" />
			</svg>);
	}

	return (
		<div className={styles.teaItem}>
			<div className={styles.teaTop}>
				<div className={styles.rating}>
					<div className={styles.stars}>
						{checkStart(4)}
					</div>
					<p>{Number.isInteger(4) ? 4 + '.0' : 4}<span>({32} відгука)</span></p>
				</div>
				<Poput activeItem={250} items={[250, 500, 1000]} />
			</div>
			<div className={styles.image}>
				<Link to="test">
					<img src={darkTea} alt="Dark tea" width={220} height={310} />
				</Link>
			</div>
			<div className="teaBottom">

			</div>
		</div>
	);
}