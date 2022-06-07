"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[20269],{13028:(e,t,n)=>{n.r(t),n.d(t,{data:()=>i});const i={key:"v-6b985f4f",path:"/devices/FB20-002.html",title:"Lidl FB20-002 control via MQTT",lang:"en-US",frontmatter:{title:"Lidl FB20-002 control via MQTT",description:"Integrate your Lidl FB20-002 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2020-12-01T19:02:25.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/FB20-002.md",git:{updatedTime:1654617101e3}}},11452:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var i=n(66252);const a=(0,i.uE)('<h1 id="lidl-fb20-002" tabindex="-1"><a class="header-anchor" href="#lidl-fb20-002" aria-hidden="true">#</a> Lidl FB20-002</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>FB20-002</td></tr><tr><td>Vendor</td><td>Lidl</td></tr><tr><td>Description</td><td>Livarno Lux switch and dimming light remote control</td></tr><tr><td>Exposes</td><td>action, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/FB20-002.jpg" alt="Lidl FB20-002"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Hold the top 2 buttons (on and off) for about 5 seconds until the LED goes from solid green to blinking, then let go.</p>',5),s=(0,i.Uk)("For more information, refer to the "),o={href:"https://www.lidl-service.com/static/5027306530/334437_Zigbee_OS_DE_EN%20_FR_NL_PL_CS_SK.PDF",target:"_blank",rel:"noopener noreferrer"},d=(0,i.Uk)("LIDL manual"),r=(0,i.Uk)("."),l=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),c=(0,i.Uk)("How to use device type specific configuration"),u=(0,i.uE)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. Example:</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span>\n  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span>\n  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>, <code>brightness_stop</code>, <code>brightness_step_up</code>, <code>brightness_step_down</code>, <code>brightness_move_up</code>, <code>brightness_move_down</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',7),h={},p=(0,n(83744).Z)(h,[["render",function(e,t){const n=(0,i.up)("OutboundLink"),h=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[a,(0,i._)("p",null,[s,(0,i._)("a",o,[d,(0,i.Wm)(n)]),r]),l,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(h,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[c])),_:1})])]),u],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[n,i]of t)e[n]=i;return e}}}]);