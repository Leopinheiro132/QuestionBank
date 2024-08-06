import Questao from './_components/Question/questao';
import SideMenu from './_components/Sidemenu/sidemenu';

const questoes = [
    {
        conteudo: {
            banca: 'Banca 1',
            ano: '2023',
            materia: 'Matemática',
            texto: 'Qual é a raiz quadrada de 144?',
            alternativas: [
                { label: '10', value: '10' },
                { label: '12', value: '12' },
                { label: '14', value: '14' }
            ]
        }
    },
    {
        conteudo: {
            banca: 'Banca 2',
            ano: '2022',
            materia: 'História',
            texto: 'Quem descobriu o Brasil?',
            alternativas: [
                { label: 'Pedro Álvares Cabral', value: 'Pedro Álvares Cabral' },
                { label: 'Cristóvão Colombo', value: 'Cristóvão Colombo' },
                { label: 'Vasco da Gama', value: 'Vasco da Gama' }
            ]
        }
    }
    // Adicione mais questões conforme necessário
];

export default function Questoes() {
    return (
        <div>
            <SideMenu isOpen={true} isAdmin={true}/>
        </div>
    );
}
/**
 *             {questoes.map((questao, index) => (
                <Questao 
                    key={index}
                    conteudo={questao.conteudo}
                    indice={index}
                />
            ))}
 * 
 */
