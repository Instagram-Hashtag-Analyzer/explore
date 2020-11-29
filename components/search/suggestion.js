import Link from 'next/link';
import { Highlight, Snippet } from 'react-instantsearch-dom';

// Possible subtitles, ordered by priority
const SECTIONS = ['section', 'subSection', 'summary'];

function Section({ hit }) {
  const sectionIndex = SECTIONS.findIndex(name => hit[name]);

  if (sectionIndex < 0) return null;

  const sectionName = SECTIONS[sectionIndex];
  // Find a lower priority subtitle to add to the current subtitle
  const subSectionName = SECTIONS.slice(sectionIndex + 1).find(name => hit[name]);

  return (
    <span className="suggestion__section">
      <Highlight hit={hit} attribute={sectionName} tagName="mark" />
      {subSectionName && (
        <>
          {' '}
          - <Highlight hit={hit} attribute={subSectionName} tagName="mark" />
        </>
      )}

      <style jsx>{`
        .suggestion__section {
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
          display: block;
        }
      `}</style>
    </span>
  );
}

export function getHitLinkProps(hit) {
  const hash = hit.anchor ? `#${hit.anchor}` : '';
  return { href: '/docs/[[...slug]]', as: hit.path + hash };
}

export default function Suggestion({ hit }) {
  return (
    <Link {...getHitLinkProps(hit)}>
      <a>
        <span className="suggestion__title">
          <Highlight hit={hit} attribute="title" tagName="mark" />
        </span>
        <Section hit={hit} />
        <span className="suggestion__content">
          <Snippet hit={hit} attribute="content" tagName="mark" />
        </span>

        <style jsx>{`
          .suggestion__title {
            font-weight: 500;
            margin-bottom: 0.5rem;
            display: flex;
          }
          .suggestion__content {
            color: #333333;
            display: block;
            line-height: 1.6;
          }
        `}</style>
      </a>
    </Link>
  );
}
