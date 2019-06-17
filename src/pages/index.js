import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <>
      <SEO title="Home" />
      <header>
        <h1>
          Hello, I am Sigmundur Mørkøreeee
          <p>I make and design great looking websites.</p>
        </h1>
        <img alt="Image of sheep or something like that" />
      </header>
      <section>
        <h2>About me</h2>
        <p>
          Hi, my name is Sigmundur Mørkøre. I’m born in a country with 18 sheep
          filled islands, called the Faroe Islands. I went to Higher Technical
          Examination (HTX) school, where I gained a passion for web
          development. I made many websites while in HTX, and in the last year,
          I developed www.ferdaaetlan.fo. After graduating I went to, and am in,
          Edge Hill University studying a bachelor in Web Design & Development.
        </p>
        <aside>
          <Img
            alt="Profile picture"
            fixed={data.profileImg.childImageSharp.fixed}
            style={{ 'border-radius': '50%' }}
          />
          <h3>Contact me</h3>
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
          <p>
            I developed Ferðaætlan while studying in Tekniski Skúlanum í
            Klaksvík. It allows the user to see which SSL bus routes they need
            to take, to get to their destination. The website is developed using
            React and Firebase.
          </p>
          <ul>
            <li>
              View on GitHub <img alt="GitHub Logo" />
            </li>
            <li>
              Read more <img alt="Blog logo" />
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
          <p>
            Hvar.fo is a list over all “.fo” domains. All the websites are
            categorized into categories, and the search field allows the user to
            search for anything they want. The website is developed using React,
            Airtable, and Netlify (Functions).
          </p>
        </div>
        <ul>
          <li>
            View on GitHub <img alt="GitHub Logo" />
          </li>
          <li>
            Read more <img alt="Blog logo" />
          </li>
        </ul>
      </section>
      <section>
        <h2>Contact Me</h2>
        <div>
          <h3>Email</h3>
          <p>sm@sigmundur.dev</p>
        </div>
        <div>
          <h3>Twitter</h3>
          <p>@SigmundurM</p>
        </div>
        <div>
          <h3>GitHub</h3>
          <p>@SigmundurMorkore</p>
        </div>
      </section>
    </>
  )
}

export const pageQuery = graphql`
  query {
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
