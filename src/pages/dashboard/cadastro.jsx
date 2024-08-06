import { useState } from 'react';
import ProtectedRoute from '../_components/ProtectedRoute';

export default function CadastroQuestao() {
    const [banca, setBanca] = useState('');
    const [ano, setAno] = useState('');
    const [materia, setMateria] = useState('');
    const [texto, setTexto] = useState('');
    const [alternativas, setAlternativas] = useState([{ texto: '', correta: false }]);

    const handleAlternativaChange = (index, field, value) => {
        const novasAlternativas = [...alternativas];
        novasAlternativas[index][field] = value;
        setAlternativas(novasAlternativas);
    };

    const adicionarAlternativa = () => {
        setAlternativas([...alternativas, { texto: '', correta: false }]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/questoes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ banca, ano, materia, texto, alternativas })
        });
        if (response.ok) {
        }
    };

    return (
      <ProtectedRoute allowedRoles={['admin']}>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Banca:</label>
                <input type="text" value={banca} onChange={(e) => setBanca(e.target.value)} />
            </div>
            <div>
                <label>Ano:</label>
                <input type="text" value={ano} onChange={(e) => setAno(e.target.value)} />
            </div>
            <div>
                <label>Matéria:</label>
                <input type="text" value={materia} onChange={(e) => setMateria(e.target.value)} />
            </div>
            <div>
                <label>Texto da Questão:</label>
                <textarea value={texto} onChange={(e) => setTexto(e.target.value)} />
            </div>
            <div>
                <label>Alternativas:</label>
                {alternativas.map((alt, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            value={alt.texto}
                            onChange={(e) => handleAlternativaChange(index, 'texto', e.target.value)}
                        />
                        <label>
                            Correta:
                            <input
                                type="checkbox"
                                checked={alt.correta}
                                onChange={(e) => handleAlternativaChange(index, 'correta', e.target.checked)}
                            />
                        </label>
                    </div>
                ))}
                <button type="button" onClick={adicionarAlternativa}>Adicionar Alternativa</button>
            </div>
            <button type="submit">Cadastrar Questão</button>
        </form>
      </ProtectedRoute>
    );
}