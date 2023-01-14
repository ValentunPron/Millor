import ContentLoader from "react-content-loader"

export const CoffeLoading = (): JSX.Element => {
	return (
		<ContentLoader
			speed={1}
			width={'100%'}
			height={600}
			viewBox="0 0 360 600"
			backgroundColor="#fff7e9"
			foregroundColor="#ffffff"
		>
			<rect x="0" y="0" rx="20" ry="20" width="300%" height="600" />
		</ContentLoader>
	)
}