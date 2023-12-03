import * as React from 'react';
import Layout from '../components/layout/layout';

import * as Styles from './volunteers.module.scss';
import { StaticImage } from 'gatsby-plugin-image';

const ContactPage = () => {
  return (
    <Layout pageTitle="Volunteers">
      <div className="constrainedContent">
        <div className={Styles.container}>
          <h1>Volunteers</h1>

          <div className={Styles.volunteersContainer}>
            <StaticImage
              className={Styles.charitableTrust}
              src="../images/copy/volunteers/volunteers_community.png"
              placeholder="none"
              loading="eager"
              layout="fixed"
              alt=""
            />

            <div className={Styles.text}>
              <p>
                Ford Green Hall is delighted to announce that our Volunteers
                have been picked to receive The Queens Award for Voluntary
                Services!
              </p>
              <p>
                Well done to all our Volunteers past and present. And as ever,
                thank you for your hard work in keeping the Hall alive.
              </p>
              <p>
                We are always looking for more people who are as enthusiastic
                about Ford Green Hall as we are. There are lots of different
                opportunities.{' '}
                <strong>
                  If you would like to find out more about volunteering please
                  contact us.
                </strong>
              </p>
            </div>
          </div>
        </div>

        <div className={Styles.queensAward}>
          <div className={Styles.left} />
          <div className={Styles.center}>
            <StaticImage
              src="../images/copy/volunteers/queens_award.jpg"
              placeholder="none"
              loading="eager"
              layout="fixed"
              alt=""
            />
          </div>
          <div className={Styles.right} />
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
