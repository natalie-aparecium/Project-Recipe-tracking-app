import React, { useState } from "react";

function RecipeCreate({createRecipe}) {
  //initial object for items
  const initialFormState = {
    name:"",
    cuisine:"",
    photo:"",
    ingredients:"",
    preparation:"",
  };
  
  const [content, setContent] = useState({...initialFormState});

  //track the changes to the content field
  const handleChange = ({target}) => {
    const value = target.value;
    setContent({
      ...content,
      [target.name]: value,
    });
  };

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(content);
    setContent({...initialFormState});
  };
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td className="createTenPercent">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                onChange={handleChange}
                value={content.name}
              />
            </td>
            <td className="createTenPercent">
              <input
                id="cuisine"
                name="cuisine"
                type="text"
                placeholder="Cuisine"
                onChange={handleChange}
                value={content.cuisine}
              />
            </td>
            <td className="createTenPercent">
              <input
                id="photo"
                name="photo"
                type="text"
                placeholder="Photo"
                onChange={handleChange}
                value={content.photo}
              />
            </td>
            <td className="content_td createThirtyPercent">
              <textarea
                id="ingredients"
                name="ingredients"
                type="text"
                placeholder="Ingredients"
                onChange={handleChange}
                value={content.ingredients}
              />
            </td>
            <td className="content_td createThirtyPercent">
              <textarea
                id="preparation"
                name="preparation"
                type="text"
                placeholder="Preparation"
                onChange={handleChange}
                value={content.preparation}
              />
            </td>
            <td className="createLast">
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
