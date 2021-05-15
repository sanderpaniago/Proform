import { ReactNode } from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import styles from '../styles/components/header.module.scss'

type HeaderProps = {
    children?: ReactNode;
    title: string;
}

export default function Header({children, title} : HeaderProps) {
    const routes = useRouter()
    
    return (
        <header className={styles.headerContainer}>
            <div className={styles.btn}>
                <a onClick={()=> routes.back()}>
                    <img src="/icons/back.svg" alt="" />
                </a>
                <Link href='/'>
                    <a>
                        <img src="/logo.svg" alt="" />
                    </a>
                </Link>
            </div>
            <div className={styles.textContainer}>
                <h2>{title}</h2>
                {children}
            </div>
        </header>
    )
}