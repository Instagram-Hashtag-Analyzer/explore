import { useState, useEffect } from 'react';
import cn from 'classnames';
import Container from '@components/container';
import SectionHeader from '@components/section-header';
import { InternalLink } from '@components/text/link';
import Link from 'next/link';
import styles from './features.module.css';

const features = [
  {
    title: 'Cross Platform',
    body: "You don't need a specific operating system to using Explore.",
  },
  {
    title: 'Open Source',
    body: "Who doesn't love open source?",
  },
  {
    title: 'Sufficient Data',
    body: 'You can find a set of suitable hashtags from more than 500,000 data.',
  },
];


export default function Features() {
  const [cardClickable, setCardClickable] = useState(false);
  useEffect(() => {
    if (window.matchMedia('(hover: hover)').matches) {
      setCardClickable(true);
    }
  }, []);
  return (
    <Container wide role="region" aria-labelledby="features">
      <Container center padding>
        <SectionHeader
          id="features"
          title="Why Use Explore"
          description="A hashtag tool that helps you to attract the correct audience."
          margin="1rem 0 3rem 0"
        />
        <div className={styles['features-grid']}>
          {features.map(({ title, body, url }) => {
            const card = (
              <div
                key={title}
                className={cn(styles.card, {
                  [styles.clickable]: cardClickable
                })}
              >
                <h3 className={cn('f4 fw6', styles['card-heading'])}>{title}</h3>
                <p className={styles['card-body']}>{body}</p>
                {/*<div className={styles['card-link']}>
                  <InternalLink as={url} href="/docs/[[...slug]]">
                    Documentation →
                  </InternalLink>
                </div>*/}
              </div>
            );
            return cardClickable ? (
              <Link key={title} as={url} href="/docs">              
                {card}
              </Link>
            ) : (
              card
            );
          })}
        </div>
      </Container>
    </Container>
  );
}
