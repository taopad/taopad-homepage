import Link from "next/link"
import Image from "next/image";

const appLink = "https://earn.taopad.app"
const docLink = ""
const twitterLink = "https://twitter.com/TaoPadApp"
const telegramLink = "https://t.me/taopadportal"

export default function Home() {
    return (
        <main className="container mx-auto flex flex-col items-center gap-8 mt-24 lg:mt-40">
            <div className="relative w-48 h-16">
                <Image src="/TaoPadLogo-NoBG.png" alt="TaoPad" fill sizes="1" style={{ objectFit: "contain" }} />
            </div>
            <div>
                <Link href={appLink} target="_blank">Earn $TAO</Link>
            </div>
            <div>
                <Link href={docLink} target="_blank">Documentation</Link>
            </div>
            <div className="flex gap-8">
                <Link href={twitterLink} target="_blank">
                    <TwitterIcon />
                </Link>
                <Link href={telegramLink} target="_blank">
                    <TelegramIcon />
                </Link>
            </div>
        </main>
    )
}

function TwitterIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="currentColor"
            viewBox="0 0 24 24">
            <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
        </svg>
    )
}

function TelegramIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="currentColor"
            viewBox="0 0 24 24"
            style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinejoin: "round",
                strokeMiterlimit: 1.41421,
            }}>
            <path
                id="telegram-1"
                d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z" />
        </svg >
    )
}
