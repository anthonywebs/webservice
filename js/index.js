'use strict';

const renderBanner = async () => {
  await initBanner(0);

  // "Anthony Web Services"
  moveCaret('js-type-01');
  await elapseTime(500);
  getEl('js-header').scrollIntoView();
  await elapseTime(1500);
  await typeText('js-type-01', `Anthony's`, 70);
  await elapseTime(300);
  getEl('js-space-01').classList.remove('hidden');
  getEl('js-next-01').classList.remove('hidden');
  await typeText('js-type-02', `Web`, 100);
  getEl('js-space-02').classList.remove('hidden');
  if (isMobile())getEl('js-next-02').classList.remove('hidden'); 
  await typeText('js-type-03', `Services`, 40);
  blinkCaret(true);
  getEl('js-main-img-1').classList.add('bw-opacity-trans');
  await elapseTime(2000);

  // repace to "Consulting"
  await selectText('js-type-03', 50);
  await elapseTime(1000);
  getEl('js-type-03').innerHTML = '';
  moveCaret('js-type-03');
  blinkCaret(false);
  await elapseTime(100);
  getEl('js-type-03').classList.add('text-subhead');
  await typeText('js-type-03', 'Consulting', 30);
  blinkCaret(true);
  await elapseTime(1500);
   
  // init
  await initBanner(0);
  
  // line height change to support icon size
  if (!isMobile()) getEl('js-banner-wr').style.lineHeight = 2;
  
  // "Make it affortable"
  moveCaret('js-type-01');
  // await elapseTime(1000);
  await typeText('js-type-01', "Make", 50);
  getEl('js-space-01').classList.remove('hidden');
  await typeText('js-type-02', "it", 100);
  getEl('js-space-02').classList.remove('hidden');
  if (isMobile())getEl('js-next-02').classList.remove('hidden'); 
  await typeText('js-type-03', "affordable", 20);
  await elapseTime(1000);

  // highlight "affordable"
  await selectText('js-type-03', 50);
  await elapseTime(1000);
  getEl('js-type-03').innerHTML = '';
  moveCaret('js-type-03');
  blinkCaret(false);


  // switch
  hideCaret();
  getEl('js-type-03').style.color = '#a2a2a2';
  getEl('js-type-03').innerHTML = 'unique';
  moveSwitch('js-next-02');
  await expandSwitch(3);
  await elapseTime(500);
  await turnOnSwitch(20);
  getEl('js-type-03').classList.add('font-color-transition');
  getEl('js-main-img-2').classList.add('col-opacity-trans');
  blinkCaret();

  // clear switch
  await elapseTime(2000);
  getEl('js-type-03').innerHTML = '';
  getEl('js-switch-wr').remove();
  moveCaret('js-type-03');

  // volume
  hideCaret();
  getEl('js-type-03').classList.remove('font-color-transition');
  getEl('js-type-03').innerHTML = 'spread';
  getEl('js-type-03').style.color = '#fff';
  moveVolume('js-next-02');
  await startVolume('js-type-03', 500);
  blinkCaret();
  await elapseTime(2000);

  // reset volume
  getEl('js-volume-wr').remove(); // remove speaker
  getEl('js-type-03').classList.remove('vol-color-high', 'vol-color-low', 'vol-color-off');
  await initBanner(30);

  getEl('js-main-img-3').classList.add('full-opacity-trans');
  await elapseTime(1500);

  // special edit settomg for last text
  getEl('js-banner-wr').style.textAlign = 'center'; // list one is centered
  if (isMobile()) {
    getEl('js-banner-wr').style.marginLeft = 0;
    getEl('js-banner-wr').style.lineHeight = 0.4;
    getEl('js-type-02').style.lineHeight = 2.1;
  }

  // last "make it yours"
  if (isMobile()) getEl('js-banner-wr').style.paddingLeft = 0;
  getEl('js-type-01').style.color = '#fff';
  getEl('js-type-02').style.color = '#fff';
  getEl('js-type-03').style.color = '#fff';
  moveCaret('js-type-01');
  await typeText('js-type-01', "Make", 50);
  getEl('js-space-01').classList.remove('hidden');
  if (isMobile())getEl('js-next-01').classList.remove('hidden'); 
  await typeText('js-type-02', "it", 100);
  getEl('js-space-02').classList.remove('hidden');
  if (isMobile())getEl('js-next-02').classList.remove('hidden'); 
  await typeText('js-type-03', "yours", 40);
  await elapseTime(1500);

  // replace "it" with global
  hideCaret();
  getEl('js-type-02').innerHTML = `<div class='image-wr globe-wr fi-short'><img  id='js-globe' class='globe-size' src='./icon/globe-white-solid.svg'></div>`;
  await elapseTime(1000);

  // getEl('js-link').classList.add('opacity-trans');
  getEl('js-link').style.opacity = 1;
  getEl('js-link-details').classList.add('flashing');

}

const gotoHome = () => {
  window.location.href = './index.html';
}

const startEventListener = () => {
  startContactListener(); // start listener
}

const main = async () => {
  await loadEnv();
  startEventListener();
  if (loc !== conv(cn)) bd.innerHTML = '';

  if (!isMobile()) {
    getEl('js-main-img-1').src = './img/banner-bw.jpg';
    getEl('js-main-img-2').src = './img/banner-col.jpg';
    getEl('js-main-img-3').src = './img/banner-full.jpg';
  }
  await loadFont();
  // document.addEventListener('DOMContentLoaded', () => {
  // window.addEventListener('load', () => {
  //   console.log("AK: SCROLL");
  //   document.getElementById('js-header').scrollIntoView();
  // });
  // console.log('AK: font loaded');

  renderBanner();


}

main();