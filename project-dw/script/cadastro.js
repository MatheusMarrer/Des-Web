const url = "https://go-wash-api.onrender.com/api/user"

async function cadastro(){
	
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
	
	let api = await fetch(url,{
		method:"POST",
		body:JSON.stringify(
			{
			"name":name,
			"email":email,
			"user_type_id":1,
			"password": password,
			"cpf_cnpj": cpf_cnpj,
			"terms": 1,
			"birthday": birthday    
			}
		),
		headers:{
			'Content-Type':'application/json'
		}
	})
		if(api.ok){
		let resposta = await api.json();
		console.log(resposta)
		
		return false
		}

		console.log("Erro");
}	