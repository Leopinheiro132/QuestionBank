import { withAuth } from "../../_ultils/withAuth";
import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import Head from "./_components/Head";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6F61'];

export const getServerSideProps = withAuth({
  requiredAdmin: true,
  redirectTo: '/home',
});

export default function Dashboard({ user }) {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/dashperguntas');
        const perguntas = response.data.data;

        const formattedData = perguntas.map(pergunta => ({
          pergunta: pergunta.pergunta,
          quantidade: pergunta.alternativas.length,
        }));

        setData(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Head pageTitle='Admin'/>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            dataKey="quantidade"
            nameKey="pergunta"
            outerRadius={150}
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
