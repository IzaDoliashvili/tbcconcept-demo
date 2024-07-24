// dropdown-menu
document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav_item');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
           
            navItems.forEach(i => {
                if (i !== item) {
                    i.classList.remove('active');
                }
            });

            item.classList.toggle('active');
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav_item')) {
            navItems.forEach(item => item.classList.remove('active'));
        }
    });
});

