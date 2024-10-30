import view_image from "./Images/burger.png";

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
        let title = document.createElement('h1');
        title.textContent = "All of our recipes...";
        menu_div.appendChild(title);

        let burger_name = document.createElement('h1');
        burger_name.textContent = "Ben's burger";
        menu_div.appendChild(burger_name);
        let menu_image = document.createElement('img');
        menu_image.setAttribute('class', 'content_image');
        menu_image.setAttribute('src', view_image);
        menu_div.appendChild(menu_image);

        let burger_recipe = document.createElement('p');
        burger_recipe.textContent = 'get bread, fry burger, burger in bread, eat';
        menu_div.appendChild(burger_recipe);
        
        content.appendChild(menu_div);
    }

}











export default menu();