console.log("0.1 + 0.2 = "+(0.1+0.2));
 
var re = /he/;//注意格式
var re2 = /he/i;//添加了i 忽略大小写

var str = "he";console.log("/he/ 测试 he: "+re.test(str));
           //大小写也得注意
var str2 = "HE";console.log("/he/ 测试HE: "+re.test(str2));console.log("/he/i 测试HE: "+re2.test(str2));
var str3 = "He";console.log("/he/ 测试He: "+re.test(str3));console.log("/he/i 测试He: "+re2.test(str3));
var str4 = "hE";console.log("/he/ 测试hE: "+re.test(str4));console.log("/he/i 测试he: "+re2.test(str4));
console.log("test()方法是只要包含就符合");
var str5 = "fulindh,eong";console.log("/he/ 测试 fulindh,eong : "+re.test(str5));
var str5 = "fulindheong";console.log("/he/ 测试 fulindheong : "+re.test(str5));
var str5 = "fulindheong";console.log("/he/ 测试 fuhelindong : "+re.test(str5));
console.log("+-----------------------------------------------------------------------------+");
console.log("脱字符(^)代表字符开始位置  ");
var reg = /^he/i;//脱字符(^)代表字符开始位置  
console.log("用  (/^he/i) test(heFulindong) "+reg.test("heFulindong"));
console.log("用  (/^he/i) test(HEFulindong) "+reg.test("HEFulindong"));
console.log("用  (/^he/i) test(HeFulindong) "+reg.test("HeFulindong"));
console.log("用  (/^he/i) test(hEFulindong) "+reg.test("hEFulindong"));
console.log("用  (/^he/i) test(He is hehaonan) "+reg.test("He is hehaonan"));
console.log("用  (/^he/i) test(it is heHeHEhaonan) "+reg.test("it is heHeHEhaonan")+" he/He/HE 不在 it is hehaonan 前面");
console.log("用  (/^he/i) test(FulindongHEheHehe) "+reg.test("FulindongHEheHehe")+ " he 不在Fulindong 前面");
console.log("+-----------------------------------------------------------------------------+");
var reg2 = /he$/i;
console.log("$表示字符结束位置  ");
console.log("用  (/he$/i) test(He is hehaonan) "+reg2.test("He is hehaonan"));
console.log("用  (/he$/i) test(He is hehaonan) "+reg2.test("is hehaonan he"));
console.log("用  (/he$/i) test(He is hehaonan) "+reg2.test("is hehaonansdfsdhe"));
var reg3 = /^he$/i;

console.log("+-----------------------------------------------------------------------------+");
console.log("用  (/^he$/i) test(he he) "+reg3.test("he he"));
console.log("用  (/^he$/i) test(he) "+reg3.test("he"));

console.log("+-----------------------------------------------------------------------------+");
console.log("\s匹配任何空白字符，包括空格、制表符、换页符等等");
var res = /\s/;
console.log("/\s/ test(fu lindong) "+ res.test("fu lindong"));
console.log("/\s/ test(fu lindong) "+ res.test("fu	lindong"));
console.log("/\s/ test(fu\\nlindong) "+ res.test("fu\nlindong"));
console.log("//[]匹配指定范围内的任意字符,这里将匹配英文字母,不区分大小写 ");
console.log("+-----------------------------------------------------------------------------+");
console.log("方括号用于查找某个范围内的字符：");
var rea_z = /^[a-z]/i;
var rea_z2 = /[a-z]$/i;
console.log("/^[a-z]/i test(fulindong123) "+ rea_z.test("fulindong123"));
console.log("/^[a-z]/i test(123fulindong) "+ rea_z.test("123fulindong"));
console.log("/[a-z]$/i test(fulindong123) "+ rea_z2.test("fulindong 1 2 3"));
console.log("/[a-z]$/i test(fulindon123g) "+ rea_z2.test("fulindong"));

console.log("+-----------------------------------------------------------------------------+");
console.log("字符+ +号表示字符至少要出现1次,字符* *号表示字符出现0次或者多次,字符{X} Y个字符序列的字符串,\\s表示空白字符,\\d表示一个数字 ,\\w单词字符 ,\\n 换行符");

var reV = /^[a-z]+\s+(\d+)$/i;//不管大小写, 字母至少出现一次，空格至少出现一次，数字至少出现一次  开头位置：字母空格数字   字母空格数字:结尾位置
console.log("/^[a-z]+\s+\d+$/i  test(Fulindong 123) "+reV.test("Fulindong 123"));
console.log("/^[a-z]+\s+\d+$/i  test(Fulindong 123 123) "+reV.test("Fulindong 123 123"));
console.log("/^[a-z]+\s+\d+$/i  test(Fulindong 123) "+reV.test("Fulindo  123")+" 以字母开头，中间空格，以数字结尾");

