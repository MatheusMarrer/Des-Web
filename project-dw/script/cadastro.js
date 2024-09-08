function cadastro(){
	
	let name = document.getElementById('name').value;
		if(name){
			alert(name)
	}else{
		alert("Nome é obrigatório");
	}
		
	let cpf_cnpj = document.getElementById('cpf_cnpj').value;
	let email = document.getElementById('email').value;
	let password = document.getElementById('password').value;
	let birthday = document.getElementById('birthday').value;
	let terms = document.getElementById('terms').checked;
		if(terms){
			alert(terms)
		}else{
			alert("preencha termos");
		}	
	
	
}	