import * as React from 'react';
import Layout from '../components/layout/layout';
import Hero from '../components/pages/index/hero';

import * as Styles from './index.module.scss';
import JustGivingBar from '../components/global/justgivingbar';
import { FC } from 'react';
import { graphql, PageProps } from 'gatsby';

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
        <div key={node.label} className="constrainedContent closure">
          <div className={node.cssClasses.join(' ')}>
            {node.message.message}
          </div>
        </div>
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
