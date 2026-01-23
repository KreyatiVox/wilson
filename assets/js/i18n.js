
const translations = {
    fr: {
        // Navigation
        "nav_home": "Accueil",
        "nav_expertise": "Expertise",
        "nav_about": "À Propos",
        "nav_portfolio": "Portfolio",
        "nav_blog": "Blog & Insights",
        "nav_contact": "Contact",
        "nav_lets_talk": "Parlons-en", // Let's Talk

        // Common
        "read_more": "Lire la suite",
        "view_all": "Voir tout",
        
        // Headlines (Index)
        "hero_title": "Communication Visuelle & Storytelling d'Impact",
        "hero_subtitle": "Je transforme vos messages complexes en histoires visuelles claires et engageantes.",
        "download_cv": "Télécharger CV",
        "hero_intro_p": "Expert en Communication Visuelle & Storytelling d'Impact. Depuis 7+ ans, j'accompagne institutions, ONG et projets d'impact pour créer des récits puissants qui transforment les actions de terrain en messages clairs, crédibles et mémorables.",
        "hero_hi": "BONJOUR, JE SUIS<br> WILSON SAINTELUS",
        "hero_bottom_p": "Je ne crée pas du contenu pour être vu. Je construis des récits pour faire comprendre, convaincre et mobiliser. Communication Stratégique · Réalisation · Storytelling Institutionnel",
        "my_portfolio": "Mon Portfolio",
        
        // Blog
        "blog_title": "Blog & Insights",
        "blog_breadcrumb_home": "Accueil",
        "blog_breadcrumb_blog": "Blog",
        "blog_read_more": "Lire la suite",
        
        // About Page
        "about_banner_subtitle": "Le Stratège",
        "about_banner_title": "À Propos de Moi",
        "about_banner_tagline": "Réalisateur | Responsable Communication & Contenu Digital | Producteur Vidéo | Stratège Digital",
        "about_view_portfolio": "Voir le Portfolio",
        
        // About Sections
        "about_profile_subtitle": "Profil",
        "about_profile_title": "Résumé Professionnel",
        "about_career_subtitle": "Carrière",
        "about_career_title": "Expérience Professionnelle",
        "about_capabilities_subtitle": "Compétences",
        "about_capabilities_title": "Compétences & Expertise",
        "about_learning_subtitle": "Formation",
        "about_learning_title": "Éducation & Certifications",
        "about_global_subtitle": "Global",
        "about_global_title": "Langues",
        
        // Portfolio Page
        "portfolio_banner_subtitle": "Le Créateur",
        "portfolio_banner_title": "Mon Portfolio",
        "portfolio_banner_tagline": "Une sélection de mes travaux à travers divers formats, conçus pour engager, informer et inspirer.",
        "portfolio_get_quote": "Obtenir un Devis",
        "portfolio_subtitle": "Portfolio",
        "portfolio_title": "Mes Travaux Récents",
        "portfolio_view_all": "Voir Tous les Services",
        
        // Footer
        "footer_title": "Travaillons Ensemble",
        "footer_email_me": "M'envoyer un Email",
        "footer_whatsapp": "WhatsApp",
        "footer_expertise_title": "Expertise",
        "footer_expertise_1": "Communication Institutionnelle",
        "footer_expertise_2": "Storytelling & Stratégie",
        "footer_expertise_3": "Production Audiovisuelle",
        "footer_expertise_4": "Croissance Digitale",
        "footer_location": "Port-au-Prince, Haïti",
        "footer_connect": "Connectez-vous avec moi",
        "footer_back_to_top": "Retour en Haut",
        
        // Contact Section
        "contact_phone": "Téléphone",
        "contact_email": "Email",
        "contact_country": "Pays",
        "contact_available": "Disponible - 20 Heures / Semaine",
        "contact_active_status": "Statut Actif",
        "contact_active_label": "Actif",
        "contact_form_title": "Travaillons ensemble !",
        "contact_form_name": "Nom",
        "contact_form_email": "Email*",
        "contact_form_phone": "Téléphone",
        "contact_form_message": "Parlez-nous de votre projet *",
        "contact_form_submit": "Prendre Contact",
        
        // Hire Me Section
        "hire_me_greeting": "Bonjour👋 je suis disponible pour du travail freelance",
        "hire_me_btn": "Engagez-moi maintenant",
        
        // Testimonials
        "testi_cherubin_text": "« Wilson Saintelus est un vidéaste d’un grand professionnalisme et d’une créativité remarquable. Il possède une véritable capacité à comprendre une idée et à mobiliser les bons outils pour la transformer en visuels puissants et impactants. Son sens du détail, allié à sa ténacité, fait de lui un professionnel promis à de grandes réussites. »",
        "testi_cherubin_role": "Collaboration : Production Vidéo"
    }
};

