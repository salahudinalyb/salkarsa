'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Logo from 'logo.svg'
import Link from 'next/link'
import { menu } from '../data/menu'
import { HiMiniBars3BottomRight, HiMiniXMark } from 'react-icons/hi2'

function Top() {

    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(prev => !prev)
    }

    return (
        <div className="container-navigasi text-neutral-200">
            <div className="navigasi fixed w-full flex justify-between bg-neutral-900 backdrop-filter backdrop-blur-xl bg-opacity-90 lg:px-24 px-4 py-4 text-neutral-200 lg:hidden">
                <div className="logo">
                    <Image src={Logo} width={32} height={32} alt='logo' />
                </div>
                <button className="icon">
                    < HiMiniBars3BottomRight
                        size={32}
                        className="cursor-pointer lg:hidden"
                        onClick={handleShow}
                    />
                </button>
            </div>

            <div className="container-nav fixed w-full">
                <div className={`navigasi bg-neutral-900 backdrop-filter backdrop-blur-xl bg-opacity-90 lg:px-24 px-4 py-4 text-neutral-200 ${show ? "list-item" : "hidden"} lg:list-item`}>
                    <div className="top-menu flex justify-between">
                        <div className="logo lg:hidden">
                            <Image src={Logo} width={32} height={32} alt='logo' />
                        </div>
                        <div className="icon">
                            < HiMiniXMark
                                size={32}
                                className="cursor-pointer"
                                onClick={() => setShow(false)}
                            />
                        </div>
                    </div>
                    <div className="menu-list py-8 lg:hidden">
                        {menu.map((item, i) => {
                            return (
                                <Link key={i} href={item.url} className="flex py-4">
                                    {item.label}
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className="container-nav fixed w-full hidden lg:block">
                <div className="navigasi  bg-neutral-900 backdrop-filter backdrop-blur-xl bg-opacity-90 lg:px-24 px-4 py-4 text-neutral-200">
                    <div className="top-menu flex justify-between">
                        <div className="logo">
                            <Image src={Logo} width={32} height={32} alt='logo' />
                        </div>
                        <div className="menu lg:flex lg:space-x-8">
                            {menu.map((item, i) => {
                                return (
                                    <Link key={i} href={item.url}>
                                        {item.label}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <div className="nav text-neutral-200 bg-neutral-900 fixed w-full lg:px-24 lg:py-4">
        //     <h1>tes</h1>
        // </div>
    )
}

export default Top