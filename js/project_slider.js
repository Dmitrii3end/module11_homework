const projects = [{
        'city': ['Rostov-on-Don', 'LCD admiral'],
        'apartment area': '81 m2',
        'Repair time': '3.5 months',
        'Repair Cost': 'Upon request',
        'img': '/imgs/rostov-on-don admiral.png'
    },
    {
        'city': ['Sochi', 'Thieves'],
        'apartment area': '105 m2',
        'Repair time': '4 months',
        'Repair Cost': 'Upon request',
        'img': '/imgs/sochi-thieves.png'
    },
    {
        'city': ['Rostov-on-Don', 'Patriotic'],
        'apartment area': '93 m2',
        'Repair time': '3 months',
        'Repair Cost': 'Upon request',
        'img': '/imgs/rostov-on-don patriotic.png'
    }
];
let currentProject = 0;


document.querySelector('#projectSliderButtonPrev').addEventListener('click', () => {
    refreshSliderProject(currentProject - 1);
})

document.querySelector('#projectSliderButtonNext').addEventListener('click', () => {
    refreshSliderProject(currentProject + 1);
})

document.querySelectorAll('.nav-slider__dot').forEach(el => {
    el.addEventListener('click', function() {
        refreshSliderProject(getNumElement(this));
    })
})

document.querySelectorAll('.image-bar__item').forEach(el => {
    el.addEventListener('click', function() {
        refreshSliderProject(getNumElement(this));
    })
})


const refreshSliderProject = nextProject => {
    refreshCurrentProject(nextProject);

    refreshDataProject(currentProject);

    changeCurrentDoteProject(currentProject);

    changeCurrentItemImageProject(currentProject);
}


const refreshCurrentProject = nextProject => {
    if (nextProject < 0) {
        currentProject = projects.length - 1;
    } else if (nextProject > projects.length - 1) {
        currentProject = 0;
    } else {
        currentProject = nextProject;
    }
}


const refreshDataProject = (current) => {
    const city = document.querySelector('#cityProject');
    const area = document.querySelector('#areaProject');
    const time = document.querySelector('#timeProject');
    const cost = document.querySelector('#costProject');
    const img = document.querySelector('#imgProject');

    city.innerHTML = `<h4 class="some-info__header">City:</h4>`;

    for (let i = 0; i < projects[current]["city"].length; i++) {
        let p = document.createElement('p');
        p.className = `some-info__text`;

        hideRefreshShowElement(p, 'textContent', projects[current]["city"][i]);

        city.appendChild(p);
    }

    hideRefreshShowElement(area, 'textContent', projects[current]["apartment area"]);
    hideRefreshShowElement(time, 'textContent', projects[current]["Repair time"]);
    hideRefreshShowElement(cost, 'textContent', projects[current]["Repair Cost"]);
    hideRefreshShowElement(img, 'src', projects[current]["img"]);
}


const changeCurrentDoteProject = nextProject => {
    let dots = document.querySelectorAll('.nav-slider__dot');

    dots.forEach(el => el.classList.remove('nav-slider__dot_active'));

    dots[nextProject].classList.add('nav-slider__dot_active');
}


const changeCurrentItemImageProject = nextProject => {
    let dots = document.querySelectorAll('.image-bar__item');

    dots.forEach(el => el.classList.remove('image-bar__item_active'));

    dots[nextProject].classList.add('image-bar__item_active');
}


function getNumElement(el) {
    let i = 0;
    while (el = el.previousSibling) {
        el.nodeType == 1 && i++;
    }
    return i;
}


function hideRefreshShowElement(element, target, data) {
    let op = 100;

    function hiden(duration) {
        op -= 10;
        element.style.opacity = op / 100;

        if (op > 0) {
            setTimeout(hiden, duration, duration)
        } else {
            element[target] = data;

            Show(duration, element);
        }

    }

    function Show(duration) {
        op += 10;
        element.style.opacity = op / 100;

        if (op < 100) {
            setTimeout(Show, duration, duration);
        }
    }

    hiden(25);
}