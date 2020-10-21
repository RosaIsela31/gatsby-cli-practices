const colorScheme = {
  white: "#FFFFFF",
  black: "#000000",
  purplePrimary: "#665DCA",
  pinkLight: "#FCF1F5",
  pinkIntermediate: "#E16F8F",
  title: "#BB757D",
  purpleLight: "#CED4DA",
  grayLight: "#DFDFDF"
}

export const sizes = {
  px: "1px",
  "0": "0",
  "1": "0.25rem",
  "2": "0.5rem",
  "3": "0.75rem",
  "4": "1rem",
  "5": "1.25rem",
  "6": "1.5rem",
  "8": "2rem",
  "10": "2.5rem",
  "12": "3rem",
  "16": "4rem",
  "20": "5rem",
  "24": "6rem",
  "32": "8rem",
  "40": "10rem",
  "48": "12rem",
  "56": "14rem",
  "64": "16rem",
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
  "1/12": "8.333333%",
  "2/12": "16.666667%",
  "3/12": "25%",
  "4/12": "33.333333%",
  "5/12": "41.666667%",
  "6/12": "50%",
  "7/12": "58.333333%",
  "8/12": "66.666667%",
  "9/12": "75%",
  "10/12": "83.333333%",
  "11/12": "91.666667%",
  full: "100%",
  screenHeight: "100vh",
  screenWidth: "100vw",
  navbar: "80px",
  hero: "700px",
  banner: "395px",
  container: ["40em", "60em", "70em"],
  maxWidthContainer: "1180px",
  maxWidthLayout: "1600px",
}

const theme = {
  breakpoints: ["40em", "60em", "70em"],
  space: [0, 4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 128, 256, 512],
  sizes,
  fonts: {
    body: '"Roboto", Verdana, Arial, serif',
    heading: '"Montserrat", Arial, sans-serif',
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 18, 20, 24, 30, 50],
  fontWeights: {
    thin: 300,
    body: 400,
    medium: 500,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    none: 1,
    body: 1.6,
    heading: 1.2,
    list: 1.4,
  },
  colors: {
    ...colorScheme,
    text: colorScheme.title,
    background: colorScheme.purplePrimary,

  },
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
    },
    centered: {
      display: "flex",
      alignItems: "center"
    },
  },
  inputs: {
    noMarginTop: {
      mt: 0,
    },
  },
  buttons: {
    small: {
      py: 2,
      px: 3,
      fontSize: 3,
    },
  },
  menu: {
    attorneys: {
      borderColor: "attorneys"
    },
    prose: {
      borderColor: "prose"
    },
    jurors: {
      borderColor: "jurors"
    },
    judges: {
      borderColor: "judges"
    },
    about: {
      borderColor: "about"
    },
  },
  menuItem: {
    attorneys: {
      color: "attorneys"
    },
    prose: {
      color: "prose"
    },
    jurors: {
      color: "jurors"
    },
    judges: {
      color: "judges"
    },
    about: {
      color: "about"
    },
  },
  icon: {
    attorneys: {
      color: "attorneysLight"
    },
    prose: {
      color: "proseLight"
    },
    jurors: {
      color: "jurorsLight"
    },
    judges: {
      color: "judgesLight"
    },
    about: {
      color: "aboutLight"
    },
  },
  footer: {
    end: {
      mr: ["auto", null, 0]
    },
    start: {
      ml: ["auto", null, 0]
    },
  },
  transitions: {
    color: "color, border-color .4s ease-in-out",
    bg: "color, background-color .2s ease-in-out",
    shadow: "box-shadow .4s ease-in-out",
    filter: "filter .4s ease-in-out",
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      fontSize: [3, 2],
      ".aside": {
        fontSize: [2, 1],
        ul: {
          my: 0,
          pl: 0,
        },
        li: {
          listStyleType: "none",
        },
        "li a": {
          display: "block",
          pb: 3,
        },
      },
      "article a[href^='http']:after": {
        display: "inline-block",
        background: "url(/extlink.png) no-repeat center center",
        width: 4,
        height: 3,
        content: '""',
      },
      "article a[href^='mailto']:after": {
        display: "inline-block",
        background: "url(/mailto.png) no-repeat center center",
        width: 4,
        height: 3,
        content: '""',
      },
      ".article-content": {
        ".links-list-1290 h4:before": {
          display: "block",
          height: "110px",
          mb: "6px",
          content: '""',
          background: "url(/attorney-landing-left.jpg) no-repeat center center",
          backgroundSize: "cover",
        },
        ".links-list-1291 h4:before": {
          display: "block",
          height: "110px",
          mb: "6px",
          content: '""',
          background: "url(/attorney-landing-middle.jpg) no-repeat center center",
          backgroundSize: "cover",
        },
        ".links-list-1292 h4:before": {
          display: "block",
          height: "110px",
          mb: "6px",
          content: '""',
          background: "url(/attorney-landing-right.jpg) no-repeat center center",
          backgroundSize: "cover",
        },
      },
    },
    h1: {
      variant: "text.heading",
      fontSize: 6,
    },
    h2: {
      variant: "text.heading",
      fontSize: 5,
    },
    h3: {
      variant: "text.heading",
      fontSize: 4,
    },
    h4: {
      variant: "text.heading",
      fontSize: 3,
    },
    h5: {
      variant: "text.heading",
      fontSize: 2,
    },
    h6: {
      variant: "text.heading",
      fontSize: 1,
    },
    img: {
      maxWidth: "50%",
    },
    a: {
      color: "primary",
      ":hover": {
        textDecoration: "none",
      },
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      overflowX: "auto",
      minHeight: 0,
      borderCollapse: "collapse",
      borderSpacing: 0,
      bg: "white",
      width: "full",
      maxWidth: "full",
      mb: 6,
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: "grayGalleryThree",
    },
    th: {
      borderStyle: "solid",
      borderColor: "grayGalleryThree",
      borderWidth: 1,
      borderBottomColor: "grayGalleryThree",
      borderBottomWidth: 2,
      textAlign: "left",
      p: 2,
      bg: "grayLight",
      color: "text",
      verticalAlign: "bottom",
      width: 1,
    },
    "tr:nth-of-type(odd)": {
      bg: "grayLighter",
    },
    "tr:hover": {
      bg: "grayLighter",
    },
    td: {
      borderStyle: "solid",
      borderColor: "grayGalleryThree",
      borderWidth: 1,
      textAlign: "left",
      p: 2,
    },
    centered: {
      textAlign: "center",
    },
    p: {
      mt: 0,
    },
    iframe: {
      maxWidth: "full",
    },
    "p.rteindent1": {
      ml: 6,
    },
    "a.button": {
      display: "inline-block",
      px: [4, 6],
      py: 3,
      bg: "primary",
      color: "white",
      fontWeight: "bold",
      textTransform: "uppercase",
      textDecoration: "none",
      "&.button-no-caps": {
        textTransform: "none",
      },
    },
  },
}

export default theme
