import PortfolioPage from '../portfolio-page';
import PortfolioData from '../portfolio-data';

const F123 = () => {
	const f123Content = PortfolioData.items[2];
	const nextPage = PortfolioData.items[0];

	return (
		<>
			<PortfolioPage
				title={f123Content.title}
				subtitle={f123Content.subtitle}
				desc={f123Content.description}
				overview={f123Content.overview}
				images={f123Content.images}
				features={f123Content.features}
				nextPage={nextPage}
			/>
		</>
	);
};

export default F123;
