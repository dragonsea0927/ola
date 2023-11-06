'use client'

import React from 'react';
import { Chrono } from 'react-chrono';

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

const Timeline: React.FC<TimelineProps> = ({ items, mode }) => {
  return (
    <div className='w-full md:w-[90%] my-0 md:mx-auto'>
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
        hideControls={true}
        theme={{
          primary: 'var(--primary)',
          secondary: 'var(--bg)',
          cardBgColor: 'var(--contactBg)',
          cardSubtitleColor: 'var(--primary)',
          cardTitleColor: 'var(--primary)',
          titleColor: 'var(--primary)',
          titleColorActive: 'var(--primary)',
          nestedCardBgColor: 'var(--contactBg)',
          detailsColor: 'var(--textColor)',
        }}
        cardWidth={700}
        useReadMore={true}
        borderLessCards={true}
        activeItemIndex={0}
        nestedCardHeight={200}
        fontSizes={{
          cardSubtitle: '0.9rem',
          cardText: '0.85rem',
          cardTitle: '1.1rem',
          title: '1rem',
        }}
      />
    </div>
  );
};

export default Timeline;
