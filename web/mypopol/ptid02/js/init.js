const setMainColor = (mainColor) => {
  const rgbaTxt = mainColor.replace('rgb', 'rgba').replace(')', '');
  document.documentElement.style.setProperty('--main-color', mainColor);
  document.documentElement.style.setProperty('--main-color_08', rgbaTxt + ', .8)');
  document.documentElement.style.setProperty('--main-color_06', rgbaTxt + ', .6)');
  document.documentElement.style.setProperty('--main-color_04', rgbaTxt + ', .4)');
  document.documentElement.style.setProperty('--main-color_02', rgbaTxt + ', .2)');
  document.documentElement.style.setProperty('--main-color_01', rgbaTxt + ', .1)');
  document.documentElement.style.setProperty('--main-color_005', rgbaTxt + ', .05)');
};
// setMainColor
const profileInit = (profile) => {
  const etc = JSON.parse(profile.sns);
  $('.main-section h3').text(profile.fakeName);
  $('.main-section h4').text(etc.job);
  const img = profile.profileImg
    ? `./img/${profile.profileImg}`
    : 'https://site.mypopol.com/src/img/profile.jpg';
  $('.img__box img').attr('src', img);
};
// profileInit
const projectInit = (projects, userId) => {
  if (projects.length === 0) {
    $('.project-wrap').append(`
    <span class='f__medium noinfo__notice'>
      <p>프로젝트 정보를 입력해주세요.</p><br />
      <a href="https://admin.mypopol.com" target="_blank">https://admin.mypopol.com</a>
    </span>`);
  }
  for (let project of projects) {
    const etc = JSON.parse(project.etc);
    $('.project .project-wrap').append(`
      <div class="project-item">
        <div class="left">
          <span class="img">
          ${
            project.poster
              ? `<img src='https://site.mypopol.com/ptid02/${userId}/img/${project.src}/${project.poster}'/>`
              : `<img src='https://site.mypopol.com/src/img/no_img.jpg'/>`
          }
          </span>
          </div>
          <div class="right">
            <h4>${project.title}</h4>
            <p class="text">${project.subTitle}</p>
            <ul>
              <li>
                <dl>
                  <dt>프로젝트 기간</dt>
                  <dd>${etc.date}</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>소개</dt>
                  <dd>${project.summary}</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>주요기술</dt>
                  <dd>${etc.skill}</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>상세업무</dt>
                  <dd>${etc.detail.replace(/\n/g, '<br>')}</dd>
                </dl>
              </li>
            </ul>
        </div>
      </div>
    `);
  }
  let scrollY = 0;
  let projectIdx = 0;
  const sectionArray = $('section');
  const projectArray = $('.project-item');
  $('.gnb li p').click(function () {
    const idx = $(this).parent().index();
    if (scrollY < idx) {
      $('html').animate({ scrollTop: sectionArray[idx].offsetTop - 20 }, 10);
    } else {
      $('html').animate({ scrollTop: sectionArray[idx].offsetTop - 50 }, 10);
    }
  });
  $('.mobile-nav li p').click(function () {
    const idx = $(this).parent().index();
    if (scrollY < idx) {
      $('html').animate({ scrollTop: sectionArray[idx].offsetTop - 20 }, 10);
    } else {
      $('html').animate({ scrollTop: sectionArray[idx].offsetTop - 50 }, 10);
    }
    $('header').removeClass('on');
    $('.mobileMenutBar').removeClass('on');
    $('.modal-bg').removeClass('on');
  });

  let lastScrollY = 0;
  $(document).scroll(function () {
    const lScrollY = $(document).scrollTop();
    const direction = lScrollY > lastScrollY ? 'Scroll Down' : 'Scroll Up';
    lastScrollY = lScrollY;
    if (direction === 'Scroll Down') {
      for (let i = 0; i < sectionArray.length; i++) {
        if (sectionArray[i].offsetTop - 20 < $(document).scrollTop()) {
          if (scrollY < i) {
            scrollY = i;
            activeSection(i);
          }
        } else {
          if ($(document).scrollTop() === 0) {
            scrollY = 0;
            activeSection(0);
          }
          if (scrollY > i) {
            scrollY = i;
            activeSection(i);
          }
        }
      }
      for (let i = 0; i < projectArray.length; i++) {
        if (projectArray[i].offsetTop - 500 < $(document).scrollTop()) {
          if (projectIdx <= i) {
            projectIdx = i;
            $('.project-item').eq(i).addClass('on');
          }
        }
      }
    } else if (direction === 'Scroll Up') {
      for (let i = 0; i < sectionArray.length; i++) {
        if (sectionArray[i].offsetTop + $(sectionArray[i]).height() / 2 < $(document).scrollTop()) {
          if (scrollY < i) {
            scrollY = i;
            activeSection(i);
          }
        } else {
          if ($(document).scrollTop() === 0) {
            scrollY = 0;
            activeSection(0);
          }
          if (scrollY > i) {
            scrollY = i;
            activeSection(i);
          }
        }
      }
      for (let i = 0; i < projectArray.length; i++) {
        if (projectArray[i].offsetTop + 350 < $(document).scrollTop()) {
          if (projectIdx < i) {
            projectIdx = i;
            $('.project-item')
              .eq(i + 1)
              .removeClass('on');
            $('.project-item').eq(i).addClass('on');
          }
        } else {
          if (projectIdx > i) {
            projectIdx = i;
            $('.project-item')
              .eq(i + 1)
              .removeClass('on');
          }
        }
      }
    }
  });
  const activeSection = (idx) => {
    if (idx === 2) $('.project-item').eq(0).removeClass('on');
    $('.gnb li').removeClass('active');
    $('.gnb li').eq(idx).addClass('active');
    $('.mobile-nav li').removeClass('active');
    $('.mobile-nav li').eq(idx).addClass('active');
  };
};
// projectInit
const skillInit = (popolInfo) => {
  const etc = JSON.parse(popolInfo.sns);
  const skills = etc.skills;
  const categorySkillsInit = (key) => {
    $('.about-skill-box .big-img img').attr(
      'src',
      `https://site.mypopol.com/ptid02/src/img/skills/${skills[key][0]?.toLowerCase()}.svg`
    );
    $('.about-skill-box .left .top .text dt').text(skills[key][0]);
    for (let skill of skills[key]) {
      $('.about-skill-box .left .bottom').append(`
      <span>
      ${skill}
        <img src="https://site.mypopol.com/ptid02/src/img/skills/${skill.toLowerCase()}.svg" alt="${skill} 이미지"/>
      </span>
    `);
    }
    $('.about-skill-box .left .bottom span').eq(0).addClass('on');
    $('.about-skill-box .left .bottom span').click(function () {
      const skill = $(this).text().trim();
      $('.about-skill-box .big-img img').attr(
        'src',
        `https://site.mypopol.com/ptid02/src/img/skills/${skill.toLowerCase()}.svg`
      );
      $('.about-skill-box .left .top .text dt').text(skill);
      $('.about-skill-box .left .bottom span').removeClass('on');
      $(this).addClass('on');
    });
  };
  $('.about-skill-box .left .bottom span').eq(0).addClass('on');
  // left
  for (let category in skills) {
    $('.about-skill-box .right').append(`
    <div>${category}</div>
    `);
    $('.about-skill-box .right div').eq(0).addClass('on');
  }

  $('.about-skill-box .right div').click(function () {
    $('.about-skill-box .left .bottom').children().remove();
    $('.about-skill-box .right div').removeClass('on');
    $(this).addClass('on');
    categorySkillsInit($(this).text());
  });
  if (Object.entries(skills)?.[0]) {
    categorySkillsInit(Object.entries(skills)[0][0]);
  } else {
    $('.about-skill-box').children().remove();
    $('.about-skill-box').append(`
    <span class='noinfo__notice f__medium'>
      <p>스킬 정보를 입력해주세요.</p><br />
      <a href="https://admin.mypopol.com" target="_blank">https://admin.mypopol.com</a>
    </span>`);
  }
};
// skillInit
const aboutmeInit = (popolInfo) => {
  const etc = JSON.parse(popolInfo.sns);
  $('.about-me-box .text').text(popolInfo.title);
  $('.about-me-box .txt').html(etc.aboutMe.replace(/\n/g, '<br>'));
};
// aboutmeInit
const snsInit = (popolInfo) => {
  const etc = JSON.parse(popolInfo.sns);
  const sns = etc.sns;
  for (let key in sns) {
    $('.sns-wrap').append(`
      <li>
        <a target="_blank" href="${sns[key].link}">
          <img src="https://site.mypopol.com/src/img/icon/${popolInfo.icon}/${key}.png"/>
        </a>
      </li>
    `);
    $('.m-sns-box').append(`
      <a target="_blank" href="${sns[key].link}">
        <img src="https://site.mypopol.com/src/img/icon/${popolInfo.icon}/${key}.png"/>
      </a>
    `);
  }
};
// snsInit
const contactInit = (popolInfo) => {
  $('.contact__info dl:nth-of-type(1) dd').html(`&nbsp;${popolInfo.phone}`);
  $('.contact__info dl:nth-of-type(2) dd').html(`&nbsp;${popolInfo.email}`);
  $('.submit-btn').click(function (e) {
    const v1 = $('#mail__title').val();
    const v2 = $('#mail__email').val();
    const v3 = $('#mail__phone').val();
    const v4 = $('#mail__message').val();
    if (v1 === '') {
      alert('제목을 입력해주세요.');
      msgCardActive();
      return;
    }
    if (v2 === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v2)) {
      alert('이메일을 확인해주세요.');
      msgCardActive();
      return;
    }
    if (v3 === '' || !/^[0-9]{9,11}$/i.test(v3)) {
      alert('휴대폰 번호를 입력해주세요.');
      msgCardActive();
      return;
    }
    if (v4 === '') {
      alert('메세지를 입력해주세요');
      msgCardActive();
      return;
    }
    $('.loadingWrap.email').removeClass('open');
    const param = {
      phone: v3,
      userId,
      ptId,
      pw: 'WlGhks010!@#',
      from: v2,
      to: popolInfo.email,
      subject: `${'문의'}`,
      title: v1,
      content: v4,
      html: `
        <div style="margin: 16px 0 0 0; padding: 12px 12px 60px 12px;box-sizing: border-box;">
          <div style="padding: 34px; box-sizing: border-box;background: #fff;border-radius: 12px;box-shadow: 0 0.75rem 2rem 0 rgba(0, 0, 0, 0.1);">
            <h1 style="margin: 0;padding: 0; color: #414141;">'${userId}'님의 사이트로부터 문의 메일이 도착했습니다.</h1>
            <p style="color: #999; margin: 8px 0 34px 0; padding: 0;">메일 내용은 아래와 같습니다.</p>
            <ul style="list-style: none;margin: 0 0 38px 0;padding: 0 0 18px 0; border-bottom: 1px solid rgb(231, 231, 231);">
              <li style="margin-bottom: 12px;">
                <dl style="display: flex;align-items: flex-start;">
                  <dt style="min-width: 60px;opacity: .6; white-space: nowrap;">제목&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;</dt>
                  <dd style="margin: 0;padding: 0; font-weight: 600; opacity: .7">[${'문의'}] ${v1}</dd>
                </dl>  
              </li>
              <li style="margin-bottom: 12px;">
                <dl style="display: flex;align-items: flex-start;">
                  <dt style="min-width: 60px;opacity: .6; white-space: nowrap;">이메일&nbsp;&nbsp;:&nbsp;&nbsp;</dt>
                  <dd style="margin: 0;padding: 0; font-weight: 600; opacity: .7;">${v2}</dd>
                </dl>  
              </li>
              <li>
                <dl style="display: flex;align-items: flex-start;">
                  <dt style="min-width: 60px;opacity: .6; white-space: nowrap;">연락처&nbsp;&nbsp;:&nbsp;&nbsp;</dt>
                  <dd style="margin: 0;padding: 0; font-weight: 600; opacity: .7;">${v3}</dd>
                </dl>  
              </li>
            </ul>
            <p style="margin-top:30px;">${v4}</p>
          </div>
        </div>
        `,
    };
    try {
      fetch('https://kimjihodo.synology.me:3001/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(param),
      })
        .then((response) => response.text())
        .then((text) => {
          $('#mail__title').val();
          $('#mail__email').val();
          $('#mail__phone').val();
          $('#mail__message').val();
          alert('메일 전송되었습니다!');
          $('.loadingWrap.email').addClass('open');
        })
        .catch((error) => {
          console.log(error);
          alert('메일 전송이 실패했습니다.');
          $('.loadingWrap.email').addClass('open');
        });
    } catch (error) {
      console.log(error);
      alert('메일 전송이 실패했습니다.');
      $('.loadingWrap.email').addClass('open');
    }
  });
};
// snsInit
