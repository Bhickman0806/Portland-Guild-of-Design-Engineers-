import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero/Hero';
import { Navigation } from './components/Navigation/Navigation';
import { ListImageSection } from './components/ListImageSection/ListImageSection';
import { LabeledCardGridSection } from './components/LabeledCardGridSection/LabeledCardGridSection';
import { Footer } from './components/Footer/Footer';
import { ApplyPage } from './pages/ApplyPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { LegalPage } from './pages/LegalPage';
import { ScrollToAnchor } from './components/ScrollToAnchor';
import codeIcon from './assets/icons/Code.png';
import messageCircleIcon from './assets/icons/Message circle.png';
import eyeOffIcon from './assets/icons/Eye off.png';
const lanternGif = '/pGPDsuportingSection.gif';
import { client } from './lib/sanity';
import imageUrlBuilder from '@sanity/image-url';
import './App.css';

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

function App() {
  const [heroData, setHeroData] = useState(null);
  const [heroCardsData, setHeroCardsData] = useState(null);
  const [membershipData, setMembershipData] = useState(null);
  const [salonsData, setSalonsData] = useState(null);
  const [navigationData, setNavigationData] = useState(null);
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    client.fetch(`*[_type == "hero"][0]`)
      .then((data) => setHeroData(data))
      .catch(console.error);

    client.fetch(`*[_type == "heroCards"][0]`)
      .then((data) => setHeroCardsData(data))
      .catch(console.error);

    client.fetch(`*[_type == "membershipCriteria"][0]`)
      .then((data) => setMembershipData(data))
      .catch(console.error);

    client.fetch(`*[_type == "salons"][0]`)
      .then((data) => setSalonsData(data))
      .catch(console.error);
      
    client.fetch(`*[_type == "navigation"][0]`)
      .then((data) => setNavigationData(data))
      .catch(console.error);

    client.fetch(`*[_type == "footer"][0]`)
      .then((data) => setFooterData(data))
      .catch(console.error);
  }, []);

  const heroCards = [
    {
      title: "For Design Engineers",
      bodyText: "These are career practitioners who bridge the gap between interface design and production-ready code.",
      variant: 'Default',
      direction: 'Horizontal',
      showButton: false,
      icon: <img src={codeIcon} alt="Code Icon" style={{ width: '24px', height: '24px', filter: 'brightness(0) invert(1)' }} />
    },
    {
      title: "For Designers",
      bodyText: "You spend your time looking at what exists, what could exist, and what should exist.",
      variant: 'Default',
      direction: 'Horizontal',
      showButton: false,
      icon: <img src={messageCircleIcon} alt="Message Circle Icon" style={{ width: '24px', height: '24px', filter: 'brightness(0) invert(1)' }} />
    },
    {
      title: "For Engineers",
      bodyText: "You spend your time trying to make things that could exist real. The rest is details.",
      variant: 'Default',
      direction: 'Horizontal',
      showButton: false,
      icon: <img src={eyeOffIcon} alt="Eye Off Icon" style={{ width: '24px', height: '24px', filter: 'brightness(0) invert(1)' }} />
    }
  ];

  const listItems = [
    {
      number: "01",
      cardProps: {
        title: "Dedicated Deep Dives",
        bodyText: "Each month features a specific technical or design theme explored through member presentations and group discussions.",
        variant: 'Default',
        direction: 'Vertical',
        showButton: false,
        showAsset: false,
      }
    },
    {
      number: "02",
      cardProps: {
        title: "Project Showcases",
        bodyText: "A dedicated space to share what you're building, get critical feedback, and find collaborators.",
        variant: 'Default',
        direction: 'Vertical',
        showButton: false,
        showAsset: false,
      }
    },
    {
      number: "03",
      cardProps: {
        title: "Problem Solving Sessions",
        bodyText: "Bring your toughest interface challenges. Break them down and solve them together with peers.",
        variant: 'Default',
        direction: 'Vertical',
        showButton: false,
        showAsset: false,
      }
    }
  ];

  const labeledCards = [
    {
      title: 'Digital Product Designers',
      bodyText: 'The Guild is composed of practitioners who create interactive designs and are directly instrumental in implementing them within functional products.'
    },
    {
      title: 'early adopters',
      bodyText: 'Ideal participants are individual contributors and managers who actively experiment with and share insights regarding AI coding agents, UX writing GPTs, and emerging delivery workflows.'
    },
    {
      title: 'Practicing Professionals',
      bodyText: 'Membership requires being actively employed full-time in the field. While teaching is a noble pursuit, the Guild is fundamentally an organization for applied professional practice.'
    },
    {
      title: 'Seasoned Experts',
      bodyText: 'The organization is designed for verified, high-level practitioners. Unlike public networking groups defined by career-stage noise or social media performance, the Guild serves those with significant professional tenure and accountability.'
    }
  ];

  return (
    <>
      <ScrollToAnchor />
      <Routes>
        <Route
          path="/"
          element={
            <div className="app-container">
              <Hero
                title={heroData?.title || "PORTLAND GUILD OF DESIGN ENGINEERS"}
                backgroundImage={heroData?.backgroundImage ? urlFor(heroData.backgroundImage).url() : undefined}
                cards={
                  heroCardsData?.cards?.length > 0
                    ? heroCardsData.cards.map(c => ({
                      title: c.title,
                      bodyText: c.bodyText,
                      variant: 'Default',
                      direction: 'Horizontal',
                      showButton: false,
                      icon: <img
                        src={c.icon === 'code' ? codeIcon : c.icon === 'eyeOff' ? eyeOffIcon : messageCircleIcon}
                        alt={`${c.icon} Icon`}
                        style={{ width: '24px', height: '24px', filter: 'brightness(0) invert(1)' }}
                      />
                    }))
                    : heroCards
                }
                platform="Desktop"
              />
              <Navigation 
                links={navigationData?.links} 
                actionLink={navigationData?.actionLink} 
              />
              <ListImageSection
                subtitle={salonsData?.subtitle || "The Salons"}
                title={salonsData?.title || "AN OPEN TABLE FOR ACTIVE PRACTITIONERS"}
                items={
                  salonsData?.items?.length > 0
                    ? salonsData.items.map(item => ({
                      number: item.number,
                      cardProps: {
                        title: item.title,
                        bodyText: item.bodyText,
                        variant: 'Default',
                        direction: 'Vertical',
                        showButton: false,
                        showAsset: false,
                      }
                    }))
                    : listItems
                }
                imageSrc={lanternGif}
                platform="Desktop"
              />
              <LabeledCardGridSection
                title={membershipData?.title || "Membership Criteria"}
                subtitle={membershipData?.subtitle || "What we’re looking for"}
                cards={membershipData?.cards?.length > 0 ? membershipData.cards : labeledCards}
              />
              <Footer 
                links={footerData?.links}
                actionLink={footerData?.actionLink}
              />
            </div>
          }
        />
        <Route path="/apply" element={<ApplyPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/legal" element={<LegalPage />} />
      </Routes>
    </>
  )
}

export default App
