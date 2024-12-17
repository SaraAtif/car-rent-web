import HeroPage from "./components/hero";
import PopularCar from "./components/popularCar";
import RecomendationCar from "./components/recomendation-car";


export default function Home() {
  return (
    <div>
      <HeroPage/>
      <PopularCar/>
      <RecomendationCar/>
    </div>
  );
}
