export type ProfileCode = {
  constructor: constructor;
  programmingLanguage: string[];
  mainLanguage: string[];
  tools: string[];
};

type constructor = {
  name: string;
  age: number;
  birthday: {
    year: number;
    month: number;
    date: number;
  };
  live: string;
  email: `${string}@${string}.${string}`;
};

const birthday = {
  year: 2002,
  month: 2,
  date: 6,
};

const getAge = () => {
  const now = new Date();
  const thisYear = new Date(
    now.getFullYear(),
    birthday.month - 1,
    birthday.date,
  );
  let age: number = now.getFullYear() - birthday.year;
  if (now < thisYear) age -= 1;

  return age;
};

export const ProfileData: ProfileCode = {
  constructor: {
    name: '岡崎 流依',
    age: getAge(),
    birthday,
    live: 'Kobe',
    email: 'okazaki200226@gmail.com',
  },
  programmingLanguage: [
    'HTML5',
    'Pug',
    'CSS',
    'SCSS',
    'JavaScript',
    'TypeScript',
    'jQuery',
    'ejs',
    'Vue.js',
    'Nuxt',
    'React',
    'Next',
    'Node.js',
    'Nest',
    'PHP',
    'Laravel',
    'Ruby',
    'Ruby on Rails',
    'Swift',
    'SwiftUI',
    'SQL',
    'GraphQL',
    'Python',
    'shell',
    'Docker',
    'Rust',
  ],
  mainLanguage: ['HTML5', 'SCSS', 'TypeScript', 'Next', 'Nest', 'Laravel'],
  tools: [
    'VisualStudioCode',
    'IntelliJ IDEA',
    'Figma',
    'Photoshop',
    'Illustrator',
    'AfterEffects',
    'Premiere',
    'XD',
    'InDesign',
  ],
};
