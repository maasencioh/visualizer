$wnd.jsme.runAsyncCallback5('r(203,191,{});function CO(){CO=s;DO=new Go("dragend",new EO)}function FO(a){a.a.cancelBubble=!0;bn(a.a)}function EO(){}r(204,203,{},EO);_.Rc=function(){FO(this)};_.Uc=function(){return DO};var DO;function GO(){GO=s;HO=new Go("dragenter",new IO)}function IO(){}r(205,203,{},IO);_.Rc=function(){FO(this)};_.Uc=function(){return HO};var HO;function JO(){JO=s;KO=new Go("dragover",new LO)}function LO(){}r(206,203,{},LO);_.Rc=function(){FO(this)};_.Uc=function(){return KO};var KO;\nfunction MO(){MO=s;NO=new Go("drop",new OO)}function OO(){}r(207,203,{},OO);_.Rc=function(a){var b,c,d,e;this.a.cancelBubble=!0;bn(this.a);d=(this.a.dataTransfer||null).files;e=0;a:for(;e<d.length;++e){if(0<a.a.d&&e>=a.a.d)break a;b=d[e];c=new FileReader;PO(c,a.a.b);1==a.a.c&&c.readAsText(b)}0==d.length&&(b=(this.a.dataTransfer||null).getData(wg),a.a.b.a.a.f.pb[Rg]=null!=b?b:l)};_.Uc=function(){return NO};var NO;function QO(a,b,c){dq(!a.mb?a.mb=new sq(a):a.mb,c,b)}\nfunction RO(){this.pb=Zm("file");this.pb[jd]="gwt-FileUpload"}r(323,304,bi,RO);_.ld=function(a){mt(this,a)};function SO(a){var b=G(Hd);gH(lg,fH(b));this.pb=b;this.b=new MI(this.pb);this.pb[jd]="gwt-HTML";LI(this.b,a,!0);UI(this)}r(327,328,bi,SO);function TO(){Mv();var a=G("textarea");!Pr&&(Pr=new Or);!Nr&&(Nr=new Mr);this.pb=a;this.pb[jd]="gwt-TextArea"}r(367,368,bi,TO);function UO(a,b){var c,d;c=G(Mg);d=G(vg);d[Ec]=a.a.a;d.style[Sg]=a.b.a;var e=(Rr(),Sr(d));c.appendChild(e);Qr(a.d,c);yt(a,b,d)}\nfunction VO(){su.call(this);this.a=(vu(),Cu);this.b=(Du(),Gu);this.e[fd]=Za;this.e[Yc]=Za}r(376,320,Yh,VO);_.Gd=function(a){var b;b=an(a.pb);(a=Ct(this,a))&&this.d.removeChild(an(b));return a};\nfunction WO(a){try{a.w=!1;var b,c,d;d=a.hb;c=a.ab;d||(a.pb.style[Tg]=me,a.ab=!1,a.Td());b=a.pb;b.style[ve]=0+($n(),Af);b.style[Gg]=$a;uK(a,Vi(Cn($doc)+(Bn()-Wm(a.pb,mf)>>1),0),Vi(Dn($doc)+(An()-Wm(a.pb,lf)>>1),0));d||((a.ab=c)?(a.pb.style[nd]=Rf,a.pb.style[Tg]=Ug,wi(a.gb,200)):a.pb.style[Tg]=Ug)}finally{a.w=!0}}function XO(a){a.i=(new HJ(a.j)).nc.Ie();it(a.i,new YO(a),(Mo(),Mo(),No));a.d=F(Zv,q,38,[a.i])}\nfunction aP(){PK();var a,b,c,d,e;lL.call(this,(DL(),EL),null,!0);this.Cg();this.db=!0;a=new SO(this.k);this.f=new TO;this.f.pb.style[Xg]=bb;Ks(this.f,bb);this.Ag();GK(this,"400px");e=new VO;e.pb.style[le]=bb;e.e[fd]=10;c=(vu(),wu);e.a=c;UO(e,a);UO(e,this.f);this.e=new Ku;this.e.e[fd]=20;for(b=this.d,c=0,d=b.length;c<d;++c)a=b[c],Hu(this.e,a);UO(e,this.e);UK(this,e);QJ(this,!1);this.Bg()}r(623,624,bG,aP);_.Ag=function(){XO(this)};\n_.Bg=function(){var a=this.f;a.pb.readOnly=!0;var b=Ns(a.pb)+"-readonly";Js(a.td(),b,!0)};_.Cg=function(){PJ(this.I.b,"Copy")};_.d=null;_.e=null;_.f=null;_.i=null;_.j="Close";_.k="Press Ctrl-C (Command-C on Mac) or right click (Option-click on Mac) on the selected text to copy it, then paste into another program.";function YO(a){this.a=a}r(626,1,{},YO);_.Xc=function(){WK(this.a,!1)};_.a=null;function bP(a){this.a=a}r(627,1,{},bP);\n_.Dc=function(){et(this.a.f.pb,!0);dv(this.a.f.pb);var a=this.a.f,b;b=Xm(a.pb,Rg).length;if(0<b&&a.kb){if(0>b)throw new tD("Length must be a positive integer. Length: "+b);if(b>Xm(a.pb,Rg).length)throw new tD("From Index: 0  To Index: "+b+"  Text Length: "+Xm(a.pb,Rg).length);var a=a.pb,c=0;try{var d=a.createTextRange(),e=a.value.substr(c,b).match(/(\\r\\n)/gi);null!=e&&(b-=e.length);var f=a.value.substring(0,c).match(/(\\r\\n)/gi);null!=f&&(c-=f.length);d.collapse(!0);d.moveStart("character",c);d.moveEnd("character",\nb);d.select()}catch(g){}}};_.a=null;function cP(a){XO(a);a.a=(new HJ(a.b)).nc.Ie();it(a.a,new dP(a),(Mo(),Mo(),No));a.d=F(Zv,q,38,[a.a,a.i])}function eP(a){a.j="Cancel";a.k="Paste the text to import into the text area below.";a.b="Accept";PJ(a.I.b,"Paste")}function fP(a){PK();aP.call(this);this.c=a}r(629,623,bG,fP);_.Ag=function(){cP(this)};_.Bg=function(){Ks(this.f,"150px")};_.Cg=function(){eP(this)};_.Td=function(){kL(this);Lm((Im(),Jm),new gP(this))};_.a=null;_.b=null;_.c=null;\nfunction hP(a){PK();fP.call(this,a)}r(628,629,bG,hP);_.Ag=function(){var a;cP(this);a=new RO;it(a,new iP(this),(tH(),tH(),uH));this.d=F(Zv,q,38,[this.a,a,this.i])};_.Bg=function(){Ks(this.f,"150px");var a=new jP(this),b=this.f;QO(b,new kP,(GO(),GO(),HO));QO(b,new lP,(CO(),CO(),DO));QO(b,new mP,(JO(),JO(),KO));QO(b,new nP(a),(MO(),MO(),NO))};_.Cg=function(){eP(this);this.k+=" Or drag and drop a file on it."};function iP(a){this.a=a}r(630,1,{},iP);\n_.Wc=function(a){var b,c;b=new FileReader;a=(c=a.a.srcElement,c.files[0]);oP(b,new pP(this));b.readAsText(a)};_.a=null;function pP(a){this.a=a}r(631,1,{},pP);_.Dg=function(a){Ly();Lv(this.a.a.f,a)};_.a=null;r(634,1,{});r(633,634,{});_.b=null;_.c=1;_.d=-1;function jP(a){this.a=a;this.b=new qP(this);this.c=this.d=1}r(632,633,{},jP);_.a=null;function qP(a){this.a=a}r(635,1,{},qP);_.Dg=function(a){this.a.a.f.pb[Rg]=null!=a?a:l};_.a=null;function dP(a){this.a=a}r(639,1,{},dP);\n_.Xc=function(){if(this.a.c){var a=this.a.c,b;b=new Iy(a.a,0,Xm(this.a.f.pb,Rg));Oz(a.a.a,b.a)}WK(this.a,!1)};_.a=null;function gP(a){this.a=a}r(640,1,{},gP);_.Dc=function(){et(this.a.f.pb,!0);dv(this.a.f.pb)};_.a=null;r(641,1,Ah);_.Oc=function(){var a,b;a=new rP(this.a);void 0!=$wnd.FileReader?b=new hP(a):b=new fP(a);IK(b);WO(b)};function rP(a){this.a=a}r(642,1,{},rP);_.a=null;r(643,1,Ah);\n_.Oc=function(){var a;a=new aP;var b=this.a,c;Lv(a.f,b);b=(c=xD(b,"\\r\\n|\\r|\\n|\\n\\r"),c.length);Ks(a.f,20*(10>b?b:10)+Af);Lm((Im(),Jm),new bP(a));IK(a);WO(a)};function oP(a,b){a.onload=function(a){b.Dg(a.target.result)}}function PO(a,b){a.onloadend=function(a){b.Dg(a.target.result)}}function nP(a){this.a=a}r(648,1,{},nP);_.a=null;function kP(){}r(649,1,{},kP);function lP(){}r(650,1,{},lP);function mP(){}r(651,1,{},mP);Y(634);Y(633);Y(648);Y(649);Y(650);Y(651);Y(203);Y(205);Y(204);Y(206);Y(207);Y(623);\nY(629);Y(628);Y(642);Y(626);Y(627);Y(639);Y(640);Y(630);Y(631);Y(632);Y(635);Y(327);Y(376);Y(367);Y(323);x($F)(5);\n//@ sourceURL=5.js\n')
