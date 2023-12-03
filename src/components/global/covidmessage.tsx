import * as React from 'react';
import * as Styles from './covidmessage.module.scss';
import { StaticImage } from 'gatsby-plugin-image';
import { FC, PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  className: string;
}>;

const CovidMessage: FC<Props> = ({ className }) => {
  return (
    <div className={`${className} constrainedContent`}>
      <div className={Styles.container}>
        <StaticImage
          src="../../images/thirdparties/good_to_go_sticker.png"
          className={Styles.logo}
          placeholder="none"
          layout="fixed"
          loading="eager"
          height={100}
          alt="Visit England - Good to Go!"
        />
        <div className={Styles.message}>
          <p>
            You no longer have to book to visit Ford Green Hall. Covid
            restrictions are in place and face masks must be worn. See you soon!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CovidMessage;
