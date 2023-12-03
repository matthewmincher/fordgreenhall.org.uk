import * as React from 'react';
import * as Styles from './hero.module.scss';
import { StaticImage } from 'gatsby-plugin-image';
import { FC, PropsWithChildren, useEffect, useState } from 'react';

type Props = PropsWithChildren<{
  skipAnimation: boolean;
}>;
const Hero: FC<Props> = ({ skipAnimation }) => {
  const [isShown, setIsShown] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (!skipAnimation) {
      setTimeout(() => {
        setIsShown(true);

        setTimeout(() => {
          setIsDone(true);
        }, 6000);
      }, 3000);
    } else {
      setIsShown(true);
      setIsDone(true);
    }
  }, [skipAnimation]);

  const containerClasses = isShown
    ? Styles.active + (isDone ? ' ' + Styles.done : '')
    : '';

  return (
    <div className="constrainedContent">
      <div className={`${Styles.container} ${containerClasses}`}>
        <StaticImage
          src="../../../images/copy/index/exterior_large.jpg"
          placeholder="none"
          loading="eager"
          layout="fullWidth"
          alt=""
        />

        <div className={Styles.label}>
          <StaticImage
            src="../../../images/copy/index/hero.png"
            placeholder="none"
            loading="eager"
            layout="constrained"
            alt="Where History Comes Alive"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
