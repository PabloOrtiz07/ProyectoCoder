(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var d=this||self;function f(b,e){b=b.split(".");var a=d;b[0]in a||"undefined"==typeof a.execScript||a.execScript("var "+b[0]);for(var c;b.length&&(c=b.shift());)b.length||void 0===e?a[c]&&a[c]!==Object.prototype[c]?a=a[c]:a=a[c]={}:a[c]=e}
;var g={YEAR_FULL:"y",YEAR_FULL_WITH_ERA:"y G",YEAR_MONTH_ABBR:"MMM y",YEAR_MONTH_FULL:"MMMM y",YEAR_MONTH_SHORT:"MM/y",MONTH_DAY_ABBR:"MMM d",MONTH_DAY_FULL:"MMMM dd",MONTH_DAY_SHORT:"M/d",MONTH_DAY_MEDIUM:"MMMM d",MONTH_DAY_YEAR_MEDIUM:"MMM d, y",WEEKDAY_MONTH_DAY_MEDIUM:"EEE, MMM d",WEEKDAY_MONTH_DAY_YEAR_MEDIUM:"EEE, MMM d, y",DAY_ABBR:"d",MONTH_DAY_TIME_ZONE_SHORT:"MMM d, h:mm a zzzz"};
g={YEAR_FULL:"y",YEAR_FULL_WITH_ERA:"y G",YEAR_MONTH_ABBR:"MMM y",YEAR_MONTH_FULL:"MMMM 'de' y",YEAR_MONTH_SHORT:"M/y",MONTH_DAY_ABBR:"d MMM",MONTH_DAY_FULL:"dd 'de' MMMM",MONTH_DAY_SHORT:"d/M",MONTH_DAY_MEDIUM:"d 'de' MMMM",MONTH_DAY_YEAR_MEDIUM:"d MMM y",WEEKDAY_MONTH_DAY_MEDIUM:"EEE, d MMM",WEEKDAY_MONTH_DAY_YEAR_MEDIUM:"EEE, d MMM y",DAY_ABBR:"d",MONTH_DAY_TIME_ZONE_SHORT:"d MMM H:mm zzzz"};var h={ERAS:["BC","AD"],ERANAMES:["Before Christ","Anno Domini"],NARROWMONTHS:"JFMAMJJASOND".split(""),STANDALONENARROWMONTHS:"JFMAMJJASOND".split(""),MONTHS:"January February March April May June July August September October November December".split(" "),STANDALONEMONTHS:"January February March April May June July August September October November December".split(" "),SHORTMONTHS:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONESHORTMONTHS:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
WEEKDAYS:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),STANDALONEWEEKDAYS:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTWEEKDAYS:"Sun Mon Tue Wed Thu Fri Sat".split(" "),STANDALONESHORTWEEKDAYS:"Sun Mon Tue Wed Thu Fri Sat".split(" "),NARROWWEEKDAYS:"SMTWTFS".split(""),STANDALONENARROWWEEKDAYS:"SMTWTFS".split(""),SHORTQUARTERS:["Q1","Q2","Q3","Q4"],QUARTERS:["1st quarter","2nd quarter","3rd quarter","4th quarter"],AMPMS:["AM","PM"],DATEFORMATS:["EEEE, MMMM d, y",
"MMMM d, y","MMM d, y","M/d/yy"],TIMEFORMATS:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],DATETIMEFORMATS:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],FIRSTDAYOFWEEK:6,WEEKENDRANGE:[5,6],FIRSTWEEKCUTOFFDAY:5};
h={ERAS:["a. C.","d. C."],ERANAMES:["antes de Cristo","despu\u00e9s de Cristo"],NARROWMONTHS:"EFMAMJJASOND".split(""),STANDALONENARROWMONTHS:"EFMAMJJASOND".split(""),MONTHS:"enero febrero marzo abril mayo junio julio agosto septiembre octubre noviembre diciembre".split(" "),STANDALONEMONTHS:"enero febrero marzo abril mayo junio julio agosto septiembre octubre noviembre diciembre".split(" "),SHORTMONTHS:"ene feb mar abr may jun jul ago sept oct nov dic".split(" "),STANDALONESHORTMONTHS:"ene feb mar abr may jun jul ago sept oct nov dic".split(" "),
WEEKDAYS:"domingo lunes martes mi\u00e9rcoles jueves viernes s\u00e1bado".split(" "),STANDALONEWEEKDAYS:"domingo lunes martes mi\u00e9rcoles jueves viernes s\u00e1bado".split(" "),SHORTWEEKDAYS:"dom lun mar mi\u00e9 jue vie s\u00e1b".split(" "),STANDALONESHORTWEEKDAYS:"dom lun mar mi\u00e9 jue vie s\u00e1b".split(" "),NARROWWEEKDAYS:"DLMXJVS".split(""),STANDALONENARROWWEEKDAYS:"DLMXJVS".split(""),SHORTQUARTERS:["T1","T2","T3","T4"],QUARTERS:["1.er trimestre","2.\u00ba trimestre","3.er trimestre",
"4.\u00ba trimestre"],AMPMS:["a.\u00a0m.","p.\u00a0m."],DATEFORMATS:["EEEE, d 'de' MMMM 'de' y","d 'de' MMMM 'de' y","d MMM y","d/M/yy"],TIMEFORMATS:["H:mm:ss (zzzz)","H:mm:ss z","H:mm:ss","H:mm"],DATETIMEFORMATS:["{1}, {0}","{1}, {0}","{1} {0}","{1} {0}"],FIRSTDAYOFWEEK:0,WEEKENDRANGE:[5,6],FIRSTWEEKCUTOFFDAY:3};f("YT_I18N_FORMATTING_GOOG_LOCALE","es");f("YT_I18N_FORMATTING_DATE_TIME_PATTERNS",g);f("YT_I18N_FORMATTING_DATE_TIME_SYMBOLS",h);
f("YT_I18N_FORMATTING_RELATIVE_DATE_TIME_SYMBOLS",{DAY:{LONG:{R:{"-1":"ayer","-2":"anteayer",0:"hoy",1:"ma\u00f1ana",2:"pasado ma\u00f1ana"},P:"one{hace # d\u00eda}other{hace # d\u00edas}",F:"one{dentro de # d\u00eda}other{dentro de # d\u00edas}"}},HOUR:{LONG:{R:{0:"esta hora"},P:"one{hace # hora}other{hace # horas}",F:"one{dentro de # hora}other{dentro de # horas}"},SHORT:{R:{0:"esta hora"},P:"one{hace # h}other{hace # h}",F:"one{dentro de # h}other{dentro de # h}"}},MINUTE:{LONG:{R:{0:"este minuto"},
P:"one{hace # minuto}other{hace # minutos}",F:"one{dentro de # minuto}other{dentro de # minutos}"},SHORT:{R:{0:"este minuto"},P:"one{hace # min}other{hace # min}",F:"one{dentro de # min}other{dentro de # min}"}},MONTH:{LONG:{R:{"-1":"el mes pasado",0:"este mes",1:"el pr\u00f3ximo mes"},P:"one{hace # mes}other{hace # meses}",F:"one{dentro de # mes}other{dentro de # meses}"},SHORT:{R:{"-1":"el mes pasado",0:"este mes",1:"el pr\u00f3ximo mes"},P:"one{hace # m}other{hace # m}",F:"one{dentro de # m}other{dentro de # m}"}},
QUARTER:{LONG:{R:{"-1":"el trimestre pasado",0:"este trimestre",1:"el pr\u00f3ximo trimestre"},P:"one{hace # trimestre}other{hace # trimestres}",F:"one{dentro de # trimestre}other{dentro de # trimestres}"},SHORT:{R:{"-1":"el trimestre pasado",0:"este trimestre",1:"el pr\u00f3ximo trimestre"},P:"one{hace # trim.}other{hace # trim.}",F:"one{dentro de # trim.}other{dentro de # trim.}"}},SECOND:{LONG:{R:{0:"ahora"},P:"one{hace # segundo}other{hace # segundos}",F:"one{dentro de # segundo}other{dentro de # segundos}"},
SHORT:{R:{0:"ahora"},P:"one{hace # s}other{hace # s}",F:"one{dentro de # s}other{dentro de # s}"}},WEEK:{LONG:{R:{"-1":"la semana pasada",0:"esta semana",1:"la pr\u00f3xima semana"},P:"one{hace # semana}other{hace # semanas}",F:"one{dentro de # semana}other{dentro de # semanas}"},SHORT:{R:{"-1":"sem. ant.",0:"esta sem.",1:"pr\u00f3x. sem."},P:"one{hace # sem.}other{hace # sem.}",F:"one{dentro de # sem.}other{dentro de # sem.}"}},YEAR:{LONG:{R:{"-1":"el a\u00f1o pasado",0:"este a\u00f1o",1:"el pr\u00f3ximo a\u00f1o"},
P:"one{hace # a\u00f1o}other{hace # a\u00f1os}",F:"one{dentro de # a\u00f1o}other{dentro de # a\u00f1os}"},SHORT:{R:{"-1":"el a\u00f1o pasado",0:"este a\u00f1o",1:"el pr\u00f3ximo a\u00f1o"},P:"one{hace # a}other{hace # a}",F:"one{dentro de # a}other{dentro de # a}"}}});}).call(this);
