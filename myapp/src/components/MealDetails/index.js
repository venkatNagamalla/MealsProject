import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Failure from '../Failure'
import Headers from "../Headers";
import Loader from '../Loader'
import SingleMeal from '../SingleMeal'

import { MealContainer, FailureContainer,RetryBtn } from "./styledComponents";

const apiStatusConstants =  {
  initial: "INTIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const MealDetails = () => {
  const [mealData, setMealData] = useState({
    apiStatus: apiStatusConstants.initial,
    details: {},
  });

  const { id } = useParams();

  const getFormatedData = (obj) => ({
    id: obj.idMeal,
    area: obj.strArea,
    name: obj.strMeal,
    category: obj.strCategory,
    thumbnail: obj.strMealThumb,
    video: obj.strYoutube,
    instructions:obj.strInstructions,
    ing1: obj.strIngredient1,
    ing2: obj.strIngredient2,
    ing3: obj.strIngredient3,
    ing4: obj.strIngredient4,
    ing5: obj.strIngredient5,
    ing6: obj.strIngredient6,
    ing7: obj.strIngredient7,
    ing8: obj.strIngredient8,
    ing9: obj.strIngredient9,
    ing10: obj.strIngredient10,
    ing11: obj.strIngredient11,
    ing12: obj.strIngredient12,
    ing13: obj.strIngredient13,
    ing14: obj.strIngredient14,
    ing15: obj.strIngredient15,
    ing16: obj.strIngredient16,
    ing17: obj.strIngredient17,
    ing18: obj.strIngredient18,
    ing19: obj.strIngredient19,
    ing20: obj.strIngredient20,
    measure1: obj.strMeasure1,
    measure2: obj.strMeasure2,
    measure3: obj.strMeasure3,
    measure4: obj.strMeasure4,
    measure5: obj.strMeasure5,
    measure6: obj.strMeasure6,
    measure7: obj.strMeasure7,
    measure8: obj.strMeasure8,
    measure9: obj.strMeasure9,
    measure10: obj.strMeasure10,
    measure11: obj.strMeasure11,
    measure12: obj.strMeasure12,
    measure13: obj.strMeasure13,
    measure14: obj.strMeasure14,
    measure15: obj.strMeasure15,
    measure16: obj.strMeasure16,
    measure17: obj.strMeasure17,
    measure18: obj.strMeasure18,
    measure19: obj.strMeasure19,
    measure20: obj.strMeasure20,

  });

  const getMealData = async () => {
    setMealData({ apiStatus: apiStatusConstants.inProgress });
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      const updatedData = getFormatedData(data.meals[0]);
      setMealData({
        apiStatus: apiStatusConstants.success,
        details: updatedData,
      });
    } else {
      setMealData({ apiStatus: apiStatusConstants.failure });
    }
  };

  useEffect(() => {
    getMealData();
  }, []);

  const renderLoaderView = () => <Loader/>
  
  const renderFailureView = () => (
    <FailureContainer>
      <Failure />
      <RetryBtn onClick={getMealData} >Retry</RetryBtn>
    </FailureContainer>
  );

  const renderSuccessView = () => <SingleMeal details={mealData.details} />

  const renderMeal = () => {
    switch (mealData.apiStatus) {
      case apiStatusConstants.inProgress:
        return renderLoaderView()
        case apiStatusConstants.failure:
          return renderFailureView()
        case apiStatusConstants.success:
          return renderSuccessView()
      default:
        return null
    }
  };

  return (
    <>
      <Headers />
      <MealContainer>{renderMeal()}</MealContainer>
    </>
  );
};

export default MealDetails;
