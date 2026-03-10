import React, { useState } from 'react';
import { Navigation } from '../components/Navigation/Navigation';
import { Footer } from '../components/Footer/Footer';
import { Button } from '../components/Button/Button';
import './ApplyPage.css';

export const ApplyPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [linkedin, setLinkedin] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-container">
      <Navigation />
      <main className="page-main">
        <section className="apply-hero">
          <div className="apply-hero__inner">
            <h1 className="apply-title">REQUEST APPLICATION REVIEW</h1>
            <p className="apply-subtitle">Submit your email and LinkedIn profile for review by the membership committee.</p>
          </div>
        </section>
        <section className="apply-form-section">
          <div className="apply-form-section__inner">
            {submitted ? (
              <div className="apply-success">
                <h2>Your application has been received.</h2>
                <p>The membership committee will be in touch.</p>
              </div>
            ) : (
              <form className="apply-form" onSubmit={handleSubmit}>
                <div className="apply-field">
                  <label className="apply-label" htmlFor="email">Email Address</label>
                  <input
                    className="apply-input"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    autoComplete="email"
                    required
                  />
                </div>
                <div className="apply-field">
                  <label className="apply-label" htmlFor="linkedin">LinkedIn Profile URL</label>
                  <input
                    className="apply-input"
                    id="linkedin"
                    type="url"
                    name="linkedin"
                    placeholder="https://linkedin.com/in/yourname"
                    value={linkedin}
                    onChange={e => setLinkedin(e.target.value)}
                    autoComplete="url"
                    required
                  />
                  <span className="apply-helper">Include the full URL starting with https://</span>
                </div>
                <div className="apply-submit">
                  <Button type="submit">Submit for Review</Button>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ApplyPage;
