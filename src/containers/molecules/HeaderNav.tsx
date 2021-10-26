import { VFC } from 'react';
import HeaderNav from '../../components/molecules/HeaderNav';

const EnhancedHeaderNav: VFC = () => {
  // page jamp
  const scrollToSection = (id: string): void => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  // page scroll
  window.addEventListener('load', () => {
    const sectionNames: string[] = [];
    const sectionHeights: number[] = [];
    const sectionList = document.querySelectorAll('#root > div');

    // 各sectionごとのidを配列に格納
    sectionList.forEach((el) => {
      sectionNames.push(el.id);
    });

    // 各sectionごとの高さを配列に格納
    for (let i = 0; i < sectionNames.length; i += 1) {
      let total = 0;
      for (let j = 0; j < i; j += 1) {
        const jElement = document.getElementById(sectionNames[j]);
        if (jElement === null) break;
        total += jElement.offsetHeight;
      }
      const iElement = document.getElementById(sectionNames[i]);
      if (iElement === null) break;
      sectionHeights.push(total + iElement.offsetHeight);
    }

    // classを付け替えて色を変更している
    const changeColors = () => {
      const user: number = window.pageYOffset;
      const lists = document.querySelectorAll('li');
      lists.forEach((el) => {
        el.classList.remove('selectList');
      });
      if (user < sectionHeights[0]) {
        lists[0].classList.add('selectList');
      } else if (user < sectionHeights[1]) {
        lists[1].classList.add('selectList');
      } else if (user < sectionHeights[2]) {
        lists[2].classList.add('selectList');
      } else if (user < sectionHeights[3]) {
        lists[3].classList.add('selectList');
      } else if (user < sectionHeights[4]) {
        lists[4].classList.add('selectList');
      }
    };

    const scrollAction = () => {
      changeColors();
    };
    window.addEventListener('scroll', scrollAction);
  });

  return <HeaderNav scrollToSection={scrollToSection} />;
};

export default EnhancedHeaderNav;
