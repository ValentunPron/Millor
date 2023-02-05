import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CatalogPages } from '../../pages';
import { fetchCoffe } from '../../redux/action/coffe';

export const CoffePages = (): JSX.Element => {
	const dispatch: Function = useDispatch();
	React.useEffect(() => {
		dispatch(fetchCoffe());
	}, []);
	const params = useParams();
	const { coffe } = useSelector(({ coffe }: any) => {
		return {
			coffe: coffe.items,
		}
	});
	const currentCoffe = coffe.filter((coffe: any) => String(coffe.id) === String(params.id));

	return (
		<CatalogPages currentCoffe={currentCoffe[0]} />
	);
}