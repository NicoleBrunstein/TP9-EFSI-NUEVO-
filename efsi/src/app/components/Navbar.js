"use client";

import React, { useContext } from 'react'
import Link from "next/link";
import { TokenContext } from '@/context/TokenContext';

export default function Navbar() {
const {token} = useContext(TokenContext);
  return (
    <nav>
        <ul className="nav d-flex align-items-center">
        <li className="nav-item">
            <Link href="/home" className="nav-link text-light">
            Home
            </Link>
        </li>
        <li className="nav-item">
            <Link href="/contacto" className="nav-link text-light">
            Contacto
            </Link>
        </li>
        
        {token && (
        <li className="nav-item">
            <a href="/logout" className="nav-link text-light">
            Cerrar sesión
            </a>
        </li>
        )}
        </ul>
    </nav>
  )
}
