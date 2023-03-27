$(document).ready(function() {  
    let Notify = 0;
    console.log('^3BCS-notify^0 by B O S C H#4014')
    window.addEventListener('message' , function(event) {
        var data = event.data
        
        if(data.action == 'ShowNotify') {
            var CustomId = ++Notify;
            var secs = Math.floor(((data.timeout - 200)/1000) % 60) + 's';

            if (data.type == 'success') {
                var info = '<i class="fa-solid fa-circle-check info"></i>'
            } else if (data.type == 'error') {
                var info = '<i class="fa-solid fa-circle-exclamation info"></i>'
            } else {
                var info = '<i class="fa-solid fa-circle-info info"></i>'
            }

            $('.container').show();
            $('.container').append(`
                <div class="notify" id="noti-${CustomId}">
                    ${info}
                    <div class="content" id="content-${CustomId}">${data.text}</div>
                    <div class="bar" id="bar-${CustomId}"></div>
                </div>
            `)
            
            $(`#noti-${CustomId}`).fadeIn(500);
            setTimeout(function(){
                $(`#noti-${CustomId}`).css('transition', 'ease .5s')
            }, 501)
            $(`#bar-${CustomId}`).css({'animation' : `progressbar ${secs} ease`});

            setTimeout(function(){
                fadeNotify(CustomId)
                setTimeout(function(){
                    $(`#noti-${CustomId}`).empty();
                }, 500)
            }, data.timeout)

            // @functions

            function fadeNotify(notify) {
                $(`#noti-${notify}`).css("opacity", "0");
                $(`#noti-${notify}`).css("scale", "0");
                $(`#noti-${notify}`).css("width", "0");
                $(`#noti-${notify}`).css("margin", "0");
                $(`#content-${notify}`).css("font-size", "0");
                $(`#content-${notify}`).css("height", "0");
                $(`#bar-${notify}`).css("height", "0");
                $(`#content-${notify}`).css("margin", "0");
            }
        }; 
    });
});