import { css } from 'styled-components'; // A helper function to generate CSS from a template literal with interpolations

export const color = {
  primary: '#0052cc',

  textDarkest: '#172b4d',
  textDark: '#42526e',
  textMedium: '#5e6c84',
  textLight: '#8993a4',
  textLink: '#0052cc',

  backgroundDarkPrimary: '#0747a6',
  backgroundLightest: '#f4f5f7',
  backgroundMedium: '#dfe1e6',
  backgroundLight: '#ebecf0',

  borderLightest: '#dfe1e6',
  borderLight: '#c1c7d0',
};

export const font = {
  regular: 'font-family: "CircularStdBook"; font-weight: normal;',
  medium: 'font-family: "CircularStdMedium"; font-weight: normal;',
  bold: 'font-family: "CircularStdBold"; font-weight: normal;',
  black: 'font-family: "CircularStdBlack"; font-weight: normal;',
  size: size => `font-size: ${size}px;`,
};

export const mixin = {
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
};

export const sizes = {
  appNavBarLeftWidth: 64,
  secondarySideBarWidth: 230,
  minWiewportWidth: 1000,
};

export const zIndexValues = {
  navLeft: 99,
};
