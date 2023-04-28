import React from 'react';
import { Chrono } from 'react-chrono';
import { useAppTheme } from '@/hooks';

interface TimelineItem {
  title: string;
  cardTitle: string;
  cardSubtitle?: string;
  cardDetailedText: string | Array<string>;
  cardText?: string;
  items?: any;
  paragraphs1?: string;
  paragraphs2?: string;
}

interface TimelineProps {
  items: TimelineItem[];
  mode?: 'HORIZONTAL' | 'VERTICAL' | 'VERTICAL_ALTERNATING';
  handleSelect: (index: number) => void;
  classNames?: any;
  className?: string;
}

const Timeline: React.FC<TimelineProps> = ({ items, mode, handleSelect, classNames }) => {
  const theme = useAppTheme()
  return (
    <div style={{ width: "90%", height: "", margin: '0 auto' }}>
      <Chrono
        items={items.map((item) => ({
          title: item.title,
          cardTitle: item.cardTitle,
          cardSubtitle: item.cardSubtitle,
          cardDetailedText: item.cardDetailedText,
          items: item.items,
        }))}
        mode={mode}
        flipLayout
        slideShow
        slideItemDuration={4500}
        slideShowType="reveal"
        scrollable={{ scrollbar: true }}
        enableOutline={true}
        enableBreakPoint={true}
        verticalBreakPoint={400}
        theme={{
          primary: '#253E66',
          secondary: 'white',
          cardBgColor: '#fff',
          cardSubtitleColor: theme.palette.secondary.main,
          cardTitleColor: theme.text.primary,
          titleColor: theme.text.primary,
          titleColorActive: theme.palette.secondary.main,
          nestedCardBgColor: theme.palette.background.default,
        }}
        cardWidth={600}
        useReadMore={true}
        borderLessCards={true}
        onItemSelected={(index) => handleSelect && handleSelect(index as number)}
        activeItemIndex={0}
        enableDarkToggle
        classNames={{
          cardSubTitle: classNames?.cardSubTitle,
        }}
        nestedCardHeight={200}
        fontSizes={{
          cardSubtitle: '0.9rem',
          cardText: '0.8rem',
          cardTitle: '1.1rem',
          title: '1.3rem',
        }}
      />
    </div>
  );
};

export default Timeline;
