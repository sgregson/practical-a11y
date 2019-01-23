import React from "react";
import styled, { withTheme } from "styled-components";
import syntaxStyle from "react-syntax-highlighter/styles/prism/funky";

// Good themes: future, yellow
import { yellow as theme } from "mdx-deck/themes";

/**
 * Components
 */

const UL = styled.ul`
  text-align: left;
  ${({ unstyled }) => (unstyled && `list-style-type: none`) || ""}
`;
const OL = styled.ol`
  text-align: left;
  ${({ unstyled }) => (unstyled && `list-style-type: none`) || ""}
`;
export const List = ({ ordered, ...props }) => {
  const Element = ordered ? OL : UL;
  return <Element {...props} />;
};

const insetChildren = `
  @media screen and (min-width: 40em) {
    margin-left: 64px;
    margin-right: 64px;
  }
  @media screen and (min-width: 52em) {
    margin-left: 128px;
    margin-right: 128px;
  }
`;

export const Flex = styled.div`
  display: flex;
  ${({ m }) => m && `margin: ${m};`}
  ${({ p }) => p && `padding: ${p};`}
  ${({ flexDirection }) => flexDirection && `flex-direction: ${flexDirection};`}
  ${({ flex }) => flex && `flex: ${flex};`}
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent};`}
`;
export const Block = Flex;
export const Grid = styled(Flex)`
  margin: ${({ gutter }) => `-${gutter}`};
  > * {
    margin: ${({ gutter }) => gutter};
  }
`;
export const Card = styled(Flex)`
  background-color: ${({ theme }) => theme.colors.background};
`;

export const RelativeLayout = styled.div`
  position: relative;

  > * {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    > * {
      ${insetChildren}
    }
  }
`;
export const Text = styled.p`
  text-align: left;
`;
export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const Image = styled.div`
  width: 100vw;
  height: 100vh;
  background: no-repeat center/cover url(${props => props.src});
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  > * {
    text-shadow: 0.03em 0.03em 0.01em ${({ theme }) => theme.colors.background};
    ${insetChildren}
  }
`;

// Works best with the Image component above
export const Caption = styled.span`
  font-size: ${({ small }) => (small ? "0.5em" : "0.75em")};
  position: absolute;
  bottom: 24px;
  right: 0;
  margin: 0;
`;

export default {
  ...theme,
  colors: {
    ...theme.colors,
    white: "#fff"
  },
  prism: {
    style: syntaxStyle
  }
  // Read the docs for more info:
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md
};
