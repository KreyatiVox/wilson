
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
        "hire_me_btn": "Engagez-moi maintenant"
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
