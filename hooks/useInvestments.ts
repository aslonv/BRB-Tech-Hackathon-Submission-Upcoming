import { useState, useEffect } from 'react';

interface Investment {
  id: string;
  projectName: string;
  amountInvested: number;
  date: string;
  returnStatus: string;
}

const useInvestments = () => {
  const [investments, setInvestments] = useState<Investment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInvestments = async () => {
      try {
        const response = await fetch('/api/investments');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Investment[] = await response.json();
        setInvestments(data);
      } catch (error) {
        setError('Failed to fetch investments.');
        console.error('Fetch error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchInvestments();
  }, []);

  return { investments, loading, error };
};

export default useInvestments;
