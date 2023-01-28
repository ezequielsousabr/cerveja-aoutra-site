var dropdown, dropdownHidden;

dropdown = document.querySelector('.dropdown', '.dropdown-suspenso');

console.log(dropdown);


document.addEventListener('click', (e) => {

    const isDropdown = e.target.classList.contains('navbar-toogle');

    console.log(isDropdown);

    if(!isDropdown && e.target.closest('.dropdown-suspenso') !== null ) return;

    let currentSubmenuBtn;

    if(isDropdown){

        const item = e.target.closest('.dropdown-suspenso')

        currentSubmenuBtn = item.querySelector('.dropdown-suspenso');

        console.log(currenSubmenuBtn);

        currentSubmenuBtn.classList.toggle('show');

        document.querySelector('.dropdown-suspenso.show').forEach(isDropdown => {

            if(isDropdown === currentSubmenuBtn){

                currentSubmenuBtn.classList.remove('show');

            }

        });

    };

})