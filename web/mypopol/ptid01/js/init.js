let completedImgCnt = 0;
let userEmail = '';
const loadingImg = (total) => {
  completedImgCnt = completedImgCnt + 1;
  if (completedImgCnt === total) {
    $('.loadingWrap.pencil')[0].classList.add('open');
  }
};

const pageSetting = (res, siteNameArr) => {
  const popolInfo = res.response.popolInfo;
  const worksInfo = res.response.worksInfo;
  const snsJson = popolInfo.sns !== '' && popolInfo.sns !== null ? JSON.parse(popolInfo.sns) : {};
  const snsKeys = Object.keys(snsJson);
  const snsValues = Object.values(snsJson);
  let webtoonSize = 0;
  let gallerySize = 0;
  userEmail = res.response.popolInfo.email;

  // head set
  let meta1 = document.createElement('meta');
  let meta2 = document.createElement('meta');
  let meta3 = document.createElement('meta');
  let meta4 = document.createElement('meta');
  meta1.setAttribute('name', 'author');
  meta1.setAttribute('content', `${popolInfo.fakeName}`);
  meta2.setAttribute('property', 'og:title');
  meta2.setAttribute('content', `${popolInfo.title}`);
  meta3.setAttribute('property', 'og:image');
  const thumbnailImg =
    popolInfo.thumbnail === '' || popolInfo.thumbnail === null
      ? 'https://site.mypopol.com/src/img/favicon/ms-icon-310x310.png'
      : `./img/${popolInfo.thumbnail}`;
  meta3.setAttribute('content', `${thumbnailImg}`);
  meta4.setAttribute('property', 'site_name');
  meta4.setAttribute('content', `${popolInfo.popolName}`);
  document.head.appendChild(meta1);
  document.head.appendChild(meta2);
  document.head.appendChild(meta3);
  document.head.appendChild(meta4);
  document.title = popolInfo.popolName;
  // // head set

  const initWorks = (callback) => {
    let completedCount = 0;
    const totalWorks = worksInfo.length;

    // function checkCompletion() {
    //   completedCount++;
    //   if (completedCount === totalWorks) {
    //     $('nav>ul').append(`
    //     <li>
    //       <span class="icon"></span>
    //       <span>
    //         <p class="f__tb">그 외 작업물</p>
    //       </span>
    //     </li>
    //     `);
    //   }
    // }

    if (snsKeys.length > 0) {
      snsKeys.map((obj, idx) => {
        $('#userInfoList').append(`
            <li>
              <a href="${snsValues[idx].link}" target="_blank">
                <dl>
                  <dt>
                    <img src="https://site.mypopol.com/src/img/icon/${popolInfo.icon}/${obj}.png" alt="${obj}" />  
                  </dt>  
                  <dd class="f__tb">${snsValues[idx].id}</dd>
                </dl>  
              </a>
            </li>
          `);
      });
    }

    if (worksInfo.length > 0) {
      for (let i = 0; i < worksInfo.length; i++) {
        if (worksInfo[i].workId === 1) {
          webtoonSize += 1;
          const siteArray = [];
          const etcJson = JSON.parse(worksInfo[i].etc);
          etcJson.website.map((obj, idx) => {
            if (siteNameArr.includes(obj.name)) {
              siteArray.push(`
                        <li class="${obj.name}">
                          <a href="${obj.link}" target="_blank">
                            <img src="https://site.mypopol.com/src/img/icon/${obj.name}.png" />
                          </a>
                        </li>
                      `);
            } else {
              siteArray.push(`
                        <li style="padding: 4px; background: none;box-shadow : 0 10px 20px -6px rgb(211, 211, 211)">
                          <a href="${obj.link}" target="_blank">
                            <img src="./img//${obj.img}" />
                          </a>
                        </li>
                      `);
            }
          });

          let titleEl = '';
          if (worksInfo[i].logo === 'none') {
            titleEl = `<h3 class="f__tb">${worksInfo[i].title}</h3>`;
          } else {
            titleEl = `<img  src="./img/${worksInfo[i].src}/${worksInfo[i].logo}" alt="${worksInfo[i].title} 로고" />`;
          }

          const newEl = `
        <section>
          <div class="inner">
            <img onload="loadingImg(${worksInfo.length})" src="./img/${worksInfo[i].src}/${
            worksInfo[i].poster
          }" alt="${worksInfo[i].title} 포스터" />
            <dl>
              <dt>
                ${titleEl}
                <ul>
                  <li class="f__tb">${worksInfo[i].subTitle}</li>
                  <li class="f__yun">
                    ${worksInfo[i].summary.replace(/\n/g, '<br>')}
                  </li>
                </ul>
              </dt>
              <dd>
                <ul>${siteArray.join('').replace(/\n|\s{2,}/g, '')}</ul>
              </dd>
            </dl>
          </div>
        </section>
        `;
          const parentEl = $('#main>.inner');
          const nthChild = parentEl.children().eq(0 + i);
          nthChild.after(newEl);
          $('nav>ul').append(`
        <li>
          <span class="icon"></span>
          <span>
            <p class="f__tb">${worksInfo[i].title}</p>
          </span>
        </li>
        `);
          // checkCompletion();
        }
      }
    } else {
      $('.loadingWrap.pencil')[0].classList.add('open');
    }
    callback();
  };

  const initDetail = () => {
    const marginBottonHeight = (webtoonSize + gallerySize) * 140;
    const viewHeight = (2 + webtoonSize + gallerySize) * 100;
    $('main>.inner').css({ height: `calc(${viewHeight}vh + ${90 + marginBottonHeight}px)` });
    $('#titleTxt').html(popolInfo.title.replace(/\n/g, '<br>'));
    $('#userInfoList .phone dd').text(popolInfo.phone);
    $('#userInfoList .email dd').text(popolInfo.email);
    $('#phoneIcon').attr(
      'src',
      `https://site.mypopol.com/src/img/icon/${popolInfo.icon}/phone.png`
    );
    $('#emailIcon').attr('src', `https://site.mypopol.com/src/img/icon/${popolInfo.icon}/mail.png`);
    if (popolInfo.profileImg !== null && popolInfo.profileImg !== '') {
      $('#profileImg').attr(
        'src',
        `https://site.mypopol.com/${ptId}/${userId}/img/` + popolInfo.profileImg
      );
    } else {
      $('#profileImg').attr('src', 'https://site.mypopol.com/src/img/profile.jpg');
    }
    $('#main.scroll').smoothWheel();
  };

  initWorks(initDetail);

  const rgbaTxt = popolInfo.mainColor.replace('rgb', 'rgba').replace(')', '');
  document.documentElement.style.setProperty('--main-color', popolInfo.mainColor);
  document.documentElement.style.setProperty('--main-color_08', rgbaTxt + ', .8)');
  document.documentElement.style.setProperty('--main-color_06', rgbaTxt + ', .6)');
  document.documentElement.style.setProperty('--main-color_04', rgbaTxt + ', .4)');
  document.documentElement.style.setProperty('--main-color_02', rgbaTxt + ', .2)');
  pageInit();
};

