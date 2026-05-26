function getTreatmentProviders() {

    const lang = window.currentLanguage || 'en';
    const pack = window.LANGUAGE_PACKS[lang];

    return [

        {
            id: 'bh-link',
            name: pack.bhLink || 'BH Link',
            meta: pack.bhLinkText || '24/7 treatment and recovery support hotline.',
            phones: [
                {
                    label: pack.bhLinkPhone || '📞 401-414-LINK',
                    number: '4014145465',
                    danger: true
                }
            ]
        },

        {
            id: 'zinnia-exeter',
            name: pack.zinniaExeter || 'Zinnia - Exeter',
            meta: pack.statewideDetox || 'Statewide Detoxification Services',
            phones: [
                {
                    label: '401-295-0960',
                    number: '4012950960'
                }
            ]
        },

        {
            id: 'adcare',
            name: pack.adcare || 'AdCare',
            meta: pack.adcareService || 'Detoxification Services',
            phones: [
                {
                    label: '866-279-7444',
                    number: '8662797444'
                }
            ]
        },

        {
            id: 'roger-williams',
            name: pack.rogerWilliams || 'Roger Williams Hospital',
            meta: pack.adcareService || 'Detoxification Services', // same as AdCare
            phones: [
                {
                    label: '401-456-2025',
                    number: '4014562025'
                }
            ]
        },

        {
            id: 'gateway-pawtucket',
            name: pack.gatewayPawtucket || 'Gateway Healthcare, Inc. - Pawtucket',
            meta: pack.gatewayPawtucketService || 'Community Treatment Organization',
            phones: [
                {
                    label: '401-722-3560',
                    number: '4017223560'
                }
            ]
        },

        {
            id: 'gateway-johnston',
            name: pack.gatewayJohnston || 'Gateway Healthcare, Inc. - Johnston',
            meta: pack.gatewayPawtucketService || 'Community Treatment Organization',
            phones: [
                {
                    label: '401-273-8100',
                    number: '4012738100'
                }
            ]
        },

        {
            id: 'ocean-state',
            name: pack.oceanState || 'Ocean State Behavioral Health',
            meta: pack.oceanStateService || 'Behavioral Health Services',
            phones: [
                {
                    label: '401-626-0169',
                    number: '4016260169'
                }
            ]
        },

        {
            id: 'codac-cranston',
            name: pack.codacCranston || 'CODAC - Cranston',
            meta: pack.codacService || 'Medication Assisted Treatment',
            phones: [
                {
                    label: '401-461-5056',
                    number: '4014615056'
                }
            ]
        },

        {
            id: 'codac-pawtucket',
            name: pack.codacPawtucket || 'CODAC - Pawtucket',
            meta: pack.codacService || 'Medication Assisted Treatment',
            phones: [
                {
                    label: '401-808-6278',
                    number: '4018086278'
                }
            ]
        },

        {
            id: 'providence-center',
            name: pack.providenceCenter || 'The Providence Center',
            meta: pack.providenceCenterService || 'Providence Area Community Treatment',
            phones: [
                {
                    label: '401-276-4020',
                    number: '4012764020'
                }
            ]
        },

        {
            id: 'lifespan-recovery',
            name: pack.lifespanRecovery || 'Lifespan Recovery Center',
            meta: pack.lifespanRecoveryService || 'Recovery Center',
            phones: [
                {
                    label: '401-606-8530',
                    number: '4016068530'
                }
            ]
        },

        {
            id: 'newport-county',
            name: pack.newportCounty || 'Newport County Community Mental Health',
            meta: pack.newportCountyService || 'Newport Area Treatment Services',
            phones: [
                {
                    label: '401-846-1213',
                    number: '4018461213'
                }
            ]
        },

        {
            id: 'community-care',
            name: pack.communityCareAlliance || 'Community Care Alliance',
            meta: pack.codacService || 'Medication Assisted Treatment',
            phones: [
                {
                    label: '401-235-7000',
                    number: '4012357000'
                }
            ]
        },

        {
            id: 'aware-recovery',
            name: pack.awareRecovery || 'AWARE Recovery Care',
            meta: pack.southCountyRecovery || 'South County Recovery Services',
            phones: [
                {
                    label: '401-232-4166',
                    number: '4012324166'
                }
            ]
        },

        {
            id: 'east-bay',
            name: pack.eastBayCommunity || 'East Bay Community Action Program',
            meta: pack.eastBayArea || 'East Providence / Bristol Area',
            phones: [
                {
                    label: '401-431-9870',
                    number: '4014319870'
                }
            ]
        },

        {
            id: 'anchor-recovery',
            name: pack.anchorRecovery || 'Anchor Community Recovery Centers',
            meta: pack.anchorWarwickProvidence || 'Warwick & Providence Recovery Support Services',
            phones: [
                {
                    label: pack.anchorWarwickPhone || 'Warwick Location',
                    number: '4016159945'
                },
                {
                    label: pack.anchorProvidencePhone || 'Providence Location',
                    number: '4018895770'
                }
            ]
        },

        {
            id: 'serenity-center',
            name: pack.serenityCenter || 'The Serenity Center',
            meta: pack.serenityCenterService || 'Woonsocket Recovery Support',
            phones: [
                {
                    label: '401-466-4426',
                    number: '4014664426'
                }
            ]
        }

    ];
}

window.TREATMENT_PROVIDERS = getTreatmentProviders();