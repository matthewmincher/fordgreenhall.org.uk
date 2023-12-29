import * as React from 'react';
import Layout from '../components/layout/layout';
import Hero from '../components/pages/index/hero';

import * as Styles from './index.module.scss';
import JustGivingBar from '../components/global/justgivingbar';
import { FC } from 'react';
import { graphql, PageProps } from 'gatsby';
import NotificationMessage from '../components/global/notificationmessage';

type Props = PageProps<
  {
    allContentfulClosureNotice: {
      nodes: {
        label: string;
        message: {
          message: string;
        };
        cssClasses: string[];
      }[];
    };
  },
  null,
  { internal: boolean }
>;

const IndexPage: FC<Props> = ({ data, location }) => {
  return (
    <Layout pageTitle="" contentBackgroundColor="black" isPrimaryPage={true}>
      {data.allContentfulClosureNotice.nodes.map((node) => (
        <NotificationMessage
          key={node.label}
          theme="dark"
          message={node.message.message}
          classList={node.cssClasses}
        />
      ))}

      <div className={Styles.heroContainer}>
        <Hero skipAnimation={location?.state?.internal ?? false} />
      </div>

      <div className={Styles.justGiving}>
        <JustGivingBar />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($builtAt: Date) {
    allContentfulClosureNotice(
      filter: { displayFrom: { lte: $builtAt }, displayTo: { gte: $builtAt } }
      sort: { displayFrom: ASC }
    ) {
      nodes {
        label
        message {
          message
        }
        cssClasses
      }
    }
  }
`;

export default IndexPage;
