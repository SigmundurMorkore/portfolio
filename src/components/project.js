import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Project = ({ title, content, link, image, socials }) => {
  const data = useStaticQuery(graphql`
    query image {
      file(relativePath: { eq: "uploads/code.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 290, height: 270) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  console.log(data)

  return (
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
          alt="Screenshot of the hvar.fo page"
          fixed={data.file.childImageSharp.fixed}
          objectFit="cover"
        />
      </a>
      <h4 dangerouslySetInnerHTML={{ __html: content }} />
      <ul
        css={css`
          min-height: 20.75px;
        `}
      >
        {socials.map((social, i) => (
          <li key={social.label}>
            <h5>{social.label}</h5>
            <i className={social.icon} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Project
