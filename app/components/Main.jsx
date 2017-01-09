const React = require('react');

const RecipeBox = require('RecipeBox');
const AddRecipe = require('AddRecipe');

const Main = (props) => {
    return (
        <div>
            <div className="container recipe-box">
                <RecipeBox />
                <AddRecipe />
            </div>
            <footer>
                <hr />
                <p> a <a href="https://www.freecodecamp.com/" target="_blank">freeCodeCamp</a> React Project</p>
                <p> L.S. 2017 </p>
            </footer>
        </div>
    );
};

module.exports = Main;
