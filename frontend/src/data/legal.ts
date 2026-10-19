const EMAIL = "mariam.chemrah@gmail.com"

export const legalPages = {
    terms: {
        title: "Terms of Service",
        description:
            "The simple rules for using Rivulet. Please read them before you create an account.",
        lastUpdated: "2026-10-13",
    },
    privacy: {
        title: "Privacy Policy",
        description:
            "How Rivulet collects, uses and protects your information, in plain language.",
        lastUpdated: "2026-10-13",
    },
    support: {
        title: "How can we help?",
        description:
            "Find a quick answer below, or send us a message and a real person will read it.",
        lastUpdated: "2026-10-13",
    },
};

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    "id": "what-is-rivulet",
    "question": "What is Rivulet?",
    "answer": "Rivulet helps you turn tasks, goals and habits into small “drops”. You finish drops, keep your streak, earn XP and level up, so progress feels like a game."
  },
  {
    "id": "is-it-free",
    "question": "Is Rivulet free?",
    "answer": "Yes. It’s free to join and free to use, with no ads. If that ever changes, you’ll be told clearly in advance."
  },
  {
    "id": "what-is-a-drop",
    "question": "What is a drop?",
    "answer": "A drop is one thing you want to do, such as “Read 10 pages”. Pick a size (small, medium or big) and finish it to count toward your streak and XP."
  },
  {
    "id": "repeat-days",
    "question": "Can a drop repeat on certain days?",
    "answer": "Yes. When you add a drop, pick the weekdays it belongs to. It shows up on those days only."
  },
  {
    "id": "streaks",
    "question": "How does a streak work?",
    "answer": "Your streak grows by one for every day you finish at least one drop. Miss a day and it starts again from zero. You never lose XP or levels."
  },
  {
    "id": "xp-and-levels",
    "question": "How do I earn XP and level up?",
    "answer": "Every drop carries XP based on its size, and bigger drops give more. Finishing drops fills your level bar, and when it’s full you level up."
  },
  {
    "id": "no-reminders",
    "question": "I’m not getting reminders.",
    "answer": "Check that notifications are on in Rivulet and in your phone settings, and that the drop has a reminder time. If it still doesn’t work, send me a message with your phone model."
  },
  {
    "id": "forgot-password",
    "question": "I forgot my password.",
    "answer": "Choose “Forgot password” on the log in screen and enter your email. You’ll get a link to set a new one."
  },
  {
    "id": "lost-phone",
    "question": "I lost my phone. How do I log in?",
    "answer": "Choose “Use a backup code” on the verification screen and enter one of the recovery codes you saved. Each code works once."
  },
  {
    "id": "delete-account",
    "question": "How do I delete my account?",
    "answer": "Open Profile and choose delete account. Your personal information is deleted, apart from anything the law requires me to keep. Your data is never sold."
  }
];

export interface LegalSection {
  id: string;
  number: string;
  title: string;
  paragraphs?: string[];
  list?: string[];
}

