import * as React from 'react';
import * as Styles from './calendarevent.module.scss';

import {
  useEffect,
  useState,
  useMemo,
  PropsWithChildren,
  FC,
  ReactNode,
} from 'react';
import {
  GatsbyImage,
  StaticImage,
  getImage,
  IGatsbyImageData,
} from 'gatsby-plugin-image';
import format from 'date-fns/format';
import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text';
import { Options } from '@contentful/rich-text-react-renderer';

const renderOptions: Options = {
  renderText: (text) => {
    return text.split('\n').reduce((children, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment];
    }, [] as ReactNode[]);
  },
};

export type Props = PropsWithChildren<{
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  dateOverridePrefix?: string;
  dateOverrideDay?: string;
  dateOverrideMonth?: string;
  dateOverrideTime?: string;
  facebookUrl?: string;
  image?: {
    description: string;
    localFile: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  };
  content: RenderRichTextData<ContentfulRichTextGatsbyReference>;
  isMini: boolean;
}>;

const CalendarEvent: FC<Props> = ({
  title,
  startDate,
  endDate,
  dateOverridePrefix,
  dateOverrideDay,
  dateOverrideMonth,
  dateOverrideTime,
  facebookUrl,
  image,
  content,
  isMini,
}) => {
  let start: Date | null = null;
  let end: Date | null = null;

  if (startDate) {
    start = new Date(startDate);
  }
  if (endDate) {
    end = new Date(endDate);
  }

  const hideFrom = useMemo(
    () => (end ? new Date(end.getTime() + 43200000) : null),
    [end],
  );
  const [isVisible, setIsVisible] = useState(
    !hideFrom || hideFrom >= new Date(),
  );
  const [hasMounted, setHasMounted] = React.useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    setIsVisible(!hideFrom || hideFrom >= new Date());
  }, [hideFrom]);

  if (!hasMounted) {
    return null;
  }

  let dateMonthPart = dateOverrideMonth,
    dateDayPart = dateOverrideDay,
    dateTimePart = dateOverrideTime;

  if (!dateDayPart && (start || end)) {
    dateDayPart = format(start ?? end!, 'do');
  }

  if (!dateMonthPart && (start || end)) {
    dateMonthPart = format(start ?? end!, 'MMMM');
  }

  if (!dateTimePart && (start || end)) {
    dateTimePart = format(start ?? end!, 'h:mmaaa');

    if (start && end) {
      dateTimePart += ' - ' + format(end, 'h:mmaaa');
    }
  }

  return isVisible ? (
    <div className={`${Styles.container} ${isMini ? Styles.mini : ''}`}>
      <div className={Styles.left}>
        {dateOverridePrefix && (
          <div className={Styles.prefix}>{dateOverridePrefix}</div>
        )}

        {dateDayPart && <div className={Styles.day}>{dateDayPart}</div>}

        {dateMonthPart && <div className={Styles.month}>{dateMonthPart}</div>}

        {dateTimePart && <div className={Styles.time}>{dateTimePart}</div>}
      </div>
      <div className={Styles.right}>
        <div className={Styles.title}>{title}</div>
        {image && (
          <div className={Styles.image}>
            <GatsbyImage
              alt={image.description ?? ''}
              image={getImage(image.localFile.childImageSharp.gatsbyImageData)!}
              objectFit={'scale-down'}
            />
          </div>
        )}

        <div className={Styles.description}>
          {renderRichText(content, renderOptions)}
        </div>

        <div className={Styles.facebookSpacer} />

        {facebookUrl && (
          <a
            target="_blank"
            rel="noreferrer"
            href={facebookUrl}
            className={Styles.facebookLink}
            title="See this event on Facebook"
          >
            <StaticImage
              src="../../../images/social/f_logo_RGB-Black_100.png"
              alt="Facebook logo"
              placeholder="none"
              layout="fixed"
              loading="eager"
              width={25}
            />
          </a>
        )}
      </div>
    </div>
  ) : null;
};

export default CalendarEvent;
