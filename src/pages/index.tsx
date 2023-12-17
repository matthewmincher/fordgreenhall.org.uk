import * as React from 'react';
import Layout from '../components/layout/layout';
import Hero from '../components/pages/index/hero';

import * as Styles from './index.module.scss';
import JustGivingBar from '../components/global/justgivingbar';
import { FC } from 'react';
import { PageProps } from 'gatsby';

const IndexPage: FC<PageProps<null, null, { internal: boolean }>> = ({
  location,
}) => {
  return (
    <Layout pageTitle="" contentBackgroundColor="black" isPrimaryPage={true}>
      <div className="constrainedContent">
        <div className={Styles.christmasClosure}>
          Ford Green Hall closes for Christmas on the 21st of December and
          reopens on the 7th of January!
        </div>
      </div>

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
