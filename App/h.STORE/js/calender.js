$(function () {
    let btnIndex = $('.term_btn_wrap a.on').index()
    $('.term_btn_wrap a').click(function(){
        if(btnIndex == $(this).index()){
            $(this).removeClass('active')
            return false;
        } 
    })
    
    var leadingZeros = function (data, num) {
    var zero = '';
    data = data.toString();
   
    if (data.length < num) {
     for (i = 0; i < num - data.length; i++)
      zero += '0';
    }
    return zero + data;
}

let today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;
let date = today.getDate();
let lastDate = new Date(Date.parse(today) - 1 * 1000 * 60 * 60 * 24);
let lastDateYear = lastDate.getFullYear();
let lastDateMonth = lastDate.getMonth() + 1;
let lastDateDate = lastDate.getDate();
let lastWeek = new Date(Date.parse(today) - 7 * 1000 * 60 * 60 * 24);
let lastWeekYear = lastWeek.getFullYear();
let lastWeekMonth = lastWeek.getMonth() + 1;
let lastWeekDate = lastWeek.getDate();
let lastMonth = new Date(Date.parse(today) - 30 * 1000 * 60 * 60 * 24);
let lastMonthYear = lastMonth.getFullYear();
let lastMonthMonth = lastMonth.getMonth() + 1;
let lastMonthDate = lastMonth.getDate();

$("#testDatepicker1").val(leadingZeros(month,2) + '/' + leadingZeros(date,2) + '/' + year)
$("#testDatepicker2").val(leadingZeros(month,2) + '/' + leadingZeros(date,2) + '/' + year)
    $(".term_wrap .term_btn a").click(function () {
        $(".term_wrap .term_btn a").removeClass("on");
        $(this).addClass("on");
        // Last da
        if ($(this).index() == 0) {
            $("#testDatepicker1").val(leadingZeros(month,2) + '/' + leadingZeros(date,2) + '/' + year);
            $("#testDatepicker2").val(leadingZeros(month,2) + '/' + leadingZeros(date,2) + '/' + year);
            console.log('Today 조회')
            // Last week
        }else if ($(this).index() == 1) {
            $("#testDatepicker1").val(leadingZeros(lastDateMonth,2) + '/' + leadingZeros(lastDateDate,2) + '/' + lastDateYear);
            $("#testDatepicker2").val(leadingZeros(month,2) + '/' + leadingZeros(date,2) + '/' + year);
            // Last week
        } else if ($(this).index() == 2) {
            $("#testDatepicker1").val(leadingZeros(lastWeekMonth,2) + '/' + leadingZeros(lastWeekDate,2) + '/' + lastWeekYear);
            $("#testDatepicker2").val(leadingZeros(month,2) + '/' + leadingZeros(date,2) + '/' + year);
            // Last month
        } else if ($(this).index() == 3) {
            $("#testDatepicker1").val(leadingZeros(lastMonthMonth,2) + '/' + leadingZeros(lastMonthDate,2) + '/' + lastMonthYear);            
            $("#testDatepicker2").val(leadingZeros(month,2) + '/' + leadingZeros(date,2) + '/' + year);
            console.log('Last month 조회')
        }

    })
    //  Term 선택
    $(".term_wrap input").focus(function () {
        $(".dark_bg").addClass("on");
    })
    //  Term 선택
    let prevVal = ''

    $('#testDatepicker1').focus(function(){
        prevVal = $(this).val()
    }).change(function () {
        $('.dark_bg').removeClass("on");

        let calenderArray1 = $('#testDatepicker1').val().split('/');
        let calenderArray2 = $('#testDatepicker2').val().split('/');
        let dateLater = new Date(calenderArray1[2],calenderArray1[0]-1,calenderArray1[1])
        let dateAfter = new Date(calenderArray2[2],calenderArray2[0]-1,calenderArray2[1])
        if($(this).val() == prevVal){
            return false;
        }
        if(dateLater.getTime() > dateAfter.getTime()){
            alert('이후날짜보다 이전날짜가 더 큽니다!')
            $(this).val(prevVal);
            return false;
        }
    })

    let prevVal2 = ''
    
    $("#testDatepicker2").focus(function(){
        prevVal2 = $(this).val()
    }).change(function () {
        $('.dark_bg').removeClass("on");

        let calenderArray1 = $('#testDatepicker1').val().split('/');
        let calenderArray2 = $('#testDatepicker2').val().split('/');
        let dateLater = new Date(calenderArray1[2],calenderArray1[0]-1,calenderArray1[1])
        let dateAfter = new Date(calenderArray2[2],calenderArray2[0]-1,calenderArray2[1])
        if($(this).val() == prevVal2){
            return false;
        }
        if(dateLater.getTime() > dateAfter.getTime()){
            alert('이후날짜보다 이전날짜가 더 큽니다!')
            $(this).val(prevVal2);
            return false;
        }
    })
    // 달력박스 색깔 변경

    var lastSixMonth = new Date(); 
    lastSixMonth.setMonth(lastSixMonth.getMonth() -6)

    $("#testDatepicker1, #testDatepicker2").datepicker(
        {showOn: "both", buttonImageOnly: true, maxDate : new Date(), minDate : new Date(lastSixMonth) }
    );
    
    $(".dark_bg").click(function () {
        $('#testDatepicker1').removeClass("on");
        $('#testDatepicker2').removeClass("on");
        $(this).removeClass("on");
    })
    console.log($('#testDatepicker1').val())
    console.log($('#testDatepicker2').val())

})