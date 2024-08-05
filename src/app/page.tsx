import Dashboard1 from '../../components/';
import Dashboard2 from '../../components/';
import Dashboard3 from '../../components';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Other content */}
      
      <section className="w-full max-w-5xl p-6">
        <h1 className="text-3xl font-bold mb-4">Dashboard 1</h1>
        <Dashboard1 />
      </section>

      <section className="w-full max-w-5xl p-6 mt-8">
        <h1 className="text-3xl font-bold mb-4">Dashboard 2</h1>
        <Dashboard2 />
      </section>

      <section className="w-full max-w-5xl p-6 mt-8">
        <h1 className="text-3xl font-bold mb-4">Dashboard 3</h1>
        <Dashboard3 />
      </section>
    </main>
  );
}
