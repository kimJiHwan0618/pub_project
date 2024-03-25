$(function(){
    // 로딩후 첫번째 스테이션 block 처리
    let stationIndex = 0
    $('.all-station-wrap .station').eq(stationIndex).addClass('on')
    $('.station-box-wrap-inner .station').eq(stationIndex).addClass('select')
    $('.all-station-wrap .station .item').eq(0).addClass('select')
    // info-tab-box 클릭
    $('.tab-title h6').click(function(){
        $('.tab-title h6').removeClass('on')
        $(this).addClass('on')
        if($(this).index() == 0){
            $('.adapter-info-box').removeClass('on')
            $('.battery-info-box').addClass('on')
        }else{
            $('.battery-info-box').removeClass('on')
            $('.adapter-info-box').addClass('on')
        }
    })
    // 상단 스테이션 박스 클릭
    $('.station-box-wrap-inner .station').click(function(){
        stationIndex = $(this).index()
        
        $('.station-box-wrap-inner .station').removeClass('select')
        $(this).addClass('select')
        $('.all-station-wrap .station').removeClass('on')
        $('.all-station-wrap .station').eq(stationIndex).addClass('on')
        $('.all-station-wrap .station .item').removeClass('select')
        $('.all-station-wrap .station').eq(stationIndex).children('.item').eq(0).addClass('select')
    })
    // arrow-left 클릭
    $('.all-station-wrap .arrow-left').click(function(){
        stationIndex --;
        
        $('.all-station-wrap .station').removeClass('on')
        $('.all-station-wrap .station').eq(stationIndex).addClass('on')
        $('.station-box-wrap-inner .station').removeClass('select')
        $('.station-box-wrap-inner .station').eq(stationIndex).addClass('select')
        $('.all-station-wrap .station .item').removeClass('select')
        $('.all-station-wrap .station').eq(stationIndex).children('.item').eq(0).addClass('select')
        if(stationIndex == -1){
            stationIndex = $('.all-station-wrap .station').last().index();
            $('.all-station-wrap .station').removeClass('on')
            $('.all-station-wrap .station').eq($('.all-station-wrap .station').last().index()).addClass('on')
            $('.station-box-wrap-inner .station').removeClass('select')
            $('.station-box-wrap-inner .station').eq($('.station-box-wrap-inner .station').last().index()).addClass('select')
        }
    })
    // arrow-right 클릭
    $('.all-station-wrap .arrow-right').click(function(){
        stationIndex ++;
        
        $('.all-station-wrap .station').removeClass('on')
        $('.all-station-wrap .station').eq(stationIndex).addClass('on')
        $('.station-box-wrap-inner .station').removeClass('select')
        $('.station-box-wrap-inner .station').eq(stationIndex).addClass('select')
        $('.all-station-wrap .station .item').removeClass('select')
        $('.all-station-wrap .station').eq(stationIndex).children('.item').eq(0).addClass('select')
        if(stationIndex == $('.all-station-wrap .station').last().index()+1){
            stationIndex = 0
            $('.all-station-wrap .station').removeClass('on')
            $('.all-station-wrap .station').eq(0).addClass('on')
            $('.station-box-wrap-inner .station').removeClass('select')
            $('.station-box-wrap-inner .station').eq(0).addClass('select')
        }
    })
    // station item 클릭
    $('.all-station-wrap .station .item').click(function(){
        $('.all-station-wrap .station .item').removeClass('select')
        $(this).addClass('select')
    })
})