$wnd.jsme.runAsyncCallback5('r(214,202,{});function kP(){kP=s;lP=new Zo(Nd,new mP)}function nP(a){a.a.stopPropagation();a.a.preventDefault()}function mP(){}r(215,214,{},mP);_.bd=function(){nP(this)};_.ed=function(){return lP};var lP;function oP(){oP=s;pP=new Zo(Od,new qP)}function qP(){}r(216,214,{},qP);_.bd=function(){nP(this)};_.ed=function(){return pP};var pP;function rP(){rP=s;sP=new Zo(Pd,new tP)}function tP(){}r(217,214,{},tP);_.bd=function(){nP(this)};_.ed=function(){return sP};var sP;\nfunction uP(){uP=s;vP=new Zo(Qd,new wP)}function wP(){}r(218,214,{},wP);_.bd=function(a){var b,c,d,e;this.a.stopPropagation();this.a.preventDefault();d=(this.a.dataTransfer||null).files;e=0;a:for(;e<d.length;++e){if(0<a.a.d&&e>=a.a.d)break a;b=d[e];c=new FileReader;xP(c,a.a.b);1==a.a.c&&c.readAsText(b)}0==d.length&&(b=(this.a.dataTransfer||null).getData(Ag),a.a.b.a.a.f.pb[Vg]=null!=b?b:l)};_.ed=function(){return vP};var vP;\nfunction yP(a,b,c){var d=a.pb,e=c.b;vs();it(d,e);G(Pd,e)&&it(d,Od);Bq(!a.mb?a.mb=new Qq(a):a.mb,c,b)}function zP(){this.pb=cn("file");this.pb[ld]="gwt-FileUpload"}r(336,317,Jh,zP);_.xd=function(a){Rt(this,a)};function AP(a){var b=$doc.createElement(Kd);BI(pg,b.tagName);this.pb=b;this.b=new tJ(this.pb);this.pb[ld]="gwt-HTML";sJ(this.b,a,!0);BJ(this)}r(340,341,Jh,AP);function BP(){qw();var a=$doc.createElement("textarea");!ms&&(ms=new ls);!ks&&(ks=new js);this.pb=a;this.pb[ld]="gwt-TextArea"}\nr(380,381,Jh,BP);function CP(a,b){var c,d;c=$doc.createElement(Qg);d=$doc.createElement(zg);d[Gc]=a.a.a;d.style[Wg]=a.b.a;var e=(os(),ps(d));c.appendChild(e);ns(a.d,c);cu(a,b,d)}function DP(){Xu.call(this);this.a=($u(),gv);this.b=(hv(),kv);this.e[hd]=ab;this.e[gd]=ab}r(389,333,Oh,DP);_.Sd=function(a){var b;b=en(a.pb);(a=gu(this,a))&&this.d.removeChild(en(b));return a};\nfunction EP(a){try{a.w=!1;var b,c,d;d=a.hb;c=a.ab;d||(a.pb.style[Xg]=se,a.ab=!1,a.de());b=a.pb;b.style[De]=0+($n(),Pf);b.style[Hg]=bb;cL(a,Zi($wnd.pageXOffset+(on()-$m(a.pb,wf)>>1),0),Zi($wnd.pageYOffset+(nn()-$m(a.pb,vf)>>1),0));d||((a.ab=c)?(a.pb.style[pd]=Vf,a.pb.style[Xg]=Yg,Ai(a.gb,200)):a.pb.style[Xg]=Yg)}finally{a.w=!0}}function FP(a){a.i=(new oK(a.j)).yc.Ue();Nt(a.i,new JP(a),(ep(),ep(),fp));a.d=F(Dw,q,39,[a.i])}\nfunction KP(){xL();var a,b,c,d,e;UL.call(this,(lM(),mM),null,!0);this.Vg();this.db=!0;a=new AP(this.k);this.f=new BP;this.f.pb.style[$g]=db;nt(this.f,db);this.Tg();oL(this,"400px");e=new DP;e.pb.style[re]=db;e.e[hd]=10;c=($u(),av);e.a=c;CP(e,a);CP(e,this.f);this.e=new ov;this.e.e[hd]=20;for(b=this.d,c=0,d=b.length;c<d;++c)a=b[c],lv(this.e,a);CP(e,this.e);CL(this,e);xK(this,!1);this.Ug()}r(641,642,VG,KP);_.Tg=function(){FP(this)};\n_.Ug=function(){var a=this.f;a.pb.readOnly=!0;var b=qt(a.pb)+"-readonly";mt(a.Fd(),b,!0)};_.Vg=function(){wK(this.I.b,"Copy")};_.d=null;_.e=null;_.f=null;_.i=null;_.j="Close";_.k="Press Ctrl-C (Command-C on Mac) or right click (Option-click on Mac) on the selected text to copy it, then paste into another program.";function JP(a){this.a=a}r(644,1,{},JP);_.hd=function(){EL(this.a,!1)};_.a=null;function LP(a){this.a=a}r(645,1,{},LP);\n_.Pc=function(){vt(this.a.f.pb,!0);Iv(this.a.f.pb);var a=this.a.f,b;b=an(a.pb,Vg).length;if(0<b&&a.kb){if(0>b)throw new jE("Length must be a positive integer. Length: "+b);if(b>an(a.pb,Vg).length)throw new jE("From Index: 0  To Index: "+b+"  Text Length: "+an(a.pb,Vg).length);try{a.pb.setSelectionRange(0,0+b)}catch(c){}}};_.a=null;function MP(a){FP(a);a.a=(new oK(a.b)).yc.Ue();Nt(a.a,new NP(a),(ep(),ep(),fp));a.d=F(Dw,q,39,[a.a,a.i])}\nfunction OP(a){a.j="Cancel";a.k="Paste the text to import into the text area below.";a.b="Accept";wK(a.I.b,"Paste")}function PP(a){xL();KP.call(this);this.c=a}r(647,641,VG,PP);_.Tg=function(){MP(this)};_.Ug=function(){nt(this.f,"150px")};_.Vg=function(){OP(this)};_.de=function(){TL(this);Pm((Mm(),Nm),new QP(this))};_.a=null;_.b=null;_.c=null;function RP(a){xL();PP.call(this,a)}r(646,647,VG,RP);_.Tg=function(){var a;MP(this);a=new zP;Nt(a,new SP(this),(cI(),cI(),dI));this.d=F(Dw,q,39,[this.a,a,this.i])};\n_.Ug=function(){nt(this.f,"150px");var a=new TP(this),b=this.f;yP(b,new UP,(oP(),oP(),pP));yP(b,new VP,(kP(),kP(),lP));yP(b,new WP,(rP(),rP(),sP));yP(b,new XP(a),(uP(),uP(),vP))};_.Vg=function(){OP(this);this.k+=" Or drag and drop a file on it."};function SP(a){this.a=a}r(648,1,{},SP);_.gd=function(a){var b,c;b=new FileReader;a=(c=a.a.target,c.files[0]);YP(b,new ZP(this));b.readAsText(a)};_.a=null;function ZP(a){this.a=a}r(649,1,{},ZP);_.Wg=function(a){nz();pw(this.a.a.f,a)};_.a=null;r(652,1,{});\nr(651,652,{});_.b=null;_.c=1;_.d=-1;function TP(a){this.a=a;this.b=new $P(this);this.c=this.d=1}r(650,651,{},TP);_.a=null;function $P(a){this.a=a}r(653,1,{},$P);_.Wg=function(a){this.a.a.f.pb[Vg]=null!=a?a:l};_.a=null;function NP(a){this.a=a}r(657,1,{},NP);_.hd=function(){if(this.a.c){var a=this.a.c,b;b=new kz(a.a,0,an(this.a.f.pb,Vg));VC(a.a.a,b.a)}EL(this.a,!1)};_.a=null;function QP(a){this.a=a}r(658,1,{},QP);_.Pc=function(){vt(this.a.f.pb,!0);Iv(this.a.f.pb)};_.a=null;r(659,1,Bh);\n_.$c=function(){var a,b;a=new aQ(this.a);void 0!=$wnd.FileReader?b=new RP(a):b=new PP(a);qL(b);EP(b)};function aQ(a){this.a=a}r(660,1,{},aQ);_.a=null;r(661,1,Bh);_.$c=function(){var a;a=new KP;var b=this.a,c;pw(a.f,b);b=(c=oE(b,"\\r\\n|\\r|\\n|\\n\\r"),c.length);nt(a.f,20*(10>b?b:10)+Pf);Pm((Mm(),Nm),new LP(a));qL(a);EP(a)};function YP(a,b){a.onload=function(a){b.Wg(a.target.result)}}function xP(a,b){a.onloadend=function(a){b.Wg(a.target.result)}}function XP(a){this.a=a}r(666,1,{},XP);_.a=null;\nfunction UP(){}r(667,1,{},UP);function VP(){}r(668,1,{},VP);function WP(){}r(669,1,{},WP);X(652);X(651);X(666);X(667);X(668);X(669);X(214);X(216);X(215);X(217);X(218);X(641);X(647);X(646);X(660);X(644);X(645);X(657);X(658);X(648);X(649);X(650);X(653);X(340);X(389);X(380);X(336);x(OG)(5);\n//@ sourceURL=5.js\n')
