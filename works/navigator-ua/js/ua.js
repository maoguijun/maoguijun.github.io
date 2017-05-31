(function(){
  console.dir(navigator);
  let platform = navigator.platform;
  let userAgent = (function(){
    let ua=navigator.userAgent;
      let browser="unknown",version="unknown";
      //先找出浏览器的内核
      if(ua.indexOf("MSIE")!=-1)
        browser="MSIE";
      else if(ua.indexOf("Firefox")!=-1)
        browser="Firefox";
      else if(ua.indexOf("OPR")!=-1)
        browser="OPR";
      else if(ua.indexOf("Chrome")!=-1)
        browser="Chrome";
      else if(ua.indexOf("Safari")!=-1)
        browser="Safari";
      //找出浏览器的version
      let i=ua.indexOf(browser);
      i+=browser.length+1;//i+browser的长度+1
      //选取ua中i位置开始的3位，转为浮点数，保存在version中
      version=parseFloat(ua.slice(i,i+3));
      return {"browser":browser,"version":version};
      
  })();
  document.querySelector("#show").innerHTML = `
  <p>您的浏览器系统是：${platform}</p>
  <p>您当前使用的浏览器是：${userAgent.browser}的${userAgent.version}版本</p>
  <p>浏览器优选语言是：${navigator.language}</p>
  <p>是否能正常上网：${navigator.onLine}</p>
  `
})();