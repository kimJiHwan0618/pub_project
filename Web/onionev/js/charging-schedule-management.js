window.addEventListener('load',function(){
    let minute1 = document.getElementById('minute1')
    let hours1 = document.getElementById('hours1')
    let hours2 = document.getElementById('hours2')
    let minute2 = document.getElementById('minute2')
    // 충전 스케쥴 관리 시간, 분 value
    hours1.innerHTML = ' <option value="00">00</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option>'
    minute1.innerHTML = '<option value="00">00</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option>'
    hours2.innerHTML = ' <option value="00">00</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option>'
    minute2.innerHTML = '<option value="00">00</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option>'
    // 임시 스테이션 갯수
    let stationLength = 90
    let stationCheckBox = document.querySelector('.station-check-box')
    // 스테이션 UI 테스트
   for(i=0;i<stationLength;i++){
       $('.station .station-check-box').append(
           '<div class="check-box">' +
             '<input type="hidden">' +
             '<input type="checkbox" class="station-check">' +
             '<input type="hidden">' +
             '<p class="station-num">' +(i+1)+ '</p>' +
           '</div>'
       )
   }
    // 일괄수정버튼   
    $('.batch-btn-wrap .batch-setting-btn').click(function(){
        $('.charging-schedule-popup').addClass('on')
        $('.modal-bg').addClass('on')
        $('.station-box').css('display','block')
        $('.popup-title').html('충전 스케줄 일괄 설정')
    })
    // 수정버튼
    $('.modify-release-btn .modify-btn').click(function(){
        $('.charging-schedule-popup').addClass('on')
        $('.modal-bg').addClass('on')
        $('.station-box').css('display','none')
        $('.popup-title').html('충전 스케줄 수정')
    })
    // 스테이션 50개 이상일시 스크롤
    if(stationLength > 50){
        $('.charging-schedule-popup .station-check-box').css('overflow-y','scroll')
    }else{
        $('.charging-schedule-popup .station-check-box').css('overflow-y','hidden')
    }
    // 팝업 일괄선택
    $('.batch-setting-list .batch-setting-btn').click(function(){
        for(i=0;i<stationLength;i++){
            stationCheckBox.children[i].children[0].checked = true
        }
    })
    // 팝업 일괄해제
    $('.batch-setting-list .batch-release-btn').click(function(){
        for(i=0;i<stationLength;i++){
            stationCheckBox.children[i].children[0].checked = false
        }
    })
})