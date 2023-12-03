import * as React from 'react';
import Layout from '../components/layout/layout';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {
  faEnvelope,
  faPhone,
  faLaptop,
} from '@fortawesome/free-solid-svg-icons';

import * as Styles from './contact.module.scss';

const ContactPage = () => {
  return (
    <Layout pageTitle="Contact">
      <div className={`constrainedContent ${Styles.container}`}>
        <div className={Styles.padded}>
          <h1>Contact</h1>
          <p>
            If you have an enquiry or comment about Ford Green Hall or our
            website, then we would love to hear from you.
          </p>
          <p>
            We endeavour to reply to all enquiries, but please be patient as at
            busy times there may be a delay.
          </p>

          <div className={Styles.contactMethods}>
            <div className={Styles.contactMethod}>
              <FontAwesomeIcon icon={faEnvelope} inverse />
              <span>Ford Green Road, Smallthorne, Stoke-on-Trent, ST6 1NG</span>
            </div>
            <br />
            <div className={Styles.contactMethod}>
              <FontAwesomeIcon icon={faLaptop} inverse />
              <span>fordgreenhall.museum@gmail.com</span>
            </div>
            <br />
            <div className={Styles.contactMethod}>
              <FontAwesomeIcon icon={faPhone} inverse />
              <span>01782 537696</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
