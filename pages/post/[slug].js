import React from 'react';
import {useRouter} from 'next/router'

import {getPosts, getPostDetails} from '../../services';

import {PostDetail, Categories, PostWidget,Author, Comments, CommentsForm, Loader} from '../../components';


const PostDetails = ({post}) => {
    const router = useRouter();

    if(router.isFallback){
        return<Loader/>
    }


  return (
    <div className='container mx-auto px-10 mb-8'>
        <head>
          <>
          <script type="text/javascript" src="https://cdn.diclotrans.com/sdk/v1/4189/e740a3298f9156d68d059bd1048afbc4e8b74fa0/lib.js"></script>
          <script type="text/javascript" src="https://cdn.diclotrans.com/sdk/v1/4208/771547afc51f1af278ab679446c0c3e43c477093/lib.js"></script>
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1048957289759461" crossorigin="anonymous"></script>
          </>

        </head>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            <div className='col-span-1 lg:col-span-8'>
                <PostDetail post={post}/>
                <Author author={post.author}/>
                <CommentsForm slug={post.slug} />
                <Comments slug = {post.slug} />
            </div>
            <div className='col-span-1 lg:col-span-4'>
                <div className='relative lg:sticky top-8'>
                    <PostWidget slug = {post.slug} categories = {post.categories.map((category) => (category.slug))} />
                    <Categories />

                </div>
            </div>

        </div>

    </div>
  )
}

export default PostDetails

export async function getStaticProps({params}) {
    const data = await getPostDetails(params.slug);
  
    return {
      props:{ post:data }
    }
}
export async function getStaticPaths(){
    const posts = await getPosts();

    return{
        paths:posts.map(({node:{slug}}) => ({params:{slug}})),
        fallback: true,

    }
}