"use client";

import styled from "styled-components";

const MDXRemoteWrapper = styled.div`
  & img {
    max-width: 100%;
    height: auto;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    border-radius: 16px;
    margin-bottom: 12px;
  }

  & iframe {
    border-radius: 16px;
  }

  & img + em {
    font-size: 16px;
    text-align: center;
    color: var(--text-grey-color);
    display: block;
    font-style: normal;
  }

  & p {
    color: var(--text-grey-color);
    font-size: 18px;
    font-weight: 400;
    line-height: 32px;
    margin: 32px 0;
  }

  & p > a {
    color: #007bff;
  }

  & p > a:hover {
    text-decoration-line: underline;
  }

  & li {
    color: var(--text-grey-color);
    font-size: 18px;
    line-height: 32px;
  }

  & li > a {
    color: #007bff;
  }

  & li > a:hover {
    text-decoration-line: underline;
  }

  & h1 {
    margin-top: 52px;
    margin-bottom: 20px;
    font-size: 40px;
    scroll-margin-top: 100px;
    font-weight: 600;
    line-height: 52px;
  }

  & h2 {
    margin-top: 52px;
    margin-bottom: 20px;
    font-size: 32px;
    scroll-margin-top: 100px;
    font-weight: 600;
    line-height: 44px;
  }

  & h3 {
    margin-top: 52px;
    margin-bottom: 20px;
    font-size: 28px;
    scroll-margin-top: 100px;
    font-weight: 600;
    line-height: 36px;
  }

  & h4 {
    margin-top: 52px;
    margin-bottom: 20px;
    font-size: 24px;
    scroll-margin-top: 100px;
    font-weight: 600;
    line-height: 32px;
  }

  & h5 {
    margin-top: 52px;
    margin-bottom: 20px;
    font-size: 20px;
    scroll-margin-top: 100px;
    font-weight: 600;
    line-height: 28px;
  }

  & h6 {
    margin-top: 52px;
    margin-bottom: 20px;
    font-size: 16px;
    scroll-margin-top: 100px;
    font-weight: 600;
    line-height: 24px;
  }

  & .anchor {
    display: flex;
    align-items: center;
  }

  & .anchor::after {
    content: "🔗";
    font-size: 20px;
    opacity: 0;
    transition: all 0.2s ease-in-out;
  }

  & .anchor:hover::after {
    content: "🔗";
    font-size: 20px;
    margin-left: 8px;
    color: #2b6cb0;
    opacity: 1;
  }

  & blockquote {
    margin: 40px 0;
    padding: 8px 32px;
    border-radius: 24px;
    background-color: var(--background-grey-color);
    display: flex;
    align-items: center;
  }

  & blockquote p {
    font-size: 18px;
    margin: 12px 0;
    line-height: 32px;
    color: black;
  }

  & blockquote::before {
    content: url("/docs.svg");
    display: flex;
    align-items: center;
    margin-right: 16px;
    width: 20px;
    height: 20px;
  }

  & pre {
    line-height: 28px;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    margin: 0;
  }

  & code span {
    font-size: 14px;
    font-family: var(--font-menlo);
    color: var(--text-black-color);
  }

  & code span span {
    font-size: 14px;
    font-family: var(--font-menlo);
    color: var(--text-black-color);
  }

  & pre::-webkit-scrollbar {
    display: none;
  }

  & div {
    font-size: 14px;
    font-family: var(--font-menlo);
    color: #666666;
    background-color: #fafafa;
    padding: 16px 20px;
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
    border: 1.6px solid var(--border-grey-color);
    border-bottom: none;
  }

  & div + figure {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    padding: 16px 24px;
    margin: 0;
    margin-bottom: 20px;
    border: 1.6px solid var(--border-grey-color);
  }

  & figure {
    border-radius: 16px;
    padding: 16px 24px;
    margin: 0;
    margin-bottom: 20px;
    border: 1.6px solid var(--border-grey-color);
  }

  & h2[id="contents"] {
    margin-top: 52px;
    margin-bottom: 0;
    padding: 28px 0 0 32px;
    font-size: 28px;
    background-color: var(--background-color);
    border: 1px solid var(--border-grey-color);
    border-bottom: none;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
  }

  & h2[id="contents"] + ul {
    background-color: var(--background-color);
    border: 1px solid var(--border-grey-color);
    border-top: none;
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
    margin-top: 0;
    padding: 8px 48px 20px 48px;
    margin-bottom: 40px;
  }

  & h2[id="contents"] + ul li {
    margin: 8px 0;
  }

  & h2[id="contents"] + ul a {
    color: var(--text-grey-color);
    text-decoration: none;
    transition: color 0.2s ease;
  }

  & h2[id="contents"] + ul a:hover {
    color: #007bff;
    text-decoration: underline;
  }

  & h2[id="contents"] + ul ul {
    margin-top: 8px;
    padding-left: 20px;
  }

  @media (max-width: 900px) {
    .article {
      max-width: none;
      margin: 60px 40px 0 40px;
    }
  }

  @media (max-width: 550px) {
    .article {
      max-width: none;
      margin: 60px 28px 0 28px;
    }
  }
`;

export default MDXRemoteWrapper;
