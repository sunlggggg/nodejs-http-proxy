var http = require('http')
var opt = {
 host:'111.177.200.240',
 port:'39654',
 method:'GET',//这里是发送的方法
 path:'https://bifen4pc.qiumibao.com/json/list_code.htm?09133',   
 headers:{ 
  'Accept': '*/*',
  'Accept-Encoding': 'gzip, deflate, br',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-GB;q=0.8,en;q=0.7',
  'Connection':'keep-alive',
  'Cookie': 'UM_distinctid=162c2ba1efe1ab-016ea4214c9b28-b34356b-100200-162c2ba1f01bc; Hm_lvt_3212511d67978fc36e99a8ba103a1cc8=1523685401; Hm_lpvt_3212511d67978fc36e99a8ba103a1cc8=1523785888',
  'Host': 'pl.zhibo8.cc',
  'Referer': 'https://www.zhibo8.cc/nba/2018/0415-xfa-jijin.htm',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
    }
}
//以下是接受数据的代码
var body = '';
var req = http.request(opt, function(res) {
  console.log("Got response: " + res.statusCode);
  res.on('data',function(d){
  body += d;
 }).on('end', function(){
  console.log(res.headers)
  console.log(body)
 });

}).on('error', function(e) {
  console.log("Got error: " + e.message);
})
req.end();