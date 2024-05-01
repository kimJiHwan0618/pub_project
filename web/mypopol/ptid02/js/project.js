$(function () {
  const projects = [
    {
      img: 'project01.jpg',
      title: 'Mypopol',
      subTitle: '포트폴리오 사이트 관리 시스템',
      date: '2023.05 ~ 2023.10.05',
      info: '내 포트폴리오 사이트를 관리할 수 있는 시스템',
      skill: 'React, Redux, NodeJS, Mysql',
      detail: `사용자 페이지 구현 
      백엔드 API 개발 
      DB 구조 설계
      배포 `,
    },
    {
      img: 'project01.jpg',
      title: 'Mypopol',
      subTitle: '포트폴리오 사이트 관리 시스템',
      date: '2023.05 ~ 2023.10.05',
      info: '내 포트폴리오 사이트를 관리할 수 있는 시스템',
      skill: 'React, Redux, NodeJS, Mysql',
      detail: `사용자 페이지sadsadsakdlsjad 구현 
      백엔드 API 개발 sadsa dsa  dsads adas dsad sad
      DB 구조 설계sda dsa dasd asjdhsaklj djasd sadas asdasdsadsadsadasdfds fnjlskdjf dklsjfklsdjfklsjd asd qwewqewqeqwe we wq
      sadkl sajkdxjsakldjsalkjd klasjdlksaj dklj`,
    },
    {
      img: 'project01.jpg',
      title: 'Mypopol',
      subTitle: '포트폴리오 사이트 관리 시스템',
      date: '2023.05 ~ 2023.10.05',
      info: '내 포트폴리오 사이트를 관리할 수 있는 시스템',
      skill: 'React, Redux, NodeJS, Mysql',
      detail: `사용자 페이지 구현 
      백엔드 API 개발 
      DB 구조 설계
      배포 `,
    },
    {
      img: 'project01.jpg',
      title: 'Mypopol',
      subTitle: '포트폴리오 사이트 관리 시스템',
      date: '2023.05 ~ 2023.10.05',
      info: '내 포트폴리오 사이트를 관리할 수 있는 시스템',
      skill: 'React, Redux, NodeJS, Mysql',
      detail: `사용자 페이지 구현 
      백엔드 API 개발 
      DB 구조 설계
      배포 `,
    },
  ];
  for (let project of projects) {
    console.log(project);
    $('.project .project-wrap').append(`
      <div class="project-item on">
        <div class="left">
          <span class="img">
            <img src="./img/${project.img}"/>
          </span>
          </div>
          <div class="right">
            <h4>${project.title}</h4>
            <p class="text">${project.subTitle}</p>
            <ul>
              <li>
                <dl>
                  <dt>프로젝트 기간</dt>
                  <dd>${project.date}</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>소개</dt>
                  <dd>${project.info}</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>주요기술</dt>
                  <dd>${project.skill}</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>상세업무</dt>
                  <dd>${project.detail.replace(/\n/g, '<br>')}</dd>
                </dl>
              </li>
            </ul>
        </div>
      </div>
    `);
  }
});
