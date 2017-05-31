/*
* @Author: Administrator
* @Date:   2017-05-01 17:58:23
* @Last Modified by:   Administrator
* @Last Modified time: 2017-05-08 10:18:00
*/

'use strict';
$(function(){
	
	let r=$('.right-right')[0];
	let xiala=$('.gouwu',r)[0];
	r.onmouseover=function(){
		this.style.background='#fff';
		xiala.style.height='98px';
	}
	r.onmouseout=function(){
		this.style.background='#424242';
		xiala.style.height='0px';
	}
	

	
	let bigbox=$('.bigbox')[0];
	let item=$('.item',bigbox);
	let xialakuang=document.querySelector('.xialakuang');
	let xiala1=document.querySelectorAll('.xialakuang .xiala11');
	
	for(let i=0;i<item.length-2;i++){
		item[i].onmouseenter=function(){
			xialakuang.style.height='230px';
			xialakuang.style['border-top']='1px solid #E0E0E0';
			for(let j=0;j<xiala1.length;j++){
				xiala1[j].style.display='none';
			}
			xiala1[i].style.display='block';
		}
		item[i].onmouseleave=function(){
			xialakuang.style.height='0';
			xialakuang.style['border-top']='0';
	  }}
	
	


	let sousuo=$('.sousuo')[0];
	let btn=$('.btn')[0]; 
	let spans=$('.icon-sousuo_sousuo')[0];
	let b=$('.b');
	sousuo.onmouseover=function(){
		this.style.border='1px solid #B0B0B0';
		btn.style.border='1px solid #B0B0B0';
		btn.style['border-left']='0px';
	}
	sousuo.onmouseout=function(){
		this.style.border='1px solid #E0E0E0';
		btn.style.border='1px solid #E0E0E0';
		btn.style['border-left']='0px';
	}
	sousuo.onclick=function(){
		this.style.border='1px solid #FF6700';
		btn.style.border='1px solid #FF6700';
		btn.style['border-left']='0px';
		for(let i=0;i<b.length;i++){
			b[i].style.display='none';
		}
	}
	btn.onmouseover=function(){
		this.style.background='#FF6700';
		this.style.border='0px';
		sousuo.style.border='1px solid #B0B0B0';
		sousuo.style['border-right']='0px';
		spans.style.color='#fff';
	}
	btn.onmouseout=function(){
		this.style.background='#fff';
		this.style.border='1px solid #E0E0E0';
		sousuo.style.border='1px solid #E0E0E0';
		sousuo.style['border-right']='0px';
		spans.style.color='#616161';
	}
	spans.onmouseover=function(){
		btn.style.background='#FF6700';
		btn.style.border='0px';
		sousuo.style.border='1px solid #B0B0B0';
		sousuo.style['border-right']='0px';
		spans.style.color='#fff';
	}
	spans.onmouseout=function(){
		btn.style.background='#fff';
		btn.style.border='1px solid #E0E0E0';
		sousuo.style.border='1px solid #E0E0E0';
		sousuo.style['border-right']='0px';
		spans.style.color='#616161';
	}
	



	let banner=$('.banner')[0],
		box=$('.box')[0],
		lis=$('li',box),
		yuan=$('.yuan')[0],
		l=$('li',yuan),
		span1=$('span',banner),
		current=0,
		next=0,
		times=setInterval(move,5000),
		imgs=[],
		flag=true;
	// 获取图片元素
	for(let i=0;i<lis.length;i++){
		imgs.push($('img',lis[i])[0]);
	}
	banner.onmouseenter=function(){
		clearInterval(times);
	}
	banner.onmouseleave=function(){
		times=setInterval(move,2000);
	}
	// 点击效果
	for(let i=0;i<l.length;i++){
		l[i].onclick=function(){
			for(let j=0;j<imgs.length;j++){
				imgs[j].style.opacity='0';
				l[j].className='';
			}
			l[i].className='hot';
			animate(imgs[current],{opacity:0},800,Tween.Quad.easeOut);
			animate(imgs[i],{opacity:1},800,Tween.Quad.easeIn);
			current=next=i;
		}
	}
	for(let i=0;i<span1.length;i++){
		span1[i].onmouseenter=function(){
			this.style.background='rgba(0, 0, 0, 0.3)';
			this.style.color='#fff';
		}

		span1[i].onmouseleave=function(){
			this.style.background='rgba(0, 0, 0, 0)';
			this.style.color='#A4A4A4';
		}
	}
	// 上一页
	span1[0].onclick=function(){
		if(!flag){
			return ;
		}
		flag=false;
		moveDown();
	}
	// 下一页
	span1[1].onclick=function(){
		if(!flag){
			return ;
		}
		flag=false;
		move();
	}
	// 初始化
	for(let i=0;i<lis.length;i++){
		if(i==0){
			continue;
		}
		imgs[i].style.opacity='0';
	}
	function move(){
		next++;
		if(next>=imgs.length){
			next=0;
		}
		l[current].className='';
		l[next].className='hot';
		// 就位
		animate(imgs[current],{opacity:0},800,Tween.Quad.easeOut);
		animate(imgs[next],{opacity:1},800,Tween.Quad.easeIn,function(){
			flag=true;
		});
		current=next;
		
	}
	function moveDown(){
		next--;
		if(next<0){
			next=lis.length-1;
		}
		l[current].className='';
		l[next].className='hot';
		// 就位
		animate(imgs[current],{opacity:0},800,Tween.Quad.easeOut);
		animate(imgs[next],{opacity:1},800,Tween.Quad.easeIn,function(){
			flag=true;
		});
		current=next;
		
	}
	


	var fenlei=$('.fenlei')[0];
	var liss=$('.liss',fenlei);
	var fenleixialakuang=[];
	for(let i=0;i<liss.length;i++){
		fenleixialakuang.push($('.fenleixialakuang',liss[i])[0]);
	}
	for(let i=0;i<liss.length;i++){
		liss[i].onmouseover=function(){
			fenleixialakuang[i].style.display='block';
		}
		liss[i].onmouseout=function(){
			fenleixialakuang[i].style.display='none';
		}

	}
	let uGuangR=$('.uGuangR')[0];
	let gg=$('li',uGuangR),
		currentU=0,
		nextU=0;
	for(let i=0;i<gg.length;i++){
		gg[i].onmouseenter=function(){
			this.className='shadow';
		}
		gg[i].onmouseleave=function(){
			this.className='';
		}
	}
	



	let products=$('.products')[0],
		more=$('.more')[0];
	moveLiebiao(products,more);
	function moveLiebiao(obj,obj1){
		let	pro=$('.pro',obj),
			ulWidth=parseInt(getComputedStyle(obj, null).width),
			ttt,
			aa=$('a',obj1),
			flag2=false,flag3=true;
		// 初始化
		for(let i=0;i<pro.length;i++){
			if(i==0){
				continue;
			}
			pro[i].style.left=ulWidth+'px';
		}
		ttt=setInterval(judge, 5000);
		for(let i=0;i<aa.length;i++){
			aa[i].onmouseenter=function(){
				clearInterval(ttt);
			}
			aa[i].onmouseleave=function(){
				ttt=setInterval(judge, 5000);
			}
		}
		
		
		aa[0].onclick=function(){
			if(flag2){
				if(!flag3){
					return ;
				}
				translateUl();
				flag3=false;
			}
		}
		aa[1].onclick=function(){
			if(!flag2){
				if(!flag3){
					return ;
				}
				translateU();
				flag3=false;
			}
		}
		pro.onmouseenter=function(){
			clearInterval(ttt);
		}
		pro.onmouseleave=function(){
			ttt=setInterval(judge, 5000);
		}
		
		function judge(){
			if(currentU==0){
				translateU();
			}else if(currentU==1){
				translateUl();
			}
		}
		function translateU(){
			nextU++;
			console.log(nextU)
			if(nextU>=pro.length){
				nextU=0;
			}
			pro[nextU].style.left=ulWidth+'px';
			animate(pro[currentU],{left:-ulWidth},600);
			animate(pro[nextU],{left:0},600,function(){
				flag3=true;
				aa[1].classList.remove('s');
				aa[0].classList.add('s');
				flag2=true;
			});
			currentU=nextU;
		}
		function translateUl(){
			nextU--;
			console.log(nextU)
			if(nextU<0){
				nextU=pro.length-1;
			}
			pro[nextU].style.left=-ulWidth+'px';
			animate(pro[currentU],{left:ulWidth},600);
			animate(pro[nextU],{left:0},600,function(){
				flag3=true;
				aa[0].classList.remove('s');
				aa[1].classList.add('s');
				flag2=false;
			});
			currentU=nextU;
		}
	}

	
	let colR1=$('.colR')[0];
	let peijianP=$('.peijianP')[0];
	let aroundP=$('.aroundP')[0];
	yinyong(colR1);
	yinyong(peijianP);
	yinyong(aroundP);
	function yinyong(obj){
		let c=$('.colUl1',obj);
		for(let i=0;i<c.length;i++){
			let colLi=$('li',c[i]);
			for(let j=0;j<colLi.length;j++){
				if(j==7){
					continue;
				}
				colLi[j].classList.add('yinying');
			}
		}
	}

	let colU=$('.colU')[0];
	let peijianU=$('.peijianU')[0];
	let aroundU=$('.aroundU')[0];
	fenyeSelect(colU,colR1);
	fenyeSelect(peijianU,peijianP);
	fenyeSelect(aroundU,aroundP);
	function fenyeSelect(pageTitle,page){
		let selector=0;
		let colL=$('li',pageTitle);
		let colUl1=$('.colUl1',page);
		// 初始化
		for(let i=0;i<colUl1.length;i++){
			if(i==0){
				continue;
			}
			colUl1[i].style.display='none';
		}
		Array.from(colL).forEach(function(value,index){
			value.onmouseenter=function(){
				colL[selector].classList.remove('colChoose');
				value.classList.add('colChoose');
				// 动画
				colUl1[selector].style.display='none';
				colUl1[index].style.display='block';
				selector=index;
			}
		});
	}




	let tuijian=$('.tuijian')[0],
		fanzhuan=$('.fanzhuan')[0];
	moveLiebiao(tuijian,fanzhuan);
	function moveLiebiao(obj,obj1){
		let	pro=$('.pro',obj),
			ulWidth=parseInt(getComputedStyle(obj, null).width),
			ttt,
			aa=$('a',obj1),
			flag2=false,flag3=true;
		// 初始化
		for(let i=0;i<pro.length;i++){
			if(i==0){
				continue;
			}
			pro[i].style.left=ulWidth+'px';
		}
		aa[0].onclick=function(){
			if(flag2){
				if(!flag3){
					return ;
				}
				translateUl();
				flag3=false;
			}
		}
		aa[1].onclick=function(){
			if(!flag2){
				if(!flag3){
					return ;
				}
				translateU();
				flag3=false;
			}
		}
		function translateU(){
			nextU++;
			//console.log(nextU)
			if(nextU>=pro.length){
				nextU=0;
			}
			pro[nextU].style.left=ulWidth+'px';
			animate(pro[currentU],{left:-ulWidth},600);
			animate(pro[nextU],{left:0},600,function(){
				flag3=true;
				aa[1].classList.remove('s');
				aa[0].classList.add('s');
				flag2=true;
			});
			currentU=nextU;
		}
		function translateUl(){
			nextU--;
			//console.log(nextU)
			if(nextU<0){
				nextU=pro.length-1;
			}
			pro[nextU].style.left=-ulWidth+'px';
			animate(pro[currentU],{left:ulWidth},600);
			animate(pro[nextU],{left:0},600,function(){
				flag3=true;
				aa[0].classList.remove('s');
				aa[1].classList.add('s');
				flag2=false;
			});
			currentU=nextU;
		}
	}


	let lls=document.querySelectorAll('.nrContent .nrU>li');

	for(let i=0;i<lls.length;i++){
		let nrLiebiao=$('.nrLiebiao',lls[i])[0],
			nrlbU=$('.nrlbU',nrLiebiao)[0],
			dh=$('.dh')[i];
		lls[i].onmouseenter=function(){
			
			
		}
		pageF(nrlbU,dh,lls[i]);
	}

	function pageF(obj1,obj2,lls){
		// li
		let lis2=$('li',obj1),
			uh=parseInt(getComputedStyle(lis2[0],null).width),
		
			// 按钮
			lis3=$('li',obj2),
			nn=0,
			q=0,
			jiantou=$('span',lls);
			//console.log(jiantou);
			// 初始化
			obj1.style.left=0;
		for(let i=0;i<lis2.length;i++){
			lis3[i].onmouseenter=function(){
				/*if(i==nn){
					// lis3[i].style.cursor='move';
					lis3[i].style.background='#fff';
				}*/
			}
			lis3[i].onclick=function(){
				if(i!=nn){
					lis3[nn].classList.remove('hot');
					lis3[i].classList.add('hot');
					animate(obj1,{left:-uh*i});
					nn=q=i;
				}
			}
		}

		jiantou[0].onclick=function(){
			q--;
			if(q>=0){
				lis3[nn].classList.remove('hot');
				lis3[q].classList.add('hot');
				animate(obj1,{left:-uh*q});
				nn=q;
			}else{
				obj1.style.left=0;
				q=0;
			}
		}
		jiantou[1].onclick=function(){
			q++;
			if(q<lis3.length){
				lis3[nn].classList.remove('hot');
				lis3[q].classList.add('hot');
				console.log('nn='+nn+',q='+q);
				animate(obj1,{left:-uh*q});
				nn=q;
			}else{
				obj1.style.left=-uh*2;
				q=lis3.length-1;
			}
		}
	}


	// 可视窗口高度
	let viewHeight=window.innerHeight;

	// 每个楼层距离顶部距离
	// 1.获取楼层
	let floor=document.querySelectorAll('.floor');
	// 2.获取每个楼层距离顶端距离
	let arr=[];
	floor.forEach(function(value,index){
		arr.push(value.offsetTop);
	});
	// console.log(floor);
	window.onscroll=function(){
		// 滚动条滚动高度
		let top=document.body.scrollTop;
		arr.forEach(function(value,index){
			if(top+viewHeight>value+200){
				// 获取对应楼层的所有图片
				let imgs=floor[index].getElementsByTagName('img');
				//console.log(imgs);
				// 遍历并加载此图片
				for(let i=0;i<imgs.length;i++){
					imgs[i].src=imgs[i].title;
				}
			}
		});
	}

});