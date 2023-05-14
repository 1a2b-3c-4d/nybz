/**
* Created by Administrator on 2014/11/27.
*/
function saveStorage(id){
var data = document.getElementById(id).value;
var time = new Date().getTime();
localStorage.setItem(time,data);
alert('发布成功!');
loadStorage('msg');
}
function loadStorage(id){
var reselt = '';
for(var i=0;i<localStorage.length;i++)
{
var value = localStorage.getItem( localStorage.key(i));
var date = new Date();
date.setTime( localStorage.key(i));
var datestr = date.toGMTString();
reselt += '</p><td><hr><img src="op.png" width="30">￴ ￴￴ ￴ '+'用户'+i+'￴ ￴￴ ￴    ￴￴ ￴￴ ￴    ￴￴ ￴￴ ￴    ￴￴ ￴￴ ￴    ￴￴ ￴￴ ￴    ￴￴ ￴￴ ￴    ￴￴ ￴￴ ￴    ￴￴ ￴￴ ￴    ￴￴ ￴￴ ￴    ￴￴ ￴￴ ￴    ￴￴ ￴￴ ￴    ￴￴ ￴￴ ￴    ￴￴ ￴￴ ￴    ￴￴ ￴￴ ￴    ￴￴ ￴￴ ￴    ￴￴ ￴￴ ￴    ￴￴ ￴￴ ￴    ￴￴ ￴￴ ￴    ￴￴ ￴￴ ￴    ￴￴ ￴￴ ￴    ￴￴ ￴￴ ￴    ￴￴ ￴￴ ￴    ￴￴ ￴￴ ￴    ￴</p><td>'+ localStorage.getItem( localStorage.key(i)) +'</p></br>';
}
reselt += '';
var target = document.getElementById(id);
target.innerHTML = reselt;
}
function clearStorage(id){
localStorage.clear();
alert("内容已经被成功删除！");
loadStorage('msg');
}