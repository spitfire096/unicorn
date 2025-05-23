import Image from "next/image";
import Counter from '../component/Counter'
import Link from 'next/link';
import { clientPromise } from "@/libs/mongo";

export default function Home() {
   const [isIncrementing, setIsIncrementing] = useState(false);
   async function handleIncrement() {
        setIsIncrementing(true);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate async operation
        setCount(count + 1);
        setIsIncrementing(false);

        try {   
            const response = await fetch('/api/counter/increment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ count: count + 1 }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            console.error('Error incrementing count:', error);
        }  finally {
            setIsIncrementing(false);
        } 
    }
    
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Navigation */}
      <nav className="w-full flex justify-end">
        <Link 
          href="/dashboard" 
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Dashboard →
        </Link>
      </nav>

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* Hero Image */}
        <div className="w-full max-w-md mx-auto mb-8">
          <Image
            src="/your-unicorn-image.png"
            alt="Unicorn"
            width={400}
            height={400}
            priority
            className="rounded-lg shadow-lg"
            unoptimized
          />
        </div>

        {/* DaisyUI Button */}
        <div className="flex justify-center w-full mb-4">
          <button className="btn btn-circle"></button>
        </div>

        <Counter title="Counter #1" />
        <Counter title="Counter #2" />
        <Counter title="Counter #3" />
      </main>      
    </div>
  );
}
