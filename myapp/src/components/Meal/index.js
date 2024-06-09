
import {Item,Image,Name} from './styledComponents'

const Meal = (props) => {
    console.log(props)

    const {mealDetails} = props 
    const {name,thumbnail} = mealDetails

    return <Item>
        <Image src={thumbnail} alt={name}/>
        <Name>{name}</Name>
    </Item>
}

export default Meal