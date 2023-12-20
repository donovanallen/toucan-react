import PortfolioPage from '../portfolio-page';
import PortfolioData from '../portfolio-data';

const GiftGuide = () => {
	const giftGuideContent = PortfolioData.items[0];
	const nextPage = PortfolioData.items[1];

	return (
		<>
			<PortfolioPage
				title={giftGuideContent.title}
				subtitle={giftGuideContent.subtitle}
				desc={giftGuideContent.description}
				overview={giftGuideContent.overview}
				images={giftGuideContent.images}
				features={giftGuideContent.features}
				nextPage={nextPage}
			/>
		</>
	);
};

export default GiftGuide;
