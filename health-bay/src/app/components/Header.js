
import { Jaro } from "next/font/google";

const jaro = Jaro({ subset: ["latin"] });

export default function Header() {
    return (
        <div className={jaro.className}>
            <div className="flex flex-col justify-center items-center p-8 w-full rounded-xl">
                <header className="text-4xl font-bold"> 
                HEALTH BAY
                </header>
                <p className="">
                    Your Healthcare Cat!
                </p>
            </div>
        </div>
    );
} 