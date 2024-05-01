$(function () {
  const profile = {
    name: 'KIM JI HWAN',
    introduction: 'Frontend Developer',
    profileImg: 'profile.jpg',
  };
  $('.main-section h3').text(profile.name);
  $('.main-section h4').text(profile.introduction);
  $('.img__box img').attr('src', `./img/${profile.profileImg}`);
});
