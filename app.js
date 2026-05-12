document.addEventListener('DOMContentLoaded', () => {
    const linkCards = document.querySelectorAll('.link-card');

    linkCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // إضافة تأثير بسيط عند الضغط (انيميشن النقر)
            this.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    console.log("Website Loaded Successfully. ByDrap :)");
});
