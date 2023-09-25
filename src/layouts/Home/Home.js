import image from 'assets/project/image.png';
import telephone1 from 'assets/project/telephone1.jpg';
import telephone2 from 'assets/project/telephone2.jpg';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const disciplines = ['Étalonnage', 'Animation'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Melrock Production"
        description="Entrez dans mon univers créatif et découvrez mon savoir-faire de monteur vidéo, bienvenue sur mon site ! Portfolio de Melrock."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Montage vidéo"
        description="Création et édition de vidéos en utilisant des techniques de montage spécialisées pour améliorer la qualité du contenu et attirer un public plus large. Travail sur plusieurs logiciels tels que la suite Adobe, Davinci Resolve ou Avid Media Composer. Montage, étalonnage, ajout d'effets spéciaux, mixage audio et création d'une identité visuelle unique pour vos projets."
        buttonText="Voir les projets"
        buttonLink="/projects/video-games"
        model={{
          type: 'laptop',
          textures: [
            {
              srcSet: [image, image],
              placeholder: image,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Maintenance"
        description="Créez du contenu vertical adapté aux réseaux sociaux tels que TikTok, Instagram, etc."
        buttonText="Voir les projets"
        buttonLink=""
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [telephone1, telephone1],
              placeholder: telephone1,
            },
            {
              srcSet: [telephone2, telephone2],
              placeholder: telephone2,
            },
          ],
        }}
      />

      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
