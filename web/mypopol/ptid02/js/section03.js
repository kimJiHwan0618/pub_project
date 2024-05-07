$(function () {
  const skills = {
    'Front-End': ['HTML', 'Css', 'Javascript'],
    'Back-End': ['Spring Boot', 'MySQL'],
    Etc: ['Git', 'Svn', 'Docker'],
  };
  const [key, value] = Object.entries(skills)[0];
  $('.about-skill-box .big-img img').attr(
    'src',
    `https://site.mypopol.com/ptid02/src/img/skills/${value[0].toLowerCase()}.svg`
  );
  $('.about-skill-box .left .top .text dt').text(value[0]);
  for (let skill of skills[key]) {
    $('.about-skill-box .left .bottom').append(`
      <span>
      ${skill}
        <img src="https://site.mypopol.com/ptid02/src/img/skills/${skill.toLowerCase()}.svg" alt="${skill} 이미지"/>
      </span>
    `);
  }
  $('.about-skill-box .left .bottom span').eq(0).addClass('on');
  // left
  for (let category in skills) {
    $('.about-skill-box .right').append(`
    <div>${category}</div>
    `);
    $('.about-skill-box .right div').eq(0).addClass('on');
  }

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
});
