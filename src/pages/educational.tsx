import * as React from 'react';
import Layout from '../components/layout/layout';

import * as Styles from './educational.module.scss';
import { StaticImage } from 'gatsby-plugin-image';
import HoverBox from '../components/pages/educational/hoverbox';

const EducationPage = () => {
  return (
    <Layout pageTitle="Educational">
      <div className="constrainedContent">
        <div className={Styles.container}>
          <div className={Styles.padded}>
            <h1>Workshops and Loans Boxes</h1>

            <p>Suitable for KS1 and KS2 pupils.</p>
            <p>Workshops available for half day or full day visits.</p>
            <p>
              1/2 day visit includes House Tour with single Workshop and costs
              £4.50 per child.
            </p>
            <p>
              Full day visit includes House Tour with three workshops and costs
              £7.00 per child.
            </p>
          </div>
        </div>
      </div>
      <div className={Styles.galleryContainer}>
        <div className="constrainedContent">
          <div className={Styles.gallery}>
            <HoverBox
              children={
                <StaticImage
                  src="../images/copy/educational/1.jpg"
                  alt="Timber framed building"
                  placeholder="none"
                  layout="constrained"
                  loading="eager"
                />
              }
              overlayChildren={
                <div>
                  <h2>House Tour</h2>
                  <p className={Styles.label}>
                    A tour of the Hall looking at everyday life in the Tudor and
                    Stuart period.
                  </p>
                </div>
              }
            />
            <HoverBox
              children={
                <StaticImage
                  src="../images/copy/educational/2.png"
                  alt="Timber framed building aflame"
                  placeholder="none"
                  layout="constrained"
                  loading="eager"
                />
              }
              overlayChildren={
                <div>
                  <h2>Fire of London House Tour</h2>
                  <p className={Styles.label}>
                    A 17th Century tour of the Hall, focusing particularly on
                    fire and its uses along with all the inherent dangers of
                    fire in a timber framed house from the period.
                  </p>
                </div>
              }
            />
            <HoverBox
              children={
                <StaticImage
                  src="../images/copy/educational/3.png"
                  alt="Samuel Pepys"
                  placeholder="none"
                  layout="constrained"
                  loading="eager"
                />
              }
              overlayChildren={
                <div>
                  <h2>Samuel Pepys</h2>
                  <p className={Styles.label}>
                    Meet Samuel Pepys and hear his first hand experiences during
                    the fire. Lots of interaction!
                  </p>
                </div>
              }
            />
            <HoverBox
              children={
                <StaticImage
                  src="../images/copy/educational/4.png"
                  alt="A Tudor/Stuart family"
                  placeholder="none"
                  layout="constrained"
                  loading="eager"
                />
              }
              overlayChildren={
                <div>
                  <h2>Rich and Poor</h2>
                  <p className={Styles.label}>
                    Explore the differences in society in the Tudor and Stuart
                    period and where the Ford families status was. Dressing up,
                    crime and punishment and even a period dance!
                  </p>
                </div>
              }
            />
            <HoverBox
              children={
                <StaticImage
                  src="../images/copy/educational/5.png"
                  alt="Various platters and jars of food and drink"
                  placeholder="none"
                  layout="constrained"
                  loading="eager"
                />
              }
              overlayChildren={
                <div>
                  <h2>Food and Drink</h2>
                  <p className={Styles.label}>
                    Find out about food! How was in cooked? Where could you buy
                    it? How was it preserved? Smell herbs and spices and make a
                    marzipan fruit to take home.(please let us know about any
                    allergies)
                  </p>
                </div>
              }
            />
            <HoverBox
              children={
                <StaticImage
                  src="../images/copy/educational/6.jpg"
                  alt="Clothing and household items"
                  placeholder="none"
                  layout="constrained"
                  loading="eager"
                />
              }
              overlayChildren={
                <div>
                  <h2>Handling Objects</h2>
                  <p className={Styles.label}>
                    Our Tudor and Stuart object session can be tailored to suit
                    the topics your class is studying. From domestic objects and
                    military life to Medicine and superstition.
                  </p>
                </div>
              }
            />
            <HoverBox
              children={
                <StaticImage
                  src="../images/copy/educational/7.jpg"
                  alt="Quills in an inkwell"
                  placeholder="none"
                  layout="constrained"
                  loading="eager"
                />
              }
              overlayChildren={
                <div>
                  <h2>Shakespeare School</h2>
                  <p className={Styles.label}>
                    Find out what school life was like for William Shakespeare.
                    Learn how to write with a real quill pen.
                  </p>
                </div>
              }
            />
            <HoverBox
              children={
                <StaticImage
                  src="../images/copy/educational/8.png"
                  alt="A golden goblet"
                  placeholder="none"
                  layout="constrained"
                  loading="eager"
                />
              }
              overlayChildren={
                <div>
                  <h2>Shakespearean Objects</h2>
                  <p className={Styles.label}>
                    Many everyday objects are mentioned in Shakespeare’s plays.
                    Handle replica objects from the age of Shakespeare and find
                    out what they were for.
                  </p>
                </div>
              }
            />
            <HoverBox
              children={
                <StaticImage
                  src="../images/copy/educational/9.png"
                  alt="Children making gingerbread"
                  placeholder="none"
                  layout="constrained"
                  loading="eager"
                />
              }
              overlayChildren={
                <div>
                  <h2>The Gingerbread Man</h2>
                  <p className={Styles.label}>
                    Hear the story of the Gingerbread Man, Make a finger puppet,
                    play a Gingerbread man game. Take a tour of the Hall and
                    listen to Nursery Rhymes connected to the 17th Century.
                  </p>
                </div>
              }
            />
            <HoverBox
              children={
                <StaticImage
                  src="../images/copy/educational/10.jpg"
                  alt="Children taking a tour of the hall"
                  placeholder="none"
                  layout="constrained"
                  loading="eager"
                />
              }
              overlayChildren={
                <div>
                  <h2>House Tour in progress</h2>
                </div>
              }
            />
          </div>
        </div>
      </div>
      <div className="constrainedContent">
        <div className={Styles.container}>
          <div className={Styles.hireCallout}>
            A Tudor and Stuart Loans Box is available for hire at a cost of £20
            per half term.
          </div>

          <div className={Styles.padded}>
            <p>
              Ford Green Hall has a friendly atmosphere soaked in history. Our
              experienced staff bring the past to life through a variety of
              enjoyable workshops and tours. Take a tour of the hall and garden
              (weather willing!) and discover all about everyday lives of the
              Tudors and Stuarts through hands on learning and opportunities for
              students to practice historical enquiry skills.
            </p>
            <p>
              Over many year we have developed an exciting range of themed
              workshops for Foundation and Primary Stage pupils. These practical
              sessions are all led by a facilitator and are ever popular with
              visiting schools.
            </p>
            <p>
              Ford Green Hall is an inspirational setting for all manner of
              visits from history through to arts, design and creative writing.
              Book a guided tour or arrange a self-guided tour today to explore
              a rare and valuable educational resource.
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div className={Styles.bookingCallToAction}>
              <h3>Booking</h3>
              <p>Post: Ford Green Road, Smallthorne, Stoke-on-Trent, ST6 1NG</p>
              <p>Telephone: 01782 537696</p>
              <p>Email: fordgreenhall.museum@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EducationPage;
