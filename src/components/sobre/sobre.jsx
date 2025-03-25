import React from 'react';
import { Card } from 'primereact/card';
import 'primeflex/primeflex.css';

export default function Sobre() {
  const header = <h1 className='mt-0'>Sobre a Equipe e Projeto</h1>;
  const footer = (
    <div className="flex flex-column align-items-center">
      <p>Arquivo modificado pela Equipe de TCC Zero Start <br />
      Ana Beatriz Alves, Fernando Ribeiro, Helena Neves, Luis Fernando Goulart & Luis Gustavo Rodrigues </p> 
    </div>
  );

  return (
    <div className="sobre flex justify-content-center align-items-center">
      <Card title={header} footer={footer}>
        <section>
          <h2>Inovação e Acessibilidade</h2>
          <p>
          A <strong>Zero Start</strong> é movida pelo compromisso com a inclusão. Acreditamos que a tecnologia tem o<br/> poder de transformar vidas 
          e criar conexões, tornando a comunicação mais acessível para todos.</p>
        </section>

        <section>
          <h2>Experiências Digitais Impactantes</h2>
          <p> Desenvolvemos soluções que vão além da funcionalidade, gerando impacto social e promovendo  <br /> uma 
          nova forma de interação, com design intuitivo, interatividade e acessibilidade. Nossa missão  <br /> 
          é quebrar barreiras e usar a tecnologia como ponte para um mundo mais inclusivo, onde todos  <br /> 
          possam se comunicar e aprender sem limitações.</p>
        </section>

        <section>
          <h2>Tecnologias Utilizadas</h2>
          <ul>
            <li>React para a construção da interface do usuário</li>
            <li>PrimeReact para componentes ricos e estilização</li>
            <li>Integração com APIs RESTful para CRUD de dados</li>
            <li>Login com armazenamento em cookie e local storage</li>
          </ul>
        </section>

        <section>
          <h2>Funcionalidades Principais</h2>
          <ul>
            <li>Visualização de Professores e Matérias (fictícios)</li>
            <li>Suporte a filtragem e busca global</li>
            <li>Paginação dinâmica para grandes volumes de dados</li>
          </ul>
        </section>

        <section>
          <h2>Observação</h2>
          <ul>
            <li>Modificamos os nomes dos arquivos, pastas e suas ligações, além de alterar o necessário para <br /> que o site se adaptasse à API. Alteramos cores e logo para que se ajustassem à identidade visual <br /> da Equipe de TCC Zero Start. </li>
          </ul>
        </section>
      </Card>
    </div>
  );
}
