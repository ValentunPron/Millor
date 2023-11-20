import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CatalogPages } from '../../pages';
import { fetchCoffe } from '../../redux/action/coffe';
import { fetchCatalogItem } from '../../redux/action/catalogItem';

export const CatalogPagesItem = (): JSX.Element => {
	const params = useParams();
	const dispatch: Function = useDispatch();

	const test: any = useSelector(({ coffe, catalogItem }: any) => {
		return {
			coffe: coffe.items,
			tea: catalogItem.items,
			eating: catalogItem.items,
			vending: catalogItem.items
		}
	});

	React.useEffect(() => {
		switch (params.name) {
			case 'coffe': return dispatch(fetchCoffe());
			case 'tea': return dispatch(fetchCatalogItem('https://63b42226ea89e3e3db573ace.mockapi.io/tea'));
			case 'eating': return dispatch(fetchCatalogItem('https://63d14d40120b32bbe8f59c99.mockapi.io/eating'));
			case 'vending': return dispatch(fetchCatalogItem('https://63d14d40120b32bbe8f59c99.mockapi.io/vending'));
			default: break
		}
	}, []);

	const currentItem = test[String(params.name)].filter((coffe: any) => String(coffe._id) === String(params.id));

	return (
		<CatalogPages currentItem={currentItem[0]} linkTo={params.name} />
	);
}