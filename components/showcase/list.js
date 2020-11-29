import { memo } from 'react';
import React, { useEffect } from 'react';
import { List, WindowScroller } from 'react-virtualized';
import { directionalProperty } from 'polished';

import Button from '../button';
import Container from '../container';
import SitePreview from './site-preview';

import ArrowUpIcon from '../icons/arrow-up';

import { sortedByAlexa } from '../../showcase-manifest';

export default memo(function ListComponent(props) {
  //console.log(props.data)
  const GAP_X = 48;
  const GAP_Y = 48;
  const ROW_HEIGHT = 220 + GAP_Y;

  function getData(category) {
    // For the moment marketing is a clone of e-commerce
    if (category === 'marketing') category = 'e-commerce';
    if (category === 'all') return props.data.hashtags;
    return sortedByAlexa.filter(item => item.tags && item.tags.includes(category));
  }

  let dataCategory = 'All';
  let dataSource = getData('all');

  const getRowHeight = ({ index }, columnCount) => {
    if (columnCount < 3) {
      // no highlighted
      return 1;
    }
    let height = 1;
    const startIndex = index * columnCount;
    for (let i = 0; i < columnCount; ++i) {
      if (dataSource[startIndex + i] && dataSource[startIndex + i].highlighted) {
        height *= columnCount - 1;
        return height;
      }
    }
    return height;
  };

  const SitePreviewPlaceholder = () => (
    <div
      style={{
        flex: 1,
        height: '100%'
      }}
    />
  );

  const scrollTo = top => {
    window.scrollTo({ top, left: 0, behavior: 'smooth' });
  };

  const getRowRender = columnCount => ({ index, isScrolling, isVisible, key, parent, style }) => {
    // let height = getRowHeight({index}, columnCount)
    const content = [];
    let highlighted = null;
    let rowDir = 'row';

    const startIndex = index * columnCount;
    for (let i = 0; i < columnCount; ++i) {
      const siteData = dataSource[startIndex + i];

      //console.log(siteData);

      if (!siteData) {
        if (columnCount > 1) {
          // push placeholder
          content.push(<SitePreviewPlaceholder key={`site-${startIndex + i}`} />);
        }
        continue;
      }

      if (!highlighted && siteData.highlighted && columnCount === 3) {
        highlighted = (
          <SitePreview
            highlighted
            siteData={siteData}
            flex={columnCount - 1}
            isVisible={isVisible}
            isScrolling={isScrolling}
            isTablet={columnCount < 3}
            //key={`site-${siteData.internalUrl}`}
          />
        );
        rowDir = siteData.highlighted === 1 ? 'row' : 'row-reverse';
      } else {
        content.push(
          <SitePreview
            siteData={siteData}
            isVisible={isVisible}
            isScrolling={isScrolling}
            isTablet={columnCount < 3}
            //key={`site-${siteData.internalUrl}`}
          />
        );
      }
      //console.log(content);
    }

    return (
      <div
        key={`row-${index}`}
        style={{
          display: 'flex',
          flexDirection: columnCount === 1 ? 'column' : rowDir,
          ...directionalProperty('padding', 0, GAP_X / 2),
          ...style
        }}
      >
        {highlighted
          ? [
              highlighted,
              <div
                key="column-normal"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1
                }}
              >
                {content}
              </div>
            ]
          : content}
      </div>
    );
  };

  // render 3 images per row
  const Row = getRowRender(3);

  // render 2 images per row
  const TabletRow = getRowRender(2);

  // render 1 image per row
  const MobileRow = getRowRender(1);

  const [width, setWidth] = React.useState(1);

  let stopCachedIndex = 0;
  let startCachedIndex = Infinity;
  let lastColumnCount = 3;

  const resize = () => {
    setWidth(Math.min(window.innerWidth, 1440));
  };

  function updateCategory(category) {
    if (category !== dataCategory) {
      dataCategory = category;
      dataSource = getData(category.toLowerCase());
      if (window.scrollY > 16 * 12) {
        scrollTo(16 * 12);
      }
    }
  }

  useEffect(() => {
    updateCategory(props.category);
    window.addEventListener('resize', resize);
    resize();
    return function cleanup() {
      window.removeEventListener('resize', resize);
    };
  });

  function UNSAFE_componentWillReceiveProps(newProps) {
    updateCategory(newProps.category);
  }

  const overscanIndicesGetter = (
    { cellCount, overscanCellsCount, startIndex, stopIndex },
    isTablet
  ) => {
    // preload +- 5 rows
    // cache += 50 rows
    const overscanStartIndex = Math.max(
      0,
      Math.min(startIndex - overscanCellsCount, startCachedIndex)
    );
    startCachedIndex = Math.max(startIndex - 50, Math.min(startCachedIndex, overscanStartIndex));

    const overscanStopIndex = Math.min(
      cellCount - 1,
      Math.max(stopIndex + overscanCellsCount, stopCachedIndex)
    );
    stopCachedIndex = Math.min(stopIndex + 50, Math.max(stopCachedIndex, overscanStopIndex));

    return {
      overscanStartIndex,
      overscanStopIndex
    };
  };

  const isTablet = width < 960;
  const isMobile = width < 640;
  //console.log(width);
  return (
    <Container wide gray center>
      <div className="container">
        <style jsx>{`
          .container {
            margin: 1rem 0 6rem;
          }
          .spacer {
            margin-top: 2rem;
          }
          .icon-label {
            margin-right: 0.625rem;
          }
          .flex-center {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}</style>
        <WindowScroller serverHeight={800}>
          {({ height, isScrolling, onChildScroll, scrollTop }) => (
            <List
              autoHeight
              height={height}
              isScrolling={isScrolling}
              onScroll={onChildScroll}
              scrollTop={scrollTop}
              width={width}
              rowCount={Math.ceil(dataSource.length / (isMobile ? 1 : isTablet ? 2 : 3))}
              estimatedRowSize={500}
              rowHeight={args => getRowHeight(args, isMobile ? 1 : isTablet ? 2 : 3) * ROW_HEIGHT}
              rowRenderer={isMobile ? MobileRow : isTablet ? TabletRow : Row}
              overscanRowCount={5}
              overscanIndicesGetter={args => overscanIndicesGetter(args, isTablet)}
              style={{
                willChange: '',
                margin: 'auto'
              }}
              ref={list => {
                const columnCount = isMobile ? 1 : isTablet ? 2 : 3;
                if (columnCount !== lastColumnCount) {
                  // reset row height for responsive width
                  lastColumnCount = columnCount;
                  list.recomputeRowHeights();
                }
              }}
            />
          )}
        </WindowScroller>
        <div className="spacer" />
        <Button onClick={() => scrollTo(0)}>
          <div className="flex-center">
            <span className="icon-label">Back to Top</span>
            <ArrowUpIcon color="#0070f3" />
          </div>
        </Button>
        <div className="spacer" />
      </div>
    </Container>
  );
});
