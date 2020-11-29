import Container from '../container';
import SectionHeader from '../section-header';
import { ORG_NAME } from '../../lib/constants';
import Search from '../search';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { useState, useRef } from 'react';

export default function Title() {
  const [opened, setOpen] = useState(false);

  const searchRef = useRef();
  const menuRef = useRef();

  const closeMenu = () => {
    enableBodyScroll(menuRef.current);
    setOpen(false);
  };
  const onSearchStart = () => {
    disableBodyScroll(searchRef.current);
    closeMenu();
  };
  const onSearchClear = () => {
    enableBodyScroll(searchRef.current);
  };
  const onRouteChange = () => {
    closeMenu();
  };

  return (
    <Container center region="showcase">
      <div className="showcase-title">
        <SectionHeader
          id="showcase"
          title="Explore #hashtags"
          margin="0 0 1rem 0"
          description={<span>Pick the most suitable Instagram hashtags by just one search.</span>}
          /*description={
            <span>
              Meet hundreds of beautiful websites <br className="display-mobile" />
              built with Next.js by {ORG_NAME}
            </span>
          }*/
        />
        <div className="search-container">
          <Search
            id="mobile-search"
            isMobile
            containerRef={searchRef}
            onSearchStart={onSearchStart}
            onSearchClear={onSearchClear}
            onRouteChange={onRouteChange}
          />
        </div>
      </div>

      <style jsx>{`
        .showcase-title {
          display: flex;
          padding-top: 2rem;
          padding-bottom: 2rem;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
        }
        .search-container {
          width: 80%;
        }
      `}</style>
    </Container>
  );
}
