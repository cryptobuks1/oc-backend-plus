/* 
 * Plugin:  TimePicki
 * Version: 2.0 (2016-01-28)
 * Website: http://senthilraj.github.io/TimePicki
 */
!function(i){i.fn.timepicki=function(t){var e={format_output:function(i,t,e){return n.show_meridian?i+":"+t+" "+e:i+":"+t},increase_direction:"down",custom_classes:"",min_hour_value:1,max_hour_value:12,show_meridian:!0,step_size_hours:"1",step_size_minutes:"1",overflow_minutes:!1,disable_keyboard_mobile:!1,reset:!1,on_change:null},n=i.extend({},e,t);return this.each(function(){function t(t){return i.contains(m[0],t[0])||m.is(t)}function e(i,t){var e=f.find(".ti_tx input").val(),a=f.find(".mi_tx input").val(),r="";n.show_meridian&&(r=f.find(".mer_tx input").val()),0===e.length||0===a.length||n.show_meridian&&0===r.length||(l.attr("data-timepicki-tim",e),l.attr("data-timepicki-mini",a),n.show_meridian?(l.attr("data-timepicki-meri",r),l.val(n.format_output(e,a,r))):l.val(n.format_output(e,a))),null!==n.on_change&&n.on_change(l[0]),t&&s()}function a(){r(n.start_time),f.fadeIn();var t=f.find("input:visible").first();t.focus();var e=function(n){if(9===n.which&&n.shiftKey){t.off("keydown",e);var a=i(":input:visible:not(.timepicki-input)"),s=a.index(l),r=a.get(s-1);r.focus()}};t.on("keydown",e)}function s(){f.fadeOut()}function r(i){var t,e,a,s;l.is("[data-timepicki-tim]")?(e=Number(l.attr("data-timepicki-tim")),a=Number(l.attr("data-timepicki-mini")),n.show_meridian&&(s=l.attr("data-timepicki-meri"))):"object"==typeof i?(e=Number(i[0]),a=Number(i[1]),n.show_meridian&&(s=i[2])):(t=new Date,e=t.getHours(),a=t.getMinutes(),s="AM",e>12&&n.show_meridian&&(e-=12,s="PM")),10>e?f.find(".ti_tx input").val("0"+e):f.find(".ti_tx input").val(e),10>a?f.find(".mi_tx input").val("0"+a):f.find(".mi_tx input").val(a),n.show_meridian&&(10>s?f.find(".mer_tx input").val("0"+s):f.find(".mer_tx input").val(s))}function o(i,t){var e="time",a=Number(f.find("."+e+" .ti_tx input").val()),s=Number(n.min_hour_value),r=Number(n.max_hour_value),o=Number(n.step_size_hours);if(i&&i.hasClass("action-next")||"next"===t)if(a+o>r){var d=s;d=10>d?"0"+d:String(d),f.find("."+e+" .ti_tx input").val(d)}else a+=o,10>a&&(a="0"+a),f.find("."+e+" .ti_tx input").val(a);else if(i&&i.hasClass("action-prev")||"prev"===t){var u=Number(n.min_hour_value);if(u>a-o){var l=r;l=10>l?"0"+l:String(l),f.find("."+e+" .ti_tx input").val(l)}else a-=o,10>a&&(a="0"+a),f.find("."+e+" .ti_tx input").val(a)}}function d(i,t){var e="mins",a=Number(f.find("."+e+" .mi_tx input").val()),s=59,r=Number(n.step_size_minutes);i&&i.hasClass("action-next")||"next"===t?a+r>s?(f.find("."+e+" .mi_tx input").val("00"),n.overflow_minutes&&o(null,"next")):(a+=r,10>a?f.find("."+e+" .mi_tx input").val("0"+a):f.find("."+e+" .mi_tx input").val(a)):(i&&i.hasClass("action-prev")||"prev"===t)&&(-1>=a-r?(f.find("."+e+" .mi_tx input").val(s+1-r),n.overflow_minutes&&o(null,"prev")):(a-=r,10>a?f.find("."+e+" .mi_tx input").val("0"+a):f.find("."+e+" .mi_tx input").val(a)))}function u(i,t){var e="meridian",n=null;n=f.find("."+e+" .mer_tx input").val(),i&&i.hasClass("action-next")||"next"===t?"AM"==n?f.find("."+e+" .mer_tx input").val("PM"):f.find("."+e+" .mer_tx input").val("AM"):(i&&i.hasClass("action-prev")||"prev"===t)&&("AM"==n?f.find("."+e+" .mer_tx input").val("PM"):f.find("."+e+" .mer_tx input").val("AM"))}var l=i(this),c=l.outerHeight();c+=10,i(l).wrap("<div class='time_pick'>");var m=i(this).parents(".time_pick"),v="down"===n.increase_direction?"<div class='prev action-prev'></div>":"<div class='prev action-next'></div>",p="down"===n.increase_direction?"<div class='next action-next'></div>":"<div class='next action-prev'></div>",_=i("<div class='timepicker_wrap "+n.custom_classes+"'><div class='arrow_top'></div><div class='time'>"+v+"<div class='ti_tx'><input type='text' class='timepicki-input'"+(n.disable_keyboard_mobile?"readonly":"")+"></div>"+p+"</div><div class='mins'>"+v+"<div class='mi_tx'><input type='text' class='timepicki-input'"+(n.disable_keyboard_mobile?"readonly":"")+"></div>"+p+"</div>");n.show_meridian&&_.append("<div class='meridian'>"+v+"<div class='mer_tx'><input type='text' class='timepicki-input' readonly></div>"+p+"</div>"),n.reset&&_.append("<div><a href='#' class='reset_time'>Reset</a></div>"),m.append(_);var f=i(this).next(".timepicker_wrap"),h=(f.find("div"),m.find("input"));i(".reset_time").on("click",function(i){l.val(""),s()}),i(".timepicki-input").keydown(function(t){var e=i(this).val().length;-1!==i.inArray(t.keyCode,[46,8,9,27,13,110,190])||65==t.keyCode&&t.ctrlKey===!0||t.keyCode>=35&&t.keyCode<=39||((t.shiftKey||t.keyCode<48||t.keyCode>57)&&(t.keyCode<96||t.keyCode>105)||2==e)&&t.preventDefault()}),i(document).on("click",function(n){if(!i(n.target).is(f)&&"block"==f.css("display")&&!i(n.target).is(i(".reset_time")))if(i(n.target).is(l)){var s=0;f.css({top:c+"px",left:s+"px"}),a()}else e(n,!t(i(n.target)))}),l.on("focus",a),h.on("focus",function(){var t=i(this);t.is(l)||t.select()}),h.on("keydown",function(t){var e,a=i(this);38===t.which?e="down"===n.increase_direction?"prev":"next":40===t.which&&(e="down"===n.increase_direction?"next":"prev"),a.closest(".timepicker_wrap .time").length?o(null,e):a.closest(".timepicker_wrap .mins").length?d(null,e):a.closest(".timepicker_wrap .meridian").length&&n.show_meridian&&u(null,e)}),h.on("blur",function(){setTimeout(function(){var n=i(document.activeElement);n.is(":input")&&!t(n)&&(e(),s())},0)});var x=f.find(".action-next"),k=f.find(".action-prev");i(k).add(x).on("click",function(){var t=i(this);"time"==t.parent().attr("class")?o(t):"mins"==t.parent().attr("class")?d(t):n.show_meridian&&u(t)})})}}(jQuery);

/* 
 * Call the plugin
 */
$(function() {
    var element;
    $('.field-timepicki').each(function() {
        element = $('input', this);
        element.timepicki({
            increase_direction: "'" + element.attr('data-increase-direction') + "'",
            custom_classes: element.attr('data-custom-classes'),
            min_hour_value: element.attr('data-min-hour-value'),
            max_hour_value: element.attr('data-max-hour-value'),
            show_meridian: element.attr('data-show-meridian'),
            step_size_hours: element.attr('data-step-size-hours'),
            step_size_minutes: element.attr('data-step-size-minutes'),
            overflow_minutes: element.attr('data-overflow-minutes'),
            disable_keyboard_mobile: element.attr('data-disable-keyboard-mobile'),
            reset: element.attr('data-reset')
        });
    });
});
