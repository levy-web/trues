import React from 'react'
import moment from 'moment';
import Link from 'next/link';

const PostCard = ({ post }) => {

  return (
    <div className='bg-white shadow-lg rounded-lg p-200 lg:p-8 pb-12 mb-8'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-2'>
      <div className='lg:col-span-4 col-span-1'>
        <div className='featured-image-div  shadow-md mb-2'>

            <img
                src={post.featuredImage.url}
                alt = {post.title}
                className = "object-top absolute w-full h-full rounded-t-lg lg: rounded-lg"
            
            />

        </div>
        </div>
        <div className='lg:col-span-8 col-span-1'>
        <div className='bloc author-date lg:flex justify-center text-center items-center mb-8 w-full'>
          <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
            <img
              height="20px"
              width="20px"
              className = "align-middle rounded-full" 
              src= {post.author.photo.url}
              alt={post.author.name} 
            />
            <p className='inline align-middle text-gray-700 ml-2 text-lg'>{post.author.name}</p>
          </div>
          <div className='font-medium text-gray-700'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </span>

          </div>

        </div>

      
        <h1 className='transition text-center duration-700 mb-4 cursor-pointer hover:text-pink-600 text-xlg font-semibold'>
          <Link href={`/post/${post.slug}`}>
            {post.title}
          </Link>
        </h1>
        <p className='text-lg text-center text-gray-700 font-normal px-1 lg: px-2 mb-8'>{post.excerpt.substring(0, 99)}...</p>

        <div className='text-center'>
          <Link href={`/post/${post.slug}`}>
            <span className='transition duration-500 tranform hover:-transtlate-y-1 inline-block bg-pink-600 text-xs font-medium rounded-full text-white px-8 py-3 cursor-pointer'>
              continue reading...
            </span>
          </Link>

        </div>

        </div>
        </div>

        
    </div>
  )
}

export default PostCard