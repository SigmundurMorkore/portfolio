import React from 'react'
import Img from 'gatsby-image'
import styled, { css } from 'styled-components'

import SEO from '../components/seo'
import header from '../images/header.jpg'

const Header = styled.header`
  height: 40vw;
  margin: 0 auto;

  /* Background Image */
  background: linear-gradient(rgba(1, 22, 39, 0.9), rgba(1, 22, 39, 0.9)),
    url(${header});
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  clip-path: inset(0 -100% 0 0 round 0% 0% 0% 35%);

  /* Text */
  color: white;
  text-align: center;
`

const SectionTitle = styled.h2`
  text-align: center;
  margin-top: 30px;
  position: relative;
  z-index: 1;

  &:before {
    content: '';
    border-top: 2px solid #dfdfdf;
    margin: 0 auto;
    /* this centers the line to the full width specified */
    position: absolute;
    /* positioning must be absolute here, and relative positioning must be applied to the parent */
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    width: 95%;
    z-index: -1;
    /* this is just to undo the :before styling from above */
    border-top: none;
  }

  &:after {
    content: '';
    border-bottom: 1px solid #011627;
    box-shadow: 0 1px 0 0 #011627;
    margin: 0 auto;
    /* this centers the line to the full width specified */
    position: absolute;
    top: 45%;
    left: 0;
    right: 0;
    width: 95%;
    z-index: -1;
  }

  span {
    /* to hide the lines from behind the text, you have to set the background color the same as the container */
    background: #fff;
    padding: 0 15px;
  }
`

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <>
      <SEO title="Sigmundur Mørkøre's Portfolio" />
      <Header>
        <h1
          css={`
            display: inline-block
            font-family: Brawler;
            font-size: 64px;
            padding-top: 15%;
            margin-right: 50px;
          `}
        >
          Hello, I am{' '}
          <b
            css={`
              font-family: 'Bree Serif';
            `}
          >
            Sigmundur Mørkøre
          </b>
          <p
            css={`
              margin: 0;
              padding-top: 10px;
              margin-right: -50px;
              font-size: 36px;
              text-align: right;
            `}
          >
            I make and design great looking websites.
          </p>
        </h1>
      </Header>
      <main
        css={css`
          margin: 50px 5vw;
        `}
      >
        <section
          css={css`
            display: grid;
            grid-column-gap: 50px;
            grid-template:
              '. about about aside'
              '. content content aside';
            margin: 0 10vw;
          `}
        >
          <h2
            css={css`
              grid-area: about;
              margin-bottom: 0;
              display: flex;
              align-items: flex-end;
            `}
          >
            About me
          </h2>
          <h3
            css={css`
              grid-area: content;
            `}
          >
            Hi, my name is <b>Sigmundur Mørkøre</b>. I’m born in a country with
            18 sheep filled islands, called the <b>Faroe Islands</b>. I went to
            Higher Technical Examination (HTX) school, where I gained a passion
            for <b>web development</b>. I made many websites while in HTX, and
            in the last year, I developed www.ferdaaetlan.fo. After graduating I
            went to, and am in, <b>Edge Hill University</b> studying a bachelor
            in <b>Web Design & Development.</b>
          </h3>
          <aside
            css={css`
              grid-area: aside;
              width: 250px;
              height: 300px;
              box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
              margin: 0 auto;
              margin-top: 50px;
            `}
          >
            <Img
              alt="Profile picture"
              fixed={data.profileImg.childImageSharp.fixed}
              style={{ 'border-radius': '50%', display: 'block' }}
              css={css`
                margin-top: -50px;
                margin-left: auto;
                margin-right: auto;
                box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
              `}
            />
            <h3
              css={css`
                text-align: center;
                margin-bottom: 0;
                margin-top: 10px;
              `}
            >
              <b>Contact me</b>
            </h3>
            <dl
              css={css`
                margin: 0 22px;
              `}
            >
              <dt>Email</dt>
              <dd>sm@sigmundur.dev</dd>
              <dt>Twitter</dt>
              <dd>@SigmundurM</dd>
              <dt>GitHub</dt>
              <dd>@SigmundurMorkore</dd>
              <dt>Blog</dt>
              <dd>sigmundur.dev/blog</dd>
            </dl>
          </aside>
        </section>
        <section>
          <SectionTitle>
            <span>Featured Projects</span>
          </SectionTitle>
          <div>
            <h3>Ferdaaetlan.fo</h3>
            <Img
              alt="Screenshot of the ferdaaetlan.fo page"
              fixed={data.ferdaaetlanImg.childImageSharp.fixed}
            />
            <h4>
              I developed <b>Ferðaætlan</b> while studying in{' '}
              <b>Tekniski Skúlanum í Klaksvík.</b> It allows the user to see
              which SSL bus routes they need to take, to get to their
              destination. The website is developed using{' '}
              <b>React and Firebase.</b>
            </h4>
            <ul>
              <li>
                <h5>View on GitHub</h5> <img alt="GitHub Logo" />
              </li>
              <li>
                <h5>Read more</h5> <img alt="Blog logo" />
              </li>
            </ul>
          </div>
          <div>
            <h3>Hvar.fo</h3>
            <Img
              alt="Screenshot of the hvar.fo page"
              fixed={data.hvarImg.childImageSharp.fixed}
              objectFit="cover"
            />
            <h4>
              <b>Hvar.fo</b> is a list over all “.fo” domains. All the websites
              are categorized into categories, and the search field allows the
              user to search for anything they want. The website is developed
              using <b>React, Airtable, and Netlify (Functions).</b>
            </h4>
          </div>
          <ul>
            <li>
              <h5>View on GitHub</h5> <img alt="GitHub Logo" />
            </li>
            <li>
              <h5>Read more</h5> <img alt="Blog logo" />
            </li>
          </ul>
        </section>
        <section>
          <SectionTitle>
            <span>Contact Me</span>
          </SectionTitle>
          <dl>
            <div>
              <dt>Email</dt>
              <dd>sm@sigmundur.dev</dd>
            </div>
            <div>
              <dt>Twitter</dt>
              <dd>@SigmundurM</dd>
            </div>
            <div>
              <dt>GitHub</dt>
              <dd>@SigmundurMorkore</dd>
            </div>
          </dl>
        </section>
      </main>
    </>
  )
}

export const pageQuery = graphql`
  query {
    headerImg: file(relativePath: { eq: "header.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 1000) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    profileImg: file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 105, height: 105) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    ferdaaetlanImg: file(relativePath: { eq: "ferdaaetlan.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 290, height: 270) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    hvarImg: file(relativePath: { eq: "hvar.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 290, height: 270) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
