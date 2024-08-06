import ProtectedRoute from './_components/ProtectedRoute';
import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import Head from "./_components/Head";

export default function Dashboard({ user }) {
  const [data, setData] = useState({
    porMateria: [],
    porAno: [],
    porBanca: []
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/dashperguntas');
        setData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <ProtectedRoute allowedRoles={['admin']}>
      <div>
        <Head pageTitle='Admin' />

        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '60px' }}>
          <div style={{ width: '48%' }}>
            <h2>Quantidade de Perguntas por Matéria</h2>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={data.porMateria}>
                <XAxis dataKey="materia" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="quantidade" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div style={{ width: '48%' }}>
            <h2>Quantidade de Perguntas por Ano</h2>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={data.porAno}>
                <XAxis dataKey="ano" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="quantidade" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <h2>Quantidade de Perguntas por Banca</h2>
        <ResponsiveContainer width="50%" height={400}>
          <BarChart data={data.porBanca}>
            <XAxis dataKey="banca" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="quantidade" fill="#ff7300" />
          </BarChart>
        </ResponsiveContainer>

      </div>
    </ProtectedRoute>
  );
}
