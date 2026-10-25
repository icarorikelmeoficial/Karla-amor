const favoriteDetails = {
    jesus: {
        title: 'Jesus',
        text: 'A pessoa que ela mais admira acima de tudo. A sua maior fonte de amor, fé e inspiração. A pessoa que inspira ela ser alguém melhor.',
        links: []
    },
    desbravadores: {
        title: 'Clube de Desbravadores',
        text: 'Um lugar especial, pois, ele fez ela ser sociável e despertou nela uma paixão de guiar jovens para Cristo.',
        links: [
            { text: 'Ver Instagram do Clube ↗', url: 'https://www.instagram.com/guerreirosdaalvorada_r7?utm_source=ig_web_button_share_sheet&psln=ZDNlZDc0MzIxNw==' }
        ]
    },
    comida: {
        title: 'Comida Favorita',
        text: 'A comida favorita dela é bife com arroz, feijão, macarrão e salada.',
        links: []
    },
    napolitano: {
        title: 'Sorvete Napolitano',
        text: 'Ela gosta de sorvete napolitano porque são três sabores em um, e tem os sabores favoritos dela, além de ser as cores que ela gosta.',
        links: []
    },
    musicas: {
        title: 'Eu Sou a Videira - Arautos do Rei',
        text: 'A música especial que toca o coração dela, trazendo paz, reflexão e fortalecendo sua fé a cada nota.',
        links: [
            { text: 'Ouvir "Eu Sou a Videira" no Spotify 🎵', url: 'https://open.spotify.com/intl-pt/track/0FZpqy62x3k6TtB61JCcRm?si=df4a62c9b9224f74' }
        ]
    },
    cantores: {
        title: 'Cantores Favoritos',
        text: 'Rafaela Pinho e Arautos do Rei são os artistas que trazem as canções mais marcantes e inspiradoras para a vida dela.',
        links: [
            { text: 'Instagram: Rafaela Pinho ↗', url: 'https://www.instagram.com/rafaela_pinho?utm_source=ig_web_button_share_sheet&dlrf=ZDNlZDc0MzIxNw==' },
            { text: 'Instagram: Arautos do Rei ↗', url: 'https://www.instagram.com/arautosdoreioficial?utm_source=ig_web_button_share_sheet&psln=ZDNlZDc0MzIxNw==' }
        ]
    },
    rocklee: {
        title: 'Por que o Rock Lee?',
        text: 'Ela admira o Rock Lee, pois ele é um exemplo de persistência. Onde no anime ele nasce com nenhum poder especial, mas a força de vontade em ser o melhor torna ele especial, ela se identifica muito com essa linha de pensamento.',
        links: []
    },
    breakingbad: {
        title: 'Por que Breaking Bad?',
        text: 'Breaking bad foi uma série que marcou muito ela, creio que por relacionar química com o drama, e, além disso, a fotografia da série é muito boa.',
        links: []
    },
    cinnamoroll: {
        title: 'Por que o Cinnamoroll?',
        text: 'A definição da vibe fofa, onde especificamente esse Cinnamoroll se parece com ela.',
        links: []
    },
    academia: {
        title: 'Treinos e Academia',
        text: 'O momento do dia dedicado a cuidar da saúde, superar limites, liberar endorfina e manter aquela energia contagiante, além de ser o único esporte que ela costuma praticar.',
        links: []
    }
};

/* Modal dos Cards de Favoritos */
const modal = document.getElementById('favModal');
const modalPhoto = document.getElementById('modalPhoto');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const modalLinksContainer = document.getElementById('modalLinksContainer');
const modalClose = document.getElementById('modalClose');

document.querySelectorAll('.favorite-item').forEach(item => {
    item.addEventListener('click', () => {
        const favKey = item.getAttribute('data-fav');
        const data = favoriteDetails[favKey];
        const imgInside = item.querySelector('img').src;

        if (data) {
            modalPhoto.src = imgInside;
            modalTitle.textContent = data.title;
            modalBody.textContent = data.text;

            modalLinksContainer.innerHTML = '';

            if (data.links && data.links.length > 0) {
                data.links.forEach(l => {
                    const a = document.createElement('a');
                    a.href = l.url;
                    a.target = '_blank';
                    a.rel = 'noopener noreferrer';
                    a.className = 'modal-external-link';
                    a.textContent = l.text;
                    modalLinksContainer.appendChild(a);
                });
            }

            modal.classList.add('active');
        }
    });
});

modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

/* Modal de Visualização Ampliada das Fotos Polaroid */
const photoModal = document.getElementById('photoModal');
const photoModalImg = document.getElementById('photoModalImg');
const photoModalCaption = document.getElementById('photoModalCaption');
const photoModalClose = document.getElementById('photoModalClose');

document.querySelectorAll('.polaroid').forEach(p => {
    p.addEventListener('click', () => {
        const imgSrc = p.querySelector('.polaroid-img').src;
        const caption = p.getAttribute('data-caption') || p.querySelector('p').textContent || '';
        
        photoModalImg.src = imgSrc;
        photoModalCaption.textContent = caption;
        photoModal.classList.add('active');
    });
});

photoModalClose.addEventListener('click', () => {
    photoModal.classList.remove('active');
});

photoModal.addEventListener('click', (e) => {
    if (e.target === photoModal) {
        photoModal.classList.remove('active');
    }
});

/* Efeito de partículas ao clicar */
document.getElementById('siteShell').addEventListener('click', function(event) {
    if (event.target.closest('button, a, .favorite-item, .polaroid, .modal-card, .photo-modal-card')) return;

    const particle = document.createElement('span');
    particle.className = 'click-particle';
    const symbols = ['♥', '✦', '✿', '♡'];
    particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    particle.style.left = event.clientX + 'px';
    particle.style.top = event.clientY + 'px';
    
    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 900);
});

/* Alternância entre Abas */
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetId = tab.getAttribute('data-tab');

        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(targetId).classList.add('active');
    });
});

/* Mensagem Secreta */
const messageBtn = document.getElementById('messageBtn');
const lockIcon = document.getElementById('lockIcon');
const messageTitle = document.getElementById('messageTitle');

let isOpen = false;

messageBtn.addEventListener('click', () => {
    isOpen = !isOpen;

    if (isOpen) {
        messageBtn.classList.add('open');
        lockIcon.textContent = '💖';
        messageTitle.textContent = 'Você é meu lugar favorito.';
    } else {
        messageBtn.classList.remove('open');
        lockIcon.textContent = '🔒';
        messageTitle.textContent = 'Clique para abrir seu presentinho';
    }
});