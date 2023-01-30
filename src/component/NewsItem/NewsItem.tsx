import React from 'react';

import styles from './NewsItem.module.scss';
import { NewsItemProps } from './NewsItem.props';

export const NewsItem = ({ name, desc, image, author }: NewsItemProps): JSX.Element => {

	const truncateString = (str: string): string => {
		if (str.length > 280) {
			return str.slice(0, 280) + '...';
		}
		return str;
	}

	return (
		<article className={`${styles.newsItem}`}>
			<img src={image} alt={name} className={styles.contentImage} width={334} />
			<div className={styles.contentInfo}>
				<div>
					<h3 className={styles.contentTitle}>{name}</h3>
					<p className={styles.contentText}>{truncateString(desc)}</p>
					<div className={styles.contentBottom}>
						<span className={styles.contentAuthor}>Автор статьи: {author}</span>
						<a href="#s" className={styles.contentLink}>
							Докладніше
							<svg width="14" height="12" viewBox="0 0 14 12" fill="#F9B300" xmlns="http://www.w3.org/2000/svg">
								<path d="M13.5303 6.53033C13.8232 6.23744 13.8232 5.76256 13.5303 5.46967L8.75736 0.696699C8.46447 0.403806 7.98959 0.403806 7.6967 0.696699C7.40381 0.989593 7.40381 1.46447 7.6967 1.75736L11.9393 6L7.6967 10.2426C7.40381 10.5355 7.40381 11.0104 7.6967 11.3033C7.98959 11.5962 8.46447 11.5962 8.75736 11.3033L13.5303 6.53033ZM0 6.75H13V5.25H0V6.75Z" />
							</svg>
						</a>
					</div>
				</div>
			</div>
		</article>
	);
}