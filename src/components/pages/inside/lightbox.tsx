import * as React from 'react';
import * as Styles from './lightbox.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {
  faTimes,
  faArrowRight,
  faArrowLeft,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { FC, PropsWithChildren, useEffect, useState } from 'react';

export type ImageDefinition = {
  src: string;
  width: number;
  height: number;
  next?: string;
  prev?: string;
  label: string;
};

type Props = PropsWithChildren<{
  image: ImageDefinition | null;

  onCloseAction: (key?: string) => void;
  onNextAction: (key?: string) => void;
  onPrevAction: (key?: string) => void;
}>;

const Lightbox: FC<Props> = ({
  image,
  onCloseAction,
  onNextAction,
  onPrevAction,
}) => {
  const [loading, setLoading] = useState(true);
  const { src, width = 0, height = 0, next, prev, label } = image ?? {};

  const onOverlayClicked = () => {
    onCloseAction();
  };
  const onContentClicked = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    setLoading(true);

    const imageToLoad = new Image();
    imageToLoad.src = src;
    imageToLoad.onload = () => {
      setLoading(false);
    };
  }, [src]);

  if (image !== null) {
    return (
      <div
        className={Styles.overlay}
        onClick={() => onOverlayClicked()}
        role="none"
      >
        <div
          className={Styles.container}
          onClick={(e) => onContentClicked(e)}
          role="none"
        >
          <div
            className={Styles.closeButton}
            onClick={() => onCloseAction()}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                onCloseAction();
              }
            }}
            role="button"
            tabIndex={0}
          >
            <FontAwesomeIcon icon={faTimes} size="2x" inverse />
          </div>

          {next && (
            <div
              className={Styles.nextButton}
              onClick={() => onNextAction(next)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  onNextAction(next);
                }
              }}
              role="button"
              tabIndex={0}
            >
              <FontAwesomeIcon icon={faArrowRight} size="2x" inverse />
            </div>
          )}

          {prev && (
            <div
              className={Styles.prevButton}
              onClick={() => onPrevAction(prev)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  onPrevAction(next);
                }
              }}
              role="button"
              tabIndex={0}
            >
              <FontAwesomeIcon icon={faArrowLeft} size="2x" inverse />
            </div>
          )}

          {loading ? (
            <div
              className={Styles.loading}
              style={{ width: width + 'px', height: height + 'px' }}
            >
              <FontAwesomeIcon icon={faSpinner} spin size="2x" />
            </div>
          ) : (
            <img
              style={{ width: width + 'px', height: height + 'px' }}
              src={src}
              alt=""
            />
          )}

          {label && <div className={Styles.label}>{label}</div>}
        </div>
      </div>
    );
  } else {
    return <div />;
  }
};

export default Lightbox;
