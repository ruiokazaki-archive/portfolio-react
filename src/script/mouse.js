class Cursor {
  constructor() {
    const el = `
    <div class="cursor">
      <div class="pointer"></div>
      <div class="stoker"></div>
    </div>`;
    document.body.insertAdjacentHTML('beforeend', el);
    this.wrap_el = document.querySelector('.cursor');
    this.pointer_el = document.querySelector('.pointer');
    this.stoker_el = document.querySelector('.stoker');

    this.position = {
      mouseX: 0,
      mouseY: 0,
      currentX: 0,
      currentY: 0,
    };

    this.eventStatus = {
      click: false,
      hover: false,
    };
  }

  init() {
    this.attachEvent();
    this.tween();
  }
  attachEvent() {
    // マウスが動いた時
    document.addEventListener('mousemove', (e) => {
      this.position.mouseX = e.clientX;
      this.position.mouseY = e.clientY;
      this.wrap_el.classList.add('is-move');
    });

    // マウスが画面外に行った時
    document.body.addEventListener('mouseleave', () => {
      this.wrap_el.classList.add('is-outside');
    });
    document.body.addEventListener('mouseenter', () => {
      this.wrap_el.classList.remove('is-outside');
    });

    // クリックした時
    document.addEventListener('mousedown', () => {
      this.eventStatus.click = true;
    });
    document.addEventListener('mouseup', () => {
      this.eventStatus.click = false;
    });

    // observer作成
    const observer = new MutationObserver(() => {
      // 全てのaタグにイベントを付けている
      let link = document.querySelectorAll('a');
      for (const target of link) {
        target.addEventListener('mouseenter', () => {
          this.eventStatus.hover = true;
          this.wrap_el.classList.add('is-hover');
        });
        target.addEventListener('mouseleave', () => {
          this.eventStatus.hover = false;
          this.wrap_el.classList.remove('is-hover');
        });
      }
      // button
      let btns = document.querySelectorAll('button');
      for (const target of btns) {
        target.addEventListener('mouseenter', () => {
          this.eventStatus.hover = true;
          this.wrap_el.classList.add('is-hover');
        });
        target.addEventListener('mouseleave', () => {
          this.eventStatus.hover = false;
          this.wrap_el.classList.remove('is-hover');
        });
      }
      // list
      let li = document.querySelectorAll('li');
      for (const target of li) {
        target.addEventListener('mouseenter', () => {
          this.eventStatus.hover = true;
          this.wrap_el.classList.add('is-hover');
        });
        target.addEventListener('mouseleave', () => {
          this.eventStatus.hover = false;
          this.wrap_el.classList.remove('is-hover');
        });
      }
      // work
      let works = document.querySelectorAll('.work');
      for (const target of works) {
        target.addEventListener('mouseenter', () => {
          this.eventStatus.hover = true;
          this.wrap_el.classList.add('is-hover');
        });
        target.addEventListener('mouseleave', () => {
          this.eventStatus.hover = false;
          this.wrap_el.classList.remove('is-hover');
        });
      }
      // input
      let input = document.querySelectorAll('input');
      for (const target of input) {
        target.addEventListener('mouseenter', () => {
          this.eventStatus.hover = true;
          this.wrap_el.classList.add('is-hover');
        });
        target.addEventListener('mouseleave', () => {
          this.eventStatus.hover = false;
          this.wrap_el.classList.remove('is-hover');
        });
      }
      // textarea
      let textarea = document.querySelectorAll('textarea');
      for (const target of textarea) {
        target.addEventListener('mouseenter', () => {
          this.eventStatus.hover = true;
          this.wrap_el.classList.add('is-hover');
        });
        target.addEventListener('mouseleave', () => {
          this.eventStatus.hover = false;
          this.wrap_el.classList.remove('is-hover');
        });
      }
    });

    // observer開始
    const body = document.body;
    observer.observe(body, {
      childList: true,
    });
  }

  tween() {
    TweenMax.to({}, 0.001, {
      repeat: -1,
      onRepeat: () => {
        this.position.currentX +=
          (this.position.mouseX - this.position.currentX) * 0.5;
        this.position.currentY +=
          (this.position.mouseY - this.position.currentY) * 0.5;

        // pointerの設定
        TweenMax.set(this.pointer_el, {
          css: {
            x: this.position.currentX - this.pointer_el.clientWidth / 2,
            y: this.position.currentY - this.pointer_el.clientHeight / 2,
          },
        });
        // stokerの設定
        // 0.3s掛けて向かう
        TweenMax.to(this.stoker_el, 0.2, {
          css: {
            x: this.position.currentX - this.stoker_el.clientWidth / 2,
            y: this.position.currentY - this.stoker_el.clientHeight / 2,
            scale: this.scale(this.eventStatus),
          },
        });
      },
    });
  }

  scale(v) {
    if (v.hover == true && v.click == false) {
      return 1.5;
    } else if (v.hover == false && v.click == true) {
      return 0.7;
    } else if (v.hover == true && v.click == true) {
      return 0.7;
    } else {
      return 1;
    }
  }
}

export const cursor = new Cursor();
