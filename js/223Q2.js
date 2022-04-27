const write = [{
    "quotes" : "자존심은 어리석은 자의 소유물 이다",
},
{
    "quotes" : "후회를 최대한 이용하라. 깊이 후회한다는 것은 새로운 삶을 산다는 것이다. ",
},
{
    "quotes" : "죽자고 하면 살고 살자고 하면 죽을것 이다.",
},
{
    "quotes" : "일찍 일어나는 새가 벌레를 사냥하는 법",
},
{
    "quotes" : "엎지른 물은 주워 담을수 없어",
},
{
    "quotes" : "배신은 상처에 소금을 뿌린것 만큼 쓰라리다",
},
{
    "quotes" : "나아갈 길은 내 스스로가 선택하는것 ",
},
{
    "quotes" : "빛이 없으면 그림자도 없는법"
}]
let Ob = (Math.floor(Math.random() * write.length)); 
console.log(write[Ob].quotes);
document.write(String.fromCharCode(34) + write[Ob].quotes + String.fromCharCode(34));
