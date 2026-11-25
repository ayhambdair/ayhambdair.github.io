
const translations = {
    en: {},

    ar: {
        namePlain: "أيهم بدير",

        // Home
        intro: "أمان في التصميم. أداء في التنفيذ.",
        role: "مختص أمن سيبراني",
        heroText: "أركز على أمن تطبيقات الويب، وتقييم الثغرات، وممارسات البرمجة الآمنة، مع خلفية في تطوير الويب.",
        viewProjects: "استكشف مشاريعي",
        getInTouch: "تواصل معي",
        degree: "بكالوريوس نظم المعلومات الإدارية (MIS)",

        // About
        aboutTitle: "نبذة عني",

        aboutText: "أنا أيهم بدير، مختص أمن سيبراني مقيم في عمّان، الأردن، ولدي خبرة عملية من خلال المختبرات الأمنية في أمن تطبيقات الويب وتقييم الثغرات.",

        aboutDetails: "أتممت بنجاح 90 ساعة من التدريب في الأمن السيبراني لدى 42 عمّان، واكتسبت خبرة عملية في اكتشاف الثغرات واستغلالها ضمن بيئات آمنة واختبار الأمان ومعالجة الثغرات. تشمل خلفيتي التقنية تطوير الويب، ولينكس، والشبكات، والاستخبارات مفتوحة المصدر، وأدوات الأمن السيبراني. كما أتممت 20 مستوى من مشروع NetPractice، وشاركت ضمن فريق مكون من خمسة أعضاء في تطوير CyberTeam، وهي منصة تفاعلية لتجربة ثغرات تطبيقات الويب. أؤمن بالتعلم المستمر والعمل الجماعي والبحث والتعلم بين الأقران، وأسعى للمساهمة في حماية التطبيقات والأنظمة الرقمية.",

        // Technical Skills
        skillsTitle: "المهارات",
        skillsNote: "مهاراتي وأدواتي التقنية",

        webSecurity: "أمن تطبيقات الويب",

        securityTesting: "الاختبارات الأمنية",
        testingDetail: "تقييم الثغرات · أساسيات اختبار الاختراق",
        testingMore: "OWASP · إثبات المفهوم · البرمجة الآمنة · معالجة الثغرات",

        networking: "الشبكات",
        networkDetail: "البوابات الافتراضية · جداول التوجيه · استكشاف أخطاء الشبكات وإصلاحها",

        securityTools: "أدوات الأمن السيبراني",

        forensics: "الاستخبارات مفتوحة المصدر والتحليل الجنائي الرقمي",
        forensicsDetail: "OSINT · تحليل البيانات الوصفية · كسر التجزئة",

        web: "تطوير الويب",
        webDetail: "التصميم المتجاوب · DOM · البرمجة الآمنة",

        devTools: "أدوات التطوير",

        // Projects
        projectsTitle: "المشاريع",
        projectNote: "الخبرة العملية",
        projectDisclaimer: "استكشف مشاريعي والكود المصدري على GitHub.",

        // Certifications
        certTitle: "الشهادات",
        certNote: "التدريب والإنجازات",

        cert42: "المهارات التقنية المتقدمة – الأمن السيبراني",
        cert42Date: "نوفمبر 2026 · 90 ساعة تدريبية",

        certCTF: "CrypteraLab: Handshake – شهادة مشاركة",
        certCTFDate: "نوفمبر 2026 · مسابقة CTF",

        viewCert: "عرض الشهادة",
        downloadCert: "تحميل",

        // Soft Skills
        hobbiesTitle: "المهارات الشخصية",

        soft1: "العمل الجماعي",
        soft2: "التواصل",
        soft3: "التعلم بين الأقران",
        soft4: "القدرة على التكيف",
        soft5: "التفكير التحليلي",
        soft6: "البحث",
        soft7: "سرعة التعلم",
        soft8: "التعلم المستمر",

        // Contact
        contactTitle: "تواصل معي",
        contactEyebrow: "لنتواصل",
        contactLead: "حوارات مفيدة، وفرص جديدة.",

        emailLabel: "البريد الإلكتروني",
        phoneLabel: "الهاتف",

        yourName: "اسمك",
        yourEmail: "بريدك الإلكتروني",
        yourMessage: "رسالتك",

        send: "إرسال بريد إلكتروني",

        // Footer
        footer: "أتعلم باستمرار، وأبني باستمرار.",
        top: "العودة للأعلى"
    }
};


// ========================================
// PROJECTS DATA
// ========================================

