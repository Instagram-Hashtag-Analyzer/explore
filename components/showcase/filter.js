import { memo } from 'react';
import { categories, categoriesShort } from '../../showcase-manifest';
import { useIsMobile } from '../media-query';
import Container from '../container';
import Sticky from '../sticky'

function Filter({ onSelect, selectedId }) {
  const isMobile = useIsMobile();

  return (
    <Sticky offset={isMobile ? 120 : 80}>
      <Container center>
        <div className="categories">
          {categoriesShort.map((_, index) => {
            const id = categories[index];
            return (
              <button
                type="button"
                className={`no-tap-highlight short tab${selectedId === id ? ' selected' : ''} f6`}
                onClick={() => onSelect(id)}
                key={id}
              >
                {_}
              </button>
            );
          })}
          {categories.map((_, index) => {
            const id = categories[index];
            return (
              <button
                type="button"
                className={`no-tap-highlight not-short tab${
                  selectedId === id ? ' selected' : ''
                } f6`}
                onClick={() => onSelect(id)}
                key={id}
              >
                {_}
              </button>
            );
          })}
          {/*<Popover content={<div style={{ whiteSpace: 'nowrap' }}>Share your website!</div>}>
            <a
              href={links.submitShowcase}
              className="not-mobile"
              aria-label="Submit Your Website"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="tab f5" style={{ verticalAlign: 'top' }}>
                <HeartIcon />
              </span>
            </a>
          </Popover>*/}
        </div>
      </Container>

      <style jsx>{`
        .categories {
          display: grid;
          grid-template-columns: repeat(9, max-content);
          justify-content: center;
          justify-items: center;
          padding: 0.5rem 1rem;
          font-weight: 500;
          border-top: 1px solid transparent;
        }
        .categories *::selection {
          background-color: inherit;
          color: inherit;
        }
        .tab {
          background-color: transparent;
          border: none;
          outline: none;
          font-weight: inherit;
          display: inline-block;
          height: 100%;
          line-height: 2rem;
          position: relative;
          text-align: center;
          padding: 0 1.25rem;
          cursor: pointer;
          white-space: nowrap;
          text-transform: uppercase;
          border-radius: 7px;
          color: #696969;
        }
        .tab:hover {
          color: #000;
        }
        .tab.selected {
          background: rgba(0, 118, 255, 0.1);
          color: #0070f3;
        }
        .short {
          display: none;
        }

        @media screen and (max-width: 960px) {
          .categories {
            grid-template-columns: repeat(5, max-content);
          }
        }

        @media screen and (max-width: 640px) {
          .categories {
            grid-template-columns: repeat(4, max-content);
          }
          .tab {
            padding: 0 0.5rem;
            text-transform: unset;
          }
          .not-mobile,
          .not-short {
            display: none;
          }
          .short {
            display: unset;
            margin: 0 auto;
          }
        }
      `}</style>
    </Sticky>
  );
}

export default memo(Filter);
