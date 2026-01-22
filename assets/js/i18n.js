
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
        "hero_intro_p": "Expert en Communication Visuelle & Storytelling d'Impact. Depuis près de 9 ans, j'accompagne institutions, ONG et projets d'impact pour créer des récits puissants qui transforment les actions de terrain en messages clairs, crédibles et mémorables.",
        "hero_hi": "BONJOUR, JE SUIS<br> WILSON SAINTELUS",
        "hero_bottom_p": "Je ne crée pas du contenu pour être vu. Je construis des récits pour faire comprendre, convaincre et mobiliser. Communication Stratégique · Réalisation · Storytelling Institutionnel",
        "my_portfolio": "Mon Portfolio",
        
        // Blog
        "blog_title": "Blog & Insights",
        "blog_breadcrumb_home": "Accueil",
        "blog_breadcrumb_blog": "Blog",
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const lang = navigator.language || navigator.userLanguage;
    // Check if language starts with 'fr' (e.g. 'fr', 'fr-FR', 'fr-CA')
    if (lang && lang.toLowerCase().startsWith('fr')) {
        translatePage('fr');
    }
});

function translatePage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Handle input placeholders
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } 
            // Handle elements with children but text node needs updating (complex)
            // For simplicity, we assume data-i18n elements only contain text or we replace clean.
            // If the element has icon children like <i class="..."></i> Text, we need to be careful.
            // A safer way for buttons with icons:
            else if (el.querySelector('*')) {
                 // Element has children (likely icons). We need to find the text node.
                 el.childNodes.forEach(node => {
                     if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== '') {
                         node.nodeValue = translations[lang][key];
                     }
                 });
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });
}
