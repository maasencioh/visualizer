$wnd.jsme.runAsyncCallback1('var AN="Any",BN="Aromatic",CN="Nonring",DN="Reset",EN="Ring";function FN(a,b){if(0>b||b>=a.pb.options.length)throw new At;}function GN(a,b){FN(a,b);return a.pb.options[b].value}function HN(){this.pb=$doc.createElement("select");this.pb[hd]="gwt-ListBox"}r(346,323,Zh,HN);function IN(){IN=s}\nfunction JN(a,b){if(null==b)throw new Yp("Missing message: awt.103");var c=-1,d,e,f;f=a.nc.a.pb;e=$doc.createElement(uf);e.text=b;e.removeAttribute("bidiwrapped");e.value=b;d=f.options.length;(0>c||c>d)&&(c=d);c==d?f.add(e,null):(c=f.options[c],f.add(e,c))}function KN(){IN();tw.call(this);new Ei;this.nc=new LN((uw(),this))}r(411,398,{44:1,46:1,53:1,65:1,71:1},KN);_._d=function(){return yw(this.nc,this)};\n_.oe=function(){return(null==this.kc&&(this.kc=fw(this)),this.kc)+za+this.vc+za+this.wc+za+this.sc+Vg+this.ic+(this.rc?l:",hidden")+",current="+GN(this.nc.a,this.nc.a.pb.selectedIndex)};function MN(){LJ.call(this,7)}r(424,1,Th,MN);function NN(a){NJ.call(this,a,0)}r(429,398,ji,NN);function ON(a){var b=a.j;kK(a.nc.c,b.a,b.b);!hw(a)&&fJ(a);aJ(a)}\nfunction PN(a,b,c){hK.call(this);this.nc&&GJ(this.nc.c,!1);DJ(this,!1);Hw(this,new LJ(0));a=new NJ(a,1);$(this,a,null);a=new Mw;$(a,this.i,null);$(this,a,null);b&&(this.j=iw(b),CJ(this),gK(this.j,~~(Tm(b._b.pb,rf)/2)-~~(this.sc/2),~~(Tm(b._b.pb,qf)/2)-~~(this.ic/2)));c&&Z(this,c)}r(551,552,YF,PN);_.ig=function(){return"OK"};r(559,560,xh);_.Oc=function(){ON(new PN(this.b,this.a,(tz(),vz)))};r(562,560,xh);_.Oc=function(){!this.a.Jb?this.a.Jb=new QN(this.a):this.a.Jb.nc.c.hb?ZK(this.a.Jb.nc.c):ON(this.a.Jb)};\nfunction RN(a,b){XI(b)==a.a?Z(b,(fx(),ox)):Z(b,a.a)}\nfunction SN(a){var b,c,d,e;e=l;d=!1;XI(TN)!=a.a?(e=xa,d=!0):XI(UN)!=a.a?(e="!#6",d=!0):XI(VN)!=a.a?(Z(WN,(fx(),ox)),Z(XN,ox),Z(YN,ox),Z(ZN,ox),e="F,Cl,Br,I"):(b=XI($N)!=a.a,c=XI(aO)!=a.a,XI(bO)!=a.a&&(b?e+="c,":c?e+="C,":e+="#6,"),XI(cO)!=a.a&&(b?e+="n,":c?e+="N,":e+="#7,"),XI(dO)!=a.a&&(b?e+="o,":c?e+="O,":e+="#8,"),XI(eO)!=a.a&&(b?e+="s,":c?e+="S,":e+="#16,"),XI(fO)!=a.a&&(b?e+="p,":c?e+="P,":e+="#15,"),XI(WN)!=a.a&&(e+="F,"),XI(XN)!=a.a&&(e+="Cl,"),XI(YN)!=a.a&&(e+="Br,"),XI(ZN)!=a.a&&(e+="I,"),\nsD(e,za)&&(e=e.substr(0,e.length-1-0)),1>e.length&&!a.b&&(b?e=sc:c?e=sb:(Z(TN,(fx(),ox)),e=xa)));b=l;d&&XI($N)!=a.a&&(b+=";a");d&&XI(aO)!=a.a&&(b+=";A");XI(gO)!=a.a&&(b+=";R");XI(hO)!=a.a&&(b+=";!R");XI(TN)!=a.a&&0<b.length?e=b.substr(1,b.length-1):e+=b;d=iO.nc.a.pb.selectedIndex;0<d&&(--d,e+=";H"+d);d=jO.nc.a.pb.selectedIndex;0<d&&(--d,e+=";D"+d);XI(kO)!=a.a&&(e="~");XI(lO)!=a.a&&(e=hb);XI(mO)!=a.a&&(e=rb);XI(nO)!=a.a&&(e="!@");ly(a.e.nc,e)}\nfunction oO(a){pO(a);qO(a);var b=iO.nc.a;FN(b,0);b.pb.options[0].selected=!0;b=jO.nc.a;FN(b,0);b.pb.options[0].selected=!0;Z($N,a.a);Z(aO,a.a);Z(gO,a.a);Z(hO,a.a);Z(iO,a.a);Z(jO,a.a);rO(a)}function pO(a){Z(bO,a.a);Z(cO,a.a);Z(dO,a.a);Z(eO,a.a);Z(fO,a.a);Z(WN,a.a);Z(XN,a.a);Z(YN,a.a);Z(ZN,a.a)}function qO(a){Z(TN,a.a);Z(UN,a.a);Z(VN,a.a)}function rO(a){Z(kO,a.a);Z(lO,a.a);Z(mO,a.a);Z(nO,a.a);a.b=!1}\nfunction QN(a){EJ.call(this,"Atom/Bond Query");this.i=new xJ(this.ig());Zw(this.q,new iK(this));this.a=(tz(),vz);this.c=a;this.d||(a=iw(a),this.d=new PJ(a),gK(this.d,-150,10));this.j=this.d;Hw(this,new MN);Z(this,this.a);a=new Mw;Hw(a,new Fx(0,3,1));$(a,new NN("Atom type :"),null);TN=new xJ(AN);UN=new xJ("Any except C");VN=new xJ("Halogen");$(a,TN,null);$(a,UN,null);$(a,VN,null);$(this,a,null);a=new Mw;Hw(a,new Fx(0,3,1));$(a,new NJ("Or select one or more from the list :",0),null);$(this,a,null);\na=new Mw;Hw(a,new Fx(0,3,1));bO=new xJ(vb);cO=new xJ(Sb);dO=new xJ(Xb);eO=new xJ(dc);fO=new xJ(Yb);WN=new xJ(Eb);XN=new xJ(zb);YN=new xJ(ub);ZN=new xJ(Ib);$(a,bO,null);$(a,cO,null);$(a,dO,null);$(a,eO,null);$(a,fO,null);$(a,WN,null);$(a,XN,null);$(a,YN,null);$(a,ZN,null);$(this,a,null);a=new Mw;Hw(a,new Fx(0,3,1));iO=new KN;JN(iO,AN);JN(iO,ab);JN(iO,cb);JN(iO,eb);JN(iO,fb);$(a,new NN("Number of hydrogens :  "),null);$(a,iO,null);$(this,a,null);a=new Mw;Hw(a,new Fx(0,3,1));jO=new KN;JN(jO,AN);JN(jO,\nab);JN(jO,cb);JN(jO,eb);JN(jO,fb);JN(jO,"4");JN(jO,"5");JN(jO,"6");$(a,new NJ("Number of connections :",0),null);$(a,jO,null);$(a,new NJ(" (H\'s don\'t count.)",0),null);$(this,a,null);a=new Mw;Hw(a,new Fx(0,3,1));$(a,new NN("Atom is :"),null);$N=new xJ(BN);$(a,$N,null);aO=new xJ("Nonaromatic");$(a,aO,null);gO=new xJ(EN);$(a,gO,null);hO=new xJ(CN);$(a,hO,null);$(this,a,null);a=new Mw;Z(a,vx(XI(this)));Hw(a,new Fx(0,3,1));$(a,new NN("Bond is :"),null);kO=new xJ(AN);$(a,kO,null);lO=new xJ(BN);$(a,lO,\nnull);mO=new xJ(EN);$(a,mO,null);nO=new xJ(CN);$(a,nO,null);$(this,a,null);a=new Mw;Hw(a,new Fx(1,3,1));this.e=new ky(xa,20);$(a,this.e,null);$(a,new xJ(DN),null);$(a,this.i,null);$(this,a,null);this.nc&&GJ(this.nc.c,!1);DJ(this,!1);pO(this);qO(this);rO(this);Z($N,this.a);Z(aO,this.a);Z(gO,this.a);Z(hO,this.a);Z(iO,this.a);Z(jO,this.a);RN(this,TN);CJ(this);a=this.j;kK(this.nc.c,a.a,a.b);!hw(this)&&fJ(this);aJ(this)}r(573,552,YF,QN);\n_.jg=function(a,b){var c;G(b,DN)?(oO(this),RN(this,TN),SN(this)):D(a.f,43)?(rO(this),Dq(a.f)===Dq(TN)?(pO(this),qO(this)):Dq(a.f)===Dq(UN)?(pO(this),qO(this)):Dq(a.f)===Dq(VN)?(pO(this),qO(this)):Dq(a.f)===Dq(gO)?Z(hO,this.a):Dq(a.f)===Dq(hO)?(Z(gO,this.a),Z($N,this.a)):Dq(a.f)===Dq($N)?(Z(aO,this.a),Z(hO,this.a)):Dq(a.f)===Dq(aO)?Z($N,this.a):Dq(a.f)===Dq(kO)||Dq(a.f)===Dq(lO)||Dq(a.f)===Dq(mO)||Dq(a.f)===Dq(nO)?(oO(this),this.b=!0):qO(this),RN(this,a.f),SN(this)):D(a.f,44)&&(rO(this),c=a.f,0==c.nc.a.pb.selectedIndex?\nZ(c,this.a):Z(c,(fx(),ox)),SN(this));107!=this.c.e&&(this.c.e=107,Rw(this.c));return!0};_.kg=function(){return Um(this.e.nc.a.pb,Pg)};_.lg=function(){return this.b};_.b=!1;_.c=null;_.d=null;var TN=_.e=null,kO=null,UN=null,$N=null,lO=null,YN=null,bO=null,jO=null,iO=null,XN=null,WN=null,VN=null,ZN=null,cO=null,aO=null,hO=null,nO=null,dO=null,fO=null,gO=null,mO=null,eO=null;function LN(a){yF();AF.call(this);this.a=new HN;Vs(this.a,new sO(this,a),(iH(),iH(),jH))}r(619,617,{},LN);_.Ie=function(){return this.a};\n_.a=null;function sO(a,b){this.a=a;this.b=b}r(620,1,{},sO);_.Wc=function(a){uw();lK(a,this.b,GN(this.a.a,this.a.a.pb.selectedIndex))};_.a=null;_.b=null;Y(551);Y(573);Y(411);Y(619);Y(620);Y(346);x(TF)(1);\n//@ sourceURL=1.js\n')
