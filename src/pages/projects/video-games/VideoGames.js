import data from './data.js';

// Background Header Img
import BackgroundHeaderB from 'assets/project/black/background-header.jpg';
import BackgroundHeaderW from 'assets/project/white/temple1.jpg';

//Img montage
import image from 'assets/project/image.png';


//Components import
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { Meta } from 'components/Meta';
import { ThemeProvider, useTheme } from 'components/ThemeProvider';
import { useAppContext } from 'hooks';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import { media } from 'utils/style';
import styles from './VideoGames.module.css';

const title = 'Melrock Production';
const description =
  "Expérience de montage vidéo sur mesure ! Faites briller vos projets grâce à mes services. Explorez mes créations captivantes ci-dessous et offrez à vos vidéos une touche d'excellence.";

const roles = ['Montage vidéo', 'Correction des couleurs', 'Montage audio', 'Animations'];

export const VideoGames = () => {
  const { themeId } = useTheme();
  const { dispatch } = useAppContext();

  const isDark = themeId === 'dark';
  const themes = ['dark', 'light'];

  return (
    <Fragment>
      <ProjectContainer className="spr">
        <Meta title={title} prefix="Projects" description={description} />
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.2}
          srcSet={isDark ? [BackgroundHeaderB] : [BackgroundHeaderW]}
          placeholder={BackgroundHeaderB}
        />
        <ProjectHeader title={title} description={description} roles={roles} />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={themeId}
              srcSet={[image]}
              placeholder={image}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        <div>
        {data.map((projectData) => {
          return (
                <ThemeProvider key={projectData.index} themeId={themes} data-invert>
                <ProjectSection
                  backgroundOverlayOpacity={isDark ? projectData.backgroundOverlayOpacity.black : projectData.backgroundOverlayOpacity.white}
                  backgroundElement={
                    <Image
                      srcSet={isDark ? [projectData.backgroundElement.srcImg.black] : [projectData.backgroundElement.srcImg.white]}
                      placeholder={projectData.backgroundElement.srcImg.black}
                      alt={projectData.backgroundElement.alt}
                      sizes="100vw"
                    />
                  }
                >
                  <ProjectSectionColumns width="full">
                    <ProjectSectionContent width="full">
                      <ProjectTextRow width="m">
                        <ProjectSectionHeading>{projectData.sectionHeading}</ProjectSectionHeading>
                        <ProjectSectionText>
                          <br />
                          <strong>Titre de la vidéo :</strong> {projectData.sectionText.titreVideo}
                          <br />
                          <strong>Date de création :</strong> {projectData.sectionText.dateCreation} <br />
                          <strong>Contexte :</strong> {projectData.sectionText.contexte}
                          <br />
                          <InstagramComponent data={projectData.sectionText.instagram}/>
                          <strong>Outils : </strong>{projectData.sectionText.outils}
                        </ProjectSectionText>
                      </ProjectTextRow>
                    </ProjectSectionContent>
                    <iframe
                      className={styles.video}
                      src={projectData.videoSrc}
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </ProjectSectionColumns>
                </ProjectSection>
              </ThemeProvider>
          );
        })}
        </div>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionHeading>Projet à venir</ProjectSectionHeading>
              <ProjectSectionText>
                Mes futurs projets seront affichés ci-dessous. Si vous êtes intéressé par
                un futur projet, vous pouvez <Link href="/contact">me contacter</Link> .
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
export const InstagramComponent = ({ data }) => {
  if (data) {
    return (
      <div>
        <strong>Instagram : </strong>
        {data}
      </div>
    );
  }
  // Si vous souhaitez également gérer le cas où data.instagram est faux, vous pouvez ajouter une autre instruction return ici.
  return null; // Par exemple, retourner null si data.instagram est faux.
};