import { css } from '@emotion/core';

export const baseUrl = 'https://kyoormd-api.herokuapp.com/';
// export const baseUrl = 'http://localhost:5000/';

export const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export const loaderCSS = css`
  position: absolute;
  top: 80%;
  left: 50%;
`;
