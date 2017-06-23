 // window.addEventListener('keydown', moving);
 // window.addEventListener('keydown', shutting);
 //
 // var aMap;
 // var iPosTankX = 25;
 // var iPosTankY = 25;
 // var iXCnt = 26;
 // var iYCnt = 26;
 // var iRotate = 0;
 //
 // function moving(e){
 // 	var target = e.keyCode;
 // 	var move = document.querySelector('.move');
	// move.currentTime = 0.7;
 //
	// if(target === 37)
	// {
	// 	if(iPosTankX - 1 >= 0  && aMap[iPosTankY][iPosTankX - 1] === 0)
	// 	{
	// 		iRotate = 24;
	// 		iPosTankX--;
	// 		move.play();
	// 	}
 //
	// }else if(target === 38)
	// {
	// 	if(iPosTankY - 1 >= 0  && aMap[iPosTankY - 1][iPosTankX] === 0)
	// 	{
	// 		iRotate = 48;
	// 		iPosTankY--;
	// 		move.play();
	// 	}
	// }else if(target === 39)
	// {
	// 	if(iPosTankX + 1 < iXCnt  && aMap[iPosTankY][iPosTankX + 1] === 0)
	// 	{
	// 		iPosTankX++;
	// 		iRotate = 0;
	// 		move.play();
	// 	}
	// }else if(target === 40)
	// {
	// 	if(iPosTankY + 1 < iYCnt  && aMap[iPosTankY + 1][iPosTankX] === 0)
	// 	{
	// 		iRotate = 72;
	// 		iPosTankY++;
	// 		move.play();
	// 	}
	//
	// }
 //
 // }
 //
 //
 //
 // function shutting(e){
 // 	var target = e.keyCode;
 // 	var shut = document.querySelector('.gunshut');
 // 	if (target === 32){
 // 		shut.currentTime = 0;
 // 		shut.play();
 // 	}
 // }