import view_image from "./Images/view.png";


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
        title.textContent = "Restaurant Home Page";
        home_div.appendChild(title);
        let new_image = document.createElement('img');
        new_image.setAttribute('class', 'content_image');
        new_image.setAttribute('src', view_image);
        home_div.appendChild(new_image);
        content.appendChild(home_div);
    }

    display_home();

}


export default home();
