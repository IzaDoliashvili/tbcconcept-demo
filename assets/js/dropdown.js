document.addEventListener('DOMContentLoaded', function () {
    const footerHeaders = document.querySelectorAll('.drop');

    footerHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const parentColumn = this.parentElement;

            const isActive = parentColumn.classList.contains('active');

            footerHeaders.forEach(h => {
                h.parentElement.classList.remove('active');
            });

            
            if (!isActive) {
                parentColumn.classList.add('active');
            }
        });
    });

    document.addEventListener('click', function (e) {
        if (!e.target.closest('.drop')) {
            footerHeaders.forEach(header => header.parentElement.classList.remove('active'));
        }
    });
});