const projectData = [

    {
        en: "CyberTeam – Interactive Web Security Sandbox",
        ar: "CyberTeam – منصة تفاعلية لأمن تطبيقات الويب",

        tag: "Cybersecurity / Web Security",

        descEn: "A collaborative cybersecurity project developed by a five-member team. Features three interactive security labs covering Business Logic Flaws, ReDoS, and Client-Side Prototype Pollution, with vulnerable and secure implementations.",

        descAr: "مشروع أمن سيبراني جماعي تم تطويره ضمن فريق مكون من خمسة أعضاء. يتضمن ثلاثة مختبرات أمنية تفاعلية تغطي ثغرات منطق الأعمال، وReDoS، وPrototype Pollution، مع تطبيقات ضعيفة وآمنة للمقارنة.",

        github: "https://github.com/ayhambdair/Final-Project",

        demo: "https://tareqdahbour.github.io/Final-Project/index.html"
    },

    {
        en: "Web Application Security Labs",
        ar: "مختبرات أمن تطبيقات الويب",

        tag: "OWASP / Security Testing",

        descEn: "Hands-on security labs covering XSS, CSRF, SQL Injection, SSTI, XXE, SSRF, LFI/RFI, Path Traversal, Insecure Deserialization, and Padding Oracle. Focused on vulnerability identification, controlled exploitation, and remediation.",

        descAr: "مختبرات أمنية عملية تغطي ثغرات XSS وCSRF وSQL Injection وSSTI وXXE وSSRF وLFI/RFI وPath Traversal وInsecure Deserialization وPadding Oracle، مع التركيز على اكتشاف الثغرات واستغلالها ضمن بيئات آمنة ومعالجتها."
    },

    {
        en: "NetPractice – 20 Levels Completed",
        ar: "NetPractice – إتمام 20 مستوى",

        tag: "Networking / TCP-IP",

        descEn: "Completed 20 hands-on networking challenges involving IPv4 addressing, subnetting, routing tables, default gateways, and network troubleshooting.",

        descAr: "إتمام 20 تحديًا عمليًا في الشبكات، شملت عناوين IPv4 وتقسيم الشبكات وجداول التوجيه والبوابات الافتراضية واستكشاف أخطاء الشبكات وإصلاحها."
    },

    {
        en: "OSINT, Digital Forensics & Hash Cracking",
        ar: "الاستخبارات مفتوحة المصدر والتحليل الجنائي الرقمي وكسر التجزئة",

        tag: "OSINT / Forensics",

        descEn: "Practical exercises involving open-source investigations, image metadata analysis, password hash cracking, and data decoding using ExifTool, John the Ripper, Hashcat, and CyberChef.",

        descAr: "تمارين عملية في التحقيق باستخدام المصادر المفتوحة، وتحليل البيانات الوصفية للصور، وكسر تجزئة كلمات المرور، وفك ترميز البيانات باستخدام ExifTool وJohn the Ripper وHashcat وCyberChef."
    },

    {
        en: "CrypteraLab – Handshake CTF",
        ar: "مسابقة CrypteraLab – Handshake CTF",

        tag: "CTF / Cybersecurity",

        descEn: "Participated in a Capture the Flag cybersecurity competition, applying practical security analysis, cryptography, digital forensics, and reverse engineering fundamentals.",

        descAr: "المشاركة في مسابقة Capture the Flag للأمن السيبراني، وتطبيق مهارات التحليل الأمني والتشفير والتحليل الجنائي الرقمي وأساسيات الهندسة العكسية."
    },

    {
        en: "Personal Portfolio Website",
        ar: "الموقع الشخصي",

        tag: "HTML / CSS / JavaScript",

        descEn: "A responsive bilingual portfolio featuring Arabic and English support, RTL layout, dark and light themes, and interactive JavaScript functionality.",

        descAr: "موقع شخصي متجاوب يدعم اللغتين العربية والإنجليزية واتجاه RTL والوضع الليلي والنهاري والتفاعل باستخدام JavaScript.",

        github: "https://github.com/ayhambdair/ayhambdair.github.io",

        demo: "https://ayhambdair.github.io/"
    },

    {
        en: "Linux, Git & GitHub",
        ar: "Linux وGit وGitHub",

        tag: "Linux / Git",

        descEn: "Terminal commands, version control, and SSH authentication.",

        descAr: "أوامر الطرفية وإدارة الإصدارات والمصادقة باستخدام SSH.",

        github: "https://github.com/ayhambdair/discovery-web-piscine"
    },

    {
        en: "HTML Fundamentals",
        ar: "أساسيات HTML",

        tag: "HTML5",

        descEn: "Building semantic and accessible web page structures.",

        descAr: "بناء صفحات ويب باستخدام عناصر HTML الدلالية.",

        github: "https://github.com/ayhambdair/Project-01-HTML-Fundamentals"
    },

    {
        en: "CSS & Styling",
        ar: "التنسيق باستخدام CSS",

        tag: "CSS3",

        descEn: "Exploring responsive layouts, styling, animations, and transitions.",

        descAr: "استكشاف التصميم المتجاوب والتنسيق والحركات والانتقالات.",

        github: "https://github.com/ayhambdair/project02-css"
    },

    {
        en: "JavaScript & Interactivity",
        ar: "JavaScript والتفاعل",

        tag: "JavaScript",

        descEn: "Adding dynamic functionality through DOM manipulation, events, and JavaScript.",

        descAr: "إضافة الوظائف التفاعلية باستخدام DOM والأحداث وJavaScript.",

        github: "https://github.com/ayhambdair/JavaScript-Project03"
    }
];


