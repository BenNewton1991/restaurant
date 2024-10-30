import burger_1 from "./Images/burger_1.png";
import burger_2 from "./Images/burger_2.png";
import burger_3 from "./Images/burger_3.png";
import burger_4 from "./Images/burger_4.png";
import burger_5 from "./Images/burger_5.png";
import burger_6 from "./Images/burger_6.png";


const content = document.getElementById('content');

function menu()
{
    let home_button = document.getElementById('menu');

    home_button.addEventListener('click', function(){
        display_menu();
    })

    function display_menu()
    {
        content.innerHTML = '';

        let menu_div = document.createElement('div');
        menu_div.setAttribute('class', 'home_content');
        let title = document.createElement('h2');
        title.textContent = "See our delicious burgers...";
        menu_div.appendChild(title);

        let food_intro = document.createElement('h2');
        food_intro.textContent = ";)";
        menu_div.appendChild(food_intro);

        let food_div = document.createElement('div');
        food_div.setAttribute('class', 'food');

        let imageSources = [
            [burger_1, "burger 1"],
            [burger_2, "burger 2"],
            [burger_3, "burger 3"],
            [burger_4, "burger 4"],
            [burger_5, "burger 5"],
            [burger_6, "burger 6"],
        ]


        for (let i = 0; i < 6; i++)
        {
    
        let first_food = document.createElement('div');
        first_food.setAttribute('class', 'food_item_div');

        let first_image = document.createElement('img');
        first_image.setAttribute('class', 'food_img');
        first_image.setAttribute('src', imageSources[i][0]);

        let first_text = document.createElement('p');
        first_text.setAttribute('class', 'food_text')
        first_text.textContent = imageSources[i][1];

        first_food.appendChild(first_image);
        first_food.appendChild(first_text);


        food_div.appendChild(first_food);
        }

        
        
        
        
        
        
        
      


        menu_div.appendChild(food_div);

        let burger_recipe = document.createElement('p');
        burger_recipe.textContent = 'get bread, fry burger, burger in bread, eat';
        menu_div.appendChild(burger_recipe);
        
        content.appendChild(menu_div);
    }

}











export default menu();