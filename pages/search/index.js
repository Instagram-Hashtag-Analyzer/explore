import { SkipNavContent } from '@reach/skip-nav';

import Page from '../../components/page';
import Footer from '../../components/footer';
import Tabs from '../../components/tabs';

import Title from '../../components/showcase/title';
import List from '../../components/showcase/list';
import Filter from '../../components/showcase/filter';
import SiteDetail from '../../components/showcase/site-detail';
import { categories, mapping } from '../../showcase-manifest';

function Showcase({ item, data }) {
  return (
    <Page title="Search | Explore">
      <Tabs data={categories} anchor>
        {(onSelect, selectedId) => (
          <>
            <Title />
            <Filter onSelect={onSelect} selectedId={selectedId} />

            <div className="wrapList">
              <List data={data} category={selectedId} />
            </div>
            <style jsx>{`
              .wrapList {
                margin-top: 4rem;
              }
              @media screen and (max-width: 640px) {
                .wrapList {
                  margin-top: 2rem;
                }
              }
            `}</style>
          </>
        )}
      </Tabs>
      {item && mapping[item] && <SiteDetail siteData={data} />}
      <SkipNavContent />
      <Footer />
    </Page>
  );
}

export async function getServerSideProps({ req, query }) {
  const protocol = 'http';
  const host = req.headers.host;

  const page = query.page || 1;
  const limit = query.limit || 9;

  const res = await fetch(`${protocol}://${host}/api/hashtags?page=${page}&limit=${limit}`);
  const data = await res.json();
  return { props: { data } };
}

export default Showcase;
