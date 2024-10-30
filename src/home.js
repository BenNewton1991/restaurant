import view_image from "./Images/prison_chef.png";
import icon_image from "./Images/pmLogo.png";


const content = document.getElementById('content');

function home()
{
    console.log('worked');
    let home_button = document.getElementById('home');

    home_button.addEventListener('click', function(){
        display_home();
    })

    function display_home()
    {
        content.innerHTML = '';

        let home_div = document.createElement('div');
        home_div.setAttribute('class', 'home_content');
        let title = document.createElement('h1');
        title.textContent = "Prisoner Meals";
        home_div.appendChild(title);
        let p = document.createElement('p');
        p.textContent = "Meals by prisoners, for prisoners."
        home_div.appendChild(p);

        let icon = document.createElement('img');
        icon.setAttribute('class', 'content_image');
        icon.setAttribute('src', icon_image);
        home_div.appendChild(icon)



        let a = document.createElement('p');
        a.textContent = "The chef: Ben. He\'s a good guy really..."
        home_div.appendChild(a);
        let new_image = document.createElement('img');
        new_image.setAttribute('class', 'content_image');
        new_image.setAttribute('src', view_image);
        home_div.appendChild(new_image);
        content.appendChild(home_div);
    }

    display_home();

}


export default home();
