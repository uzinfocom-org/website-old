import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LannguageDetector from 'i18next-browser-languagedetector';

i18next
  .use(initReactI18next)
  .use(LannguageDetector)
  .init({
    fallbackLng: 'en',
    debug: false,
    resources: {
      en: {
        translation: {
          im: 'We are',
          tagline: 'The First Open Source Development Society in Uzbekistan',
          latestNews: 'Latest News',
          about: 'About',
          helloworld: 'Hello World',
          weareuzinfocom: 'We are Uzinfocom Open Source Community',
          about:
            'First of all, it should be noted that the purpose of this society is to develop Open Source on a large scale in Uzbekistan and to encourage everyone to contribute to it. 🤓 Our society is considered to be all-encompassing, focusing on reviving, polishing and developing the Uzbek open source.',
        },
      },
      uz: {
        translation: {
          im: 'Biz',
          tagline:
            "O'zbekistondagi Birinchi Open Source Rivojlantiruvchi Jamiyat",
          latestNews: "So'ngi yangiliklar",
          helloworld: 'Salom Dunyo',
          weareuzinfocom: 'Biz Uzinfocom Open Source Jamiyatimiz!',
          about:
            "Avvalambor shuni aytib o'tish joizki, bu jamiyat yaralishidan maqsad bu Open Source ni 🇺🇿 O'zbekistonda keng miqyosda rivojlantirish va unga hammani o'z hissasini qo'shishga chorlashdir. 🤓 Bizning jamiyatimiz hamma yo'nalishlarni qamrab olgan hisoblanib 📝, o'zbek open source ni qayta tiriltirish, uni sayqallash va rivojlantirishga o'z e'tiborini qaratadi.",
        },
      },
    },
  });
