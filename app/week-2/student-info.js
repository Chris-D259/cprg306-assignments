import Link from 'next/link';
import 'tailwindcss/tailwind.css';
export default function StudentInfo() {
    return (
      <main>
        <h1>Christopher Duke</h1>
        <Link href="https://github.com/Chris-D259">
        <h1 className='underline hover:text-blue-500'>Link to Github</h1>
        </Link>
      </main>
    );
  }