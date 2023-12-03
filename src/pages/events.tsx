import * as React from 'react';
import Layout from '../components/layout/layout';

import * as Styles from './events.module.scss';
import ScrollToTop from '../components/layout/scrolltotop';
import { graphql } from 'gatsby';
import { FC, PropsWithChildren } from 'react';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text';
import CalendarEvent from '../components/pages/events/calendarevent';

type Props = PropsWithChildren<{
  data: {
    allContentfulEvent: {
      nodes: {
        id: string;
        title: string;
        startDate: string;
        endDate: string;
        dateOverridePrefix: string;
        dateOverrideDay: string;
        dateOverrideMonth: string;
        dateOverrideTime: string;
        facebookUrl: string;
        image: {
          localFile: {
            childImageSharp: {
              gatsbyImageData: IGatsbyImageData;
            };
          };
          description: string;
        };
        content: RenderRichTextData<ContentfulRichTextGatsbyReference>;
        isMini: boolean;
      }[];
    };
  };
}>;

const EventsPage: FC<Props> = ({ data }) => {
  return (
    <Layout pageTitle="Events">
      <div className="constrainedContent">
        <div className={Styles.container}>
          <h1>Events</h1>

          <br />

          {data.allContentfulEvent.nodes.map((event) => (
            <CalendarEvent key={event.id} {...event} />
          ))}

          <ScrollToTop />

          <div className={Styles.moreInfo}>
            For more information about any event, please telephone.
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulEvent(sort: { startDate: ASC }) {
      nodes {
        id
        title
        startDate
        endDate
        dateOverridePrefix
        dateOverrideDay
        dateOverrideMonth
        dateOverrideTime
        facebookUrl
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: NONE)
            }
          }
          description
        }
        content {
          raw
        }
        isMini
      }
    }
  }
`;

export default EventsPage;
