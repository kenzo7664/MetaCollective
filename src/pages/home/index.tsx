import { Fragment, FunctionComponent } from 'react';

import Hero from '../../components/Hero/Hero';
import CarouselUI from '../../components/Ui/Home/CarouselUi';
import CreateAccountLeftUI from '../../components/Ui/Home/CreateAccountLeftUi';
import CreateAccountRightUI from '../../components/Ui/Home/CreateAccountRightUi';
import StripUI from '../../components/Ui/Home/StripUi';
import JoinMeta from '../../components/Ui/Home/JoinMetaUi';
import BuyNowStripUI from '../../components/Ui/Home/BuyNowStripUi';
import MediumBlogUI from '../../components/Ui/Home/MediumBlogUi';
import Footer from '../../components/Footer/Footer';

const HomePage: FunctionComponent = () => {
  return (
    <Fragment>
      <Hero />
      <StripUI />
      <CreateAccountRightUI />
      <CreateAccountLeftUI />
      <CarouselUI />
      <JoinMeta />
      <BuyNowStripUI />
      <MediumBlogUI />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
