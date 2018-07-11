import ALink from '../../components/ALink'
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
} from './style'

export default function Page() {
  return (
    <Section>
      <SectionHeader align="left">Hobbies</SectionHeader>
      <Article reverse>
        <ArticleImageWrapper>
          <ImageWrapper>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://chrome.google.com/webstore/detail/facebook-mobile-to-deskto/pmidcobfpkhmojlamdpjkakfbaaiaaan?hl=en"
            >
              <Image src="static/facebook-mobile-to-desktop.png" alt="" width="100%" />
            </a>
            <ImageCaption>
              <ALink
                target="_blank"
                rel="noreferrer noopener"
                href="https://chrome.google.com/webstore/detail/facebook-mobile-to-deskto/pmidcobfpkhmojlamdpjkakfbaaiaaan?hl=en"
              >
                Chrome Web Store: Facebook mobile to desktop
              </ALink>
            </ImageCaption>
          </ImageWrapper>
        </ArticleImageWrapper>
        <ArticleTextWrapper>
          <header>
            <ArticleHeader>Facebook mobile to desktop</ArticleHeader>
          </header>
          <ArticleDescription>
            A Chrome extension that will converts Facebook’s mobile site to desktop site in one
            click.
          </ArticleDescription>
        </ArticleTextWrapper>
      </Article>
      <Article>
        <ArticleTextWrapper>
          <header>
            <ArticleHeader>Next Showtime</ArticleHeader>
          </header>
          <ArticleDescription>
            A movie showtime checking site, comes with additional movie data (e.g., imdb score).
          </ArticleDescription>
          <ArticleDescription>
            Using showtime data from{' '}
            <ALink
              target="_blank"
              rel="noreferrer noopener"
              href="https://showtimes.everyday.in.th"
            >
              ShowtimesTH
            </ALink>, additional movie data from{' '}
            <ALink target="_blank" rel="noreferrer noopener" href="https://www.omdbapi.com/">
              OMDB
            </ALink>
            . Enhance content serving and search speed by{' '}
            <ALink target="_blank" rel="noreferrer noopener" href="https://www.algolia.com/">
              Algolia
            </ALink>.
          </ArticleDescription>
        </ArticleTextWrapper>
        <ArticleImageWrapper>
          <ImageWrapper>
            <a target="_blank" rel="noreferrer noopener" href="https://showtime.vannizer.com/">
              <Image src="static/next-showtime.png" alt="" width="100%" />
            </a>
            <ImageCaption>
              <ALink
                target="_blank"
                rel="noreferrer noopener"
                href="https://showtime.vannizer.com/"
              >
                showtime.vannizer.com
              </ALink>
            </ImageCaption>
          </ImageWrapper>
        </ArticleImageWrapper>
      </Article>
    </Section>
  )
}
