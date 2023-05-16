import React from 'react';
import { styled } from '@mui/material/styles';
import { Chrono } from 'react-chrono';
import { useAppTheme, useMediaQuery } from '@/hooks';

interface TimelineItem {
  title?: string;
  cardTitle: string;
  cardSubtitle?: string;
  cardDetailedText: string | Array<string>;
  cardText?: string;
  items?: any;
}

interface TimelineProps {
  items: TimelineItem[];
  mode?: 'HORIZONTAL' | 'VERTICAL' | 'VERTICAL_ALTERNATING';
}

const StyledTimelineContainer = styled('div')(({ theme }) => ({
  width: "90%",
  height: "",
  margin: '0 auto',

  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

const Timeline: React.FC<TimelineProps> = ({ items, mode }) => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const theme = useAppTheme()
  return (
    <StyledTimelineContainer>
      <Chrono
        items={items.map((item) => ({
          title: '',
          cardTitle: item.cardTitle,
          cardSubtitle: item.cardSubtitle,
          cardDetailedText: item.cardDetailedText,
          items: item.items,
        }))}
        mode={mode}
        slideShow
        slideItemDuration={4500}
        slideShowType="reveal"
        scrollable={{ scrollbar: true }}
        enableOutline={false}
        enableBreakPoint={true}
        verticalBreakPoint={400}
        theme={{
          primary: '#253E66',
          secondary: 'white',
          cardBgColor: 'white',
          cardSubtitleColor: theme.palette.secondary.main,
          cardTitleColor: theme.text.primary,
          titleColor: theme.text.primary,
          titleColorActive: theme.palette.secondary.main,
          nestedCardBgColor: theme.palette.background.default,
        }}
        cardWidth={600}
        useReadMore={true}
        borderLessCards={true}
        activeItemIndex={0}
        darkMode={theme.palette.mode === 'dark'}
        nestedCardHeight={200}
        fontSizes={{
          cardSubtitle: '0.9rem',
          cardText: '0.85rem',
          cardTitle: '1.1rem',
          title: '1rem',
        }}
      />
    </StyledTimelineContainer>
  );
};

export default Timeline;
