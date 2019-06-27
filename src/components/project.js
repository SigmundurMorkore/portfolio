import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Img from 'gatsby-image'

const Project = ({ title, content, link, image, socials }) => (
  <div
    css={css`
      display: grid;
      grid-template:
        'title'
        'image'
        'content'
        'socials';
      box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
      padding: 20px;
      justify-items: center;

      transition: 0.3s ease-in-out;

      :hover {
        transform: scale(1.02);
        transition: 0.3s ease-in-out;
      }

      h3 {
        grid-area: title;
        text-align: center;
        margin-top: 0;
        border-bottom: 1px solid #011627;
        width: 240px;
        height: 30px;

        a {
          text-decoration: none;
        }
      }

      .gatsby-image-wrapper {
        grid-area: image;
        box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
      }

      h4 {
        grid-area: content;
      }

      ul {
        display: grid;
        grid-area: socials;
        grid-template-columns: repeat(auto-fit, minmax(0px, 1fr));
        grid-gap: 0px;
        justify-content: center;
        width: 75%;
        list-style-type: none;
        margin: 0;
        padding: 0;

        h5 {
          display: inline;
          padding-right: 5px;
        }

        li {
          justify-self: center;

          i {
            vertical-align: middle;
          }
        }
      }
    `}
  >
    <h3>
      <a href={link}>{title}</a>
    </h3>
    <a href={link}>
      <Img
        alt="test"
        fixed={image.childImageSharp.fixed}
        css={css`
          box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
        `}
      />
    </a>
    <h4 dangerouslySetInnerHTML={{ __html: content }} />
    <ul
      css={css`
        min-height: 20.75px;
      `}
    >
      {socials
        ? socials.map((social, i) => (
            <li key={social.label}>
              <h5>{social.label}</h5>
              <i className={social.icon} />
            </li>
          ))
        : null}
    </ul>
  </div>
)

export default Project
