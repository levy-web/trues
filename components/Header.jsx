import React, {useContext, useState, useEffect} from 'react'
import Link from 'next/link';

import { getCategories } from '../services'

const Header = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      getCategories().then((newCategories) => setCategories(newCategories) )
    
    }, []);
    return (
        <div className="px-10 z-20 bg-white fixed mx-auto mb-1 w-full">
            <div className="border-b w-full inline-block border-blue-400 py-8">
                <div  className="md:float-left block">
                    <Link href="/">
                        <span className="cursor-pointer font-bold text-4xl text-black hover:text-pink-600">
                            <h1>TRUES</h1>
                        </span>
                    </Link>

                </div>
                <div className='hidden md:float-left md:contents'>
                    {categories.map ((category) => (
                        <Link key={category.slug} href= {`/category/${category.slug}`}>
                            <span className='md: float-right mt-2 align-middle hover:text-pink-600 text-black ml-4 font-semibold cursor-pointer'>
                                {category.name}

                            </span>
                        </Link>
                    ) )}

                </div>

            </div>

        </div>
    );
}

export default Header