// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'md', // Automatic theme detection
  debugger: true,
  // App root data
  data: function () {
    return {    
      // All users
      users: [
        {
          id: '1',
          name: 'শেখ হাসিনা',
          url: 'https://cabinet.portal.gov.bd/sites/default/files/files/cabinet.portal.gov.bd/page/60b1fce3_e203_4126_8f18_d69554fc46cb/pm_hasina_180614.jpg',
          title: 'প্রধানমন্ত্রী',
          division: [
            { div : "মন্ত্রিপরিষদ বিভাগ" },
            { div : "জনপ্রশাসন মন্ত্রণালয়" },
            { div : "প্রতিরক্ষা মন্ত্রণালয়" },
            { div : "সশস্ত্র বাহিনী বিভাগ" },
            { div : "বিদ্যুৎ, জ্বালানি ও খনিজ সম্পদ মন্ত্রণালয়" },
            { div : "মহিলা ও শিশু বিষয়ক মন্ত্রণালয়" },
          ],
          joindate: '০৭-০১-২০১৯',
          distdate: '০৭-০১-২০১৯',
        },
        {
          id: '2',
          name: 'জনাব আ, ক, ম, মোজাম্মেল হক',
          url: 'https://cabinet.portal.gov.bd/sites/default/files/files/cabinet.portal.gov.bd/page/60b1fce3_e203_4126_8f18_d69554fc46cb/MR.%20A.%20K.%20M%20MOZAMMEL%20HUQ%20Minister.png',
          title: 'মন্ত্রী',
          division: [
            { div : "মুক্তিযুদ্ধ বিষয়ক মন্ত্রণালয়" },
          ],
          joindate: '০৭-০১-২০১৯',
          distdate: '০৭-০১-২০১৯',
        },
        {
          id: '3',
          name: 'জনাব ওবায়দুল কাদের',
          url: 'https://cabinet.portal.gov.bd/sites/default/files/files/cabinet.portal.gov.bd/page/60b1fce3_e203_4126_8f18_d69554fc46cb/Mr.%20Obaidul%20Quader%20Minister.png',
          title: 'মন্ত্রী',
          division: [
            { div : "সড়ক পরিবহন ও সেতু মন্ত্রণালয়" },
          ],
          joindate: '০৭-০১-২০১৯',
          distdate: '০৭-০১-২০১৯',
        },
        {
          id: '4',
          name: 'জনাব মোঃ আব্দুর রাজ্জাক',
          url: 'https://cabinet.portal.gov.bd/sites/default/files/files/cabinet.portal.gov.bd/page/60b1fce3_e203_4126_8f18_d69554fc46cb/Dr.%20Muhammad%20Abdur%20Razzaque%20MP%20Minister.jpg',
          title: 'মন্ত্রী',
          division: [
            { div : "কৃষি মন্ত্রণালয়" },
          ],
          joindate: '০৭-০১-২০১৯',
          distdate: '০৭-০১-২০১৯',
        },
        {
          id: '5',
          name: 'জনাব আসাদুজ্জামান খান',
          url: 'https://cabinet.portal.gov.bd/sites/default/files/files/cabinet.portal.gov.bd/page/60b1fce3_e203_4126_8f18_d69554fc46cb/Asaduzzaman%20Khan%20MInister.JPG',
          title: 'মন্ত্রী',
          division: [
            { div : "স্বরাষ্ট্র মন্ত্রণালয়" },
          ],
          joindate: '০৭-০১-২০১৯',
          distdate: '০৭-০১-২০১৯',
        },
        {
          id: '6',
          name: 'জনাব মোহাম্মদ হাছান মাহ্‌মুদ',
          url: 'https://cabinet.portal.gov.bd/sites/default/files/files/cabinet.portal.gov.bd/page/60b1fce3_e203_4126_8f18_d69554fc46cb/Dr.%20Hasan%20Mahmud%2C%20MP%20Minister.png',
          title: 'মন্ত্রী',
          division: [
            { div : "তথ্য মন্ত্রণালয়" },
          ],
          joindate: '০৭-০১-২০১৯',
          distdate: '০৭-০১-২০১৯',
        },
        {
          id: '7',
          name: 'জনাব আনিসুল হক',
          url: 'https://cabinet.portal.gov.bd/sites/default/files/files/cabinet.portal.gov.bd/page/60b1fce3_e203_4126_8f18_d69554fc46cb/Anisul%20Huq%20Minister.JPG',
          title: 'মন্ত্রী',
          division: [
            { div : "আইন, বিচার ও সংসদ বিষয়ক মন্ত্রণালয়" },
          ],
          joindate: '০৭-০১-২০১৯',
          distdate: '০৭-০১-২০১৯',
        },
        {
          id: '8',
          name: 'জনাব আহম মুস্তফা কামাল ',
          url: 'https://cabinet.portal.gov.bd/sites/default/files/files/cabinet.portal.gov.bd/page/60b1fce3_e203_4126_8f18_d69554fc46cb/A%20H%20M%20Mustafa%20Kamal%2C%20FCA%2C%20MP%20Minister.jpg',
          title: 'মন্ত্রী',
          division: [
            { div : "অর্থ মন্ত্রণালয়  " },
          ],
          joindate: '০৭-০১-২০১৯',
          distdate: '০৭-০১-২০১৯',
        },
        {
          id: '9',
          name: 'জনাব মোঃ তাজুল ইসলাম ',
          url: 'https://cabinet.portal.gov.bd/sites/default/files/files/cabinet.portal.gov.bd/page/60b1fce3_e203_4126_8f18_d69554fc46cb/Md.%20Tazul%20Islam%2C%20MP.jpg',
          title: 'মন্ত্রী',
          division: [
            { div : "স্থানীয় সরকার বিভাগস্থানীয় সরকার" },
            { div : "পল্লী উন্নয়ন ও সমবায় মন্ত্রণালয়" },
          ],
          joindate: '০৭-০১-২০১৯',
          distdate: '০৭-০১-২০১৯',
        },
        {
          id: '10',
          name: 'ডা: দীপু মনি ',
          url: 'https://cabinet.portal.gov.bd/sites/default/files/files/cabinet.portal.gov.bd/page/60b1fce3_e203_4126_8f18_d69554fc46cb/Dr.%20Dipu%20Moni%2C%20M.P%20Minister.jpg',
          title: 'মন্ত্রী',
          division: [
            { div : "শিক্ষা মন্ত্রণালয়" },
          ],
          joindate: '০৭-০১-২০১৯',
          distdate: '০৭-০১-২০১৯',
        },
        {
          id: '11',
          name: 'জনাব এ. কে আব্দুল মোমেন  ',
          url: 'https://cabinet.portal.gov.bd/sites/default/files/files/cabinet.portal.gov.bd/page/60b1fce3_e203_4126_8f18_d69554fc46cb/H.E.%20Dr.%20A.%20K.%20Abdul%20Momen%2C%20M.P.%E2%80%8B%20Minister.jpg',
          title: 'মন্ত্রী',
          division: [
            { div : "পররাষ্ট্র মন্ত্রণালয় " },
          ],
          joindate: '০৭-০১-২০১৯',
          distdate: '০৭-০১-২০১৯',
        },
        {
          id: '12',
          name: 'জনাব এম এ মান্নান',
          url: 'https://cabinet.portal.gov.bd/sites/default/files/files/cabinet.portal.gov.bd/page/60b1fce3_e203_4126_8f18_d69554fc46cb/MA%20Mannan%20Minister.jpg',
          title: 'মন্ত্রী',
          division: [
            { div : "পরিকল্পনা মন্ত্রণালয় " },
          ],
          joindate: '০৭-০১-২০১৯',
          distdate: '০৭-০১-২০১৯',
        },
        {
          id: '13',
          name: 'জনাব নূরুল মজিদ মাহমুদ হুমায়ূন ',
          url: 'https://cabinet.portal.gov.bd/sites/default/files/files/cabinet.portal.gov.bd/page/60b1fce3_e203_4126_8f18_d69554fc46cb/Mr.%20Nurul%20Majid%20Mahmud%20Humayun%20MPHon%27ble%20Minister%20Ministry%20of%20Industries.png',
          title: 'মন্ত্রী',
          division: [
            { div : "শিল্প মন্ত্রণালয় " },
          ],
          joindate: '০৭-০১-২০১৯',
          distdate: '০৭-০১-২০১৯',
        },
        {
          id: '14',
          name: 'জনাব গোলাম দস্তগীর গাজী  ',
          url: 'https://cabinet.portal.gov.bd/sites/default/files/files/cabinet.portal.gov.bd/page/60b1fce3_e203_4126_8f18_d69554fc46cb/MR.%20GOLAM%20DASTAGIR%20GAZI%20Minister.jpg',
          title: 'মন্ত্রী',
          division: [
            { div : "বস্ত্র ও পাট মন্ত্রণালয় " },
          ],
          joindate: '০৭-০১-২০১৯',
          distdate: '০৭-০১-২০১৯',
        },
        {
          id: '15',
          name: 'জনাব জাহিদ মালেক ',
          url: 'https://cabinet.portal.gov.bd/sites/default/files/files/cabinet.portal.gov.bd/page/60b1fce3_e203_4126_8f18_d69554fc46cb/%E0%A6%AE%E0%A6%BE%E0%A6%B2%E0%A7%87%E0%A6%95%2C%20%E0%A6%8F%E0%A6%AE%E0%A6%AA%E0%A6%BF.jpg',
          title: 'মন্ত্রী',
          division: [
            { div : "স্বাস্থ্য ও পরিবার কল্যাণ মন্ত্রণালয় " },
          ],
          joindate: '০৭-০১-২০১৯',
          distdate: '০৭-০১-২০১৯',
        },
        {
          id: '16',
          name: 'জনাব সাধন চন্দ্র মজুমদার ',
          url: 'https://cabinet.portal.gov.bd/sites/default/files/files/cabinet.portal.gov.bd/page/60b1fce3_e203_4126_8f18_d69554fc46cb/Sadhan%20Chandra%20Mojumder%20Minister.jpg',
          title: 'মন্ত্রী',
          division: [
            { div : "খাদ্য মন্ত্রণালয় " },
          ],
          joindate: '০৭-০১-২০১৯',
          distdate: '০৭-০১-২০১৯',
        },
        {
          id: '17',
          name: 'জনাব টিপু মুনশি  ',
          url: 'https://cabinet.portal.gov.bd/sites/default/files/files/cabinet.portal.gov.bd/page/60b1fce3_e203_4126_8f18_d69554fc46cb/Tipu%20Munshi%2C%20MP%20Minister.jpg',
          title: 'মন্ত্রী',
          division: [
            { div : "বাণিজ্য মন্ত্রণালয় " },
          ],
          joindate: '০৭-০১-২০১৯',
          distdate: '০৭-০১-২০১৯',
        },
        {
          id: '18',
          name: 'জনাব নুরুজ্জামান আহ‌মেদ  ',
          url: 'https://cabinet.portal.gov.bd/sites/default/files/files/cabinet.portal.gov.bd/page/60b1fce3_e203_4126_8f18_d69554fc46cb/%E0%A6%A8%E0%A7%81%E0%A6%B0%E0%A7%81%E0%A6%9C%E0%A7%8D%E0%A6%9C%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%A8%20%E0%A6%86%E0%A6%B9%E0%A6%AE%E0%A7%87%E0%A6%A6.jpg',
          title: 'মন্ত্রী',
          division: [
            { div : "সমাজকল্যাণ মন্ত্রণালয়  " },
          ],
          joindate: '০৭-০১-২০১৯',
          distdate: '০৭-০১-২০১৯',
        },
        {
          id: '19',
          name: 'জনাব শ. ম. রেজাউল করিম ',
          url: 'https://cabinet.portal.gov.bd/sites/default/files/files/cabinet.portal.gov.bd/page/60b1fce3_e203_4126_8f18_d69554fc46cb/S%20M%20Rejaul%20Karim%20Minister.jpg',
          title: 'মন্ত্রী',
          division: [
            { div : "গৃহায়ন ও গণপূর্ত মন্ত্রণালয়  " },
          ],
          joindate: '০৭-০১-২০১৯',
          distdate: '০৭-০১-২০১৯',
        },
        {
          id: '20',
          name: 'জনাব মোঃ শাহাব উদ্দিন  ',
          url: 'https://cabinet.portal.gov.bd/sites/default/files/files/cabinet.portal.gov.bd/page/60b1fce3_e203_4126_8f18_d69554fc46cb/Md.%20Shahab%20Uddin.jpg',
          title: 'মন্ত্রী',
          division: [
            { div : "পরিবেশ, বন ও জলবায়ু পরিবর্তন মন্ত্রণালয়  " },
          ],
          joindate: '০৭-০১-২০১৯',
          distdate: '০৭-০১-২০১৯',
        },
        {
          id: '21',
          name: 'জনাব বীর বাহাদুর উশৈসিং  ',
          url: 'https://cabinet.portal.gov.bd/sites/default/files/files/cabinet.portal.gov.bd/page/60b1fce3_e203_4126_8f18_d69554fc46cb/Bir%20Bahadur%20Ushwe%20Sing%2C%20MP%20Minister.jpg',
          title: 'মন্ত্রী',
          division: [
            { div : "পার্বত্য চট্টগ্রাম বিষয়ক মন্ত্রণালয়  " },
          ],
          joindate: '০৭-০১-২০১৯',
          distdate: '০৭-০১-২০১৯',
        },
        {
          id: '22',
          name: 'জনাব সাইফুজ্জামান চৌধুরী ',
          url: 'https://cabinet.portal.gov.bd/sites/default/files/files/cabinet.portal.gov.bd/page/60b1fce3_e203_4126_8f18_d69554fc46cb/Saifuzzaman%20Chowdhury%20%20%20Minister.jpg',
          title: 'মন্ত্রী',
          division: [
            { div : "ভূমি মন্ত্রণালয়  " },
          ],
          joindate: '০৭-০১-২০১৯',
          distdate: '০৭-০১-২০১৯',
        },
        {
          id: '23',
          name: 'জনাব মো: নূরুল ইসলাম সুজন  ',
          url: 'https://cabinet.portal.gov.bd/sites/default/files/files/cabinet.portal.gov.bd/page/60b1fce3_e203_4126_8f18_d69554fc46cb/Mr.%20Md.%20Nurul%20Islam%20Sujan%2C%20MP%20Honorable%20Minister.jpg',
          title: 'মন্ত্রী',
          division: [
            { div : "রেলপথ মন্ত্রণালয় " },
          ],
          joindate: '০৭-০১-২০১৯',
          distdate: '০৭-০১-২০১৯',
        },
        {
          id: '24',
          name: 'স্থপতি ইয়াফেস ওসমান  ',
          url: 'https://cabinet.portal.gov.bd/sites/default/files/files/cabinet.portal.gov.bd/page/60b1fce3_e203_4126_8f18_d69554fc46cb/Architect%20Yeafesh%20Osman%2C%20Minister%20minister.jpg',
          title: 'মন্ত্রী',
          division: [
            { div : "বিজ্ঞান ও প্রযুক্তি মন্ত্রণালয় " },
          ],
          joindate: '০৭-০১-২০১৯',
          distdate: '০৭-০১-২০১৯',
        },
        {
          id: '25',
          name: 'জনাব মোস্তাফা জব্বার ',
          url: 'https://cabinet.portal.gov.bd/sites/default/files/files/cabinet.portal.gov.bd/page/60b1fce3_e203_4126_8f18_d69554fc46cb/Mustafa%20Jabbar%20Minster.jpg',
          title: 'মন্ত্রী',
          division: [
            { div : "ডাক ও টেলিযোগাযোগ বিভাগডাক মন্ত্রণালয়" },
          ],
          joindate: '০৭-০১-২০১৯',
          distdate: '০৭-০১-২০১৯',
        },
        {
          'id': "26",
          "url": "https://cabinet.portal.gov.bd/uploader/server/../../sites/default/files/files/cabinet.portal.gov.bd/page/30838484_7e00_4417_aa7e_4bf3a62224ed/Kamal%20Ahmed%20Mojumder.jpg",
          "name": "জনাব কামাল আহমেদ মজুমদার",
          "title": "প্রতিমন্ত্রী",
          "joindate": "০৭-০১-২০১৯",
          "division": [
            { div : "শিল্প মন্ত্রণালয়" },
          ],
          "distdate": "০৭-০১-২০১৯"
        },
        {
          "id": "27",
          "url": "https://cabinet.portal.gov.bd/uploader/server/../../sites/default/files/files/cabinet.portal.gov.bd/page/30838484_7e00_4417_aa7e_4bf3a62224ed/%E0%A6%87%E0%A6%AE%E0%A6%B0%E0%A6%BE%E0%A6%A8%20%E0%A6%86%E0%A6%B9%E0%A6%AE%E0%A6%A6%20%2C%20%E0%A6%8F%E0%A6%AE%E0%A6%AA%E0%A6%BF.jpg",
          "name": "জনাব ইমরান আহমদ",
          "title": "প্রতিমন্ত্রী",
          "joindate": "০৭-০১-২০১৯",
          "division": [
            { div : "প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান মন্ত্রণালয়" },
          ],
          "distdate": "০৭-০১-২০১৯"
        },
        {
          "id": "28",
          "url": "https://cabinet.portal.gov.bd/uploader/server/../../sites/default/files/files/cabinet.portal.gov.bd/page/30838484_7e00_4417_aa7e_4bf3a62224ed/Md.%20Zahid%20Ahsan%20Russel.jpg",
          "name": "জনাব মোঃ জাহিদ আহসান রাসেল",
          "title": "প্রতিমন্ত্রী",
          "joindate": "০৭-০১-২০১৯",
          "division": [
            { div : "যুব ও ক্রীড়া মন্ত্রণালয়" },
          ],
          "distdate": "০৭-০১-২০১৯"
        },
        {
          "id": "29",
          "url": "https://cabinet.portal.gov.bd/uploader/server/../../sites/default/files/files/cabinet.portal.gov.bd/page/30838484_7e00_4417_aa7e_4bf3a62224ed/Nasrul%20Hamid.jpg",
          "name": "জনাব নসরুল হামিদ",
          "title": "প্রতিমন্ত্রী",
          "joindate": "০৭-০১-২০১৯",          
          "division": [
            { div : "বিদ্যুৎ, জ্বালানি ও খনিজ সম্পদ মন্ত্রণালয়" },
          ],
          "distdate": "০৭-০১-২০১৯"
        },
        {
          "id": "30",
          "url": "https://cabinet.portal.gov.bd/uploader/server/../../sites/default/files/files/cabinet.portal.gov.bd/page/30838484_7e00_4417_aa7e_4bf3a62224ed/Md.%20Ashraf%20Ali%20Khan%20Khasru%2C%20MP.jpg",
          "name": "জনাব মোঃ আশরাফ আলী খান খসরু",
          "title": "প্রতিমন্ত্রী",
          "joindate": "০৭-০১-২০১৯",
          "division": [
            { div : "মৎস্য ও প্রাণিসম্পদ মন্ত্রণালয়" },
          ],
          "distdate": "০৭-০১-২০১৯"
        },
        {
          "id": "31",
          "url": "https://cabinet.portal.gov.bd/uploader/server/../../sites/default/files/files/cabinet.portal.gov.bd/page/30838484_7e00_4417_aa7e_4bf3a62224ed/monnujan_mp.png",
          "name": "বেগম মন্নুজান সুফিয়ান",
          "title": "প্রতিমন্ত্রী",
          "joindate": "০৭-০১-২০১৯",
          "division": [
            { div : "শ্রম ও কর্মসংস্থান মন্ত্রণালয়" },
          ],
          "distdate": "০৭-০১-২০১৯"
        },
        {
          "id": "32",
          "url": "https://cabinet.portal.gov.bd/uploader/server/../../sites/default/files/files/cabinet.portal.gov.bd/page/30838484_7e00_4417_aa7e_4bf3a62224ed/State%20Minister_Khalid%20Mahmud%20Chowdhury.png",
          "name": "জনাব খালিদ মাহ্‌মুদ চৌধুরী",
          "title": "প্রতিমন্ত্রী",
          "joindate": "০৭-০১-২০১৯",
          "division": [
            { div : "নৌ-পরিবহন মন্ত্রণালয়" },
          ],
          "distdate": "০৭-০১-২০১৯"
        },
        {
          "id": "33",
          "url": "https://cabinet.portal.gov.bd/uploader/server/../../sites/default/files/files/cabinet.portal.gov.bd/page/30838484_7e00_4417_aa7e_4bf3a62224ed/%E0%A6%AE%E0%A7%8B%E0%A6%83%20%E0%A6%9C%E0%A6%BE%E0%A6%95%E0%A6%BF%E0%A6%B0%20%E0%A6%B9%E0%A7%8B%E0%A6%B8%E0%A7%87%E0%A6%A8.jpg",
          "name": "জনাব মোঃ জাকির হোসেন",
          "title": "প্রতিমন্ত্রী",
          "joindate": "০৭-০১-২০১৯",
          "division": [
            { div : "প্রাথমিক ও গণশিক্ষা মন্ত্রণালয়" },
          ],
          "distdate": "০৭-০১-২০১৯"
        },
        {
          "id": "34",
          "url": "https://cabinet.portal.gov.bd/uploader/server/../../sites/default/files/files/cabinet.portal.gov.bd/page/30838484_7e00_4417_aa7e_4bf3a62224ed/Mr.%20Md.%20Shahriar%20Alam%2C%20MP.jpg",
          "name": "জনাব মোঃ শাহ্‌রিয়ার আলম",
          "title": "প্রতিমন্ত্রী",
          "joindate": "০৭-০১-২০১৯",
          "division": [
            { div : "পররাষ্ট্র মন্ত্রণালয়" },
          ],
          "distdate": "০৭-০১-২০১৯"
        },
        {
          "id": "35",
          "url": "https://cabinet.portal.gov.bd/uploader/server/../../sites/default/files/files/cabinet.portal.gov.bd/page/30838484_7e00_4417_aa7e_4bf3a62224ed/%E0%A6%9C%E0%A7%81%E0%A6%A8%E0%A6%BE%E0%A6%87%E0%A6%A6%20%E0%A6%86%E0%A6%B9%E0%A7%8D%E2%80%8C%E0%A6%AE%E0%A7%87%E0%A6%A6%20%E0%A6%AA%E0%A6%B2%E0%A6%95%20%E0%A6%8F%E0%A6%AE%E0%A6%AA%E0%A6%BF%E0%A6%AE%E0%A6%BE%E0%A6%A8%E0%A6%A8%E0%A7%80%E0%A7%9F%20%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%A4%E0%A6%BF%E0%A6%AE%E0%A6%A8%E0%A7%8D%E0%A6%A4%E0%A7%8D%E0%A6%B0%E0%A7%80.jpg",
          "name": "জনাব জুনা‌ইদ আহ্‌মেদ পলক",
          "title": "প্রতিমন্ত্রী",
          "joindate": "০৭-০১-২০১৯",
          "division": [
            { div : "তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ" },
            { div : "ডাক, টেলিযোগাযোগ ও তথ্যপ্রযুক্তি মন্ত্রণালয়" },
          ],
          "distdate": "১৯-০৫-২০১৯"
        },
        {
          "id": "36",
          "url": "https://cabinet.portal.gov.bd/uploader/server/../../sites/default/files/files/cabinet.portal.gov.bd/page/30838484_7e00_4417_aa7e_4bf3a62224ed/%E0%A6%B9%E0%A7%8B%E0%A6%B8%E0%A7%87%E0%A6%A8.png",
          "name": "জনাব ফরহাদ হোসেন",
          "title": "প্রতিমন্ত্রী",
          "joindate": "০৭-০১-২০১৯",
          "division": [
            { div : "জনপ্রশাসন মন্ত্রণালয়" },
          ],
          "distdate": "০৭-০১-২০১৯"
        },
        {
          "id": "37",
          "url": "https://cabinet.portal.gov.bd/uploader/server/../../sites/default/files/files/cabinet.portal.gov.bd/page/30838484_7e00_4417_aa7e_4bf3a62224ed/%E0%A6%B8%E0%A7%8D%E0%A6%AC%E0%A6%AA%E0%A6%A8%20%E0%A6%AD%E0%A6%9F%E0%A7%8D%E0%A6%9F%E0%A6%BE%E0%A6%9A%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%AF%E0%A7%8D%E0%A6%AF%2C%20%E0%A6%8F%E0%A6%AE%E0%A6%AA%E0%A6%BF.jpg",
          "name": "জনাব স্বপন ভট্টাচার্য",
          "title": "প্রতিমন্ত্রী",
          "joindate": "০৭-০১-২০১৯",
          "division": [
            { div : "পল্লী উন্নয়ন ও সমবায় বিভাগ" },
            { div : "স্থানীয় সরকার, পল্লী উন্নয়ন ও সমবায় মন্ত্রণালয়" },
          ],
          "distdate": "১৯-০৫-২০১৯"
        },
        {
          "id": "38",
          "url": "https://cabinet.portal.gov.bd/uploader/server/../../sites/default/files/files/cabinet.portal.gov.bd/page/30838484_7e00_4417_aa7e_4bf3a62224ed/%E0%A6%AB%E0%A6%BE%E0%A6%B0%E0%A7%81%E0%A6%95%2C%20%E0%A6%8F%E0%A6%AE%E0%A6%AA%E0%A6%BF.PNG",
          "name": "জনাব জাহিদ ফারুক",
          "title": "প্রতিমন্ত্রী",
          "joindate": "০৭-০১-২০১৯",
          "division": [
            { div : "পানি সম্পদ মন্ত্রণালয়" },
          ],
          "distdate": "০৭-০১-২০১৯"
        },
        {
          "id": "39",
          "url": "https://cabinet.portal.gov.bd/uploader/server/../../sites/default/files/files/cabinet.portal.gov.bd/page/30838484_7e00_4417_aa7e_4bf3a62224ed/%E0%A6%A1%E0%A6%BE%E0%A6%83%20%E0%A6%AE%E0%A7%8B%E0%A6%83%20%E0%A6%AE%E0%A7%81%E0%A6%B0%E0%A6%BE%E0%A6%A6%20%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BE%E0%A6%A8%2C%20%E0%A6%8F%E0%A6%AE%E0%A6%AA%E0%A6%BF.jpg",
          "name": "জনাব মোঃ মুরাদ হাসান",
          "title": "প্রতিমন্ত্রী",
          "joindate": "০৭-০১-২০১৯",
          "division": [
            { div : "তথ্য মন্ত্রণালয়" },
          ],
          "distdate": "১৯-০৫-২০১৯"
        },
        {
          "id": "40",
          "url": "https://cabinet.portal.gov.bd/uploader/server/../../sites/default/files/files/cabinet.portal.gov.bd/page/30838484_7e00_4417_aa7e_4bf3a62224ed/%E0%A6%86%E0%A6%B9%E0%A7%8D%E2%80%8C%E0%A6%AE%E0%A7%87%E0%A6%A6%20%281%29.jpg",
          "name": "জনাব শরীফ আহমেদ",
          "title": "প্রতিমন্ত্রী",
          "joindate": "০৭-০১-২০১৯",
          "division": [
            { div : "সমাজকল্যাণ মন্ত্রণালয়" },
          ],
          "distdate": "০৭-০১-২০১৯"
        },
        {
          "id": "41",
          "url": "https://cabinet.portal.gov.bd/uploader/server/../../sites/default/files/files/cabinet.portal.gov.bd/page/30838484_7e00_4417_aa7e_4bf3a62224ed/%E0%A6%95%E0%A7%87%20%E0%A6%8F%E0%A6%AE%20%E0%A6%96%E0%A6%BE%E0%A6%B2%E0%A6%BF%E0%A6%A6%2C%20%E0%A6%8F%E0%A6%AE%E0%A6%AA%E0%A6%BF.jpg",
          "name": "জনাব কে এম খালিদ",
          "title": "প্রতিমন্ত্রী",
          "joindate": "০৭-০১-২০১৯",
          "division": [
            { div : "সংস্কৃতি বিষয়ক মন্ত্রণালয়" },
          ],
          "distdate": "০৭-০১-২০১৯"
        },
        {
          "id": "42",
          "url": "https://cabinet.portal.gov.bd/uploader/server/../../sites/default/files/files/cabinet.portal.gov.bd/page/30838484_7e00_4417_aa7e_4bf3a62224ed/Dr.%20Md.%20Enamur%20Rahman%20MP%2C%20State%20Minister.jpg",
          "name": "ডাঃ মোঃ এনামুর রহমান",
          "title": "প্রতিমন্ত্রী",
          "joindate": "০৭-০১২০১৯",
          "division": [
            { div : "দুর্যোগ ব্যবস্থাপনা ও ত্রাণ মন্ত্রণালয়" },
          ],
          "distdate": "০৭-০১-২০১৯"
        },
        {
          "id": "43",
          "url": "https://cabinet.portal.gov.bd/uploader/server/../../sites/default/files/files/cabinet.portal.gov.bd/page/30838484_7e00_4417_aa7e_4bf3a62224ed/%E0%A6%AE%E0%A7%8B%E0%A6%83%20%E0%A6%AE%E0%A6%BE%E0%A6%B9%E0%A6%AC%E0%A7%81%E0%A6%AC%20%E0%A6%86%E0%A6%B2%E0%A7%80.jpg",
          "name": "জনাব মোঃ মাহবুব আলী",
          "title": "প্রতিমন্ত্রী",
          "joindate": "০৭-০১-২০১৯",
          "division": [
            { div : "বেসামরিক বিমান পরিবহন ও পর্যটন মন্ত্রণালয়" },
          ],
          "distdate": "০৭-০১-২০১৯"
        },
        {
          "id": "44",
          "url": "https://cabinet.portal.gov.bd/uploader/server/../../sites/default/files/files/cabinet.portal.gov.bd/page/30838484_7e00_4417_aa7e_4bf3a62224ed/%E0%A6%8F%E0%A6%A1%E0%A6%AD%E0%A7%8B%E0%A6%95%E0%A7%87%E0%A6%9F%20%E0%A6%B6%E0%A7%87%E0%A6%96%20%E0%A6%AE%E0%A7%8B%E0%A6%83%20%E0%A6%86%E0%A6%AC%E0%A7%8D%E0%A6%A6%E0%A7%81%E0%A6%B2%E0%A7%8D%E0%A6%B2%E0%A6%BE%E0%A6%B9.jpg",
          "name": "আলহাজ্ব এডভোকেট শেখ মোঃ আব্দুল্লাহ",
          "title": "প্রতিমন্ত্রী",
          "joindate": "০৭-০১-২০১৯",
          "division": [
            { div : "ধর্ম বিষয়ক মন্ত্রণালয়" },
          ],
          "distdate": "০৭-০১-২০১৯"
        },
        {
          id: '45',
          name: 'বেগম হাবিবুন নাহার',
          url: 'https://cabinet.portal.gov.bd/sites/default/files/files/cabinet.portal.gov.bd/page/1d2f07c8_ee3b_4fd3_adb8_560ebf200f6c/Habibun%20NaharDeputy%20MinisterMinistry%20of%20Environment%2C%20Forest%20and%20Climate%20Cha..jpg',
          title: 'উপ-মন্ত্রী',
          division: [
            { div : "পরিবেশ, বন ও জলবায়ু পরিবর্তন মন্ত্রণালয়" },
          ],
          joindate: '০৭-০১-২০১৯',
          distdate: '০৭-০১-২০১৯',
        },
        {
          id: '46',
          name: 'জনাব এ কে এম এনামুল হক শামীম ',
          url: 'https://cabinet.portal.gov.bd/sites/default/files/files/cabinet.portal.gov.bd/page/1d2f07c8_ee3b_4fd3_adb8_560ebf200f6c/AKM%20Enamul%20Haque%20Shameem.PNG',
          title: 'উপ-মন্ত্রী',
          division: [
            { div : "পানি সম্পদ মন্ত্রণালয়  " },
          ],
          joindate: '০৭-০১-২০১৯',
          distdate: '০৭-০১-২০১৯',
        },
        {
          id: '47',
          name: 'জনাব মহিবুল হাসান চৌধুরী ',
          url: 'https://cabinet.portal.gov.bd/sites/default/files/files/cabinet.portal.gov.bd/page/1d2f07c8_ee3b_4fd3_adb8_560ebf200f6c/Mohibul%20Hassan%20Chowdhoury.jpg',
          title: 'উপ-মন্ত্রী',
          division: [
            { div : "শিক্ষা মন্ত্রণালয়  " },
          ],
          joindate: '০৭-০১-২০১৯',
          distdate: '০৭-০১-২০১৯',
        },
      ]
    };
  },

  // App routes
  routes: routes,
});

// Init/Create views

var catalogView = app.views.create('#view-users', {
  url: '/users/'
});

var searchView = app.views.create('#search-user', {
  url: '/search/'
});

var settingsView = app.views.create('#view-settings', {
  url: '/settings/'
});