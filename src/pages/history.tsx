import * as React from 'react';
import Layout from '../components/layout/layout';
import AttributedItem from '../components/global/attributeditem';
import { StaticImage } from 'gatsby-plugin-image';

import * as Styles from './history.module.scss';

const kateScottAttribution = '© Kate Scott Photography 2015';

const HistoryPage = () => {
  return (
    <Layout pageTitle="History">
      <div className={`constrainedContent ${Styles.container}`}>
        <div className={Styles.main}>
          <h1>History</h1>
          <AttributedItem
            className={Styles.hero}
            attribution={kateScottAttribution}
          >
            <StaticImage
              src="./../images/copy/history/history_hero.jpg"
              alt="Wooden exterior of the hall"
              placeholder="none"
              layout="fixed"
              loading="eager"
            />
          </AttributedItem>

          <p className={Styles.copy}>
            Ford Green Hall was built in 1624 for Hugh Ford. It is a fine
            example of a timber-framed farm house. The Ford family lived at the
            Hall for nearly 200 years. Mr Ford was a yeoman dairy farmer and
            owned 36 acres of land. In the 19th century after the Ford family
            left the status of the house declined and it was divided into 3 and
            later 4 cottages.
          </p>
          <p className={Styles.copy}>
            An award-winning museum, the Hall offers visitors a fascinating
            insight into the life of the 17th century. The rooms are furnished
            with an outstanding collection of textiles, ceramics and furniture.
          </p>
          <br />
          <p className={Styles.copy}>
            Now transferred to Ford Green Hall Ltd, a charitable organisation
            led by volunteers and members of the local community, the company’s
            profits will be used to run and improve the museum.
          </p>
          <p className={Styles.copy}>
            Ford Green Hall is continuing to work closely with Stoke-on-Trent
            City Council and its museums.
          </p>

          <div className="clear" />
        </div>

        <div className={`styledScrolling ${Styles.gallery}`}>
          <AttributedItem
            className={Styles.item}
            attribution={kateScottAttribution}
          >
            <StaticImage
              src="./../images/copy/history/history_gallery_1.jpg"
              alt="Wooden exterior of the hall"
              placeholder="none"
              layout="fixed"
              loading="eager"
            />
          </AttributedItem>
          <AttributedItem
            className={Styles.item}
            attribution={kateScottAttribution}
          >
            <StaticImage
              src="./../images/copy/history/history_gallery_2.jpg"
              alt="Wooden exterior of the hall"
              placeholder="none"
              layout="fixed"
              loading="eager"
            />
          </AttributedItem>
          <AttributedItem
            className={Styles.item}
            attribution={kateScottAttribution}
          >
            <StaticImage
              src="./../images/copy/history/history_gallery_3.jpg"
              alt="Wooden exterior of the hall"
              placeholder="none"
              layout="fixed"
              loading="eager"
            />
          </AttributedItem>
          <AttributedItem
            className={Styles.item}
            attribution={kateScottAttribution}
          >
            <StaticImage
              src="./../images/copy/history/history_gallery_4.jpg"
              alt="Wooden exterior of the hall"
              placeholder="none"
              layout="fixed"
              loading="eager"
            />
          </AttributedItem>
        </div>
      </div>
    </Layout>
  );
};

export default HistoryPage;
