import PortfolioPage from '../portfolio-page';
import PortfolioData from '../portfolio-data';

const ScilentMusic = () => {
	const scilentMusicContent = PortfolioData.items[1];
	const nextPage = PortfolioData.items[2];

	return (
		<>
			<PortfolioPage
				title={scilentMusicContent.title}
				subtitle={scilentMusicContent.subtitle}
				desc={scilentMusicContent.description}
				overview={scilentMusicContent.overview}
				images={scilentMusicContent.images}
				features={scilentMusicContent.features}
				nextPage={nextPage}
			/>
		</>
	);
};

export default ScilentMusic;
