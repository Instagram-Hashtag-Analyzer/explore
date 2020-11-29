import { memo, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAmp } from 'next/amp';
import cn from 'classnames';
import { SkipNavLink } from '@reach/skip-nav';
import NextLogo from './logo';
import Container from './container';
import GitHubLogo from './icons/github';
import FeedbackContext from './feedback-context';
import HeaderFeedback from './header-feedback';
import Button from './button';

function Navbar() {
  const { route } = useRouter();
  const isAmp = useAmp();
  const feedback = useContext(FeedbackContext);

  return (
    <Container center>
      <SkipNavLink tabIndex="0" />
      <h1 className="visually-hidden" aria-hidden="true">
        Explore
      </h1>
      <nav className="f-reset">
        <div className="mobile-top">
          <Link href="/">
            <a className="mobile-logo" title="Go to the homepage">
              <NextLogo />
            </a>
          </Link>
        </div>

        <div className="links">
          <Link href="/">
            <a className="logo" title="Go to the homepage">
              <NextLogo />
            </a>
          </Link>

          <Link href="/search">
            <a
              className={cn('mute', {
                selected: route.startsWith('/search')
              })}
              title="Search"
            >
              Search
            </a>
          </Link>

          <Link href="/analytics">
            <a
              className={cn('mute', {
                selected: route.startsWith('/analytics')
              })}
              title="Analytics"
            >
              Analytics
            </a>
          </Link>

          {!isAmp && feedback ? (
            <div className="header-feedback">
              <HeaderFeedback email />
            </div>
          ) : (
            <div className="no-feedback" />
          )}

          <a
            href="https://github.com/Instagram-Hashtag-Analyzer/explore"
            aria-label="Explore on GitHub"
            rel="noopener noreferrer"
            target="_blank"
            className="icon mute"
          >
            <GitHubLogo color="currentColor" />
          </a>
        </div>
      </nav>

      <style jsx>{`
        nav {
          position: relative;
          flex: 1;
          height: 80px;
          display: flex;
          align-items: center;
        }

        .links {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 1;
        }

        .links a {
          text-decoration: none;
          transition: color 0.2s ease;
          margin-left: 1rem;
        }

        .links a:hover {
          color: #000;
        }

        .links a.selected {
          color: #0070f3;
          text-shadow: 0px 0px 1px #0070f3;
        }

        .links a:first-child {
          display: flex;
          margin: 0;
        }

        a.icon,
        a.icon > :global(div.container) {
          /* Remove additional space from SVG */
          display: inline-flex;
          justify-content: center;
        }

        a.icon > :global(div.container) {
          overflow: visible;
        }

        .mobile-logo,
        .mobile-top {
          display: none;
        }

        .header-feedback {
          display: inline-flex;
        }

        .no-feedback {
          visibility: hidden;
          width: 90px;
        }

        a.icon.icon {
          margin-left: 0;
        }

        .learn :global(a) {
          background-color: rgba(0, 118, 255, 0.9);
          color: #fff;
          border: 1px solid rgba(0, 118, 255, 0.9);
          padding: 0.25rem 1rem;
          margin: 0;
          font-weight: 500;
        }
        .learn :global(a:focus),
        .learn :global(a:hover) {
          background-color: transparent;
          color: rgba(0, 118, 255, 0.9);
        }

        /* Can’t use !important, so increase specificity */
        .conf.conf.conf {
          position: relative;
          width: 132px;
          height: 36px;
          margin: 0;
        }

        .conf-button {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          z-index: 2;
        }

        .conf-text {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #000;
          font-weight: 500;
        }

        /* Mobile */

        @media (max-width: 800px) {
          .mobile-logo {
            display: block;
          }

          nav {
            height: unset;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            padding: 1rem 0;
          }

          nav .links .logo,
          nav .links .learn,
          nav .links .conf {
            display: none;
          }

          nav .links a {
            font-size: 14px;
          }

          nav .links a:nth-child(2) {
            margin: 0;
          }

          .mobile-top {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 0.5rem;
          }

          .mobile-top-right {
            display: flex;
            align-items: center;
          }

          .learn {
            margin-right: 0.5rem;
          }
        }

        @media (max-width: 1020px) {
          .header-feedback {
            display: none;
          }
        }
      `}</style>
    </Container>
  );
}

export default memo(Navbar);
