import Image from "next/image";

export default function NotFound() {
    return (
        <div>
            <Image src={`/images/404.jpg`} alt="not-found" width={500} height={500} quality={100} className="w-full" />
        </div>
    )
}
