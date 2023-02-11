import styles from './Reviews.module.scss';
import { ReviewsProps } from "./Reviews.props";
import image01 from "../../assets/image/Reviews/01.jpg"

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

export const Reviews = ({ title, date, rating, description, user }: ReviewsProps) => {
	return (
		<div className={styles.reviewsItem}>
			<div className={styles.reviewsContainer}>
				<div className={styles.reviewsBody}>
					<span className={styles.reviewsQuotes}>“”</span>
					<div className={styles.reviewsTop}>
						<h3 className={styles.reviewsTitle}>{title}!</h3>
						<time className={styles.reviewsData}>{date}</time>
					</div>
					<div className={styles.reviewsStars}>
						{checkStart(rating)}
					</div>
					<p className={styles.reviewsDesc}>{description}</p>
				</div>
			</div>
			<div className={styles.reviewsBottom}>
				<div className={styles.reviewsContainer}>
					<div className={styles.reviewsUser}>
						<img src={user.avatar} alt="avatar" width={70} height={70} />
						<div className={styles.userContent}>
							<span className={styles.userName}>{user.name}</span>
							<span className={styles.userCity}>м. {user.city}</span>
						</div>
					</div>
				</div>
			</div>
		</div >
	);
}