export interface LegalPage {
  title: string;
  eyebrow: string;
  description: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export const terms: LegalPage = {
  "title": "Terms of Service",
  "eyebrow": "Legal",
  "description": "The simple rules for using Rivulet. Please read them before you create an account.",
  "lastUpdated": "2026-10-13",
  "sections": [
    {
      "id": "s1",
      "number": "01",
      "title": "About Rivulet and these terms",
      "paragraphs": [
        "Rivulet is an early, experimental project made by one independent developer, not a company. In these terms, “I” means that developer. By creating an account or using Rivulet, you agree to these terms. If you do not agree, please do not use the app."
      ]
    },
    {
      "id": "s2",
      "number": "02",
      "title": "Your account",
      "list": [
        "You must be at least 13 years old.",
        "Give accurate information and keep it up to date.",
        "Keep your password and recovery codes private. You are responsible for what happens on your account.",
        "Tell me right away if you think someone else has accessed your account."
      ]
    },
    {
      "id": "s3",
      "number": "03",
      "title": "Using Rivulet",
      "paragraphs": [
        "Use Rivulet for your own goals and habits. Please do not break the law, try to get into other people’s accounts, interfere with the service, copy or resell it, or use it to harm others. I may suspend accounts that break these rules."
      ]
    },
    {
      "id": "s4",
      "number": "04",
      "title": "Your content",
      "paragraphs": [
        "The drops, goals and notes you create belong to you. You give me permission to store and process them so I can run the service for you. I do not claim ownership of your content."
      ]
    },
    {
      "id": "s5",
      "number": "05",
      "title": "XP, levels and rewards",
      "paragraphs": [
        "Streaks, XP, levels and rewards are features inside Rivulet. They have no cash value and cannot be exchanged for money. I may change how they work as the app grows."
      ]
    },
    {
      "id": "s6",
      "number": "06",
      "title": "Free to use",
      "paragraphs": [
        "Rivulet is free and I do not earn money from it. If that ever changes, for example if running costs grow, I will tell you clearly in advance and you can choose whether to continue."
      ]
    },
    {
      "id": "s7",
      "number": "07",
      "title": "Notifications",
      "paragraphs": [
        "If you turn on reminders, you will get notifications at the times you choose. You can change or turn them off at any time in the app or in your device settings."
      ]
    },
    {
      "id": "s8",
      "number": "08",
      "title": "Ending your account",
      "paragraphs": [
        "You can stop using Rivulet and delete your account at any time. I may suspend or close an account that breaks these terms, or stop offering the app if I need to. I will give notice where I reasonably can."
      ]
    },
    {
      "id": "s9",
      "number": "09",
      "title": "An early project, with no promises",
      "paragraphs": [
        "Rivulet is a test. It may have bugs, change, or stop working. It is provided “as is”, free of charge, with no guarantee that it will always be available, error-free, or help you reach a particular goal. Please do not rely on it for anything critical."
      ]
    },
    {
      "id": "s10",
      "number": "10",
      "title": "Limit of my responsibility",
      "paragraphs": [
        "To the extent the law allows, I am not responsible for losses that come from using Rivulet, including lost data or streaks. Nothing in these terms takes away rights you have under the law of your country that cannot be limited."
      ]
    },
    {
      "id": "s11",
      "number": "11",
      "title": "Changes to these terms",
      "paragraphs": [
        "I may update these terms. If the changes are important, I will tell you before they apply. If you keep using Rivulet after that, you accept the updated terms."
      ]
    },
    {
      "id": "s12",
      "number": "12",
      "title": "Contact",
      "paragraphs": [
        `Questions about these terms? Write to ${EMAIL} or use the form on the Support page.`
      ]
    }
  ]
};

export interface LegalSection {
  id: string;
  number: string;
  title: string;
  paragraphs?: string[];
  list?: string[];
}

export interface LegalPage {
  title: string;
  eyebrow: string;
  description: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export const privacy: LegalPage = {
  "title": "Privacy Policy",
  "eyebrow": "Legal",
  "description": "How Rivulet collects, uses and protects your information, in plain language.",
  "lastUpdated": "2026-10-13",
  "sections": [
    {
      "id": "s1",
      "number": "01",
      "title": "Who I am",
      "paragraphs": [
        "Rivulet is an independent project made by one developer. It is not run by a company. In this policy, “I” means the developer behind Rivulet, and “Rivulet” means the app and website. If anything here is unclear, write to me at mariam.chemrah@mail.com."
      ]
    },
    {
      "id": "s2",
      "number": "02",
      "title": "What I collect",
      "list": [
        "Account details: your name, email address and a password (stored in a protected form).",
        "What you create: your drops, goals, habits, repeat days and reminder times.",
        "Your progress: streaks, XP, levels and rewards.",
        "Device information: your device type, app version and the token needed to send you notifications.",
        "Messages you send me through Support."
      ]
    },
    {
      "id": "s3",
      "number": "03",
      "title": "How I use it",
      "list": [
        "To run Rivulet and keep your goals, streaks and rewards in sync.",
        "To send the reminders and notifications you have turned on.",
        "To keep accounts secure, including two-step verification and recovery codes.",
        "To answer your questions and fix problems.",
        "To see how the app is used so I can improve it."
      ]
    },
    {
      "id": "s4",
      "number": "04",
      "title": "Who I share it with",
      "paragraphs": [
        "Rivulet is free and I make no money from it. I do not sell your information and I do not show ads. I use a few services to run the app, such as hosting, email and notification delivery, and they only handle your information to do that job. I may also share information if the law requires it."
      ]
    },
    {
      "id": "s5",
      "number": "05",
      "title": "How I protect it",
      "paragraphs": [
        "I take reasonable steps to protect your information. You can add two-step verification to your account and keep recovery codes somewhere safe. Because Rivulet is a small project run by one person, I cannot promise perfect security, so please choose a strong, unique password."
      ]
    },
    {
      "id": "s6",
      "number": "06",
      "title": "How long I keep it",
      "paragraphs": [
        "I keep your information while your account is open. If you delete your account, I delete your personal information, except anything I am required by law to keep."
      ]
    },
    {
      "id": "s7",
      "number": "07",
      "title": "Your choices and rights",
      "paragraphs": [
        `You can see and update your details in Profile, choose which notifications you get in Notifications, and ask me to delete your account. Depending on where you live, you may also have the right to access, correct, export or delete your data. To use any of these rights, write to ${EMAIL}.`
      ]
    },
    {
      "id": "s8",
      "number": "08",
      "title": "Children",
      "paragraphs": [
        "Rivulet is not meant for children under 13. If you think a child has given me personal information, contact me and I will remove it."
      ]
    },
    {
      "id": "s9",
      "number": "09",
      "title": "Changes to this policy",
      "paragraphs": [
        "If I make important changes, I will tell you in the app or by email. The date at the top shows when this policy was last updated."
      ]
    },
    {
      "id": "s10",
      "number": "10",
      "title": "Contact",
      "paragraphs": [
        `Questions about privacy? Write to ${EMAIL} or use the form on the Support page.`
      ]
    }
  ]
};