let countFlag = true;
const get_site = () => {
  fetch('https://kimjihodo.synology.me:3001/site/popol', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userId,
      ptId,
      countFlag,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      fetch('./siteList.json')
        .then((res2) => res2.json())
        .then((siteList) => {
          const siteNameArr = siteList.map((item) => item.name);
          pageSetting(res, siteNameArr);
        })
        .catch((error) => {
          console.error('데이터를 가져오는 중 오류가 발생했습니다.', error);
        });
    })
    .catch((e) => {
      console.log(e);
    });
};

const currentDate = new Date();
const userSite = window.location.href;
const y = String(currentDate.getFullYear());
const m = String(currentDate.getMonth() + 1).padStart(2, '0');
const d = String(currentDate.getDate()).padStart(2, '0');
const h = String(currentDate.getHours()).padStart(2, '0');
const user_visited_key = y + m + d + h;
const site = window.location.href;

if (localStorage.getItem(`mypopol_visited_${site}`)) {
  if (user_visited_key !== localStorage.getItem(`mypopol_visited_${site}`)) {
    localStorage.setItem(`mypopol_visited_${site}`, user_visited_key);
    get_site();
  } else {
    countFlag = false;
    get_site();
  }
} else {
  localStorage.setItem(`mypopol_visited_${site}`, user_visited_key);
  get_site();
}
