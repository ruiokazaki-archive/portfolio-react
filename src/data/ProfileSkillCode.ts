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

export const ProfileData: ProfileCode = {
  constructor: {
    name: 'string',
    age: 1,
    birthday: {
      year: 2002,
      month: 2,
      date: 6,
    },
    live: 'Kobe',
    email: 'okazaki200226@gmail.com',
  },
  programmingLanguage: [
    'HTML5',
    'CSS',
    'JavaScript',
    'PHP',
    'MySQL',
    'Pug',
    'SCSS',
    'Vue.js',
    'React',
    'jQuery',
    'TypeScript',
    'ejs',
    'Python',
    'Swift',
  ],
  mainLanguage: [
    'HTML5',
    'CSS',
    'JavaScript',
    'TypeScript',
    'SCSS',
    'Vue.js',
    'React',
    'Swift',
  ],
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
