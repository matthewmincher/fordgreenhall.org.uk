import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const ScrollToTop = () => {
  const scrollAction = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      style={{ margin: '20px auto', width: '46px', cursor: 'pointer' }}
      onClick={() => scrollAction()}
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          scrollAction();
        }
      }}
      role="button"
      tabIndex={0}
    >
      <StaticImage
        src="./../../images/layout/scrollup.png"
        alt="Scroll to top"
        placeholder="none"
        layout="fixed"
        loading="eager"
      />
    </div>
  );
};

export default ScrollToTop;
