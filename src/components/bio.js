/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import linkedin from '../../content/assets/linkedin-icon.svg'
import twitter from '../../content/assets/twitter-icon.svg'
import facebook from '../../content/assets/fb-icon.svg'
import instagram from '../../content/assets/instagram-icon.svg'

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter,
            linkedin
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  const avatar = data?.avatar?.childImageSharp?.fixed

  const SocialIcons = () => (
    <>
      {social.linkedin && <a href={social.linkedin}><img src={linkedin} className="bio-social-icon" /></a>}
      {social.twitter && <a href={social.twitter}><img src={twitter} className="bio-social-icon" /></a>}
      {social.facebook && <img src={facebook} className="bio-social-icon" />}
      {social.instagram && <img src={instagram} className="bio-social-icon" />}
    </>
  )

  return (
    <div className="bio">
      <Image
        fixed={avatar}
        alt={author?.name || ``}
        className="bio-avatar"
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <div className="bio-text-social">
        <p>
          Escrito por <strong>{author.name}</strong>, {author?.summary || null}
          {` `}
          {/* <a href={`https://twitter.com/${social?.twitter || ``}`}>
            You should follow them on Twitter
          </a> */}
        </p>
        <div className="bio-social-box">
          <SocialIcons />
        </div>
      </div>
    </div>
  )
}

export default Bio
