import React from 'react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedPostCard = ({ post }) => (

  <div className="mt-20 mx-1 pt-20 bg-white featured-card rounded-xl">
    <a
      className="group"
      >
      <div className="overflow-hidden">
      <img
        src={post.featuredImage.url}
        className="w-full featured-card-pic hover:scale-105 transition transition-all duration-200 ease-in-out"
        alt={post.title}
        />
        </div>

        <p className="mb-4 text-shadow featured-card-p text-center">{post.title}</p> 
        <p className="text-center mb-4 text-shadow font-semibold text-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
        <Link href={`/post/${post.slug}`}><span className="cursor-pointer absolute w-full h-full" /></Link> 
    </a>
  </div>
);

export default FeaturedPostCard;

