function init() {

    var canvas=document.getElementById('canvas');
    var ctx=canvas.getContext('2d');
    ctx.strokeStyle="#f3b9d5";
    ctx.lineWidth=12;//设置或返回当前的线条宽度
    ctx.lineCap="round";        //向线条的每个末端添加圆形线帽

    //尾巴
    ctx.beginPath();
    ctx.moveTo(88,878);
    ctx.bezierCurveTo(88,901,116,903,131,893);
    ctx.bezierCurveTo(143,885,148,853,127,854);
    ctx.bezierCurveTo(105,854,106,903,153,893);
    ctx.stroke();

    //右手
    ctx.beginPath();
    ctx.moveTo(80,810);
    ctx.bezierCurveTo(108,784,168,762,202,756);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(78,776);
    ctx.bezierCurveTo(93,775,110,786,113,790);
    ctx.bezierCurveTo(115,794,108,811,106,815);
    ctx.stroke();

    //左手
    ctx.beginPath();
    ctx.moveTo(501,760);
    ctx.bezierCurveTo(524,762,597,790,614,811);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(586,818);
    ctx.bezierCurveTo(581,810,581,793,582,790);
    ctx.bezierCurveTo(583,788,591,776,614,780);
    ctx.stroke();

    //身体
    ctx.beginPath();
    ctx.moveTo(159,954);
    ctx.bezierCurveTo(162,733,260,648,356,649);
    ctx.bezierCurveTo(443,650,527,750,533,958);
    //ctx.moveTo(600,400);
    ctx.closePath();
    ctx.fillStyle='#e9565e';
    ctx.fill();
    ctx.strokeStyle="rgb(220,20,60)";
    ctx.stroke();

    //头
    ctx.beginPath();
    ctx.moveTo(326,413);
    ctx.bezierCurveTo(593,296,660,470,463,552);
    ctx.bezierCurveTo(576,687,362,787,266,736);
    ctx.bezierCurveTo(171,691,115,501,326,413);
    ctx.closePath();
    ctx.fillStyle='#feb0e0';
    ctx.fill();
    ctx.strokeStyle="#e39bd2";
    ctx.stroke();

    //鼻子
    ctx.beginPath();
    ctx.moveTo(480,380);
    ctx.bezierCurveTo(439,423,513,521,564,474);
    ctx.stroke();

    //右耳
    ctx.beginPath();
    ctx.moveTo(222,475);
    ctx.bezierCurveTo(122,413,218,336,258,443);
    ctx.stroke();
                
    //左耳
    ctx.beginPath();
    ctx.moveTo(298,423);
    ctx.bezierCurveTo(210,341,330,290,327,407);
    ctx.stroke();

    //嘴
    ctx.beginPath();
    ctx.moveTo(326,628);
    ctx.bezierCurveTo(356,689,460,654,449,594);
    ctx.strokeStyle="#d55f9b";
    ctx.stroke();

    //右脚
    ctx.beginPath();
    ctx.moveTo(235,1036);
    ctx.bezierCurveTo(347,996,392,1068,237,1049);
    ctx.strokeStyle="#d55f9b";
    ctx.closePath();
    ctx.fillStyle='#000000';
    ctx.fill();

    //左脚
    ctx.beginPath();
    ctx.moveTo(399,1037);
    ctx.bezierCurveTo(522,996,546,1066,400,1048);
    ctx.strokeStyle="#d55f9b";
    ctx.closePath();
    ctx.fillStyle='#000000';
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(240,967);
    ctx.bezierCurveTo(235,970,235,980,240,1028);
    ctx.strokeStyle="#f3b9d5";
    ctx.lineWidth=16;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(405,967);
    ctx.bezierCurveTo(400,970,400,980,405,1028);
    ctx.strokeStyle="#f3b9d5";
    ctx.lineWidth=16;
    ctx.stroke();
    //ctx.stroke();
    //ctx.
    //ctx.strokeStyle="blue";
    /*ctx.beginPath();
    ctx.moveTo(2.96,9.3);
    ctx.lineTo(3.05,9.61);
    ctx.moveTo(3.36,9.57);
    ctx.lineTo(3.58,9.48);
    ctx.stroke();*/
}