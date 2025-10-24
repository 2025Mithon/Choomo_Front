import { Global, css } from '@emotion/react';

const Background = () => (
  <Global
    styles={css`
        html, body, #root {
            height: 100%;
            margin: 0;
            padding: 0;
      }




      body {
        background: #F9E9E2;

      }

    `}
  />
);

export default Background;
