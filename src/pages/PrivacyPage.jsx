import React from 'react';
import { Navigation } from '../components/Navigation/Navigation';
import { Footer } from '../components/Footer/Footer';
import './PolicyPage.css';

export const PrivacyPage = () => {
  return (
    <div className="page-container">
      <Navigation />
      <main className="page-main">
        <section className="policy-hero">
          <div className="policy-hero__inner">
            <h1 className="policy-title" id="privacy-policy">PRIVACY POLICY</h1>
            <p className="policy-subtitle">How we handle your information.</p>
          </div>
        </section>
        <section className="policy-body">
          <div className="policy-body__inner">
            <h2 className="policy-section-heading" id="information-we-collect">Information We Collect</h2>
            <p className="policy-body-text">
              When you submit an application for membership review, we collect your email address and LinkedIn profile URL. This information is used solely to evaluate your application and communicate with you regarding membership status.
            </p>
            <p className="policy-body-text">
              We do not collect analytics data, tracking cookies, or any personal information beyond what you voluntarily submit through the application form.
            </p>
            <hr className="policy-divider" />
            <h2 className="policy-section-heading" id="how-we-use">How We Use Your Information</h2>
            <p className="policy-body-text">
              Information you provide is reviewed by the membership committee and is not shared with third parties. We retain application data only as long as necessary to complete the review process.
            </p>
            <hr className="policy-divider" />
            <h2 className="policy-section-heading" id="contact">Contact</h2>
            <p className="policy-body-text">
              If you have questions about this policy, please use the application form to reach the membership committee.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPage;
