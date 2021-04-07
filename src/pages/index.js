import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Support from 'sections/support';
import PremiumFeature from 'sections/premium-feature';
import AppFeature from 'sections/app-feature';
import Dashboard from 'sections/dashboard';
import Pricing from 'sections/pricing';
import Testimonials from 'sections/testimonials';
import Subscribe from 'sections/subscribe';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Crefati - FREE Website Design & Development for your business!"
          description="Crefati offers FREE Website Design & Development for the growth 
		  of your business. Let's build your website now at an affordable cost!"
        />
        <Banner />
        <Support />
        <PremiumFeature />
        <AppFeature />
        <Pricing />
        <Testimonials />
        <Subscribe />
      </Layout>
    </ThemeProvider>
  );
}
