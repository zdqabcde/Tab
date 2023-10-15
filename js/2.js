function $(s){
	return document.querySelector(s);
}

function $$(s){
	return document.querySelectorAll(s);
}


const doms = {
	navs:$$('.checkbox .nav .ina'),
	cons:$$('.cons'),
	spans:$$('.container1 nav span')
	
}


console.log(doms.navs,doms.cons,doms.spans);

for(let i = 1;i<doms.navs.length;i++){
	
	
	doms.navs[i].addEventListener('click',function(){
		for(let i =0;i<doms.cons.length;i++){
			doms.cons[i].style.display = 'none';
		}
		
		const beforeac = $(".container1 nav .active");
		beforeac.classList.remove('active');
		doms.spans[i].classList.add('active');
		doms.cons[i].style.display = 'block';
	});
}

for(let i =0;i<doms.spans.length;i++){
	doms.spans[i].addEventListener('click',function(){
		for(let i =0;i<doms.cons.length;i++){
			doms.cons[i].style.display = 'none';
		}
		const beforeac = $(".container1 nav .active");
		beforeac.classList.remove('active');
		doms.spans[i].classList.add('active');
		doms.cons[i].style.display = 'block';
	})
}