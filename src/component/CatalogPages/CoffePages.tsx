import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CatalogPages } from '../../pages';
import { fetchCoffe } from '../../redux/action/coffe';
import { fetchEating } from '../../redux/action/eating';
import { fetchTea } from '../../redux/action/tea';
import { fetchVending } from '../../redux/action/vending';

export const CoffePages = (): JSX.Element => {
	const params = useParams();
	const dispatch: Function = useDispatch();

	const test: any = useSelector(({ coffe, tea, eating, vending }: any) => {
		return {
			coffe: coffe.items,
			tea: tea.items,
			eating: eating.items,
			vending: vending.items,
		}
	});

	React.useEffect(() => {
		switch (params.name) {
			case 'coffe': return dispatch(fetchCoffe());
			case 'tea': return dispatch(fetchTea());
			case 'eating': return dispatch(fetchEating());
			case 'vending': return dispatch(fetchVending());
			default: break
		}
	}, []);

	const currentItem = test[String(params.name)].filter((coffe: any) => String(coffe.id) === String(params.id));

	return (
		<CatalogPages currentItem={currentItem[0]} linkTo={params.name} />
	);
}