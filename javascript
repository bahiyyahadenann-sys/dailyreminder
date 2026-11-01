
const reminders = [
  {
    arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
    translation: "Indeed, with hardship comes ease.",
    reference: "Surah Ash-Sharh, 94:6",
    reflection: "What difficulty are you facing today, and how can you remain hopeful in Allah's mercy?"
  },
  {
    arabic: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
    translation: "Surely in the remembrance of Allah do hearts find comfort.",
    reference: "Surah Ar-Ra'd, 13:28",
    reflection: "When was the last time you made space in your day to remember Allah?"
  },
  {
    arabic: "فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ",
    translation: "So remember Me; I will remember you. And thank Me, and do not be ungrateful.",
    reference: "Surah Al-Baqarah, 2:152",
    reflection: "What is one blessing you sometimes forget to appreciate?"
  },
  {
    arabic: "لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا",
    translation: "Do not grieve; indeed Allah is with us.",
    reference: "Surah At-Tawbah, 9:40",
    reflection: "How can remembering that Allah is with you change the way you face uncertainty?"
  },
  {
    arabic: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",
    translation: "Whoever puts their trust in Allah, then He is sufficient for them.",
    reference: "Surah At-Talaq, 65:3",
    reflection: "Is there something you need to stop worrying about and entrust to Allah?"
  },
  {
    arabic: "وَلَا تَهِنُوا وَلَا تَحْزَنُوا",
    translation: "Do not lose heart or grieve.",
    reference: "Surah Ali 'Imran, 3:139",
    reflection: "What can help you keep going when life feels difficult?"
  },
  {
    arabic: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
    translation: "Indeed, Allah is with those who are patient.",
    reference: "Surah Al-Baqarah, 2:153",
    reflection: "Where in your life do you need to practise more patience?"
  },
  {
    arabic: "وَلَا تَيْأَسُوا مِن رَّوْحِ اللَّهِ",
    translation: "Do not despair of relief from Allah.",
    reference: "Surah Yusuf, 12:87",
    reflection: "What gives you hope when you feel discouraged?"
  },
  {
    arabic: "وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ",
    translation: "And He is with you wherever you are.",
    reference: "Surah Al-Hadid, 57:4",
    reflection: "How would your choices change if you were always mindful that Allah sees you?"
  },
  {
    arabic: "وَإِلَىٰ رَبِّكَ فَارْغَب",
    translation: "And turn your longing towards your Lord.",
    reference: "Surah Ash-Sharh, 94:8",
    reflection: "What is one thing you can do today to strengthen your relationship with Allah?"
  }
];

let currentIndex = 0;

function displayReminder(index) {
  const item = reminders[index];

  document.getElementById("arabic").textContent = item.arabic;
  document.getElementById("translation").textContent = item.translation;
  document.getElementById("reference").textContent = item.reference;
  document.getElementById("reflection").textContent = item.reflection;

  document.getElementById("status").textContent = "";
}

function getAnotherReminder() {
  let nextIndex;

  do {
    nextIndex = Math.floor(Math.random() * reminders.length);
  } while (nextIndex === currentIndex);

  currentIndex = nextIndex;
  displayReminder(currentIndex);
}

async function copyReminder() {
  const item = reminders[currentIndex];

  const text = `${item.arabic}\n${item.translation}\n${item.reference}\n\nReflection: ${item.reflection}`;

  try {
    await navigator.clipboard.writeText(text);
    document.getElementById("status").textContent =
      "Reminder copied successfully!";
  } catch (error) {
    document.getElementById("status").textContent =
      "Copy unavailable. Please select and copy the text manually.";
  }
}

document.getElementById("nextBtn")
  .addEventListener("click", getAnotherReminder);

document.getElementById("copyBtn")
  .addEventListener("click", copyReminder);

displayReminder(currentIndex);
