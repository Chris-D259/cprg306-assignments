'use client'
import Link from 'next/link';
import { useUserAuth } from "./_utils/auth-context";
import { useEffect, useState } from "react";
export default function Page() {
    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();
    function UserGreetings() {
        if (user) {
            return (
                <>
                <div className='p-4 bg-zinc-900 text-white font-bold flex justify-between items-center'>
                <h2 className='text-white p-5 text-center'>Welcome to the Shopping List App!</h2>
                <div className='flex justify-center items-center'>
                <button className='text-white bg-violet-700 m-10 p-5' onClick={firebaseSignOut}>Sign Out</button>
                <button className='text-white bg-violet-700 m-10 p-5' ><Link href="./week-10/shopping-list">Go To Shopping List</Link></button>
                </div>
                </div>
                </>
            )
        } else {
            return (
                <button className='text-white bg-violet-700 m-10 p-5' onClick={gitHubSignIn}>Sign In with GitHub</button>
            )
        }
    }
    return(
        <>
        <header className="p-4 bg-zinc-900 text-white font-bold flex justify-between items-center">
        <Link href="/" className='underline'>Back to Dashboard</Link>
        <h1 className="text-xl">Christopher Duke CPRG306 Assignments</h1>
        </header>
        <main className="flex items-center justify-center min-h-screen bg-zinc-700">
        <div>
        <h2 className='text-white p-5 text-center'>Hello, {user? user.displayName: "Not Logged In"}</h2>
        <h2 className='text-white p-5 text-center'>Email: {user? user.email :"Not Logged In"}</h2>
        <UserGreetings/>
        </div>
        </main>
        
        </>
        
    )
}