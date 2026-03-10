import React from 'react';
import { Navigation } from '../components/Navigation/Navigation';
import { Footer } from '../components/Footer/Footer';
import './PolicyPage.css';

export const LegalPage = () => {
  return (
    <div className="page-container">
      <Navigation />
      <main className="page-main">
        <section className="policy-hero">
          <div className="policy-hero__inner">
            <h1 className="policy-title" id="legal">LEGAL</h1>
            <p className="policy-subtitle">Open source acknowledgments and copyright notice.</p>
          </div>
        </section>
        <section className="policy-body">
          <div className="policy-body__inner">
            <h2 className="policy-section-heading" id="open-source">Open Source Acknowledgments</h2>
            <p className="policy-body-text">
              This site is built with open source software. A full list of libraries and their respective licenses will be published here prior to launch. Libraries currently in use include React, Vite, and related tooling.
            </p>
            <hr className="policy-divider" />
            <h2 className="policy-section-heading" id="copyright">Copyright</h2>
            <p className="policy-body-text">
              Copyright © 2026 [Owner Name]. All rights reserved.
            </p>
            <p className="policy-body-text">
              The name Portland Guild of Design Engineers, associated marks, and site content are the property of [Owner Name]. Unauthorized reproduction or distribution is prohibited.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LegalPage;
