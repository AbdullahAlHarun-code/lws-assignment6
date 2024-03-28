'use client'

import { usePathname } from 'next/navigation'
import Link from "next/link";

export default function CategoryNav({ category, categories }) {
  const pathname = usePathname()
  console.log('nav',pathname.split('/')[2])
  return (
    <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
      <Link
        href="/category"
        className={`hover:border-b border-black block h-6 box-border mt-5 ${pathname.split('/')[2] === undefined ? 'active' : ''}`}
      >
        All
      </Link>
      {categories.map((name) => (
        <Link
          k
          key={name} // Added key prop here
          href={`/category/${name}`}
          className={`hover:border-b border-black block h-6 box-border mt-5 ${pathname.includes(`/${name}`) ? 'active' : ''}`}
        >
          {name} 
        </Link>
      ))}
    </div>
  );
}
