import {Link} from 'react-router-dom'
import { Item, Image, Name } from "./styledComponents";

import './index.css'

const Meal = (props) => {

  const { mealDetails } = props;
  const { name, thumbnail, id } = mealDetails;

  return (
    <Item>
    <Link className="link" to={`/meal/${id}`}>
      <Image src={thumbnail} alt={name} />
      <Name>{name}</Name>
    </Link>
    </Item>
  );
};

export default Meal;
