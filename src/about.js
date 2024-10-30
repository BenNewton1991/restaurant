// import view_image from "./Images/prison_chef.png";

const content = document.getElementById('content');




function about()
{
    let about_button = document.getElementById('about');

    about_button.addEventListener('click', function(){
        display_about();
    })

    function display_about()
    {
        content.innerHTML = '';

        let about_div = document.createElement('div');
        about_div.setAttribute('class', 'home_content');
        let title = document.createElement('h3');
        title.textContent = "Founded in 1984";
        about_div.appendChild(title);
        let p = document.createElement('p');
        p.textContent = "This prison has been operational and fully self-sustained for 45 years."
        about_div.appendChild(p);
        let a = document.createElement('p');
        a.textContent = "To find out more email bennewton91@gmail.com"
        about_div.appendChild(a);
        let map_div = document.createElement('div');
        map_div.setAttribute('class', 'map_div');
        let iframe = document.createElement('iframe');
        iframe.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158802.11965804108!2d-0.4222808054687374!3d51.544707300000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b6d2f2ef285%3A0x4ec0ff3427fe9857!2sHMP%20Pentonville!5e0!3m2!1sen!2shk!4v1730287283812!5m2!1sen!2shk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade');
        iframe.setAttribute('allowfullscreen', '');
        iframe.setAttribute('loading', 'lazy');
        map_div.appendChild(iframe);
        about_div.appendChild(map_div);
        content.appendChild(about_div);
    }

    display_about();

}


export default about();
