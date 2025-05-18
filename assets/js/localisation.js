async function loadTranslations() {
    const enTranslations = await (await fetch('assets/localisation/en.json')).json();
    const ptTranslations = await (await fetch('assets/localisation/pt.json')).json();

    i18next.init({
        lng: navigator.language, // default language
        debug: true,
        resources: {
            en: {
                translation: enTranslations
            },
            pt: {
                translation: ptTranslations
            }
        },
        fallbackLng: {
            'pt-BR': ['en'],
            'en-US': ['en']
        }, // fallback language
    });
}

const localize = locI18next.init(i18next, {
    selectorAttr: 'data-i18n', // selector for translating elements
    targetAttr: 'i18n-target',
    optionsAttr: 'i18n-options',
    useOptionsAttr: false,
    parseDefaultValueFromContent: true,
    document: window.document
});

function translateAll() {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
        localize(`#${element.id}`);
    });
    // i18next.on('languageChanged', () => {
    //     document.querySelectorAll("[data-i18n]").forEach((element) => {
    //         localize(`#${element.id}`);
    //     });
    // });

    // setTimeout(() => {
    //     i18next.changeLanguage("en");
    // }, 3000);
}