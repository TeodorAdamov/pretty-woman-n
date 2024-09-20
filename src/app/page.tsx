import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <p>HELLO PRETTY WOMAN</p>
            <Link href="/login">Login</Link>
            <Image
                src="/photo.jpg"
                width={500}
                height={760}
                className=""
                alt="Screenshots of the dashboard project showing desktop version"
            />
        </main>
    );
}
