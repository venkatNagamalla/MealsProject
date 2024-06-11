import { useState, useEffect } from "react";
import Headers from "../Headers";
import Banner from "../Banner";
import Loader from "../Loader";
import Meal from "../Meal";
import Failure from "../Failure";
import {
  HomeContainer,
  TopButton,
  Anchor,
  RetryBtn,
  RecipesContainer,
  HomeInnerContainer,
  Container,
  Heading,
  FailureContainer,
  ListContainer,
} from "./styledComponents";


const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  inProgress: "IN_PROGRESS",
  failure: "FAILURE",
};

const Home = () => {
  const [apiConfig, setApiConfig] = useState({
    apiStatus: apiStatusConstants.initial,
    details: [],
  });

  const formatEachMeal = (obj) => ({
    id: obj.idMeal,
    thumbnail: obj.strMealThumb,
    name: obj.strMeal,
  });

  const getData = async () => {
    setApiConfig({ apiStatus: apiStatusConstants.inProgress });
    const api = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
    const response = await fetch(api);
    if (response.ok) {
      const data = await response.json();
      const updatedData = data.meals.map((eachMeal) =>
        formatEachMeal(eachMeal)
      );
      setApiConfig({
        apiStatus: apiStatusConstants.success,
        details: updatedData,
      });
    } else {
      setApiConfig({ apiStatus: apiStatusConstants.failure });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const renderLoaderView = () => (
    <div>
      <Loader />
    </div>
  );

  const renderFailureView = () => (
    <FailureContainer>
      <Failure />
      <RetryBtn onClick={getData} >Retry</RetryBtn>
    </FailureContainer>
  );

  const renderFooter = () => (
    <div>
      <TopButton type="button">
        <Anchor href="#top">Go to Top</Anchor>
      </TopButton>
    </div>
  );

  const renderSuccessView = () => (
    <>
      <ListContainer>
        {apiConfig.details.map((eachMeal) => (
          <Meal key={eachMeal.id} mealDetails={eachMeal} />
        ))}
      </ListContainer>
      {renderFooter()}
    </>
  );

  const renderHomeRecipes = () => {
    switch (apiConfig.apiStatus) {
      case apiStatusConstants.inProgress:
        return renderLoaderView();
      case apiStatusConstants.failure:
        return renderFailureView();
      case apiStatusConstants.success:
        return renderSuccessView();
      default:
        return null;
    }
  };

  return (
    <>
      <Headers />
      <HomeContainer>
        <Banner id="top" />
        <HomeInnerContainer>
          <Container>
            <Heading>Explore Here!</Heading>
            <RecipesContainer>{renderHomeRecipes()}</RecipesContainer>
          </Container>
        </HomeInnerContainer>
      </HomeContainer>
    </>
  );
};

export default Home;
