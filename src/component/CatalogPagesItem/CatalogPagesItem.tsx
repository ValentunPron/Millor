import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CatalogPages } from '../../pages';
import { fetchCoffe } from '../../redux/action/coffe';
import { fetchCatalogItem } from '../../redux/action/catalogItem';
import { fetchTea } from '../../redux/action/tea';
import { fetchVending } from '../../redux/action/vending';

export const CatalogPagesItem = (): JSX.Element => {
	const params = useParams();

	const dispatch: Function = useDispatch();

	const test: any = useSelector(({ coffe, tea, vending, eating }: any) => {
		return {
			coffe: coffe.items,
			tea: tea.items,
			vending: vending.items,
			eating: eating.items
		}
	});

	React.useEffect(() => {
		switch (params.name) {
			case 'coffe': return dispatch(fetchCoffe());
			case 'tea': return dispatch(fetchTea());
			case 'eating': return dispatch(fetchVending());
			case 'vending': return dispatch(fetchCatalogItem('https://63d14d40120b32bbe8f59c99.mockapi.io/vending'));
			default: break
		}
	}, []);

	const currentItem = test[String(params.name)].filter((items: any) => String(items._id) === String(params.id));

	return (
		<CatalogPages currentItem={currentItem[0]} linkTo={params.name} />
	);
}