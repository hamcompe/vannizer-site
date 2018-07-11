import {
  Section,
  ImageWrapper,
  Image,
  SectionHeader,
  ImageCaption,
  Article,
  ArticleTextWrapper,
  ArticleImageWrapper,
  ArticleHeader,
  ArticleDescription,
  ArticleSubHeader,
} from './style'
import ALink from '../../components/ALink'

export default function Page() {
  return (
    <Section>
      <SectionHeader align="left">Talks</SectionHeader>
      <Article>
        <ArticleTextWrapper>
          <header>
            <ArticleHeader>Atomic Design with Next.js</ArticleHeader>
            <ArticleSubHeader>@React Bangkok 2.1.0</ArticleSubHeader>
          </header>
          <ArticleDescription>
            Introduction to Next.js talking about what, why, and how.
          </ArticleDescription>
          <ArticleDescription>
            Also talks about Atomic Design, what it is, and how we adobt these 2 things together.
          </ArticleDescription>
        </ArticleTextWrapper>
        <ArticleImageWrapper>
          <ImageWrapper>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.dropbox.com/s/f5rp1ewpcog03ug/atomic-design-with-nextjs.pdf?dl=0"
            >
              <Image src="static/atomic-design-with-nextjs.png" alt="" width="100%" />
            </a>
            <ImageCaption>
              <ALink
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.dropbox.com/s/f5rp1ewpcog03ug/atomic-design-with-nextjs.pdf?dl=0"
              >
                Slide: Atomic Design with Next.js
              </ALink>
            </ImageCaption>
          </ImageWrapper>
        </ArticleImageWrapper>
      </Article>
      <Article reverse>
        <ArticleImageWrapper>
          <ImageWrapper>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.dropbox.com/s/1dv6gdjl80rcxt7/Testing%20React%20Application%20BKK.pdf?dl=0"
            >
              <Image src="static/testing-react-application.png" alt="" width="100%" />
            </a>
            <ImageCaption>
              <ALink
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.dropbox.com/s/1dv6gdjl80rcxt7/Testing%20React%20Application%20BKK.pdf?dl=0"
              >
                Slide: Testing React Application
              </ALink>
            </ImageCaption>
          </ImageWrapper>
        </ArticleImageWrapper>
        <ArticleTextWrapper>
          <header>
            <ArticleHeader>Testing React Application</ArticleHeader>
            <ArticleSubHeader>@React Bangkok 3.0.0</ArticleSubHeader>
          </header>
          <ArticleDescription>
            Talks about testing and why we should have it. Explore forms of tests and where we
            should focus.
          </ArticleDescription>
          <ArticleDescription>
            Guide about test concept and perspective, showcase testing tools that will improve the
            test.
          </ArticleDescription>
        </ArticleTextWrapper>
      </Article>
    </Section>
  )
}
