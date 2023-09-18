"use client"

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import Link from "next/link"
import Avatar from "react-avatar"
import SearchButton from "./SearchButton"
import {
    SearchSelect,
    SearchSelectItem,
    Select,
    SelectItem,
} from "@tremor/react";

const SORT_BY_MAP = {
    r: "Default",
    rv: "By Review",
    p: "By Price (low to high)",
    pd: "By Price (high to low)"
}

function Header() {
  return (
    <header>
        <Link href="/">
        <Image
            src="https://links.papareact.com/208"
            alt="logo"
            width={150}
            height={150}
            className="object-contain mr-10"
        />
        </Link>

        <div className="w-full md:max-w-2xl">
            {/* FORM */}
            <form action="">
                <div className="flex items-center gap-2 w-full px-4">
                    <div className="flex items-center space-x-2 bg-white shadow-xl rounded-full border-0 px-6 py-4 flex-1">
                        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400"/>
                        <input type="text" placeholder="Search..." name="searchTerm" className="outline-none flex-1" />
                    </div>

                    {/* Search Button */}
                    <SearchButton />
                </div>

                <div>
                    <SearchSelect className="min-w-4" placeholder="# of pages">
                        {[...Array(100)].map((_, i) => (
                            <SearchSelectItem key={i} value={(i + 1).toString()}>
                                {(i + 1).toString()} pages
                            </SearchSelectItem>
                        ))}
                    </SearchSelect>

                            <Select className="min-w-4" placeholder="Sort">
                                {Object.entries(SORT_BY_MAP).map(([key, value]) => (
                                    <SelectItem key={key} value={key}>
                                    {value}
                                    </SelectItem>
                                ))}
                            </Select>

                            <SearchSelect className="min-w-4" placeholder="Min Price...">
                                {["", "100", "250", "500", "750", "900", "1000+"].map((_, i) => (
                                    <SearchSelectItem key={i} value={_.toString()}>
                                        {i === 0 ? "No Minimum" : `$${_.toString()}`}
                                    </SearchSelectItem>
                                ))}
                            </SearchSelect>

                            <SearchSelect className="min-w-4" placeholder="Max Price...">
                                {["", "100", "250", "500", "750", "900", "1000+"].map((_, i) => (
                                    <SearchSelectItem key={i} value={_.toString()}>
                                        {i === 0 ? "No Maximum" : `$${_.toString()}`}
                                    </SearchSelectItem>
                                ))}
                            </SearchSelect>
                </div>
            </form>
        </div>

        <div className="hidden lg:flex flex-1 justify-end">
            <Avatar name="Diogo Ramos" round size="50" />
        </div>
    </header>
  )
}

export default Header