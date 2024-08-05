import { useState } from 'react';

const DirectCommunication: React.FC = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSendMessage = async () => {
    if (message.trim() === '') return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Update messages state
      setMessages((prevMessages) => [...prevMessages, message]);
      setMessage('');
    } catch (error) {
      setError('Failed to send message.');
      console.error('Fetch error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Direct Communication</h1>
      <div className="mb-4">
        <textarea
          className="w-full p-2 border border-gray-300 rounded-md"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..."
        />
        <button
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
          onClick={handleSendMessage}
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
        {error && <p className="mt-2 text-red-600">{error}</p>}
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">Message History</h2>
        <ul className="list-disc pl-5">
          {messages.map((msg, index) => (
            <li key={index} className="mb-2">{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DirectCommunication;
