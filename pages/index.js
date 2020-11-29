import { SkipNavContent } from '@reach/skip-nav';

import Page from '../components/page';
import Footer from '../components/footer';
import Notification from '../components/notification';

import Intro from '../components/home/intro';
import Features from '../components/home/features';

export default function Index() {
  return (
    <Page title={`Explore #hashtags`} hideHeaderBorder>
      <SkipNavContent />
      <Notification href="/conf">
        <b>Latest update</b> — Hooray🥳 additional 1000 hashtags are available now.{' '}
      </Notification>
      <Intro />
      <Features />
      <Footer />
    </Page>
  );
}
