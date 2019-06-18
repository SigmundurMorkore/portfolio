import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled, { css } from 'styled-components'

import Image from '../components/image'
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

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <>
      <SEO title="Home" />
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
      <main>
        <section>
          <h2>About me</h2>
          <h3>
            Hi, my name is <b>Sigmundur Mørkøre</b>. I’m born in a country with
            18 sheep filled islands, called the <b>Faroe Islands</b>. I went to
            Higher Technical Examination (HTX) school, where I gained a passion
            for <b>web development</b>. I made many websites while in HTX, and
            in the last year, I developed www.ferdaaetlan.fo. After graduating I
            went to, and am in, <b>Edge Hill University</b> studying a bachelor
            in <b>Web Design & Development.</b>
          </h3>
          <aside>
            <Img
              alt="Profile picture"
              fixed={data.profileImg.childImageSharp.fixed}
              style={{ 'border-radius': '50%' }}
            />
            <h3>
              <b>Contact me</b>
            </h3>
            <dl>
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
          <h2>Featured Projects</h2>
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
          <h2>Contact Me</h2>
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
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
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
