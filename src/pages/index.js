import React from 'react'
import Img from 'gatsby-image'
import styled, { css } from 'styled-components'

import SEO from '../components/seo'
import Project from '../components/project'
import header from '../../static/images/header.jpg'

const Header = styled.header`
  height: 40vw;
  max-height: 750px;
  min-height: 250px;
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
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const SectionTitle = styled.h2`
  text-align: center;
  margin-top: 100px;
  margin-bottom: 50px;
  position: relative;
  z-index: 1;
  @media (max-width: 400px) {
    font-size: 8vw;
  }

  &:before {
    content: '';
    border-top: 2px solid #dfdfdf;
    margin: 0 auto;
    /* this centers the line to the full width specified */
    position: absolute;
    /* positioning must be absolute here, and relative positioning must be applied to the parent */
    top: 50%;
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
    top: 50%;
    left: 0vw;
    width: 100%;
    z-index: -1;
  }

  span {
    /* to hide the lines from behind the text, you have to set the background color the same as the container */
    background: #fff;
    padding: 0 15px;
  }
`

const ContactBox = styled.a`
  text-decoration: none;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
  padding: 20px;
  justify-items: center;
  transition: 0.3s ease-in-out;

  :hover {
    transform: scale(1.05);
    transition: 0.3s ease-in-out;
  }

  dt {
    text-align: center;
    font-size: 28px;
    line-height: 38px;
  }

  dd {
    text-align: center;
    font-size: 24px;
    line-height: 130%;
    margin: 0; /* Remove default dd margin */
  }
`

const IndexPage = ({ data }) => (
  <>
    <SEO title="Sigmundur M??rk??re's Portfolio" test={console.log(data)} />
    <Header>
      <h1
        css={`
            display: inline-block
            font-family: Brawler;
            font-size: 64px;

            /* Center Text */
            position: relative;
            float: left;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            @media(max-width: 1200px) {
              font-size: 5.3vw;
            }
          `}
      >
        Hello, I am{' '}
        <b
          css={`
            font-family: 'Bree Serif';
          `}
        >
          Sigmundur M??rk??re
        </b>
        <p
          css={`
            margin: 0;
            padding-top: 10px;
            margin-right: -3vw;
            font-size: 36px;
            text-align: right;

            @media (max-width: 1200px) {
              font-size: 3vw;
            }
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

          @media (max-width: 700px) {
            grid-template:
              'about'
              'content'
              'aside';
          }
        `}
      >
        <h2
          css={css`
            grid-area: about;
            margin-bottom: 10px;
            display: flex;
            align-items: flex-end;
          `}
        >
          <b>About me</b>
        </h2>
        <h3
          css={css`
            grid-area: content;
            margin-top: 10px;
          `}
        >
          Hi, my name is <b>Sigmundur M??rk??re</b>. I???m born in a country with 18
          sheep filled islands, called the <b>Faroe Islands</b>. I went to
          Higher Technical Examination (HTX) school, where I gained a passion
          for <b>web development</b>. I made many websites while in HTX, and in
          the last year, I developed{' '}
          <a href="https://ferdaaetlan.fo">www.ferdaaetlan.fo</a>. After
          graduating I went to, and am in, <b>Edge Hill University</b> studying
          a bachelor in <b>Web Design & Development.</b>
        </h3>
        <aside
          css={css`
            position: sticky;
            top: 100px;
            grid-area: aside;
            width: 250px;
            height: 300px;
            box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
            margin: 0 auto;
            margin-top: 50px;

            transition: 0.3s ease-in-out;

            :hover {
              transform: scale(1.02);
              transition: 0.3s ease-in-out;
            }
          `}
        >
          <Img
            alt="Profile picture"
            fixed={data.profileImg.childImageSharp.fixed}
            style={{ borderRadius: '50%', display: 'block' }}
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
        <div
          css={css`
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 500px));
            grid-gap: 50px;
            justify-content: center;
          `}
        >
          {data.projects.edges.map((project, i) => (
            <Project
              title={project.node.frontmatter.title}
              link={project.node.frontmatter.link}
              content={project.node.html}
              image={project.node.frontmatter.image}
              socials={project.node.frontmatter.socials}
            />
          ))}
        </div>
      </section>
      <section>
        <SectionTitle>
          <span>Contact Me</span>
        </SectionTitle>
        <dl
          css={css`
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(270px, 375px));
            grid-gap: 50px;
            justify-content: center;
          `}
        >
          <ContactBox href="#">
            <dt>Email</dt>
            <dd>sm@sigmundur.dev</dd>
          </ContactBox>
          <ContactBox href="#">
            <dt>Twitter</dt>
            <dd>@SigmundurM</dd>
          </ContactBox>
          <ContactBox href="#">
            <dt>GitHub</dt>
            <dd>@SigmundurMorkore</dd>
          </ContactBox>
        </dl>
      </section>
    </main>
  </>
)

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

    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/_projects/" } }
    ) {
      edges {
        node {
          frontmatter {
            image {
              childImageSharp {
                fixed(width: 290, height: 270) {
                  ...GatsbyImageSharpFixed_withWebp_tracedSVG
                }
              }
            }
            link
            socials {
              icon
              label
            }
            title
          }
          html
        }
      }
    }
  }
`
/*
allMarkdownRemark(filter: { frontmatter: { path: { eq: "_projects" } } }) {
  edges {
    node {
      html
      frontmatter {
        title
        link
        image
        socials
      }
    }
  }
}
*/

export default IndexPage
