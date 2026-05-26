function getCards() {

    const lang = window.currentLanguage || 'en';

    return [

        {
            id: 'emergency',
            type: 'emergency',
            icon: '✚',
            title: window.LANGUAGE_PACKS[lang].cardEmergency,
            description: window.LANGUAGE_PACKS[lang].cardEmergencyText,
            audioId: 'cardEmergency'
        },

        {
            id: 'treatment',
            type: 'treatment',
            icon: '▼',
            title: window.LANGUAGE_PACKS[lang].cardTreatment,
            description: window.LANGUAGE_PACKS[lang].cardTreatmentText,
            audioId: 'cardTreatment'
        },

        {
            id: 'recovery',
            type: 'info',
            icon: '✦',
            title: window.LANGUAGE_PACKS[lang].cardRecovery,
            description: window.LANGUAGE_PACKS[lang].cardRecoveryText,
            audioId: 'cardRecovery',
            infoId: 'recovery'
        },

        {
            id: 'addiction',
            type: 'info',
            icon: '◎',
            title: window.LANGUAGE_PACKS[lang].cardAddiction,
            description: window.LANGUAGE_PACKS[lang].cardAddictionText,
            audioId: 'cardAddiction',
            infoId: 'addiction'
        },

        {
            id: 'overdose',
            type: 'info',
            icon: '⬣',
            title: window.LANGUAGE_PACKS[lang].cardOverdose,
            description: window.LANGUAGE_PACKS[lang].cardOverdoseText,
            audioId: 'cardOverdose',
            infoId: 'overdose'
        },

        {
            id: 'perinatal',
            type: 'info',
            icon: '◈',
            title: window.LANGUAGE_PACKS[lang].cardPerinatal,
            description: window.LANGUAGE_PACKS[lang].cardPerinatalText,
            audioId: 'cardPerinatal',
            infoId: 'perinatal'
        }

    ];

}

window.CARDS = getCards();