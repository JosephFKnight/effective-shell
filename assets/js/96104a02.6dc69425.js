"use strict";(self.webpackChunkeffective_shell=self.webpackChunkeffective_shell||[]).push([[7542],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,c=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(c,i(i({ref:t},h),{},{components:n})):a.createElement(c,i({ref:t},h))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5736:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],l={title:"Job Control",slug:"/part-2-core-skills/job-control"},s=void 0,p={unversionedId:"core-skills/job-control/index",id:"core-skills/job-control/index",title:"Job Control",description:"Job control is a feature of most shells which can often be somewhat complicated to work with. However, knowing the basics can help prevent you from getting yourself into a tangle and can from time to time make certain tasks a little easier.",source:"@site/docs/02-core-skills/09-job-control/index.md",sourceDirName:"02-core-skills/09-job-control",slug:"/part-2-core-skills/job-control",permalink:"/part-2-core-skills/job-control",editUrl:"https://github.com/dwmkerr/effective-shell/edit/main/docs/02-core-skills/09-job-control/index.md",tags:[],version:"current",frontMatter:{title:"Job Control",slug:"/part-2-core-skills/job-control"},sidebar:"anotherSidebar",previous:{title:"Fly on the Command Line",permalink:"/part-2-core-skills/fly-on-the-command-line"},next:{title:"Understanding Commands",permalink:"/part-2-core-skills/understanding-commands"}},h={},u=[{value:"What Is Job Control?",id:"what-is-job-control",level:2},{value:"The Problem",id:"the-problem",level:2},{value:"Solution 1: Start the Server in the Background",id:"solution-1-start-the-server-in-the-background",level:3},{value:"Solution 2: Move the Server to the Background",id:"solution-2-move-the-server-to-the-background",level:3},{value:"Moving Background Jobs to the Foreground",id:"moving-background-jobs-to-the-foreground",level:2},{value:"Cleaning Up Jobs",id:"cleaning-up-jobs",level:2},{value:"Why You Shouldn&#39;t Use Jobs",id:"why-you-shouldnt-use-jobs",level:2},{value:"The Most Key Takeaways",id:"the-most-key-takeaways",level:2},{value:"Alternatives to Jobs",id:"alternatives-to-jobs",level:2},{value:"Quick Reference",id:"quick-reference",level:2}],m={toc:u};function d(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Job control")," is a feature of most shells which can often be somewhat complicated to work with. However, knowing the basics can help prevent you from getting yourself into a tangle and can from time to time make certain tasks a little easier."),(0,r.kt)("h2",{id:"what-is-job-control"},"What Is Job Control?"),(0,r.kt)("p",null,"Let's start with an example. I am building a simple web page. It has one ",(0,r.kt)("inlineCode",{parentName:"p"},"index.html")," file, one ",(0,r.kt)("inlineCode",{parentName:"p"},"styles.css")," file, and one ",(0,r.kt)("inlineCode",{parentName:"p"},"code.js")," file. The ",(0,r.kt)("inlineCode",{parentName:"p"},"index.html")," file looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<html>\n  <head>\n    <title>My New Project</title>\n    <link rel="stylesheet" type="text/css" href="styles.css">\n    <script src="code.js"><\/script>\n  </head>\n  <body>\n    \x3c!-- Snip... --\x3e\n  </body>\n</html>\n')),(0,r.kt)("p",null,"Opening the file in a browser doesn't quite work, as it won't load the code or the styles. We need a web server to serve styles and code."),(0,r.kt)("p",null,"A super-useful one-liner to run a web server on any machine with Python installed is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python -m SimpleHTTPServer 3000\n")),(0,r.kt)("p",null,"In fact, this is so useful that I normally ",(0,r.kt)("em",{parentName:"p"},"alias")," this command, so that I can just type ",(0,r.kt)("inlineCode",{parentName:"p"},"serve"),". We'll see aliases in a later chapter."),(0,r.kt)("p",null,"Make sure you have the samples folder downloaded."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Downloading the Samples")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Run the following command in your shell to download the samples:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl effective.sh | sh\n")))),(0,r.kt)("p",null,"Now run the following commands to open the webpage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ cd ~/effective-shell/websites/simple\n$ python -m SimpleHTTPServer 3000\n")),(0,r.kt)("p",null,"For now, if we run this command, then we can open the webpage in a browser, with the styles and code loaded:"),(0,r.kt)("img",{alt:"Screenshot: Website",src:n(168).Z,width:"600"}),(0,r.kt)("p",null,"We can also see that the server has served the HTML, JavaScript, and CSS files, this is clear from the output of the Python command we ran:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ python -m SimpleHTTPServer 3000\n\nServing HTTP on 0.0.0.0 port 3000 ...\n127.0.0.1 - - [08/Jan/2021 16:33:40] "GET / HTTP/1.1" 200 -\n127.0.0.1 - - [08/Jan/2021 16:33:40] "GET /styles.css HTTP/1.1" 200 -\n127.0.0.1 - - [08/Jan/2021 16:33:40] "GET /code.js HTTP/1.1" 200 -\n127.0.0.1 - - [08/Jan/2021 16:33:40] code 404, message File not found\n127.0.0.1 - - [08/Jan/2021 16:33:40] "GET /favicon.ico HTTP/1.1" 404 -\n')),(0,r.kt)("p",null,"All well and good so far. But if you try and use the shell to do something else, you will encounter a problem, let\u2019s take a look."),(0,r.kt)("h2",{id:"the-problem"},"The Problem"),(0,r.kt)("p",null,"Let's say we want to now continue using our shell, maybe to edit the website with a terminal editor like Vim or Emacs, or we want to zip up the site, or just run any shell command",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,r.kt)("p",null,"We have a problem. The ",(0,r.kt)("inlineCode",{parentName:"p"},"python")," process is still running - it's serving the website. Our shell is essentially useless, until we stop the server. See what happens when I try to edit a file:"),(0,r.kt)("img",{alt:"Demo: Blocked Shell",src:n(2576).Z,width:"600"}),(0,r.kt)("p",null,"In the example above, I try to run ",(0,r.kt)("inlineCode",{parentName:"p"},"vi"),", but nothing is happening. Standard input is not being read by the server and not being interpreted by the shell."),(0,r.kt)("p",null,"I have to kill the server by hitting ",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl+C"),". This sends a ",(0,r.kt)("inlineCode",{parentName:"p"},"SIGINT")," signal (which tells the command to stop). We saw signals briefly in ",(0,r.kt)("a",{parentName:"p",href:"/part-1-transitioning-to-the-shell/become-a-clipboard-gymnast/"},"Chapter 4 - Becoming a Clipboard Gymnast")," and we'll see more of them in as we continue. Now I need to clear my screen to get rid of all of the error messages, then start again."),(0,r.kt)("p",null,"This is obviously not optimal. Let's look at some solutions."),(0,r.kt)("h3",{id:"solution-1-start-the-server-in-the-background"},"Solution 1: Start the Server in the Background"),(0,r.kt)("p",null,"In most shells, you can run a command and instruct the shell to run it in the ",(0,r.kt)("em",{parentName:"p"},"background"),". To do this, you end the line with an ampersand. Here's how the example would look in this case:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ python -m SimpleHTTPServer 3000 &\n[1] 7025\n\n$ Serving HTTP on 0.0.0.0 port 3000 ...\n")),(0,r.kt)("p",null,"By ending the command with an ",(0,r.kt)("inlineCode",{parentName:"p"},"&")," ampersand symbol, we instruct the shell to run the command as a ",(0,r.kt)("em",{parentName:"p"},"background job"),". This means that our shell is still functional. The shell has also notified us that this command is running as a background job with a specific ",(0,r.kt)("em",{parentName:"p"},"job number"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ python -m SimpleHTTPServer 3000 &\n[1] 19372\n")),(0,r.kt)("p",null,"In slightly obtuse language, the shell has informed us that it has started a job in the background, with job number ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," and that this job is currently handling the process with ID ",(0,r.kt)("inlineCode",{parentName:"p"},"19372"),"."),(0,r.kt)("p",null,"The ampersand solution is a fairly common pattern used in day-to-day work. The process is in the background and our shell is available for us to use as normal, the web server will continue to run in the background."),(0,r.kt)("h3",{id:"solution-2-move-the-server-to-the-background"},"Solution 2: Move the Server to the Background"),(0,r.kt)("p",null,"Let's say you forgot to start the command in the background. Most likely in this case you'd kill the server with ",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl+C")," and then start it again with the ",(0,r.kt)("inlineCode",{parentName:"p"},"&")," option. However, what if this was a large file download or a task you didn't want to abort?"),(0,r.kt)("p",null,"In the example below, we'll move the job to the background:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ python -m SimpleHTTPServer 3000\nServing HTTP on 0.0.0.0 port 3000 ...\n^Z\n[1]  + 7657 suspended  python -m SimpleHTTPServer 3000\n")),(0,r.kt)("p",null,"The process is currently in the foreground, so my shell is inactive. Hitting ",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl+Z")," sends a 'suspend' signal to the process",(0,r.kt)("sup",{parentName:"p",id:"fnref-3"},(0,r.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),", pausing it and moving it to the background."),(0,r.kt)("p",null,"Let's dissect this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ python -m SimpleHTTPServer 3000\nServing HTTP on 0.0.0.0 port 3000 ...\n127.0.0.1 - - [03/Jun/2019 13:38:45] "GET / HTTP/1.1" 200 -\n^Z\n[1]  + 21268 suspended  python -m SimpleHTTPServer 3000\n')),(0,r.kt)("p",null,"The shell echos as I type, so we see ",(0,r.kt)("inlineCode",{parentName:"p"},"^Z")," (i.e., the ",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl+Z")," chord I entered). The shell responds by moving the process into a background job and suspending it."),(0,r.kt)("p",null,"The key here is that it is ",(0,r.kt)("em",{parentName:"p"},"suspended"),". The process is paused. So the web server is no longer serving. If you are following with the sample, reload your browser. The webpage fails to load, as the server process is not able to respond to requests."),(0,r.kt)("p",null,"To ",(0,r.kt)("em",{parentName:"p"},"continue")," the job, in the background, we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"bg")," ('background') command, with a ",(0,r.kt)("em",{parentName:"p"},"job identifier")," (which always starts with a ",(0,r.kt)("inlineCode",{parentName:"p"},"%")," symbol - we'll see why soon) to tell the shell to continue the job:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ bg %1\n[1]  + 21268 continued  python -m SimpleHTTPServer 3000\n")),(0,r.kt)("p",null,"The shell lets us know the job is being continued, and if we load the webpage again, the content is shown as expected."),(0,r.kt)("p",null,"As a final check, we run the ",(0,r.kt)("inlineCode",{parentName:"p"},"jobs")," command to see what jobs the shell is running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ jobs\n[1]  + running    python -m SimpleHTTPServer 3000\n")),(0,r.kt)("p",null,"And there you have it - our server is running as a background job. This is exactly what we would see if we run ",(0,r.kt)("inlineCode",{parentName:"p"},"jobs")," after starting the server with an ",(0,r.kt)("inlineCode",{parentName:"p"},"&")," at the end. In fact, using an ",(0,r.kt)("inlineCode",{parentName:"p"},"&")," is perhaps an easier way to remember how to continue a suspended job:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ %1 &\n[1]  + 21268 continued  python -m SimpleHTTPServer 3000\n")),(0,r.kt)("p",null,"In the same way ending a command with ",(0,r.kt)("inlineCode",{parentName:"p"},"&")," runs it in the background, ending a job identifier with ",(0,r.kt)("inlineCode",{parentName:"p"},"&")," ",(0,r.kt)("em",{parentName:"p"},"continues")," it in the background."),(0,r.kt)("p",null,"There is at least one more way to move a job to the background",(0,r.kt)("sup",{parentName:"p",id:"fnref-4"},(0,r.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4")),", but I have not yet found it useful in any scenarios, and it is overly complex to explain. See the footnote for details if you are interested."),(0,r.kt)("h2",{id:"moving-background-jobs-to-the-foreground"},"Moving Background Jobs to the Foreground"),(0,r.kt)("p",null,"If you have a job in the background, you can bring it back to the foreground with the ",(0,r.kt)("inlineCode",{parentName:"p"},"fg")," ('foreground') command. Let's show the jobs, with the ",(0,r.kt)("inlineCode",{parentName:"p"},"jobs")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ jobs\n[1]  + running    python -m SimpleHTTPServer 3000\n")),(0,r.kt)("p",null,"Here I have a background job running a server. Any one of the following commands will bring it back to the foreground:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"fg %1   # Explicitly bring Job 1 into the foreground\n\n%1      # ...or in shorthand, just enter the job id...\n\nfg      # ...if not given an id, fg and bg assume the most recent job.\n")),(0,r.kt)("p",null,"Now the job is in the foreground, and you can interact with the process again however you like."),(0,r.kt)("h2",{id:"cleaning-up-jobs"},"Cleaning Up Jobs"),(0,r.kt)("p",null,"You might realise you cannot continue what you are doing because an old job is ",(0,r.kt)("em",{parentName:"p"},"still running"),". Here's an example:"),(0,r.kt)("img",{alt:"Demo: Cleaning Up Jobs",src:n(9802).Z,width:"600"}),(0,r.kt)("p",null,"I tried to run my web server, but there was still one running as a background job. The server failed to start because the port is in use."),(0,r.kt)("p",null,"To clean it up, I run the ",(0,r.kt)("inlineCode",{parentName:"p"},"jobs")," command to list the jobs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ jobs\n[1]  + suspended  python -m SimpleHTTPServer 3000\n")),(0,r.kt)("p",null,"There's my old web server. Note that even though it is suspended, it'll still be blocking the port it is serving on",(0,r.kt)("sup",{parentName:"p",id:"fnref-5"},(0,r.kt)("a",{parentName:"sup",href:"#fn-5",className:"footnote-ref"},"5")),". The process is paused, but it is still holding onto all of the resources it is using."),(0,r.kt)("p",null,"Now that I know the job identifier (",(0,r.kt)("inlineCode",{parentName:"p"},"%1")," in this case), I can kill the job:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ kill %1\n[1]  + 22843 terminated  python -m SimpleHTTPServer 3000\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"This is why job identifiers start with a percentage sign!")," The ",(0,r.kt)("inlineCode",{parentName:"p"},"kill")," command I have used is not a special job control command (like ",(0,r.kt)("inlineCode",{parentName:"p"},"bg")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"fg"),"). It is the normal ",(0,r.kt)("inlineCode",{parentName:"p"},"kill")," command, which terminates a process. But shells that support job control can normally use a job identifier in place of a ",(0,r.kt)("em",{parentName:"p"},"process identifier"),". So rather than working out what the process identifier is that I need to kill, I can just use the job identifier",(0,r.kt)("sup",{parentName:"p",id:"fnref-6"},(0,r.kt)("a",{parentName:"sup",href:"#fn-6",className:"footnote-ref"},"6")),"."),(0,r.kt)("h2",{id:"why-you-shouldnt-use-jobs"},"Why You Shouldn't Use Jobs"),(0,r.kt)("p",null,"Avoid jobs. They are not intuitive to interface with and they suffer from some challenges. "),(0,r.kt)("p",null,"The most obvious one is that all jobs write to the same output, meaning you can quickly get garbled output like this:"),(0,r.kt)("img",{alt:"Screenshot: Garbled Output",src:n(9321).Z,width:"600"}),(0,r.kt)("p",null,"This is what happens when I run a job, which just outputs text every second. It's in the background, but it's printing all over my commands. Even running the ",(0,r.kt)("inlineCode",{parentName:"p"},"jobs")," command to try and find the job to stop it is difficult."),(0,r.kt)("p",null,"Input is even more complex. If a job is ",(0,r.kt)("em",{parentName:"p"},"running")," in the background, but requires input, it will be ",(0,r.kt)("em",{parentName:"p"},"silently suspended"),". This can cause confusion."),(0,r.kt)("p",null,"Jobs ",(0,r.kt)("em",{parentName:"p"},"can")," be used in scripts but must be done so with caution and could easily confuse a consumer of the script if they leave background jobs hanging around, which cannot be easily cleaned up",(0,r.kt)("sup",{parentName:"p",id:"fnref-7"},(0,r.kt)("a",{parentName:"sup",href:"#fn-7",className:"footnote-ref"},"7")),"."),(0,r.kt)("p",null,"Handling errors and exit codes for jobs can be problematic, causing confusion, poor error handling, or overly complex code."),(0,r.kt)("p",null,"If jobs should be avoided, why discuss them at all? Well sometimes you move things into the background by mistake, sometimes it ",(0,r.kt)("em",{parentName:"p"},"can")," be useful to quickly shift a download or slow command into the background, and also if you are going to avoid something it's good to know why! And the challenge of managing multiple units of work on a computer has been around for a long, long time, with jobs as one of the tools in the toolkit to deal with the challenge."),(0,r.kt)("p",null,"But given I'd suggest to avoid jobs, let's summarise with the most key takeaways and some alternatives."),(0,r.kt)("h2",{id:"the-most-key-takeaways"},"The Most Key Takeaways"),(0,r.kt)("p",null,"If there are two things to take away, they would be:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you have started running a command in the foreground, and you don't want to stop it and would rather move it to the background, hit ",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl+Z"),'. Then Google "job control".')),(0,r.kt)("p",null,"And:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you think there is a job running in the background, and it is messing with your screen, type ",(0,r.kt)("inlineCode",{parentName:"p"},"fg")," to bring it to the front and kill it with ",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl+C"),". Repeat as needed!")),(0,r.kt)("p",null,"In either case, if you need to do something more subtle, you can return to this reference. But the first command should allow you to get your shell back while you work out how to continue the job, and the second should kill a background job that is messing with your screen."),(0,r.kt)("h2",{id:"alternatives-to-jobs"},"Alternatives to Jobs"),(0,r.kt)("p",null,"If you are using any kind of modern terminal such as iTerm, Terminal or the GNOME Terminal, just open a new tab or split! Much easier."),(0,r.kt)("p",null,"The benefit to this is that each tab gets its own standard input and output, so there's no risk of overwriting. And of course you can hide/reveal/rearrange the tabs however you like."),(0,r.kt)("p",null,"The traditional alternative to a job for an operator who simply wants more than one thing going on at once would be a ",(0,r.kt)("em",{parentName:"p"},"terminal multiplexer"),", such as ",(0,r.kt)("inlineCode",{parentName:"p"},"screen")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"tmux"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"terminal-multiplexer",src:n(1681).Z,width:"827",height:"421"})),(0,r.kt)("p",null,"Multiplexers work in a very similar way to a modern graphical terminal - they manage many shell instances. But there are some differences."),(0,r.kt)("p",null,"Modern terminals, such as iTerm, tend to have more intuitive GUIs and a lot of features. Multiplexers can be stateful - and manage work even when you close the shell (allowing you to 're-attach' later. We can also run them over SSH sessions to manage complex operations on remote machines. They run a client-server model, meaning many people can work with many multiplexed processes (and they can persist beyond sessions)."),(0,r.kt)("p",null,"My personal preference is both - I use a modern terminal ",(0,r.kt)("em",{parentName:"p"},"and")," run everything inside it in ",(0,r.kt)("inlineCode",{parentName:"p"},"tmux"),", which is a very common multiplexer (and in some ways the spiritual successor to ",(0,r.kt)("inlineCode",{parentName:"p"},"screen"),", an older multiplexer). We'll look at both of these options in later chapters."),(0,r.kt)("h2",{id:"quick-reference"},"Quick Reference"),(0,r.kt)("p",null,"You might find that jobs are useful, or you might find that they are not. Either way, here's a quick reference of some common commands:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Command"),(0,r.kt)("th",{parentName:"tr",align:null},"Usage"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"command &")),(0,r.kt)("td",{parentName:"tr",align:null},"Run the command as a background job.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<Ctrl+Z>")),(0,r.kt)("td",{parentName:"tr",align:null},"Move the current process into a background job, suspended.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"jobs")),(0,r.kt)("td",{parentName:"tr",align:null},"List all jobs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fg %1")),(0,r.kt)("td",{parentName:"tr",align:null},"Move background job number 1 into the foreground.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bg %1")),(0,r.kt)("td",{parentName:"tr",align:null},"Continue background job number 1.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"kill %1")),(0,r.kt)("td",{parentName:"tr",align:null},"Terminate job number 1.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"wait %1")),(0,r.kt)("td",{parentName:"tr",align:null},"Block until job number 1 exits.")))),(0,r.kt)("p",null,"If you want to find out more about the gory details of jobs, the best place to start is the ",(0,r.kt)("a",{parentName:"p",href:"https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html#Job-Control"},"Bash Manual - Job Control Section"),", or the 'Job Control' section of your preferred shell's manual. On Bash you can find this by using ",(0,r.kt)("inlineCode",{parentName:"p"},"man bash")," and searching for the text ",(0,r.kt)("inlineCode",{parentName:"p"},"JOB CONTROL"),". You can find out more about how to get help in ",(0,r.kt)("a",{parentName:"p",href:"../../part-1-transitioning-to-the-shell/getting-help"},"Chapter 5 - Getting Help")),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"If you are not a heavy shell user, this might seem unlikely. But if you do a lot of work in shells, such as sysadmin, devops, or do your coding from a terminal, this happens all the time!",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-3"},"Technically, ",(0,r.kt)("inlineCode",{parentName:"li"},"SIGTSTP")," signal - which is 'TTY stop'. If you have always wondered about the 'TTY' acronym, check the chapter, ",(0,r.kt)("a",{parentName:"li",href:"/part-2-core-skills/understanding-commands"},"Interlude: Understanding the Shell"),".",(0,r.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-4"},"The alternative method is to use ",(0,r.kt)("inlineCode",{parentName:"li"},"Ctrl+Y"),", which will send a ",(0,r.kt)("em",{parentName:"li"},"delayed interrupt"),", which will continue to run the process until it tries to read from ",(0,r.kt)("inlineCode",{parentName:"li"},"stdin"),". At this point, the job is suspended and the control given to the shell. The operator can then use ",(0,r.kt)("inlineCode",{parentName:"li"},"bg")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"kill")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"fg")," to either move to the background, stop the process, or keep in the foreground as preferred. See: ",(0,r.kt)("a",{parentName:"li",href:"https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html#Job-Control"},"https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html#Job-Control"),(0,r.kt)("a",{parentName:"li",href:"#fnref-4",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-5"},"Another super-useful snippet: ",(0,r.kt)("inlineCode",{parentName:"li"},"lsof -i -P -n | grep 8000")," to find any process that has a given port open. Another one for the aliases chapter!",(0,r.kt)("a",{parentName:"li",href:"#fnref-5",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-6"},"There are times this is needed. If a job runs ",(0,r.kt)("em",{parentName:"li"},"many processes")," - for example, by running a pipeline - the process identifier will change as the command moves from one stage of the pipeline to the next. The job identifier will remain constant. Remember, a job is a shell ",(0,r.kt)("em",{parentName:"li"},"command"),", so could run many processes.",(0,r.kt)("a",{parentName:"li",href:"#fnref-6",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-7"},"To see how bad this can be, create a script that starts jobs, then run it. Then run the ",(0,r.kt)("inlineCode",{parentName:"li"},"jobs")," command to see what is running. The output might surprise you!",(0,r.kt)("a",{parentName:"li",href:"#fnref-7",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0},2576:function(e,t,n){t.Z=n.p+"assets/images/blocked-shell-206a1fc7743e30d0246b56500f4174a7.gif"},9802:function(e,t,n){t.Z=n.p+"assets/images/kill-job-d8d73a1a6b48f114c7a245978d9afa34.gif"},9321:function(e,t,n){t.Z=n.p+"assets/images/output-c59dac752d60566d856c3f01b4ef0ffb.png"},168:function(e,t,n){t.Z=n.p+"assets/images/website-screenshot-9a8faefcf54b8b8328422cca83a46c9e.png"},1681:function(e,t,n){t.Z=n.p+"assets/images/terminal-multiplexer-8708ba9a77b0dfd04fb93c617b4b755e.gif"}}]);