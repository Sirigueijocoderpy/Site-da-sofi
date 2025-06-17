// ===== ANIMAÇÕES JAVASCRIPT PARA O PORTFÓLIO DA SOFIA =====

document.addEventListener('DOMContentLoaded', function() {
    
    // Inicializar AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });

    // Efeito Parallax na foto Soso
    function parallaxEffect() {
        const sosoImg = document.querySelector('.Soso');
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;
        
        if (sosoImg) {
            sosoImg.style.transform = `translateY(${rate}px)`;
        }
    }

    // Animação de Typewriter para o texto "PORTFOLIO"
    function typewriterEffect() {
        const elemento = document.querySelector('.diferente');
        if (elemento) {
            elemento.style.width = '0';
            elemento.style.borderRight = '3px solid #421017';
            
            setTimeout(() => {
                elemento.style.animation = 'typewriter 3s steps(9) forwards, blink 1s step-end infinite';
            }, 500);
        }
    }

    // Contador animado para data de nascimento
    function animateCounter() {
        const dataElement = document.querySelector('.data');
        if (dataElement) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        let count = 0;
                        const target = 19;
                        const increment = target / 50;
                        
                        const timer = setInterval(() => {
                            count += increment;
                            if (count >= target) {
                                count = target;
                                clearInterval(timer);
                            }
                            dataElement.textContent = `${Math.floor(count)} de novembro, 2008`;
                        }, 30);
                        
                        observer.unobserve(entry.target);
                    }
                });
            });
            
            observer.observe(dataElement);
        }
    }

    // Efeito de hover nas estrelas
    function starHoverEffect() {
        const estrelas = document.querySelectorAll('.estrela, .estrela2, .estrela-tempo');
        
        estrelas.forEach(estrela => {
            estrela.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.2) rotate(180deg)';
                this.style.filter = 'brightness(1.5) drop-shadow(0 0 15px #ffd700)';
            });
            
            estrela.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1) rotate(0deg)';
                this.style.filter = 'brightness(1)';
            });
        });
    }

    // Animação das bolinhas da timeline - CORRIGIDO
    function animateTimelineBalls() {
        const balls = document.querySelectorAll('.bola1, .bola2, .bola3, .bola4');
        
        balls.forEach((ball, index) => {
            ball.addEventListener('click', function() {
                // Salvar animação original
                const originalAnimation = this.style.animation;
                
                this.style.animation = 'none';
                this.style.transform = 'scale(1.3)';
                this.style.filter = 'brightness(1.3)';
                
                setTimeout(() => {
                    this.style.animation = originalAnimation || `pulse 2s infinite ${index * 0.5}s`;
                    this.style.transform = '';
                    this.style.filter = '';
                }, 300);
            });
        });
    }

    // Animação suave dos cards da timeline - SEM QUEBRAR POSICIONAMENTO
    function animateTimelineCards() {
        const cards = document.querySelectorAll('.carde0, .carde1, .carde2, .carde3');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('animate');
                        entry.target.style.opacity = '1';
                    }, index * 200);
                    
                    observer.unobserve(entry.target);
                }
            });
        });
        
        cards.forEach(card => {
            card.style.opacity = '0.8'; // Apenas levemente transparente
            observer.observe(card);
        });
    }

    // Efeito de ondulação nos cards
    function rippleEffect(e) {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            pointer-events: none;
            transform: scale(0);
            animation: ripple 0.6s linear;
            left: ${x}px;
            top: ${y}px;
            width: 20px;
            height: 20px;
            margin-left: -10px;
            margin-top: -10px;
        `;
        
        card.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    // Aplicar efeito de ondulação nos cards
    function addRippleToCards() {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.style.position = 'relative';
            card.style.overflow = 'hidden';
            card.addEventListener('click', rippleEffect);
        });
    }

    // Animação de fade para os links sociais
    function animateSocialLinks() {
        const links = document.querySelectorAll('.links');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 200);
                    
                    observer.unobserve(entry.target);
                }
            });
        });
        
        links.forEach(link => {
            link.style.opacity = '0';
            link.style.transform = 'translateY(30px)';
            link.style.transition = 'all 0.6s ease';
            observer.observe(link);
        });
    }

    // Smooth scroll para navegação
    function smoothScroll() {
        const menuLinks = document.querySelectorAll('.menu a');
        
        menuLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Efeito de magnetismo no mouse
    function mouseFollowEffect() {
        const mouse = document.querySelector('.mouse');
        if (mouse) {
            let mouseX = 0, mouseY = 0;
            let mouseFollowX = 0, mouseFollowY = 0;
            
            document.addEventListener('mousemove', function(e) {
                mouseX = e.clientX;
                mouseY = e.clientY;
            });
            
            function animateMouseFollow() {
                mouseFollowX += (mouseX - mouseFollowX) * 0.1;
                mouseFollowY += (mouseY - mouseFollowY) * 0.1;
                
                const rect = mouse.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                
                const deltaX = mouseFollowX - centerX;
                const deltaY = mouseFollowY - centerY;
                const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
                
                if (distance < 100) {
                    const force = (100 - distance) / 100;
                    mouse.style.transform = `translate(${deltaX * force * 0.3}px, ${deltaY * force * 0.3 - 15}px)`;
                } else {
                    mouse.style.transform = 'translateY(-15px)';
                }
                
                requestAnimationFrame(animateMouseFollow);
            }
            
            animateMouseFollow();
        }
    }

    // Partículas flutuantes de fundo
    function createFloatingParticles() {
        const particleContainer = document.createElement('div');
        particleContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
        `;
        
        document.body.appendChild(particleContainer);
        
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 3px;
                height: 3px;
                background: rgba(255, 215, 0, 0.3);
                border-radius: 50%;
                animation: float ${3 + Math.random() * 4}s ease-in-out infinite;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation-delay: ${Math.random() * 2}s;
            `;
            
            particleContainer.appendChild(particle);
        }
    }

    // CSS para animação das partículas
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
            50% { transform: translateY(-20px) rotate(180deg); opacity: 0.7; }
        }
        
        @keyframes ripple {
            to { transform: scale(4); opacity: 0; }
        }
    `;
    document.head.appendChild(style);

    // Inicializar todas as animações
    function initAnimations() {
        typewriterEffect();
        animateCounter();
        starHoverEffect();
        animateTimelineBalls();
        animateTimelineCards(); // Nova função para cards
        addRippleToCards();
        animateSocialLinks();
        smoothScroll();
        mouseFollowEffect();
        createFloatingParticles();
        
        // Adicionar listener para parallax
        window.addEventListener('scroll', parallaxEffect);
    }

    // Executar animações quando a página carregar
    setTimeout(initAnimations, 100);
    
    // Console message
    console.log('🎨 Animações do Portfólio da Sofia carregadas com sucesso! ✨');
});

// Função para resetar animações (útil para debugging)
function resetAnimations() {
    location.reload();
}