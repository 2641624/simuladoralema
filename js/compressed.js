var liq1=0,liq2=0;function updateQuali(e,a){var d=Array("Exigência Mínima","Fundamental Completo","Médio Completo","Médio Técnico","Graduação Completa","Especialização","Mestrado","Doutorado"),u=Array(0,1,2,3,4,5,6,7),l=Array(),r=Array(),t=e.ddQuali.value,a=parseFloat(a);for(a<=11?(l=d,r=u):17==a?(l=d.slice(2,d.length),r=u.slice(2,d.length),l.splice(0,1,"Exigência Mínima"),r.splice(0,1,0)):31==a&&(l=d.slice(4,d.length),r=u.slice(4,d.length),l.splice(0,1,"Exigência Mínima"),r.splice(0,1,0));e.ddQuali.options.length;)e.ddQuali.options[0]=null;for(i=0;i<l.length;i++)option=new Option(l[i],r[i]),e.ddQuali.options[e.ddQuali.length]=option;r.includes(parseInt(t,10))&&(e.ddQuali.value=t),calcSalario(e)}function calcfatorpg(e,a){Array();return(a?Array(0,.1,.15,.2,.25,.3,.52,.75):Array(0,0,0,.1,.15,.2,.35,.5))[e]}function firstload(){updateQuali(myform,1),updateQuali(myform2,1)}function validateGD1(e,a){var d=e||window.event,e=d.keyCode||d.which,e=String.fromCharCode(e);/[0-9]|\./.test(e)||(d.returnValue=!1,d.preventDefault&&d.preventDefault())}function validateGD2(e){var a=99<(a=e.gastoTrans.value)?a.toString().substring(0,a.length-1):parseInt(a,10);e.gastoTrans.value=a,calcSalario(e)}function formatValor(e){return"R$ "+e.toFixed(2).replace(".",",")}function valorIRRF(e,a){var d=0,d=1==a?e<1710.79?0:e<2563.92?.075*e-128.31:e<3418.6?.15*e-320.6:e<4271.59?.225*e-577:.275*e-790.58:a<=4?e<=1787.77?0:e<=2679.29?.075*e-134.08:e<=3572.43?.15*e-335.03:e<=4463.81?.225*e-602.96:.275*e-826.15:a<16?e<=1903.98?0:e<=2826.65?.075*e-142.8:e<=3751.05?.15*e-354.8:e<=4664.68?.225*e-636.13:.275*e-869.36:a<17?e<=2112?0:e<=2826.65?.075*e-158.4:e<=3751.05?.15*e-370.4:e<=4664.68?.225*e-651.73:.275*e-884.96:e<=2259.2?0:e<=2826.65?.075*e-169.44:e<=3751.05?.15*e-381.44:e<=4664.68?.225*e-662.77:.275*e-896;return Math.floor(100*d)/100}function calcPSS(e,a,d){var u=0,u=e<12?.11*a:12==e?a<=1045?.075*a:a<=2089.6?.09*a-15.68:a<=3134.4?.12*a-78.36:a<=6101.06?.14*a-141.05:a<=10448?.145*a-171.56:a<=20896.2?.165*a-380.52:a<=40474.2?.19*a-902.92:.22*a-2117.14:13==e?a<=1100?.075*a:a<=2203.48?.09*a-16.5:a<=3305.22?.12*a-82.6:a<=6433.57?.14*a-148.7:a<=11017.42?.145*a-180.87:a<=22034.83?.165*a-401.22:a<=42967.92?.19*a-952.09:.22*a-2241.13:14==e?a<=1212?.075*a:a<=2427.35?.09*a-18.18:a<=3641.04?.12*a-91:a<=7087.23?.14*a-163.82:a<=12136.8?.145*a-199.26:a<=24273.58?.165*a-441.99:a<=47333.46?.19*a-1048.83:.22*a-2468:e<16?a<=1302?.075*a:a<=2571.29?.09*a-19.53:a<=3856.94?.12*a-96.67:a<=7507.49?.14*a-173.81:a<=12856.5?.145*a-211.35:a<=25712.99?.165*a-468.48:a<=50140.33?.19*a-1111.3:.22*a-2615.51:e<17?a<=1320?.075*a:a<=2571.29?.09*a-19.8:a<=3856.94?.12*a-96.94:a<=7507.49?.14*a-174.08:a<=12856.5?.145*a-211.62:a<=25712.99?.165*a-468.75:a<=50140.33?.19*a-1111.57:.22*a-2615.78:a<=1412?.075*a:a<=2666.68?.09*a-21.18:a<=4000.03?.12*a-101.18:a<=7786.02?.14*a-181.18:a<=13333.48?.145*a-220.11:a<=26666.94?.165*a-486.78:a<=52000.54?.19*a-1153.46:.22*a-2713.47;return Math.floor(100*u)/100}function dependentesIR(e,a){var d=0,d=1==a?171.97*e:a<=4?179.71*e:189.59*e;return Math.floor(100*d)/100}function valorSaude(e,a,d){var u=Array();u[0]=Array(121.94,127.69,129.42,134.6,138.62,143.22,154.98,157.44,159.9,167.7),u[1]=Array(116.19,121.94,123.67,127.69,131.72,136.32,147.42,149.76,152.1,159.9),u[2]=Array(110.44,116.19,117.92,121.94,125.97,130.57,139.86,142.08,144.3,152.1),u[3]=Array(105.84,110.44,112.16,116.19,120.22,124.82,133.56,135.68,137.8,144.3),u[4]=Array(100.08,105.84,107.56,110.44,114.46,119.07,127.26,129.28,131.3,137.8),u[5]=Array(90.88,93.18,94.91,95.48,99.51,104.11,105.84,107.52,109.2,111.8),u[6]=Array(87.43,88.58,90.31,90.88,94.91,99.51,100.8,102.4,104,106.6),u[7]=Array(82.83,83.98,85.7,86.28,90.31,94.91,95.76,97.28,98.8,101.4);var l=0,l=e<1500?0:e<2e3?1:e<2500?2:e<3e3?3:e<4e3?4:e<5500?5:e<7500?6:7,e=1,e=6<=d&&d<18?1.22618:1.852267508;return 1e3==a?0:Math.round(u[l][a]*e*100)/100}function valorCreche(e,a,d,u){var l=95,l=a<18?321:485.9,r=0,r=a<9?e<6200.8?.05:e<12401.6?.1:e<18602.4?.15:e<24803.2?.2:.25:e<6888.05?.05:e<=13776.1?.1:e<=20664.15?.15:e<=27552.2?.2:.25;return u?l*(1-r)*d:l*d}function valorTransporte(e,a){var d;return gastodiario=isNaN(a)||a<0?0:.2*Math.ceil((a-1)/.2)+1,(d=22*gastodiario-.06*e*(22/30))<0?0:d}function valorFG(e,a){var d=Array(0,777.26,522.9,423.94,215.78,175.09,128.4,81.89,60.57,49.15),u=Array(0,790.75,531.99,431.3,219.54,187.14,130.63,83.31,61.61,50),l=Array(0,804.49,541.23,438.79,223.35,181.23,132.89,84.75,62.69,50.86),r=Array(0,848.74,571,462.92,235.63,191.2,140.2,89.41,66.14,53.66),t=Array(0,891.17,599.55,486.07,247.42,200.76,147.21,93.88,69.44,56.34),n=Array(0,933.5,628.03,509.16,259.17,210.29,154.2,98.34,72.74,59.02),c=Array(0,975.51,656.29,532.07,270.83,219.76,161.14,101.77,76.02,61.67),o=Array(0,1063.31,715.35,579.96,270.83,219.76,161.14,102.77,76.02,61.67),v=Array(0,1063.31*1.045,747.54075,579.96*1.045,270.83,219.76,161.14,102.77,76.02,61.67),s=Array(0,1161.1611027499996,781.18008375,633.3308189999999,270.83,219.76,161.14,102.77,76.02,61.67);return(1==a?d:a<=2?u:a<=6?l:7==a?r:8==a?t:9==a?n:a<16?c:a<19?o:a<20?v:s)[e]}function valorCD(e,a){var d=Array(0,9575.95,8004.9,9284.22,4563.53),u=Array(0,10315.37,8623.02,6769.47,4915.92),l=Array(0,11111.9,9288.86,7292.19,5295.51),r=Array(0,11723.05,9799.75,7693.26,5586.77),t=Array(0,12309.21,10289.74,8077.92,5866.1),n=Array(0,12893.89,10778.5,8461.62,6144.74),c=Array(0,13474.12,11263.53,8842.29,6421.26),o=Array(0,14686.79,12277.25,9638.21,6999.17),v=Array(0,15347.69555,12829.72625,9638.21*1.045,7314.13265),s=Array(0,15347.69555*1.045,12829.72625*1.045,10525.166275249998,7314.13265*1.045);return(1==a?d:a<=3?u:a<=6?l:7==a?r:8==a?t:9==a?n:a<16?c:a<19?o:a<20?v:s)[e]}function valorAlim(e){return e<6?373:e<16?458:e<18?658:1e3}function nocd(e){0!=e.ddFG.value&&(e.ddCD.value=0)}function nofg(e){0!=e.ddCD.value&&(e.ddFG.value=0)}function calcSalario(e){"myform"==e.name?document.getElementById("numProposta1").disabled=!0:"myform2"==e.name&&(document.getElementById("numProposta2").disabled=!0);var a=parseInt(e.ddAno.value,10),d=1086.32,u=1.039;d=1==a?(u=1.036,1086.32):2==a?(u=1.037,1086.32):3==a?(u=1.037,1140.64):4==a?(u=1.038,1140.64):5==a||6==a?(u=1.038,1197.67):7==a?(u=1.038,1263.54):7<a&&a<16?1326.72:a<19?1446.12:a<20?1446.12*1.045:1579.1991929999997,100==a?(u=1.05,d=3960):101==a?(u=1.039,d=1822.77):102==a&&("myform"==e.name?document.getElementById("numProposta1").disabled=!1:"myform2"==e.name&&(document.getElementById("numProposta2").disabled=!1),u=1.039,d=1822.77*(1+parseInt(e.numProposta.value,10)/100)),"1"==e.ddCargo.value&&(d*=2);var l=parseFloat(e.ddClasse.value),r=parseFloat(e.ddNivel.value),t=parseFloat(e.ddProg.value),n=l+r+t-3,c=e.ddCargaH.value,o=Math.ceil(d*Math.pow(u,n)*c*100)/100;100<=a&&(B=1,n=r+t-2,11!=l&&17!=l||(B=.6/.4),31==l&&(B=2.5),o=Math.ceil(d*Math.pow(u,n)*c*100*B)/100);var v=e.numAnuenio.value/100*o,s=e.alim.checked?valorAlim(a):0;.5==c&&(s/=2);var i=e.trans.checked?valorTransporte(o,e.gastoTrans.value):0,p=e.ddInsa.value,m=calcfatorpg(e.ddQuali.value,e.areaquali[0].checked),h=0;$('form[name="'+e.name+'"] span[name="numURPview"]').css("visibility","hidden"),1==e.ddURP.value?($('form[name="'+e.name+'"] span[name="numURPview"]').css("visibility","visible"),e.numURP.disabled&&(e.numURP.disabled=!1),h=parseFloat(e.numURP.value)||0):2==e.ddURP.value?(e.numURP.disabled=!0,h=.2605*o*(1+m)):e.numURP.disabled=!0;var f=m*o,k=0;"2"==e.ddCargo.value&&(O=4750,(k=(O="11"==e.ddClasse.value?.5*O*(40*e.ddCargaH.value/44):"17"==e.ddClasse.value?.7*O*(40*e.ddCargaH.value/44):"11"==e.ddClasse.value?+O*(40*e.ddCargaH.value/44):0)-o)<0&&(k=0));var D=parseFloat(e.numOutrosRendTrib.value)||0,I=parseFloat(e.numOutrosRendIsnt.value)||0,g=o+h+f+Math.floor(p*o*100)/100+v+k+D,y=0;"nao"!=e.ddSindTipo.value&&(y="vb"==e.ddSindTipo.value?.01*o:"rem"==e.ddSindTipo.value?.01*g:Math.round(.01*d*Math.pow(u,parseInt(e.ddClasse.value,10)-1)*c*100)/100);var F,C,A,R=g/(240*c)*(e.noturno.value*(60/52.5))*.25,b=valorFG(parseInt(e.ddFG.value,10),a),V=g+b+(F=e.rdCD[0].checked&&"0"!=e.ddCD.value?.6*valorCD(e.ddCD.value,a):e.rdCD[1].checked&&"0"!=e.ddCD.value?valorCD(e.ddCD.value,a)-o:0),P=e.saude.checked?valorSaude(V,parseInt(e.ddIdade.value,10),a)+valorSaude(V,parseInt(e.ddIdadeDep1.value,10),a)+valorSaude(V,parseInt(e.ddIdadeDep2.value,10),a)+valorSaude(V,parseInt(e.ddIdadeDep3.value,10),a)*e.Dep3Qtd.value:0,S=valorCreche(o+h+Math.floor(p*o*100)/100+v,a,e.numCreche.value,e.crechecota.checked);A=e.ferias.checked?valorIRRF(C=(g+b+F)/3,a):C=0;var T=e.decter.checked?(g+b+F)/2:0,x=o+h+f+v+k+D,Q=4663.75,Q=6==a||7==a?5189.82:8==a?5531.31:9==a?5645.81:10==a?5839.45:11==a||12==a?6101.06:13==a?6433.57:14==a?7087.23:a<17?7507.49:7786.02;e.pssfgcd.checked&&(x+=b+F),e.pssrisco.checked&&(x+=p*o),e.pssnoturno.checked&&(x+=R),"rpc"==e.novopss.value&&Q<x&&(x=Q);var q=calcPSS(a,x,Q),r=0;"rpps"==e.novopss.value&&e.abonoperm.checked&&(r=q);t=0;"sim"==e.funp_ad.value&&(x==Q?(E=o+h+f-Q,e.rpcfgcd.checked&&(E+=b+F),e.rpcrisco.checked&&(E+=p*o),e.rpcnoturno.checked&&(E+=R),t=E*parseFloat(e.ddFunp.value),"myform"==e.name?(document.getElementById("funp_plano_norm1").checked=!0,document.getElementById("ddFunp1").disabled=!1,document.getElementById("numFunpAlt1").disabled=!0):(document.getElementById("funp_plano_norm2").checked=!0,document.getElementById("ddFunp2").disabled=!1,document.getElementById("numFunpAlt2").disabled=!0)):(t=parseInt(e.numFunpAlt.value,10),"myform"==e.name?(document.getElementById("funp_plano_alt1").checked=!0,document.getElementById("ddFunp1").disabled=!0,document.getElementById("numFunpAlt1").disabled=!1):(document.getElementById("funp_plano_alt2").checked=!0,document.getElementById("ddFunp2").disabled=!0,document.getElementById("numFunpAlt2").disabled=!1)));var l=parseFloat(e.numFunpFacul.value)||0,n=dependentesIR(e.numDepIRRF.value,a),B=o+h+f+v+p*o+b+F+D,O=q+t+l+n,d=B-O;16==a&&O<528?d=B-528:16<a&&O<564.8&&(d=B-564.8);var u=valorIRRF(d,a),c=e.decter.checked&&"2"==e.decter_par.value?u+q+t+l:0,V=parseFloat(e.numOutros.value)||0,Q=u+q+t+l+c+y+A+V,E=g+P+s+i+S+b+F+R+C+T+I+r,B=E-Q;"myform"==e.name?liq1=B:liq2=B;g=liq2-liq1;document.getElementById("diffLiqAbs").innerHTML=formatValor(g),document.getElementById("diffLiqPct").innerHTML=(100*g/liq1).toFixed(2).replace(".",",")+"%",document.getElementById("diffLiqPor").innerHTML=(100*liq2/liq1).toFixed(0)+"%",e.txVB.value=formatValor(o),e.txResult.value=formatValor(B),e.txInsa.value=formatValor(p*o),e.txInss.value=formatValor(q),e.txBruto.value=formatValor(E),e.txIrrf.value=formatValor(u),e.txSaude.value=formatValor(P),e.txTrans.value=formatValor(i),e.txAlim.value=formatValor(s),e.txCreche.value=formatValor(S),e.txURP.value=formatValor(h),e.txbIRRF.value=formatValor(d),e.txbINSS.value=formatValor(x),e.txdesconto.value=formatValor(Q),e.txSindicato.value=formatValor(y),e.txQualif.value=formatValor(f),e.txFunp.value=formatValor(t),e.txDepIRRF.value=formatValor(n),e.txFG.value=formatValor(b),e.txCD.value=e.rdCD[0].checked?formatValor(F):formatValor(valorCD(e.ddCD.value,a)),e.txNoturno.value=formatValor(R),e.txFerias.value=formatValor(C),e.txIrrfFerias.value=formatValor(A),e.txDecter.value=formatValor(T),e.txDesc13.value=formatValor(c);c=1;"myform"==e.name?($("#tabdetails-rend-1").empty(),$("#tabdetails-desc-1").empty(),$("#tabdetails-outros-1").empty()):($("#tabdetails-rend-2").empty(),$("#tabdetails-desc-2").empty(),$("#tabdetails-outros-2").empty(),c=2),addDetailValue("#tabdetails-rend",c,"VB",o),addDetailValue("#tabdetails-rend",c,"VA",s),0<i&&addDetailValue("#tabdetails-rend",c,"VT",i),0<S&&addDetailValue("#tabdetails-rend",c,"Pré-escolar",S),0<R&&addDetailValue("#tabdetails-rend",c,"Ad. Noturno",R),0<h&&addDetailValue("#tabdetails-rend",c,"URP",h),0<m&&addDetailValue("#tabdetails-rend",c,"IQ",o*m),0<b&&addDetailValue("#tabdetails-rend",c,"FG",b),0<F&&addDetailValue("#tabdetails-rend",c,"CD",F),0<v&&addDetailValue("#tabdetails-rend",c,"Anuênio",v),0<p&&addDetailValue("#tabdetails-rend",c,"Insalubridade",p*o),0<P&&addDetailValue("#tabdetails-rend",c,"Saúde Sup.",P),0<k&&addDetailValue("#tabdetails-rend",c,"Dif. Piso Enf.",k),0<I&&addDetailValue("#tabdetails-rend",c,"Outros Rend. Isen.",I),0<D&&addDetailValue("#tabdetails-rend",c,"Outros Rend. Trib.",D),0<r&&addDetailValue("#tabdetails-rend",c,"Abono Perm.",r),addDetailValue("#tabdetails-desc",c,"PSS",q),addDetailValue("#tabdetails-desc",c,"IR",u),0<t&&addDetailValue("#tabdetails-desc",c,"Funpresp",t),0<l&&addDetailValue("#tabdetails-desc",c,"Funpresp-facultativo",l),0<y&&addDetailValue("#tabdetails-desc",c,"Sindicato",y),0<V&&addDetailValue("#tabdetails-desc",c,"Outros",V),addDetailValue("#tabdetails-outros",c,"Bruto",E),addDetailValue("#tabdetails-outros",c,"Descontos",Q),addDetailValue("#tabdetails-outros",c,"Líquido",B),addDetailValue("#tabdetails-outros",c,"Base PSS",x),addDetailValue("#tabdetails-outros",c,"Base IR",d),addDetailValue("#tabdetails-outros",c,"Deduções IR",O),saveStorage()}function addDetailValue(e,a,d,u){u="<div>"+d+": "+formatValor(u)+"</div>";$(e+"-"+a).append(u)}function inverterform(e){var a,d,u=document.forms.myform,l=document.forms.myform2;"inverter"==e?(a=Array(u.ddClasse.value,u.ddProg.value,u.ddFG.value,u.ddNivel.value,u.ddCargaH.value,u.ddAno.value,u.ddQuali.value,u.saude.checked,u.ddIdade.value,u.ddURP.value,u.trans.checked,u.gastoTrans.value,u.alim.checked,u.ddInsa.value,u.numCreche.value,0,u.areaquali[0].checked,u.areaquali[1].checked,u.novopss.value,u.ddFunp.value,u.numAnuenio.value,u.funp_ad.value,u.numFunpAlt.value,u.numDepIRRF.value,u.ddIdadeDep1.value,u.ddIdadeDep2.value,u.ddIdadeDep3.value,u.ddCD.value,u.rdCD[0].checked,u.rdCD[1].checked,u.ferias.checked,u.decter.checked,u.decter_par.value,u.ddSindTipo.value,0,u.numOutros.value,u.numURP.value,u.numFunpFacul.value,u.Dep3Qtd.value,u.ddCargo.value,u.numOutrosRendIsnt.value,u.numOutrosRendTrib.value,u.numProposta.value,u.pssfgcd.checked,u.pssrisco.checked,u.pssnoturno.checked,u.rpcfgcd.checked,u.rpcrisco.checked,u.rpcnoturno.checked,u.crechecota.checked),d=Array(l.ddClasse.value,l.ddProg.value,l.ddFG.value,l.ddNivel.value,l.ddCargaH.value,l.ddAno.value,l.ddQuali.value,l.saude.checked,l.ddIdade.value,l.ddURP.value,l.trans.checked,l.gastoTrans.value,l.alim.checked,l.ddInsa.value,l.numCreche.value,0,l.areaquali[0].checked,l.areaquali[1].checked,l.novopss.value,l.ddFunp.value,l.numAnuenio.value,l.funp_ad.value,l.numFunpAlt.value,l.numDepIRRF.value,l.ddIdadeDep1.value,l.ddIdadeDep2.value,l.ddIdadeDep3.value,l.ddCD.value,l.rdCD[0].checked,l.rdCD[1].checked,l.ferias.checked,l.decter.checked,l.decter_par.value,l.ddSindTipo.value,0,l.numOutros.value,l.numURP.value,l.numFunpFacul.value,l.Dep3Qtd.value,l.ddCargo.value,l.numOutrosRendIsnt.value,l.numOutrosRendTrib.value,l.numProposta.value,l.pssfgcd.checked,l.pssrisco.checked,l.pssnoturno.checked,l.rpcfgcd.checked,l.rpcrisco.checked,l.rpcnoturno.checked,l.crechecota.checked)):"cima"==e?a=d=Array(l.ddClasse.value,l.ddProg.value,l.ddFG.value,l.ddNivel.value,l.ddCargaH.value,l.ddAno.value,l.ddQuali.value,l.saude.checked,l.ddIdade.value,l.ddURP.value,l.trans.checked,l.gastoTrans.value,l.alim.checked,l.ddInsa.value,l.numCreche.value,0,l.areaquali[0].checked,l.areaquali[1].checked,l.novopss.value,l.ddFunp.value,l.numAnuenio.value,l.funp_ad.value,l.numFunpAlt.value,l.numDepIRRF.value,l.ddIdadeDep1.value,l.ddIdadeDep2.value,l.ddIdadeDep3.value,l.ddCD.value,l.rdCD[0].checked,l.rdCD[1].checked,l.ferias.checked,l.decter.checked,l.decter_par.value,l.ddSindTipo.value,0,l.numOutros.value,l.numURP.value,l.numFunpFacul.value,l.Dep3Qtd.value,l.ddCargo.value,l.numOutrosRendIsnt.value,l.numOutrosRendTrib.value,l.numProposta.value,l.pssfgcd.checked,l.pssrisco.checked,l.pssnoturno.checked,l.rpcfgcd.checked,l.rpcrisco.checked,l.rpcnoturno.checked,l.crechecota.checked):d=a=Array(u.ddClasse.value,u.ddProg.value,u.ddFG.value,u.ddNivel.value,u.ddCargaH.value,u.ddAno.value,u.ddQuali.value,u.saude.checked,u.ddIdade.value,u.ddURP.value,u.trans.checked,u.gastoTrans.value,u.alim.checked,u.ddInsa.value,u.numCreche.value,0,u.areaquali[0].checked,u.areaquali[1].checked,u.novopss.value,u.ddFunp.value,u.numAnuenio.value,u.funp_ad.value,u.numFunpAlt.value,u.numDepIRRF.value,u.ddIdadeDep1.value,u.ddIdadeDep2.value,u.ddIdadeDep3.value,u.ddCD.value,u.rdCD[0].checked,u.rdCD[1].checked,u.ferias.checked,u.decter.checked,u.decter_par.value,u.ddSindTipo.value,0,u.numOutros.value,u.numURP.value,u.numFunpFacul.value,u.Dep3Qtd.value,u.ddCargo.value,u.numOutrosRendIsnt.value,u.numOutrosRendTrib.value,u.numProposta.value,u.pssfgcd.checked,u.pssrisco.checked,u.pssnoturno.checked,u.rpcfgcd.checked,u.rpcrisco.checked,u.rpcnoturno.checked,u.crechecota.checked),u.ddClasse.value=d[0],u.ddProg.value=d[1],u.ddFG.value=d[2],u.ddNivel.value=d[3],u.ddCargaH.value=d[4],u.ddAno.value=d[5],u.saude.checked=d[7],u.ddIdade.value=d[8],u.ddURP.value=d[9],u.trans.checked=d[10],u.gastoTrans.value=d[11],u.alim.checked=d[12],u.ddInsa.value=d[13],u.numCreche.value=d[14],u.areaquali[0].checked=d[16],u.areaquali[1].checked=d[17],u.novopss.value=d[18],u.ddFunp.value=d[19],u.numAnuenio.value=d[20],u.funp_ad.value=d[21],u.numFunpAlt.value=d[22],u.numDepIRRF.value=d[23],u.ddIdadeDep1.value=d[24],u.ddIdadeDep2.value=d[25],u.ddIdadeDep3.value=d[26],u.ddCD.value=d[27],u.rdCD[0].checked=d[28],u.rdCD[1].checked=d[29],u.ferias.checked=d[30],u.decter.checked=d[31],u.decter_par.value=d[32],u.ddSindTipo.value=d[33],u.numOutros.value=d[35],u.numURP.value=d[36],u.numFunpFacul.value=d[37],u.Dep3Qtd.value=d[38],u.ddCargo.value=d[39],u.numOutrosRendIsnt.value=d[40],u.numOutrosRendTrib.value=d[41],u.numProposta.value=d[42],u.pssfgcd.checked=d[43],u.pssrisco.checked=d[44],u.pssnoturno.checked=d[45],u.rpcfgcd.checked=d[46],u.rpcrisco.checked=d[47],u.rpcnoturno.checked=d[48],u.crechecota.checked=d[49],l.ddClasse.value=a[0],l.ddProg.value=a[1],l.ddFG.value=a[2],l.ddNivel.value=a[3],l.ddCargaH.value=a[4],l.ddAno.value=a[5],l.saude.checked=a[7],l.ddIdade.value=a[8],l.ddURP.value=a[9],l.trans.checked=a[10],l.gastoTrans.value=a[11],l.alim.checked=a[12],l.ddInsa.value=a[13],l.numCreche.value=a[14],l.areaquali[0].checked=a[16],l.areaquali[1].checked=a[17],l.novopss.value=a[18],l.ddFunp.value=a[19],l.numAnuenio.value=a[20],l.funp_ad.value=a[21],l.numFunpAlt.value=a[22],l.numDepIRRF.value=a[23],l.ddIdadeDep1.value=a[24],l.ddIdadeDep2.value=a[25],l.ddIdadeDep3.value=a[26],l.ddCD.value=a[27],l.rdCD[0].checked=a[28],l.rdCD[1].checked=a[29],l.ferias.checked=a[30],l.decter.checked=a[31],l.decter_par.value=a[32],l.ddSindTipo.value=a[33],l.numOutros.value=a[35],l.numURP.value=a[36],l.numFunpFacul.value=a[37],l.Dep3Qtd.value=a[38],l.ddCargo.value=a[39],l.numOutrosRendIsnt.value=a[40],l.numOutrosRendTrib.value=a[41],l.numProposta.value=a[42],l.pssfgcd.checked=a[43],l.pssrisco.checked=a[44],l.pssnoturno.checked=a[45],l.rpcfgcd.checked=a[46],l.rpcrisco.checked=a[47],l.rpcnoturno.checked=a[48],l.crechecota.checked=a[49],updateQuali(u,d[0]),updateQuali(l,a[0]),u.ddQuali.value=d[6],l.ddQuali.value=a[6],calcSalario(u),calcSalario(l)}