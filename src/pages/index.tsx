import * as React from 'react';
import Layout from '../components/layout/layout';
import Hero from '../components/pages/index/hero';

import * as Styles from './index.module.scss';
import JustGivingBar from '../components/global/justgivingbar';
import { FC, PropsWithChildren } from 'react';
import { GatsbyBrowser, PageProps } from 'gatsby';

const IndexPage: FC<PageProps<null, null, { internal: boolean }>> = ({
  location,
}) => {
  return (
    <Layout pageTitle="" contentBackgroundColor="black" isPrimaryPage={true}>
      <div className={Styles.heroContainer}>
        <Hero skipAnimation={location?.state?.internal ?? false} />
      </div>

      <div className={Styles.justGiving}>
        <JustGivingBar />
      </div>
    </Layout>
  );
};

export default IndexPage;
