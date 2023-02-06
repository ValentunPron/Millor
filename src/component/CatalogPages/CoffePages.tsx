import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CatalogPages } from '../../pages';

export const CoffePages = (db: any): JSX.Element => {
	const params = useParams();

	let { coffe } = useSelector(({ coffe }: any) => {
		return {
			coffe: coffe.items,
		}
	});

	const currentItem = coffe.filter((coffe: any) => String(coffe.id) === String(params.id));

	return (
		<CatalogPages currentItem={currentItem[0]} />
	);
}