import * as React from 'react';
import Layout from '../components/layout/layout';

import * as Styles from './weddings.module.scss';
import { StaticImage } from 'gatsby-plugin-image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faFilePdf, faDownload } from '@fortawesome/free-solid-svg-icons';

const WeddingsPage = () => {
  return (
    <Layout pageTitle="Weddings">
      <div className="constrainedContent">
        <div className={Styles.container}>
          <h1>Weddings &amp; Special Events</h1>

          <div className={Styles.hero}>
            <div className={Styles.heroPositioner}>
              <StaticImage
                src="./../images/copy/weddings/hero.jpg"
                alt="A happy wedding party throwing confetti outside the hall"
                placeholder="none"
                layout="constrained"
                loading="eager"
              />

              <div className={Styles.left}>
                <StaticImage
                  src="./../images/copy/weddings/hero_left.png"
                  alt="A couple next to their wedding car"
                  placeholder="none"
                  layout="constrained"
                  loading="eager"
                />
              </div>
              <div className={Styles.right}>
                <StaticImage
                  src="./../images/copy/weddings/hero_right.png"
                  alt="Two members of a wedding party outside the hall"
                  placeholder="none"
                  layout="constrained"
                  loading="eager"
                />
              </div>
            </div>
          </div>
          <div className={Styles.heroAttribution}>
            Photos courtesy of Neil Hulse Photography - For more information
            please press the banner below.
          </div>

          <div className={Styles.copyContainer}>
            <p>
              Ford Green Hall offers a unique and special environment for
              weddings, civil ceremonies and other celebrations.
            </p>
            <p>
              Fully furnished to represent the interior of the 17th Century, the
              hall boasts dark oak beams and decoratively carved furniture.
              Outside you will find our picturesque gardens with authentic
              period features located next to Ford Green Local Nature Reserve.
              These features add-up to create an attractive and inimate setting
              for your ceremony.
            </p>
            <p>
              Full details of our package for weddings and civil ceremonies can
              be found in the document below. Alternatively contact us for more
              information or pick-up an information pack during your next visit.
            </p>
          </div>

          <div className={Styles.weddingPackContainer}>
            <a
              href={'/pdfs/Wedding%20Pack%202019.pdf'}
              className={Styles.content}
            >
              <FontAwesomeIcon
                className={Styles.icon}
                icon={faDownload}
                size="2x"
                inverse
              />
              <span className={Styles.label}>Wedding Pack Download</span>
              <FontAwesomeIcon
                className={Styles.icon}
                icon={faFilePdf}
                size="4x"
                inverse
              />
            </a>
          </div>

          <div className={Styles.gweddingContainer}>
            <div className={Styles.inner}>
              <StaticImage
                className={Styles.icon}
                src="./../images/copy/weddings/gwedding.png"
                alt="LGBTQ+ Weddings"
                placeholder="none"
                width={75}
                layout="fixed"
              />
              <span className={Styles.label}>
                Please contact the Hall for more information.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={Styles.otherEventsContainer}>
        <p>
          If you have any other event you’d like to celebrate at Ford Green
          Hall,
          <br />
          please don’t hesitate to get in touch to see if we are able to help.
        </p>
      </div>

      <div className="constrainedContent">
        <div className={Styles.container}>
          <div className={Styles.photographers}>
            <a
              href="http://www.neilhulsephotography.co.uk"
              target="_blank"
              rel="noreferrer"
            >
              <StaticImage
                src="./../images/copy/weddings/neilhulse.png"
                alt="A photo of a bride in a wedding dress. Neil Hulse photography."
                placeholder="none"
                layout="constrained"
              />
            </a>
            <a
              href="http://www.katescottphotography.co.uk"
              target="_blank"
              rel="noreferrer"
            >
              <StaticImage
                src="./../images/copy/weddings/katescott.png"
                alt="Kate Scott Photography"
                placeholder="none"
                layout="constrained"
              />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WeddingsPage;
