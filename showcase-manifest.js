import { PLATFORM_NAME, PLATFORM_LOWERCASE, PLATFORM_URL } from './lib/constants';

export const categories = [
  'All',
  'Finance',
  'News',
  'E-commerce',
  'Travel',
  'Creative',
  'Entertainment',
  'Marketing'
];

export const categoriesShort = [
  'All',
  'Finance',
  'News',
  'E-comm',
  'Travel',
  'Creative',
  'Entertainment',
  'Marketing'
];

// src is added to the sites that don't look good with a screenshot from https://microlink.io/screenshot
export const mapping = {
  typeform: {
    title: 'Typeform',
    link: './',
    src: '/static/images/showcases/image.jpg',
    srcFallback: true,
    alexa: 1029,
    internalUrl: 'typeform',
    tags: ['creative']
  }
};

const calcScore = ({ alexa, factor = 1 }) => alexa / factor;

export const sortedByAlexa = Object.values(mapping).sort((a, b) => calcScore(a) - calcScore(b));
