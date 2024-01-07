import { styles } from '@/styles/tailwind/BreadCrumb/index.css';
import Link from 'next/link';

type BreadCrumbProps = {
    title: string;
}
export default function BreadCrumb({ title }: BreadCrumbProps) {
    return (
        <div className={`${styles.breadCrumbWrapper}`}>
            <h2 className={`${styles.heading}`}>
                {title}
            </h2>

            <nav>
                <ol className="flex items-center gap-2">
                    <li>
                        <Link className="font-medium" href="/">
                            Dashboard /
                        </Link>
                    </li>
                    <li className="font-medium text-primary">{title}</li>
                </ol>
            </nav>
        </div>
    )
}
