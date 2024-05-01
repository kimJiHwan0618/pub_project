$(function () {
  const aboutme = {
    title: '안녕하세요 4년차 웹개발자 김지환입니다.',
    text: `안녕하세요? 
 웹툰작가 ΟΟΟ입니다.`,
  };
  $('.about-me-box .text').text(aboutme.title);
  $('.about-me-box .txt').html(aboutme.text.replace(/\n/g, '<br>'));
});
