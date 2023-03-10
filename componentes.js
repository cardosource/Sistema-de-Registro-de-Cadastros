
  
class Pessoa{
  _nome_completo = "";
  _data;
  _matricula = "";
  _disciplina = ""

  get nome(){
      return this._nome_completo;
  }
  set nome(nom_e){
      this._nome_completo = nom_e;
  }

  
  get data_is(){
      return this._data;
  }
  set data_is(dat_a){
      this._data = dat_a;
  }
  
  get disciplina(){
      return this._disciplina;
  }
  set disciplina(disciplin_a){
      this._disciplina = disciplin_a;
  }


  get matricula(){
      return this._matricula;
  }
  set matricula(matricul_a){
      this._matricula = matricul_a;
  }
}


class Professor extends Pessoa{
_cargo = "";
_formacao = "";
get cargo(){
  return this._cargo;
} 
set cargo(carg_o){
  this._cargo = carg_o;
}

get formacao(){
  return this._formacao;
}

set formacao(formaca_o){
  this._formacao = formaca_o;
}

}

class Aluno extends Pessoa{
  _semetre = "";
  _nota = 0;
  _falta =[]

  get semetre(){
      return this._semetre;
  } 
  set semetre(semestr_e){
      this._semetre = semestr_e;
  }

}

class Seletor {
    constructor(valor) {
      this.entrada = valor;
      this.controlador(this.entrada);
     
      
    }
  
    controlador(entrada) {
      this.elemento = document.querySelector(entrada);
      
      this.elemento.placeholder= `Cadastrar ${this.elemento.name}`    
      }

  
  }
  
 
  const section = document.querySelector('.registro.cadastros');

const table = document.createElement('table');
table.classList.add('tabela');


const thead = document.createElement('thead');

const trHead = document.createElement('tr');


const thMatricula = document.createElement('th');
thMatricula.textContent = 'Matrícula';

const thNome = document.createElement('th');
thNome.textContent = 'Nome';

const thCargo = document.createElement('th');
thCargo.textContent = 'Disciplina';

trHead.appendChild(thMatricula);
trHead.appendChild(thNome);
trHead.appendChild(thCargo);

thead.appendChild(trHead);



  let bt_cor = document.querySelector("input[value='CADASTRAR']");
  bt_cor.addEventListener('click', function() {

    var cadastro_professor = new Professor();
    var cadastro_aluno = new Aluno();
    let nome = new Seletor("input[name='nome']");
    let is_data = new Seletor("input[name='is_data']");
    let matricula = new Seletor("input[name='matricula']");
    let disciplina = new Seletor("input[name='disciplina']");
    let matricula_numeral =  parseInt(matricula.elemento.value)
     
    let formacao = new Seletor("input[name='formacao']");
    let cargo = new Seletor("input[name='cargo']");
    
    let semetre = new Seletor("input[name='semestre']");
    let nota = new Seletor("input[name='nota']");
    let falta = new Seletor("input[name='falta']");
    parseInt(nome.elemento.getBoundingClientRect().top) <= 48 ? window.scrollTo(0, 0) : null;


  
   
    if(nome.elemento.value !== "" && 
    nome.elemento.value !=="" && 
    nome.elemento.value !=="" && 
    nome.elemento.value !=="" && 
    isNaN(nome.elemento.value) && 
    isNaN(disciplina.elemento.value) 
    && Number.isInteger(matricula_numeral)){
      
        
           is_data.elemento.style.color = "#211a25";
           nome.elemento.style.border = "1px solid #32CE87";
           is_data.elemento.style.border = "1px solid #32CE87";
           matricula.elemento.style.border = "1px solid #32CE87";
           disciplina.elemento.style.border = "1px solid #32CE87";
          

   
      
      cadastro_professor.nome = nome.elemento.value;
      var dataString = is_data.elemento.value;
      var dataObjeto = new Date(dataString); 
       var dataFormatada = dataObjeto.toLocaleDateString(); 
     
      cadastro_professor.data_is = `${dataFormatada}`;
      
      cadastro_professor.disciplina = disciplina.elemento.value;
      cadastro_professor.matricula = matricula.elemento.value;
     
      cadastro_professor.formacao = formacao.elemento.value;
      cadastro_professor.cargo =    cargo.elemento.value;
      formacao.elemento.value = ""; 
      cargo.elemento.value = "";

      cadastro_aluno.nota =    nota.elemento.value;
      cadastro_aluno.semetre = semetre.elemento.value;
      cadastro_aluno.falta =   falta.elemento.value
   
      nota.elemento.value = "";
      semetre.elemento.value = "";
      falta.elemento.value = "";
   
      

      setTimeout(() => {
        nome.elemento.style.border = "1px solid #211a25";
        is_data.elemento.style.border = "1px solid #211a25";
        
        matricula.elemento.style.border = "1px solid #211a25";
        disciplina.elemento.style.border = "1px solid #211a25";
      }, 1000); //intervalo de 1 segundo
      nome.elemento.value=""
      is_data.elemento.value=""
      matricula.elemento.value=""
      disciplina.elemento.value=""
      
        
    }else{
      nome.elemento.style.border = "1px solid #BF4041";
      nome.elemento.placeholder= "Preencha o campo por gentileza! "
      nome.elemento.classList.add("shake");
      setTimeout(() => nome.elemento.classList.remove("shake"), 500);
  
      
      
      is_data.elemento.style.border = "1px solid #BF4041";
      is_data.elemento.placeholder= "Preencha o campo por gentileza! "
      is_data.elemento.style.color = "#BF4041";
      is_data.elemento.classList.add("shake");
      setTimeout(() => is_data.elemento.classList.remove("shake"), 100);


      matricula.elemento.style.border = "1px solid #BF4041";
      matricula.elemento.placeholder= "Preencha o campo por gentileza! "
      matricula.elemento.classList.add("shake");
      setTimeout(() => matricula.elemento.classList.remove("shake"), 500);

      disciplina.elemento.style.border = "1px solid #BF4041";
      disciplina.elemento.placeholder= "Preencha o campo por gentileza! "
      disciplina.elemento.classList.add("shake");
      setTimeout(() => disciplina.elemento.classList.remove("shake"), 100);
      
     }
    bt_cor.style.backgroundColor = "#32CE87";

 
    
    setTimeout(function() {
      bt_cor.style.backgroundColor = "#211a25";
      bt_cor.style = {"color": "#F5F7F6"};
    }, 1000);

        
    const tbody = document.createElement('tbody');


    const linha1 = document.createElement('tr');
    if(cadastro_professor.matricula !== ""){
    const celula1 = document.createElement('td');
    celula1.textContent = cadastro_professor.matricula;
    
    const celula2 = document.createElement('td');
    celula2.textContent = cadastro_professor.nome;
    
    const celula3 = document.createElement('td');
    celula3.textContent =cadastro_professor.disciplina;
    console.log(cadastro_professor.data_is); 
    console.log(cadastro_professor.cargo);
    console.log(cadastro_professor.formacao);
    console.log(cadastro_aluno.semetre);
    console.log(cadastro_aluno.nota);
    console.log(cadastro_aluno.falta);
    linha1.appendChild(celula1);
    linha1.appendChild(celula2);
    linha1.appendChild(celula3);
    
    
    

    tbody.appendChild(linha1);

    

    table.appendChild(thead);
    table.appendChild(tbody);
    

    section.appendChild(table);
    }
  });