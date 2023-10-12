'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [{
    label: 'About',
    path: '/about'
},{
    label: 'Dashboard',
    path: '/dashboard'
},{
    label: 'Blog',
    path: '/blog'
}

]

const navStyles = {
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: '50px',
    width: '100vw',
    listStyleType:'none'

}

export default function Navigation(){
    const pathname = usePathname();

    return (
        <nav >
            <ul style={navStyles}> 
                {navLinks.map(({label,path}) => (
                        <li style={{color: path===pathname ? 'blue' : ''}} key={label}>
                            <Link href={path}>{label}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}