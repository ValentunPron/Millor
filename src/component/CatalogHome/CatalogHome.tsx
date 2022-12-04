import React from 'react';

import { CatalogHomeProps } from "./CataloHome.props"
import styles from './CatalogHome.module.scss';
import image01 from './../../image/CatalogHome/01.png';
import image02 from './../../image/CatalogHome/02.png';
import image03 from './../../image/CatalogHome/03.png'
import image04 from './../../image/CatalogHome/04.png'
import { CatalogItem } from './CatalogItem/CatalogItem';

const CatalogList = [
	{ id: 1, image: image01, name: 'Свежеобжаренный кофе' },
	{ id: 2, image: image02, name: 'Чай и кофейные напитки' },
	{ id: 3, image: image03, name: 'Продукция для вендинга' },
	{ id: 4, image: image04, name: 'Здоровое питание' },
]
console.log(image01);
export const CatalogHome = ({ ...props }: CatalogHomeProps): JSX.Element => {
	return (
		<div className={styles.catalog}>
			<div className="container">
				<h2 className="title">Каталоги нашей продукции</h2>
				<div className={styles.catalog__list}>
					{CatalogList.map((obj) => <CatalogItem key={obj.id} name={obj.name} image={obj.image} />)}
				</div>
			</div>
		</div >
	)
}
