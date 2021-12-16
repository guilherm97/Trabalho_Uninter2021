import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AtividadePratica_Uninter';
  alunos: Array<any>;constructor(){
    this.alunos = [
      { NOME: 'GUILHERME', RU: ' 3348357 ', CURSOS: 'ANÁLISE E DESENVOLVIMENTO DE SISTEMAS', DATA_NASCIMENTO:'30/12/1997' },
      { NOME: 'LEONARDO', RU: ' 6688775 ', CURSOS: 'GESTÃO DA PRODUÇÃO', DATA_NASCIMENTO:'10/07/1993' },
      { NOME: 'FERNANDA', RU: ' 1199552 ', CURSOS: 'FISICA', DATA_NASCIMENTO:'11/12/1995' },
      { NOME: 'GABRIELA', RU: ' 2244852 ', CURSOS: 'ENFERMAGEM', DATA_NASCIMENTO:'20/09/1999' },
      { NOME: 'LUCAS ALVES', RU: ' 3354778 ', CURSOS: 'GESTÃO DA TECNOLOGIA DA INFORMAÇÃO', DATA_NASCIMENTO:'15/02/1991' },
];
}
}

