/** @jsx jsx */
import { jsx, Box, Container, Grid } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Accordion from 'components/accordion/accordion';
import Image from 'components/image';
import messenger from 'assets/images/laying.svg';
import emoji from 'assets/images/icons/emoji-2.png';

const data = [
  {
    title: 'FREE Domain',
    contents: (
      <div>
        Domain is the name of your website like yourbusiness.com. Crefati offers
		TLDs, gccTLDs and New TLDS for FREE (.com, .net, .org, .co.tz, .sc.tz, .or.tz, .blog, .icu, .xyz, .shop, .tech, .design etc)
      </div>
    ),
  },
  {
    title: 'FREE SSL',
    contents: (
      <div>
        Crefati understands that SSL is better for your business search engine ranking,
		 SSL affirms your identity, improves customer trust and protects data, that's why 
		 Crefati makes sure you get SSL for 100% FREE.
      </div>
    ),
  },
  {
    title: `Other FREE Stuffs`,
    contents: (
      <div>
        We understand that your business needs identity that's why with Crefati Business 
		Plan, you get FREE Logo Design and FREE Business Card Design.
      </div>
    ),
  },
];

const PremiumFeature = () => {
  return (
    <section id="features" sx={styles.section}>
      <Container>
        <Grid sx={styles.grid}>
          <Box as="figure" sx={styles.illustration}>
            <Image src={messenger} alt="messenger" />
          </Box>
          <Box sx={styles.rightContent}>
            <SectionHeading
              emoji={emoji}
              sx={styles.heading}
              title="Meet our premium features that will make you wow"
              description="We are client-focused, customer-centric, creating website solutions
			  that deliver tangible business results"
            />
            <Box sx={styles.accordionGroup}>
              <Accordion items={data} />
            </Box>
          </Box>
        </Grid>
      </Container>
    </section>
  );
};

export default PremiumFeature;

const styles = {
  section: {
    pt: [6, null, null, 6, 8, 9],
    pb: [6, null, null, null, 7, 9, 11, null],
  },
  grid: {
    alignItems: 'center',
    gridTemplateColumns: [
      '1fr',
      null,
      null,
      null,
      '1fr 431px',
      '1fr 530px',
      '1fr 550px',
    ],
  },
  heading: {
    textAlign: ['left', null, null, 'center', 'left'],
    ml: [null, null, null, 'auto'],
    maxWidth: [null, null, null, 520, 660],
    h2: {
      fontSize: [null, null, null, 10, 8, 10, 40],
      img: {
        maxWidth: [24, null, null, 30, 25, null, '100%'],
        top: ['4px', '8px', null, null, '4px', '8px'],
      },
    },
    p: {
      fontSize: [null, null, null, 2],
    },
  },
  illustration: {
    mb: [-6, null, null, -8, 0],
  },
  accordionGroup: {
    m: [null, null, null, '0 auto', 'unset'],
    maxWidth: [null, null, null, 600, 'none'],
  },
};
