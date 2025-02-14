//your JS code here. If required.
let btn = document.querySelector("input[type='button']");
	btn.addEventListener('click',()=>{
		
		let s = document.getElementById('colorSelect');
		let so = s.options[s.selectedIndex];

		if(so){
			so.remove();
		}
})
