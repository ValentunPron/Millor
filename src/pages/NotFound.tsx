import { Header, Footer } from '../component'

export const NotFound = (): JSX.Element => {
	return (
		<>
			<Header />
			<div className="notFound">
				<div className="container">
					<div className="notFound__body">
						<h1 className="title">Сторінку не найдено</h1>
						<h2 className="titleError">404</h2>
					</div>
				</div>
			</div>
			<Footer bgInfo={'error'} />
		</>

	);
}