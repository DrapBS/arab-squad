document.addEventListener('DOMContentLoaded', () => {
    // تأثير الضغط على الأزرار
    const buttons = document.querySelectorAll('.link-card, .contact-card');
    buttons.forEach(btn => {
        btn.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.95)';
        });
        btn.addEventListener('mouseup', function() {
            this.style.transform = '';
        });
        btn.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });

    // برمجة النافذة المنبثقة (Modal)
    const modal = document.getElementById('infoModal');
    const logo = document.getElementById('squadLogo');
    const closeBtn = document.querySelector('.close-btn');

    // فتح النافذة عند الضغط على اللوجو
    logo.addEventListener('click', () => {
        modal.classList.add('show');
    });

    // إغلاق النافذة عند الضغط على زر X
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
    });

    // إغلاق النافذة عند الضغط في أي مكان خارجها
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.remove('show');
        }
    });

    console.log("UI Loaded. Built by Adem. ByDrap :)");
});