// ========================================
// DOM ELEMENTS
// ========================================

const textElements = document.querySelectorAll("[data-t]");

const languageButton = document.getElementById("language");

const themeButton = document.getElementById("theme");

const contactForm = document.getElementById("contact-form");

let language = "en";


// Save original English content

textElements.forEach((element) => {
    translations.en[element.dataset.t] =
        element.textContent.trim();
});


// ========================================
// RENDER PROJECTS
// ========================================

function renderProjects() {

    const container = document.getElementById("project-list");

    container.replaceChildren();

    projectData.forEach((project) => {

        const card = document.createElement("article");

        card.className = "project-row";

        const content = document.createElement("div");

        const title = document.createElement("h3");

        const description = document.createElement("p");

        const tag = document.createElement("span");

        const actions = document.createElement("div");


        // Project title

        title.textContent = project[language];


        // Project description

        description.textContent =
            language === "ar"
                ? project.descAr
                : project.descEn;


        // Project tag

        tag.className = "tag";

        tag.textContent = project.tag;


        // Project links

        actions.className = "project-actions";


        // GitHub link

        if (project.github) {

            const githubLink = document.createElement("a");

            githubLink.href = project.github;

            githubLink.target = "_blank";

            githubLink.rel = "noopener noreferrer";

            githubLink.textContent = "GitHub";

            actions.append(githubLink);
        }


        // Live Demo link

        if (project.demo) {

            const demoLink = document.createElement("a");

            demoLink.href = project.demo;

            demoLink.target = "_blank";

            demoLink.rel = "noopener noreferrer";

            demoLink.textContent =
                language === "ar"
                    ? "عرض المشروع"
                    : "Live Demo";

            actions.append(demoLink);
        }


        content.append(title, description);

        card.append(content, tag);

        if (actions.childElementCount > 0) {
            card.append(actions);
        }

        container.append(card);
    });
}


// ========================================
// LANGUAGE SWITCH
// ========================================

function setLanguage(value) {

    language = value === "ar" ? "ar" : "en";

    const isArabic = language === "ar";


    document.documentElement.lang = language;

    document.documentElement.dir =
        isArabic ? "rtl" : "ltr";


    // Update translated elements

    textElements.forEach((element) => {

        const key = element.dataset.t;

        const translation =
            translations[language][key] ??
            translations.en[key];

        if (translation !== undefined) {
            element.textContent = translation;
        }
    });


    // Language button

    languageButton.textContent =
        isArabic ? "EN" : "AR";

    languageButton.setAttribute(
        "aria-label",
        isArabic
            ? "Switch to English"
            : "التبديل إلى العربية"
    );


    // Navigation accessibility

    document.querySelector("nav").setAttribute(
        "aria-label",
        isArabic
            ? "التنقل الرئيسي"
            : "Main navigation"
    );


    // Profile image accessibility

    document.querySelector(".portrait img").alt =
        isArabic
            ? "صورة أيهم بدير"
            : "Portrait of Ayham Bdair";


    // Theme button accessibility

    themeButton.setAttribute(
        "aria-label",
        isArabic
            ? "تبديل الوضع الليلي والنهاري"
            : "Switch color theme"
    );




    // Render projects in selected language

    renderProjects();


    // Save language preference

    try {

        localStorage.setItem(
            "portfolio-language",
            language
        );

    } catch {}
}


// Language button event

languageButton.addEventListener("click", () => {

    setLanguage(
        language === "en" ? "ar" : "en"
    );
});


// ========================================
// DARK / LIGHT MODE
// ========================================

themeButton.addEventListener("click", () => {

    const dark = document.body.classList.toggle("dark");

    themeButton.setAttribute(
        "aria-pressed",
        String(dark)
    );

    try {

        localStorage.setItem(
            "portfolio-theme",
            dark ? "dark" : "light"
        );

    } catch {}
});


// ========================================
// CONTACT FORM
// ========================================

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name =
        document.getElementById("sender").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (!name || !email || !message) {
        return;
    }


    const subject = encodeURIComponent(
        `Portfolio contact from ${name}`
    );

    const body = encodeURIComponent(
        `${message}\n\n${name}\n${email}`
    );


    window.location.href =
        `mailto:ayhambdair63@gmail.com?subject=${subject}&body=${body}`;
});


// ========================================
// FOOTER YEAR
// ========================================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ========================================
// RESTORE SAVED PREFERENCES
// ========================================

try {

    if (
        localStorage.getItem("portfolio-theme") === "dark"
    ) {
        document.body.classList.add("dark");
    }


    language =
        localStorage.getItem("portfolio-language") === "ar"
            ? "ar"
            : "en";

} catch {}


// Set initial theme accessibility

themeButton.setAttribute(
    "aria-pressed",
    String(
        document.body.classList.contains("dark")
    )
);


// Initialize website

setLanguage(language);
