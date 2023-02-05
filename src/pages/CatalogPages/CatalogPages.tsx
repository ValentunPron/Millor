import { Link, Navigate } from 'react-router-dom';
import { Footer, Header } from '../../component';

export const CatalogPages = ({ currentCoffe }: any): JSX.Element => {
	if (!currentCoffe) {
		return <Navigate to='/notFound' />
	}
	return (
		<>
			<Header headerActive={true} />
			<div className='pages'>
				<div className="container">
					<div className="pagesBody">
						<div className='catalogLinks'>
							<Link className='catalogLink black' to="/">Головна</Link>
							<Link className='catalogLink black' to="/">Каталог товаров</Link>
							<Link className='catalogLink black' to="/coffe">Свежеобжаренный кофе</Link>
							<Link className='catalogLink black' to={`/coffe/${currentCoffe.id}`}>{currentCoffe.name}</Link>
						</div>
					</div>
				</div>
			</div>
			<Footer bgInfo='transition' />
		</>
	);
}