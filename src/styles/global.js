import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  body {
    line-height: 1;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #121421;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  .body {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 3%;
    height: 100%;
    width: 100%;
  }

  .body .div-modal {
    margin-top: 3%;
    flex-basis: 100%;
    height: 100px;
    flex-grow: 2;
    text-align: center;
  }

  .card {
    text-align: center;
    min-width: 250px;
    max-width: 270px;
    height: auto;
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    transition: all ease 0.3s;
    scale: 0.8;
    background-color: #ccc;
  }

  .card:hover {
    background-color: #ffe;
    transform: scale(1.1);
  }

  .add-item {
    justify-content: center;
    margin-top: 25px;
    flex-direction: column;
  }

  .add-item .item {
    padding: 10px;
    width: 50px;
    font-size: 20px;
  }

  .tamanho-janela {
    margin-top: -5%;
    font-size: 12px;
    font-weight: 100;
  }

  .input-div {
    padding: 10px;
    border-radius: 10px;
  }

  .input-div .colapse {
    max-width: 180px;
    max-height: 50px;
  }
  .input-div .alert {
    font-size: 13px;
  }

  .tamanho-porta {
    margin-top: -5%;
    font-size: 12px;
    font-weight: 100;
  }

  .btn {
    height: 50px;
    width: 200px;
    cursor: pointer;
    border-radius: 10px;
  }

  .btn:hover {
    background-color: #ffe;
    transform: scale(1.1);
  }

  .img-tinta {
    margin-right: 10px;
  }

  .text-info-modal {
    margin: 4px 0;
  }

  .info {
    text-align: center;
  }

  .modal-customization {
    border-radius: 10px;
  }
`;
