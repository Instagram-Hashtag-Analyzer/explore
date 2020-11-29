import React from 'react';
import Container from '../container';
import Button from '../button';

export default function Intro() {
  return (
    <Container role="main" wide center overflow>
      <Container>
        <div className="intro-container">
          <h1 className="title">
            Explore <br className="title-br-mobile" /> Instagram{' '}
            <br className="title-br-mobile" />
            #hashtags
          </h1>
          <h3 className="description">
            Pick the most suitable Instagram hashtags by just one search.
          </h3>
          <div className="main-button">
            <div className="button-spacer">
              <Button
                href="/search"
                invert
              >
                Start Exploring
              </Button>
            </div>

            <div className="button-spacer">
              <Button href="/docs" invert outline>
                Documentation
              </Button>
            </div>
          </div>
          <div>
            <div className="links">
              {/*<a href={links.license} rel="noopener noreferrer" target="_blank">*/}
                <span className="mute">License: MIT</span>
              {/*</a>*/}
              <div>
                <Button href="https://github.com/Instagram-Hashtag-Analyzer/explore">GitHub</Button>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <style jsx>{`
        .title {
          font-weight: 650;
          font-size: 48px;
          letter-spacing: -0.06em;
          line-height: 1.5;
          margin: 0 0 30px;
        }

        .description {
          font-weight: 400;
          font-size: 16px;
          line-height: 1.6;
          letter-spacing: -0.02em;
          color: var(--accents-5);
          margin: 0 0 40px;
        }

        .description br {
          display: none;
        }

        .main-button {
          margin-bottom: 30px;
        }

        .intro-container {
          padding: 40px 0 50px;
        }

        .title-br-mobile {
          display: block;
        }

        .title-br-desktop {
          display: none;
        }

        @media screen and (min-width: 500px) {
          .title-br-mobile {
            display: none;
          }

          .title-br-desktop {
            display: block;
          }
        }

        @media screen and (min-width: 780px) {
          .title {
            font-size: 70px;
            line-height: 1.1;
            letter-spacing: -0.07em;
          }

          .description-br {
            display: block;
          }

          .intro-container {
            padding: 60px 0 0;
          }
        }

        @media screen and (min-width: 1024px) {
          .title {
            font-size: 65px;
            line-height: 1;
          }

          .description {
            font-size: 20px;
          }

          .intro-container {
            padding: 100px 0 30px;
          }
        }

        .button-spacer {
          display: inline-block;
          padding: 10px;
        }

        .links {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .links > * {
          padding: 0 0.5rem;
        }
      `}</style>
    </Container>
  );
}
