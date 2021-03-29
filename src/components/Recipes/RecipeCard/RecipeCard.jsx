import styleCss from './RecipeCard.module.scss';
import { Link } from 'react-router-dom'

const Recipe = ({
    boilTime,
    hops,
    malt,
    method,
    style,
    yeast,
    _id,
    imageURL,
    name
}) => {
    return (
        <>
            <Link to={`/recipes/${_id}/details`} className={styleCss.addedRecipe}>
                <img src={imageURL} alt="beerPic" className={styleCss.pictureAddedRecipe} />
                <h1>{name}</h1>
                <h3>Style: {style}</h3>
            </Link>
        </>
    );
};

export default Recipe;
