window.INFO_CONTENT = {

    recovery: {

        get title() {
            return window.LANGUAGE_PACKS[window.currentLanguage]?.recoveryTitle || "Recovery Support Services";
        },

        get subtitle() {
            return window.LANGUAGE_PACKS[window.currentLanguage]?.recoverySubtitle ||
                "Rhode Island recovery support, peer specialists, treatment guidance, detox assistance, and community recovery centers.";
        },

        get items() {
            const pack = window.LANGUAGE_PACKS[window.currentLanguage];
            return [

                {
                    type: 'section',
                    title: pack?.anchorRecoveryCentersTitle || "🏛️ ANCHOR COMMUNITY RECOVERY CENTERS",
                    body: [
                        {
                            type: 'link',
                            label: pack?.anchorRecoveryWebsite || "🌐 anchorrecovery.org",
                            href: 'https://anchorrecovery.org'
                        },
                        {
                            type: 'map',
                            label: pack?.anchorWarwickAddress || "📍 890 Centerville Rd., Warwick",
                            href: 'https://maps.google.com/?q=890+Centerville+Rd+Warwick+RI'
                        },
                        {
                            type: 'link',
                            label: pack?.anchorWarwickPhone || "☎ 401-615-9945",
                            href: 'tel:4016159945'
                        },
                        {
                            type: 'map',
                            label: pack?.anchorProvidenceAddress || "📍 310 Reservoir Ave., Providence",
                            href: 'https://maps.google.com/?q=310+Reservoir+Ave+Providence+RI'
                        },
                        {
                            type: 'link',
                            label: pack?.anchorProvidencePhone || "☎ 401-889-5770",
                            href: 'tel:4018895770'
                        }
                    ]
                },

                {
                    type: 'section',
                    title: pack?.eastBayRecoveryTitle || "🌊 EAST BAY RECOVERY CENTER",
                    body: [
                        {
                            type: 'map',
                            label: pack?.eastBayAddress || "📍 220 High St., Bristol",
                            href: 'https://maps.google.com/?q=220+High+St+Bristol+RI'
                        },
                        {
                            type: 'link',
                            label: pack?.eastBayPhone || "☎ 401-302-6231",
                            href: 'tel:4013026231'
                        }
                    ]
                },

                {
                    type: 'section',
                    title: pack?.parentSupportNetworkTitle || "👪 PARENT SUPPORT NETWORK",
                    body: [
                        pack?.hopeNewport || "Hope Newport Recovery Community Center",
                        {
                            type: 'map',
                            label: pack?.hopeNewportAddress || "📍 50 Washington Sq., Newport",
                            href: 'https://maps.google.com/?q=50+Washington+Sq+Newport+RI'
                        },
                        {
                            type: 'link',
                            label: pack?.hopeNewportPhone || "☎ 401-324-5626",
                            href: 'tel:4013245626'
                        },
                        pack?.hopeRecoveryCenter || "Hope Recovery Center",
                        {
                            type: 'map',
                            label: pack?.hopeWesterlyAddress || "📍 55 Beach St., Westerly",
                            href: 'https://maps.google.com/?q=55+Beach+St+Westerly+RI'
                        },
                        {
                            type: 'link',
                            label: pack?.hopeWesterlyPhone || "☎ 401-598-6400",
                            href: 'tel:4015986400'
                        }
                    ]
                },

                {
                    type: 'section',
                    title: pack?.serenityCenterTitle || "🕊️ THE SERENITY CENTER",
                    body: [
                        {
                            type: 'map',
                            label: pack?.serenityCenterAddress || "📍 66 Social St., Woonsocket",
                            href: 'https://maps.google.com/?q=66+Social+St+Woonsocket+RI'
                        },
                        {
                            type: 'link',
                            label: pack?.serenityCenterPhone || "☎ 401-466-4426",
                            href: 'tel:4014664426'
                        }
                    ]
                },

                {
                    type: 'section',
                    title: pack?.telephoneRecoverySupport || "📞 TELEPHONE RECOVERY SUPPORT",
                    body: [
                        pack?.telephoneRecoveryText || "Telephone recovery support and peer recovery specialists available every day.",
                        {
                            type: 'link',
                            label: pack?.telephoneRecoveryPhone || "☎ 401-414-LINK (5645)",
                            href: 'tel:4014145645'
                        },
                        {
                            type: 'link',
                            label: pack?.riOpioidWebsite || "🌐 bhddh.ri.gov/sections/opioid_use_disorders.php",
                            href: 'https://bhddh.ri.gov/sections/opioid_use_disorders.php'
                        },
                        {
                            type: 'link',
                            label: pack?.preventOverdoseWebsite || "🌐 PreventOverdoseRI.org/Get-Help",
                            href: 'https://PreventOverdoseRI.org/Get-Help'
                        }
                    ]
                }

            ];
        }
    },

    addiction: {

        get title() {
            return window.LANGUAGE_PACKS[window.currentLanguage]?.cardAddiction || "Addiction Is A Disease";
        },

        get subtitle() {
            return window.LANGUAGE_PACKS[window.currentLanguage]?.addictionSubtitle ||
                "Addiction is a chronic brain disease, not a moral failing. Recovery is possible with treatment and support.";
        },

        get items() {
            const pack = window.LANGUAGE_PACKS[window.currentLanguage];
            return [

                {
                    type: 'section',
                    title: pack?.whatIsAddiction || "What Is Addiction?",
                    body: [
                        pack?.addictionDefinition || "Addiction is a treatable, chronic medical disease involving complex interactions among brain circuits, genetics, environment, and life experiences.",
                        pack?.addictionBehavior || "People with addiction use substances or engage in behaviors that become compulsive and often continue despite harmful consequences."
                    ]
                },

                {
                    type: 'section',
                    title: pack?.signsOfAddiction || "Signs of Addiction",
                    body: [
                        pack?.signLossControl || "Loss of control over substance use",
                        pack?.signCravings || "Cravings and preoccupation",
                        pack?.signNeglect || "Neglecting responsibilities",
                        pack?.signWithdrawal || "Withdrawal from family and friends",
                        pack?.signTolerance || "Tolerance (needing more to feel effects)",
                        pack?.signContinuedUse || "Continued use despite harm"
                    ]
                },

                {
                    type: 'section',
                    title: pack?.treatmentAndRecovery || "Treatment & Recovery",
                    body: [
                        {
                            type: 'link',
                            label: pack?.samhsaHelpline || "☎ SAMHSA National Helpline: 1-800-662-4357",
                            href: 'tel:18006624357'
                        },
                        {
                            type: 'link',
                            label: pack?.riBuprenorphineHelpline || "☎ Rhode Island Buprenorphine & Naloxone Helpline: 401-606-5456",
                            href: 'tel:4016065456'
                        },
                        pack?.localSupport || "Local support: Alcoholics Anonymous, Narcotics Anonymous, SMART Recovery",
                        pack?.medicationsEffective || "Medications for opioid use disorder including methadone, buprenorphine, and naltrexone are effective.",
                        {
                            type: 'link',
                            label: pack?.samhsaFindHelp || "🌐 samhsa.gov/find-help",
                            href: 'https://www.samhsa.gov/find-help'
                        },
                        {
                            type: 'link',
                            label: pack?.riBHDDH || "☎ RI Department of Behavioral Healthcare: 401-462-4691",
                            href: 'tel:4014624691'
                        }
                    ]
                },

                {
                    type: 'section',
                    title: pack?.recoveryIsPossible || "Recovery Is Possible",
                    body: [
                        pack?.recoveryMessage || "Compassion, treatment, recovery support, and community save lives."
                    ]
                }

            ];
        }
    },

    overdose: {

        get title() {
            return window.LANGUAGE_PACKS[window.currentLanguage]?.howToRespond || "How to Respond to an Overdose";
        },

        get subtitle() {
            return window.LANGUAGE_PACKS[window.currentLanguage]?.overdoseSubtitle ||
                "Every second counts. Know the signs and act quickly.";
        },

        get items() {
            const pack = window.LANGUAGE_PACKS[window.currentLanguage];
            return [

                {
                    type: 'section',
                    title: pack?.recognizeOverdose || "Recognize an Overdose",
                    body: [
                        pack?.overdoseSignUnresponsive || "Person is unresponsive or will not wake up",
                        pack?.overdoseSignBreathing || "Breathing is slow, shallow, or stopped",
                        pack?.overdoseSignLips || "Blue or gray lips and fingertips",
                        pack?.overdoseSignChoking || "Choking or gurgling sounds",
                        pack?.overdoseSignLimp || "Limp body and pale skin"
                    ]
                },

                {
                    type: 'section',
                    title: pack?.stepCall911 || "1. Call 911",
                    body: [
                        pack?.stepCall911Detail || "Give a clear location. Tell dispatch the person is unresponsive or not breathing.",
                        pack?.goodSamaritan || "Rhode Island Good Samaritan Law protects you and the person from prosecution for drug possession.",
                        {
                            type: 'link',
                            label: "☎ Call 911",
                            href: 'tel:911'
                        }
                    ]
                },

                {
                    type: 'section',
                    title: pack?.stepNaloxone || "2. Administer Naloxone",
                    body: [
                        pack?.stepNaloxoneDetail || "Use naloxone (Narcan) nasal spray or injectable if available. Naloxone reverses opioid overdoses and is safe to use.",
                        pack?.freeNaloxone || "Free naloxone is available at participating pharmacies and community organizations."
                    ]
                },

                {
                    type: 'section',
                    title: pack?.stepRescueBreathing || "3. Rescue Breathing",
                    body: [
                        pack?.stepRescueBreathingDetail || "Tilt head back and lift chin. Pinch nose and give one breath every 5 seconds. Continue until the person breathes or EMS arrives."
                    ]
                },

                {
                    type: 'section',
                    title: pack?.stepStay || "4. Stay with the Person",
                    body: [
                        pack?.stepStayDetail || "Place them in the recovery position if breathing but unconscious. Stay with them until emergency responders arrive."
                    ]
                },

                {
                    type: 'section',
                    title: pack?.whereToGetNaloxone || "Where to Get Naloxone",
                    body: [
                        pack?.naloxonePharmacies || "Participating pharmacies (no prescription needed)",
                        pack?.naloxonePrograms || "Community overdose prevention programs",
                        {
                            type: 'link',
                            label: pack?.riNaloxoneHotline || "☎ RI Naloxone Hotline: 401-222-5960",
                            href: 'tel:4012225960'
                        },
                        {
                            type: 'link',
                            label: "🌐 PreventOverdoseRI.org",
                            href: 'https://preventoverdoseri.org'
                        }
                    ]
                }

            ];
        }
    },

    perinatal: {

        get title() {
            return window.LANGUAGE_PACKS[window.currentLanguage]?.perinatalSubstanceUse || "Perinatal Substance Use";
        },

        get subtitle() {
            return window.LANGUAGE_PACKS[window.currentLanguage]?.perinatalSubtitle ||
                "Support for a healthy pregnancy and baby starts with compassion, not judgment.";
        },

        get items() {
            const pack = window.LANGUAGE_PACKS[window.currentLanguage];
            return [

                {
                    type: 'section',
                    title: pack?.whyItMatters || "Why It Matters",
                    body: [
                        pack?.perinatalWhyText || "Substance use during pregnancy can affect both mother and baby. With proper care, treatment, and support, families can achieve healthy outcomes.",
                        pack?.perinatalStigma || "Stigma often prevents women from seeking help — we are here to support you."
                    ]
                },

                {
                    type: 'section',
                    title: pack?.potentialRisks || "Potential Risks",
                    body: [
                        pack?.riskForBaby || "FOR THE BABY",
                        pack?.riskBabyPreterm || "Preterm birth and low birth weight",
                        pack?.riskBabyNAS || "Neonatal abstinence syndrome (NAS)",
                        pack?.riskBabyDevelopment || "Developmental delays",
                        pack?.riskForMother || "FOR THE MOTHER",
                        pack?.riskMotherBloodPressure || "High blood pressure and preeclampsia",
                        pack?.riskMotherInfections || "Infections including HIV and hepatitis",
                        pack?.riskMotherMental || "Mental health challenges"
                    ]
                },

                {
                    type: 'section',
                    title: pack?.getSupport || "Get Support — No Judgment",
                    body: [
                        {
                            type: 'link',
                            label: pack?.projectRESPECT || "☎ Project RESPECT — Women & Infants Hospital — 401-274-1122",
                            href: 'tel:4012741122'
                        },
                        {
                            type: 'link',
                            label: pack?.riParentSupport || "☎ RI Parent Support Network — 401-467-6855",
                            href: 'tel:4014676855'
                        },
                        {
                            type: 'link',
                            label: pack?.pregnantHelpline || "☎ Substance Use Helpline For Pregnant Women — 1-800-662-4357",
                            href: 'tel:18006624357'
                        },
                        {
                            type: 'link',
                            label: pack?.womenInfantsHospital || "🌐 Women & Infants Hospital",
                            href: 'https://www.womenandinfants.org/'
                        },
                        {
                            type: 'link',
                            label: pack?.samhsaFindHelp || "🌐 SAMHSA Find Help",
                            href: 'https://www.samhsa.gov/find-help'
                        }
                    ]
                },

                {
                    type: 'section',
                    title: pack?.tipsHealthyPregnancy || "Tips For A Healthy Pregnancy",
                    body: [
                        pack?.tipPrenatalCare || "Early prenatal care",
                        pack?.tipMAT || "Medication-assisted treatment (MAT) is safe",
                        pack?.tipPediatric || "Attend all pediatric appointments",
                        pack?.tipBreastfeeding || "Breastfeeding support if appropriate"
                    ]
                },

                {
                    type: 'section',
                    title: "Remember",
                    body: [
                        pack?.rememberStrength || "Asking for help is a sign of strength."
                    ]
                }

            ];
        }
    }

};