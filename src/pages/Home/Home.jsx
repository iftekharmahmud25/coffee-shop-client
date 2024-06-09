import AwardCoffee from "../../AwardCoffee/AwardCoffee";
import Banner from "../../componants/Header/Banner/Banner";
import More from "../../componants/More/More";
import Footer from "../../componants/Review/Footer";
import Review from "../../componants/Review/Review";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <More></More>
      <AwardCoffee></AwardCoffee>
      <Review></Review>
      <Footer></Footer>
    </div>
  );
};

export default Home;