console.log("+-----------------------------------------------------------------------------+");
console.log("使用正则.exec(字符串)返回想要的")
var r = /\d+/g;//数字至少出现一次
var rg = /\d+/;//数字至少出现一次
console.log(r.exec("FLd 1 2"));
console.log(r.exec("123 sf 55")[0]);
console.log(rg.exec("123 sf 55")[0]);
console.log("用.查找单个字符,作为字符使用时需要转义");
var re=/^[a-z]+\s+(\d+)$/i;//这个(\d+)的括号是有用的
console.log(re.exec("fulindong 101")[0]);//[0]完整匹配
console.log(re.exec("fulindong 101")[1]);//[1]第一个子匹配

console.log("用()来创建子匹配 ");
var ree=/^([a-z]+)(\s+)(\d+)$/i;
console.log(ree.exec("fulindong 101")[0]);//[0]完整匹配
console.log(ree.exec("fulindong 101")[1]);//[0]完整匹配
console.log(ree.exec("fulindong 101")[2]);//[0]完整匹配
console.log(ree.exec("fulindong 101")[3]);//[0]完整匹配

var reee = /^[a-z]+\s+(\d+\.\d+)$/i;
console.log(reee.exec("Fld 1.10"));
console.log(reee.exec("Fld 1.10")[0]);
console.log(reee.exec("Fld 1.10")[1]);
console.log("exec 没匹配到时返回: "+reee.exec("Fld sdf1.10"));
console.log("\n");
console.log("+-------------------------------------------------------------------------+");
console.log("String对象的一些和正则表达式有关的方法 ");
console.log("+-------------------------------------------------------------------------+");
console.log("\n");
console.log("replace()用于替换字符串，replace 的第一个参数可以为正则表达式");
var sTr = "some money";
console.log("some money 的some被替换成mush :"+sTr.replace("some","much"));
var strd = /\s/;
console.log("some money 里面的空格被替换成狗正字  :"+sTr.replace(strd,"狗正字"));
var strd2 = /\s+/;//使用这个还是与strd一样的,因为正则表达式只会匹配一次,匹配到第一个空格就会推出,用匹配模式g	执行全局匹配
console.log("+-------------------------------------------------------------------------+");
var strd3 = /\s+/g;
var sRd = "I am FuLindong,your sdfs";
console.log("使用了 /\s+/g 对全局的所有空格进行了替换   ;"+sRd.replace(strd3,";"));

console.log("\n");
console.log("+-------------------------------------------------------------------------+");
console.log("split(正则或者某字符串)，对调用它的进行按照正则或者字符串进行分割，返回的是分割成的数组");
console.log("[^a-z]放在这里的^表示非这里的东西，[^abc]	查找任何不在方括号之间的字符。");

var strFld = "a_db_c";
var reFLD = /[^a-z]/;//非匹配a-z的字符
console.log("/[^a-z]/ 表示匹配非a-z 然后对这样匹配的使用split进行分割  "+strFld.split(reFLD));


console.log("+-------------------------------------------------------------------------+");
console.log("\n");
var z = "My age is 18.Golden age!";
var reod = /\d+/;
console.log("使用string 的方法search找出数字在： "+z.search(reod)+" 这个位置");
console.log("使用正则方法exec(匹配返回)找出数字： "+reod.exec(z));

console.log("+-------------------------------------------------------------------------+");
console.log("\n");

var strm = "My name is FLD.Hello Everyone!";
var rem = /[A-Z]/g;//匹配所有大写字母
console.log(strm.match(rem));
console.log("\\b	匹配单词边界。n*	匹配任何包含零个或多个 n 的字符串。");
var remb = /\b[a-z]*\b/gi;
var rembb = /\s/g;
str = "one two three four";
console.log(strm.match(remb));
//console.log(strm.match(rembb));
console.log("使用source返回正则"+rem.source);
console.log(remb.source);
console.log("+-------------------------------------------------------------------------+");
var fldre = /[a-z]$/m;
var fldstr = "ab\ncdef";
console.log(fldstr.replace(fldre,"#"));
//2017/11/6
re = /\d+(\D)\d+\1\d+/;
str = "2008-1-1";  
console.log(re.test(str));

re = /(\d)\s(\d)/;  
str = "1234 5678";  
console.log(str.replace(re,"21"));//在这个里面表示第一个分组1表示第一个分组1234,2则表示5678


//捕获分组(\w)，非捕获分组(?:\w)进行组合分组又不想对组合部分进行缓存
//懒惰x+?与贪婪x+









