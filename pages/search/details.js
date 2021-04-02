import { PureComponent } from 'react';
import Router, { withRouter } from 'next/router';
import Footer from '../../components/footer';
import { SkipNavContent } from '@reach/skip-nav';

import Page from '../../components/page';
import Title from '../../components/showcase/title';

function clearRoute() {
  Router.router.push('/showcase');
}

export async function getServerSideProps(content) {
  if (content.query !== null) {
    const urlParam = content.query;

    const protocol = 'http';
    const host = content.req.headers.host;

    const res = await fetch(`${protocol}://${host}/api/details?name=${urlParam.item}`);
    const data = await res.json();
    return { props: { data } };
  }
}

class Item extends PureComponent {
  // clickOuter = () => {
  //   clearRoute();
  // };

  render() {
    const siteData = this.props.data.details[0];

    return (
      <Page title={`Search | ${siteData.name} `} hideHeaderBorder>
        <Title />
        <style jsx>{`
            .wrapList{
              display: flex;
              margin-left: 5em;
              text-align: 'center'
              width: '100%'
              padding-bottom: 5em;
            }
            .spacer {
              margin-top: 2rem;
            }
          `}</style>
        <div className="wrapList">#{siteData.name}</div>
        <div className="wrapList">number of post - {siteData.numPost}</div>
        <div className="spacer" />

        <SkipNavContent />
        <Footer />
      </Page>
    );
  }
}

export default withRouter(Item);
