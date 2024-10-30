
function buttons()
{
    let buttons = getElements();
    addEvents(buttons);

    
}


function getElements()
{
    let buttons = [];
    
    let home = document.getElementById('home');
    let menu = document.getElementById('menu');
    let about = document.getElementById('about');

    buttons.push(home);
    buttons.push(menu);
    buttons.push(about);

    return buttons; 
}

function addEvents(buttons_list)
{
    let length_list = buttons_list.length;

    for (let i = 0; i < length_list; i++)
    {
        buttons_list[i].addEventListener('click', function(){
            toggle_display(buttons_list, i);
        })
    }
}

function toggle_display(buttons_list, id)
{
    let length_list = buttons_list.length;

    for (let i = 0; i < length_list; i++)
    {
        if (i != id)
        {
            buttons_list[i].classList.remove('button_current');
            buttons_list[i].classList.add('button_not_curent')
        }
        else
        {
            buttons_list[i].classList.remove('button_not_curent');
            buttons_list[i].classList.add('button_current')
        }

    }
}


export default buttons();