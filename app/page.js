import Link from 'next/link';
import 'tailwindcss/tailwind.css';
export default function page() {
  return (
    <>
      <header className="p-4 bg-zinc-900 text-white font-bold">
        <h1 className="text-xl">Christopher Duke CPRG306 Assignments</h1>
        </header>
        <main className="flex items-start justify-center min-h-screen bg-zinc-700">
          <div className='text-white font-bold'>
            <h1 className='text-xl'>CPRG 306: Web Development 2 - Assignments</h1>
            <Link href="./week-2">
            <p className='underline hover:text-blue-500'>week-2</p>
            </Link>
            <Link href="./week-3">
            <p className='underline hover:text-blue-500'>week-3</p>
            </Link>
          </div>
    </main>
    </>
  );
}