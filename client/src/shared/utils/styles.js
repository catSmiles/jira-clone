import Color from 'color';
import { css } from 'styled-components'; // A helper function to generate CSS from a template literal with interpolations

import { IssueType, IssuePriority } from 'shared/constants/issues';

export const color = {
  primary: '#0052cc', // blue
  danger: '#e13c3c', // red
  secondary: '#f4f5f7', // light grey

  textDarkest: '#172b4d',
  textDark: '#42526e',
  textMedium: '#5e6c84',
  textLight: '#8993a4',
  textLink: '#0052cc',

  backgroundDarkPrimary: '#0747a6',
  backgroundLightest: '#f4f5f7',
  backgroundMedium: '#dfe1e6',
  backgroundLight: '#ebecf0',
  backgroundLightPrimary: '#d2e5fe',

  borderLightest: '#dfe1e6',
  borderLight: '#c1c7d0',
  borderInputFocus: '#4c9aff',
};

export const font = {
  regular: 'font-family: "CircularStdBook"; font-weight: normal;',
  medium: 'font-family: "CircularStdMedium"; font-weight: normal;',
  bold: 'font-family: "CircularStdBold"; font-weight: normal;',
  black: 'font-family: "CircularStdBlack"; font-weight: normal;',
  size: size => `font-size: ${size}px;`,
};

export const mixin = {
  darken: (colorValue, amount) =>
    Color(colorValue)
      .darken(amount)
      .string(),
  lighten: (colorValue, amount) =>
    Color(colorValue)
      .lighten(amount)
      .string(),

  placeholderColor: colorValue => css`
    ::-webkit-input-placeholder {
      color: ${colorValue} !important;
      opacity: 1 !important;
    }
    :-moz-placeholder {
      color: ${colorValue} !important;
      opacity: 1 !important;
    }
    ::-moz-placeholder {
      color: ${colorValue} !important;
      opacity: 1 !important;
    }
    :-ms-input-placeholder {
      color: ${colorValue} !important;
      opacity: 1 !important;
    }
  `,

  link: (colorValue = color.textLink) => css`
    cursor: pointer;
    color: ${colorValue};
    ${font.medium}
    &:hover, &:visited, &:active {
      color: ${colorValue};
    }
    &:hover {
      text-decoration: underline;
    }
  `,

  clickable: css`
    cursor: pointer;
    user-select: none;
  `,

  scrollableY: css`
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  `,

  customScrollbar: ({ width = 8, background = color.backgroundMedium } = {}) => css`
    &::-webkit-scrollbar {
      width: ${width}px;
    }

    &::-webkit-scrollbar-track {
      background: none;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 99px;
      background: ${background};
    }
  `,

  backgroundImage: imageURL => css`
    background-image: url("${imageURL}");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    background-color: ${color.backgroundLight};
  `,

  truncateText: css`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `,
};

export const sizes = {
  appNavBarLeftWidth: 64,
  secondarySideBarWidth: 230,
  minWiewportWidth: 1000,
};

export const zIndexValues = {
  navLeft: 99,
};

// ISSUE
export const issueTypeColors = {
  [IssueType.TASK]: '#4fade6', // blue
  [IssueType.BUG]: '#e44d42', // red
  [IssueType.STORY]: '#65ba43', // green
};

export const issuePriorityColors = {
  [IssuePriority.HIGHEST]: '#cd1317', // red
  [IssuePriority.HIGH]: '#e9494a', // orange
  [IssuePriority.MEDIUM]: '#e97f33', // orange
  [IssuePriority.LOW]: '#2d8738', // green
  [IssuePriority.LOWEST]: '#47a55a', // green
};
