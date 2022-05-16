(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{631:function(t,s,a){"use strict";a.r(s);var n=a(10),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"流媒体传输1-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#流媒体传输1-1"}},[t._v("#")]),t._v(" 流媒体传输1.1")]),t._v(" "),a("h3",{attrs:{id:"流媒体"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#流媒体"}},[t._v("#")]),t._v(" 流媒体")]),t._v(" "),a("p",[t._v("​\t\t流媒体是指采用流式传输方式在 Internet 上播放的媒体格式，例如音频、视频等多媒体文件。")]),t._v(" "),a("h3",{attrs:{id:"流式传输方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#流式传输方式"}},[t._v("#")]),t._v(" 流式传输方式")]),t._v(" "),a("p",[t._v("​\t\t流式传输方式是将多媒体文件经过特殊压缩后分成一个个压缩包，再由服务器向客户端连续、实时传送。用户不必像非流式传输那样等待整个文件全部下载完毕后才能播放，而是只需要经过几秒钟或几十秒的启动延时即可对压缩的音视频文件进行播放，剩余的部分将继续下载，直至播放完毕。")]),t._v(" "),a("h3",{attrs:{id:"流媒体传输协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#流媒体传输协议"}},[t._v("#")]),t._v(" 流媒体传输协议")]),t._v(" "),a("p",[t._v("​\t\t常用的流媒体传输协议主要有"),a("code",[t._v("HTTP渐进式下载")]),t._v("和"),a("code",[t._v("实时流媒体协议")]),t._v("两类。")]),t._v(" "),a("p",[t._v("​\t\t"),a("font",{attrs:{color:"orange"}},[a("code",[t._v("HTTP")]),t._v("渐进式下载")]),t._v("：仅能传输完整的音视频文件，在给定时刻，用户只能观看已下载的那部分，而不能跳到还未下载的部分。HTTP边下载边播放，严格意义上讲，不是直播协议。他的原理是先下载文件的基本信息，音频视频的时间戳，再下载音视频数据，以播放mp4为例，先下载文件头，根据文件头指引下载文件尾，然后再下载文件的音视频数据。")],1),t._v(" "),a("p",[t._v("​\t\t"),a("font",{attrs:{color:"orange"}},[t._v("实时流媒体协议")]),t._v("：可用于实况直播，也可传输完整的音视频文件。例如RTSP/RTP、RTMP、HLS、HTTP-FLV。")],1),t._v(" "),a("h2",{attrs:{id:"常用直播协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用直播协议"}},[t._v("#")]),t._v(" 常用直播协议")]),t._v(" "),a("h3",{attrs:{id:"rtmp协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rtmp协议"}},[t._v("#")]),t._v(" RTMP协议")]),t._v(" "),a("p",[t._v("​\t\t协议比较全能，既可以用来推送，又可以用来直播。其核心理念是将大块的视频帧和音频帧“剁碎”，然后以小数据包的形式在互联网上进行传输，且支持加密，因此隐私性相对比较理想，但拆包组包的过程比较复杂，所以在海量并发时容易出现一些不可预期的稳定性问题。")]),t._v(" "),a("h3",{attrs:{id:"hls协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hls协议"}},[t._v("#")]),t._v(" HLS协议")]),t._v(" "),a("p",[t._v("​\t\t苹果推出的解决方案，将视频分成 5-10 秒的视频小分片，然后用 M3U8 索引表进行管理。由于客户端下载到的视频都是 5-10 秒的完整数据，故视频的流畅性很好，但也同样引入了很大的延迟（HLS 的一般延迟在 10-30s 左右）。相比于 FLV，HLS 在iPhone 和大部分 Android 手机浏览器上的支持非常给力，所以常用于 QQ 和微信朋友圈的 URL 分享。")]),t._v(" "),a("p",[t._v("​\t\thls并非真正的实时流媒体协议，客户端至少要等到服务器生成一个ts切片才能对视频进行下载播放。")]),t._v(" "),a("h3",{attrs:{id:"http-flv协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-flv协议"}},[t._v("#")]),t._v(" HTTP-FLV协议")]),t._v(" "),a("p",[t._v("​\t\t由 Adobe 公司主推，格式极其简单，只是在大块的视频帧和音视频头部加入一些标记头信息，由于这种极致的简洁，在延迟表现和大规模并发方面都很成熟。唯一的不足就是在手机浏览器上的支持非常有限，但是用作手机端 APP 直播协议却异常合适。")]),t._v(" "),a("h3",{attrs:{id:"rtsp协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rtsp协议"}},[t._v("#")]),t._v(" RTSP协议")]),t._v(" "),a("p",[t._v("​\t\t既可以基于UDP传输也可以基于TCP传输，是纯粹的传输控制协议，它本身与它负载的媒体数据不相关，RTSP协议需要自定义客户端向服务器发送RTSP命令。其视频数据由RTP传输，视频质量由RTCP控制，视频控制（如播放、暂停等）由RTSP提供。")]),t._v(" "),a("h3",{attrs:{id:"对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对比"}},[t._v("#")]),t._v(" 对比")]),t._v(" "),a("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://cdn.jsdelivr.net/gh/FrancisSaber/image/markdown-Image202202021211668.png",alt:"img"}}),t._v(" "),a("h2",{attrs:{id:"直播原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#直播原理"}},[t._v("#")]),t._v(" 直播原理")]),t._v(" "),a("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://cdn.jsdelivr.net/gh/FrancisSaber/image/markdown-Image202201261116297.png",alt:"img"}}),t._v(" "),a("p",[a("strong",[t._v("第一部分就是视频主播端的操作：视频采集处理后推流到流媒体服务器。")])]),t._v(" "),a("ul",[a("li",[t._v("首先从前端采集设备中获得原始的音频、视频数据；")]),t._v(" "),a("li",[t._v("为了增强额外效果，对音频进行混音、降噪等处理，可为视频打上时间戳、添加Logo水印或增加滤镜；")]),t._v(" "),a("li",[t._v("随后对音频、视频进行编码，通过编码压缩满足其在互联网上实时传输的需求；")]),t._v(" "),a("li",[t._v("编码后就可以把各种多媒体内容（视频、音频、字幕等）盛放在同一个容器里，也就是所谓的封装，使得不同多媒体内容可同步播放，与此同时还提供了索引；")]),t._v(" "),a("li",[t._v("最后就是通过流传输协议将封装好的内容推送到流媒体服务器上；")])]),t._v(" "),a("p",[a("strong",[t._v("第二部分就是流媒体服务器：负责把从第一部分接收到的流进行处理并分发给用户。")])]),t._v(" "),a("p",[t._v("​\t\t流媒体服务器的主要功能是对流媒体内容进行采集（接收推流）、缓存、调度和传输播放（以流式协议实现用户分发）。")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("典型的流媒体服务器：")])])]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("微软的Windows Media Service（WMS）：它采用MMS协议接收、传输视频，采用Windows Media Player（WMP）作为前端播放器；")]),t._v(" "),a("li",[t._v("RealNetworks公司的Helix Server：采用RTSP/RTP协议接收、传输视频，采用Real Player作为播放前端播放器；")]),t._v(" "),a("li",[t._v("Adobe公司的Flash Media Server：采用RTMP（RTMPT/RTMPE/RTMPS）协议接收、传输视频，采用Flash Player作为前端播放器；")])])]),t._v(" "),a("p",[a("strong",[t._v("第三部分就是用户：只需要拥有支持对应流媒体传输协议的播放器即可。")])]),t._v(" "),a("p",[t._v("​\t\t这一部分其实就是我们前端需要实现的，如何在移动端的内嵌h5页面中实现直播流的播放。所以我们只需要关注后端是通过什么协议给我们返回直播流以及我们如何有效的播放就可以了")]),t._v(" "),a("h2",{attrs:{id:"直播方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#直播方案"}},[t._v("#")]),t._v(" 直播方案")]),t._v(" "),a("h3",{attrs:{id:"方案一-ffmpeg-nginx-video-rtsp转rtmp播放"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方案一-ffmpeg-nginx-video-rtsp转rtmp播放"}},[t._v("#")]),t._v(" 方案一 ："),a("strong",[t._v("ffmpeg + nginx + video，rtsp转rtmp播放")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("\trtmp是adobe开发的协议，一般使用adobe media server 可以方便的搭建起来；随着开源时代的到来，有大神开发了nginx的rtmp插件，也可以直接使用nginx实现rtmp\n")])])]),a("p",[t._v("​\t\trtmp方式的最大的优点在于低延时，经过测试延时普遍在1-3秒，可以说很实时了；缺点在于它是adobe开发的，rtmp的播放严重依赖"),a("code",[t._v("flash")]),t._v("，而由于flash本身的安全，现代浏览器大多禁用flash。")]),t._v(" "),a("p",[t._v("​\t\t"),a("font",{attrs:{color:"orange"}},[t._v("即"),a("code",[t._v("ffmpeg")]),t._v("拉取"),a("code",[t._v("rtsp")]),t._v("协议视频并通过"),a("code",[t._v("rtmp")]),t._v("协议推送视频流到"),a("code",[t._v("nginx")]),t._v("服务器，再通过"),a("code",[t._v("rtmp")]),t._v("协议进行转发")])],1),t._v(" "),a("h4",{attrs:{id:"方案二-ffmpeg-nginx-video-rtsp转hls播放"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方案二-ffmpeg-nginx-video-rtsp转hls播放"}},[t._v("#")]),t._v(" 方案二："),a("strong",[t._v("ffmpeg + nginx + video，rtsp转hls播放")])]),t._v(" "),a("p",[t._v("​\t\t参考连接：https://juejin.cn/post/6908641550046068744")]),t._v(" "),a("p",[t._v("​\t\tHLS (HTTP Live Streaming) 直播 是有苹果提出的一个基于http的协议。其原理是把整个流切分成一个个的小视频文件，然后通过一个m3u8的文件列表来管理这些视频文件\n​\t\tHTTP Live Streaming 并不是一个真正实时的流媒体系统，这是因为对应于媒体分段的大小和持续时间有一定潜在的时间延时。在"),a("a",{attrs:{href:"https://www.zhihu.com/search?q=%E5%AE%A2%E6%88%B7%E7%AB%AF&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2034360284%7D",target:"_blank",rel:"noopener noreferrer"}},[t._v("客户端"),a("OutboundLink")],1),t._v("，至少在一个分段媒体文件被完全下载后才能够开始播放，而通常要求下载完两个媒体文件之后才开始播放以保证不同分段音视频之间的无缝连接。\n​\t\t此外，"),a("font",{attrs:{color:"orange"}},[t._v("在客户端开始下载之前，必须等待服务器端的编码器和流分割器至少生成一个TS文件，这也会带来潜在的时延。服务器软件将接收到的流每缓存一定时间后包装为一个新的TS文件，然后更新m3u8文件。m3u8文件中只保留最新的几个片段的索引，以保证观众任何时候连接进来都会看到较新的内容，实现近似直播的效果。这种方式的理论最小延时为一个ts文件的时长，一般为2-3个ts文件的时长。")])],1),t._v(" "),a("p",[t._v("​\t\t实现方法也是ffmpeg拉取，用rtmp推送到nginx，"),a("code",[t._v("nginx")]),t._v("进行切片处理转发。")]),t._v(" "),a("h3",{attrs:{id:"方案三-node-ffmpeg-websocket-flv-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方案三-node-ffmpeg-websocket-flv-js"}},[t._v("#")]),t._v(" 方案三："),a("code",[t._v("node + ffmpeg + websocket + flv.js")])]),t._v(" "),a("p",[t._v("​\t\t由于大多数摄像头是通过"),a("code",[t._v("rtsp")]),t._v("协议进行转发的，网页无法直接播放rtsp视频，因此可以采用一下方案。")]),t._v(" "),a("ol",[a("li",[t._v("在node服务中建立websocket")]),t._v(" "),a("li",[t._v("通过fluent-ffmpeg转码，将RTSP 流转为flv格式")]),t._v(" "),a("li",[t._v("前端通过flv.js连接websocket，并对获取的flv格式视频数据进行渲染播放")])]),t._v(" "),a("h2",{attrs:{id:"具体实现及其配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#具体实现及其配置"}},[t._v("#")]),t._v(" 具体实现及其配置")]),t._v(" "),a("h3",{attrs:{id:"客户端直播插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#客户端直播插件"}},[t._v("#")]),t._v(" 客户端直播插件")]),t._v(" "),a("p",[t._v("​\t\t"),a("font",{attrs:{color:"orange"}},[a("code",[t._v("video")]),t._v("标签、"),a("code",[t._v("hls.js")]),t._v("、"),a("code",[t._v("video.js")]),t._v("、"),a("code",[t._v("vue-video-player")])])],1),t._v(" "),a("p",[a("code",[t._v("hls.js")]),t._v("是一个可以实现HTTP实时流媒体客户端的js库，主要依赖于"),a("code",[t._v("<video></<video>")]),t._v("标签和"),a("code",[t._v("Media Source Extensions")]),t._v("API。它的工作原理是将MPEG2传输流和AAC/MP3流转换成ISO BMFF (MP4)片段。由于hls.js是基于标准的"),a("code",[t._v("<video></<video>")]),t._v("标签实现播放，所以它不需要额外的播放器。")]),t._v(" "),a("p",[a("strong",[t._v("优点：")]),t._v(" 包比较小，很纯净，UI可以根据自己的业务自行扩展，功能可以根据需求进行封装，比较灵活，而且专业直播HLS协议流。\n"),a("strong",[t._v("缺点：")]),t._v(" 对于常规的通用性播放器没有封装好的UI，功能上也需要自己调API实现，协议单一，只支持HLS。")]),t._v(" "),a("ul",[a("li",[a("h5",{attrs:{id:"video-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#video-js"}},[t._v("#")]),t._v(" video.js")])])]),t._v(" "),a("p",[a("code",[t._v("video.js")]),t._v("是一个基于h5的网络视频播放器，支持h5视频、现代流媒体格式（MP4、WebM、HLS、DASH等）以及YouTube、Vimeo，甚至连flash也支持(通过插件实现，后面会详细说明)，可在桌面端或移动端实现视频播放。")]),t._v(" "),a("p",[a("strong",[t._v("优点：")]),t._v(" 支持多种格式的流媒体播放，浏览器不支持时可实现优雅降级；专门有一套针对直播流的UI；插件机制强大，目前社区已有数百个皮肤和插件供下载；兼容性好，几乎支持所有桌面及移动端的浏览器。\n"),a("strong",[t._v("缺点：")]),t._v(" 包比较大，实现hls直播的时候其实是内嵌了hls.js的代码，由于封装好UI和功能，使其不够灵活，修改UI时需要通过插件实现。")]),t._v(" "),a("ul",[a("li",[a("h5",{attrs:{id:"vue-video-player"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-video-player"}},[t._v("#")]),t._v(" vue-video-player")])])]),t._v(" "),a("p",[a("code",[t._v("vue-video-player")]),t._v("其实就是将video.js集成到了Vue中，在Vue项目中使用起来会更方便。")]),t._v(" "),a("h3",{attrs:{id:"实现rtmp流直播点播"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现rtmp流直播点播"}},[t._v("#")]),t._v(" 实现rtmp流直播点播")]),t._v(" "),a("h4",{attrs:{id:"推流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#推流"}},[t._v("#")]),t._v(" 推流")]),t._v(" "),a("p",[t._v("​\t\t推流即将视频进行编码后通过rtmp协议以流文件形式推到服务器。\n​\t\trtmp 流需要视频格式为flv")]),t._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[t._v("ffmpeg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("re "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("stream_loop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"D:\\Documents\\前端实现直播\\live\\云墨.mp4"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("vcodec h264 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("an "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("f flv "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("s 1280x720 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("q 10 rtmp:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("116"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("62"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("243"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("134:1936/live/movie  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#不管是想rtmp直播或是hls直播都可以使用此指令循环推送Mp4视频模拟直播，视频为flv，编码为h264")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h4",{attrs:{id:"推流方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#推流方式"}},[t._v("#")]),t._v(" 推流方式")]),t._v(" "),a("p",[t._v("​\t\t在"),a("code",[t._v("window")]),t._v("和linux都可以通过"),a("code",[t._v("ffmpeg")]),t._v("工具进行视频的推流和拉流")]),t._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#window以rtmp协议推送视频到以nginx服务器")]),t._v("\nffmpeg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("re "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"D:\\Documents\\前端实现直播\\live\\云墨.mp4"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("vcodec h264 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("an "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("f flv "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("s 1280x720 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("q 10 rtmp:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("120"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("79"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("152"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("61:1935/live/test "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#live是服务器配置的rtmp应用名称，test是自定义推送的视频名称")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#ffmpeg拉取rtsp视频流以rtmp协议同送到服务器")]),t._v("\nffmpeg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("re "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("i rtsp:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("username:password@ip:port/xxxxxxx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("vcodec "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("copy")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("acodec "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("copy")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("f flv "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("y rtmp:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("120"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("79"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("152"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("61:1935/live/test\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#拉取rtsp流并推送，此命令要求rtsp流格式为 h264、acc编码")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#ffmpeg拉取window摄像头推送")]),t._v("\nffmpeg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("f dshow "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("i video="),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Integrated Camera"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("s 640x360 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("vcodec libx264 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("b:v 1000k   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ab 128k "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("f flv rtmp:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("120"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("79"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("152"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("61:1935/live/film\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h4",{attrs:{id:"nginx配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx配置"}},[t._v("#")]),t._v(" nginx配置")]),t._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[t._v("events "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    worker_connections  8192"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#最大连接数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nrtmp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\t\t\t\t\t\t\t  \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#配置rtmp协议设置")]),t._v("\n    server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\t\t\t\t\t   \t "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#声名rtmp实例")]),t._v("\n        listen 1935"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t\t\t "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#监听端口,若被占用,可以更改 rtmp默认1935")]),t._v("\n        chunk_size 4000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t\t  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#上传flv文件块儿的大小")]),t._v("\n        application live "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\t\t\t  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#此行声名了rtmp实例的一个应用名字为live，名字自定义")]),t._v("\n            live on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t\t\t "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#开启直播模式，即一对多广播")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 此配置开启rtmp直播，推流到 rtmp:ip:1935/live/test ")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 播放 rtmp:ip:1935/live/test")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        application vod_http  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\t\t\t  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#一个rtmp实例可声名多个应用")]),t._v("\n        \tplay http:120"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("79"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("152"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("61:80/vod  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#也可以通过rtmp协议转发http应用播放的视频，http应用播放的视频可以说服务器本地的视频或者http协议服务器接收的视频进行转发")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\t\t\t\t\t   \t "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#rtmp实例可以声名多个rtmp实例，只要端口不冲突")]),t._v("\n        listen 1936"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t\n        chunk_size 4000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        application video "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            live on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            play "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr/local/"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("video"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#//视频文件存放位置，访问方式rtmp://localhost:1935/video/xx.type")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#需要访问时，如 rtmp:ip:1936/video/test.mp4 ，在rtmp的vod应用下，读取play配置指定的视频文件，实现点播")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br")])]),a("blockquote",[a("ul",[a("li",[a("font",{attrs:{color:"orange"}},[t._v("rtmp://192.168.11.172:1936/live/home，1936说明访问RTMP的其中一个实例，然后请求live应用下的home资源，如果没有创建live的应用，就会提示rtmp://192.168.11.172:1936/live/home: I/O error/")])],1),t._v(" "),a("li",[a("font",{attrs:{color:"orange"}},[t._v("rtmp拉流和推流时，可以push video rtmp://192.168.11.172:1935/live/video（伪指令）进行推流，也可以 pull rtmp://192.168.11.172:1935/live/<视频名字及其格式>进行拉流")])],1)])]),t._v(" "),a("h3",{attrs:{id:"实现hls流直播"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现hls流直播"}},[t._v("#")]),t._v(" 实现hls流直播")]),t._v(" "),a("h4",{attrs:{id:"nginx配置-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx配置-2"}},[t._v("#")]),t._v(" nginx配置")]),t._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[t._v("rtmp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tserver "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tlisten:1935"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tchunk_size 4096"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tapplication hls "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\t\t\t\t\t\t     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#配置hls流，文件格式为m3u8")]),t._v("\n\t\t\tlive on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\n\t\t\thls on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t\t\t\t\t\t\t\t  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#开启hls流")]),t._v("\n\t\t\thls_path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr/local/nginx/hlsvideo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#hls的ts切片存放路径")]),t._v("\n\t\t\thls_fragment 2s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t\t\t\t\t  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 本地切片长度")]),t._v("\n\t\t\thls_playlist_length 23s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# HLS播放列表长度，ts切片在服务区存储时间，设得太短会还未读取就销毁\t")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#通过rtmp推流到服务器，服务区将视频流处理切片，存储到配置的路径")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# push rtmp:ip:1935/hls/test")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pull rtmp:ip:1935/hls/test ")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nhttp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tinclude mime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("types"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tdefault_type  application/octet-stream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tserver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tlisten 80"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#80也是http的默认端口")]),t._v("\n\t\tserver_name  localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\n\t\tlocation "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\troot   html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\tindex  index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("htm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\tadd_header Access-Control-Allow-Origin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\tadd_header Access-Control-Allow-Headers "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Origin, X-Requested-With, Content-Type, Accept"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\tadd_header Access-Control-Allow-Methods "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GET, POST, OPTIONS"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       \t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n       \tlocation "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("hls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#通过http协议转发hls流视频")]),t._v("\n\t\t\ttypes "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\tapplication/vnd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("apple"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mpegurl m3u8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t\n\t\t\t\tvideo/mp2t ts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t\talias "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr/local/nginx/hlsvideo/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#如果访问属性设为root视频的访问路径会变为 /usr/local/nginx/hlsvideo/hls")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# alis 路径的最后需加上 /")]),t._v("\n\t\t\texpires "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\tadd_header "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Access-Control-Allow-Origin: ''*'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br"),a("span",{staticClass:"line-number"},[t._v("40")]),a("br"),a("span",{staticClass:"line-number"},[t._v("41")]),a("br"),a("span",{staticClass:"line-number"},[t._v("42")]),a("br")])]),a("h3",{attrs:{id:"实现点播"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现点播"}},[t._v("#")]),t._v(" 实现点播")]),t._v(" "),a("h4",{attrs:{id:"rtmp流获取"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rtmp流获取"}},[t._v("#")]),t._v(" rtmp流获取")]),t._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[t._v("rtmp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tlisten 1936"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tchunk_size 4096"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tapplication vod "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tplay "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr/local/nginx/vod"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#存储点播视频")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#访问 rtmp://ip:1936/vod/test.mp4;")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#可以通过rtmp推送视频到此文件内实现点播，也可以直接拉文件在服务区内")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);