let currentLang = 'en';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize logic: Cache original text
    cacheOriginalText();

    // 2. Determine initial language
    const savedLang = localStorage.getItem('i18n_lang');
    const browserLang = navigator.language || navigator.userLanguage;
    
    if (savedLang) {
        currentLang = savedLang;
    } else if (browserLang && browserLang.toLowerCase().startsWith('fr')) {
        currentLang = 'fr';
    }

    // 3. Apply language
    setLanguage(currentLang);


    // 4. Bind Toggle Button
    const toggleBtn = document.getElementById('langToggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            toggleLanguage();
        });
    }

    // 5. Load Blog Posts (if on blog page)
    const blogContainer = document.querySelector('.blog-items'); // Target container
    if (blogContainer && window.location.pathname.includes('blog.html')) {
        loadBlogPosts(currentLang);
    }
});

function cacheOriginalText() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        if (!el.hasAttribute('data-original-text')) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.setAttribute('data-original-text', el.placeholder);
            } else if (el.querySelector('*') && el.childNodes.length > 0) {
                 // Complex node: find text node
                 el.childNodes.forEach(node => {
                     if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== '') {
                        el.setAttribute('data-original-text', node.nodeValue);
                     }
                 });
            } else {
                el.setAttribute('data-original-text', el.innerHTML);
            }
        }
    });
}


function toggleLanguage() {
    currentLang = (currentLang === 'en') ? 'fr' : 'en';
    setLanguage(currentLang);
}

function setLanguage(lang) {
    localStorage.setItem('i18n_lang', lang);
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        
        if (lang === 'fr' && translations.fr[key]) {
            // Apply French
            updateElementText(el, translations.fr[key]);
        } else {
            // Restore English (Original)
            const original = el.getAttribute('data-original-text');
            if (original) {
                updateElementText(el, original);
            }
        }
    });

    // Update Toggle Button Text
    const toggleBtn = document.getElementById('langToggle');
    if (toggleBtn) {
        toggleBtn.textContent = (lang === 'en') ? 'FR' : 'EN';
    }

    // Reload Blog Posts if necessary (to translate non-i18n dynamic content if we had any)
    const blogContainer = document.querySelector('.blog-items');
    if (blogContainer && window.location.pathname.includes('blog.html')) {
        // Clear and reload to apply potentially localized data if backend supported it
        // For now, our JSON is static, but good practice.
        blogContainer.innerHTML = ''; 
        loadBlogPosts(lang);
    }
}

async function loadBlogPosts(lang) {
    try {
        const response = await fetch('blog-posts.json');
        const posts = await response.json();
        const container = document.querySelector('.blog-items');
        
        if (!container) return;

        // This example assumes JSON has "title_fr", "description_fr" etc if we wanted dual language JSON.
        // Since we only have static JSON now, we just render it. 
        // Real-world would pick fields based on 'lang'.
        
        container.innerHTML = posts.map(post => `
            <div class="item">
                <div class="thumb">
                    <a href="${post.link}">
                        <img src="${post.image}" alt="${post.title}">
                    </a>
                </div>
                <div class="info">
                    <div class="meta">
                        <ul>
                            <li><i class="fas fa-calendar-alt"></i> ${post.date}</li>
                            <li><i class="fas fa-user"></i> By ${post.author}</li>
                        </ul>
                    </div>
                    <h4>
                        <a href="${post.link}">${post.title}</a>
                    </h4>
                    <p>
                        ${post.description}
                    </p>
                    <a class="btn-more" href="${post.link}">Read More <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        `).join('');
        
    } catch (error) {
        console.error('Error loading blog posts:', error);
    }
}

function updateElementText(el, text) {
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = text;
    } else if (el.querySelector('*') && el.childNodes.length > 0) {
        // Element has children (likely icons). We need to find the text node.
        let textNodeFound = false;
        el.childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== '') {
                node.nodeValue = text; // Be careful, this replaces exact matches. 
                // Ideally we should replace purely the text content while preserving whitespace if needed, 
                // but for this structure, direct replacement is usually safe.
                textNodeFound = true;
            }
        });
        // Fallback if no clean text node found but we have content (rare case in this site)
    } else {
        el.innerHTML = text;
    }
}
