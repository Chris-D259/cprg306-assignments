import Link from 'next/link';
import ItemList from './item-list';
export default function Page() {
    return (
      <>
      <header className="p-4 bg-zinc-900 text-white font-bold flex justify-between items-center">
      <Link href="/" className='underline'>Back to Dashboard</Link>
        <h1 className="text-xl">Christopher Duke CPRG306 Assignments</h1>
        </header>
      <main className="flex items-center justify-center min-h-screen bg-zinc-700">
        <div className='text-white font-bold bg-zinc-800 p-5 rounded-lg'>
          <h1 className='text-center'>Shopping List</h1>
            <ItemList/>
        </div>
      </main>
      </>
    );
  }