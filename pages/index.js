import Head from 'next/head'
import {PostCard, PostWidget, Categories} from '../components'
import { getPosts } from '../services';
import { FeaturedPosts } from '../sections';
import Link from 'next/link';


export default function Home ({posts})  {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>trues</title>
        <link rel="icon" href="/favicon.ico" />
        <>
        <script type="text/javascript" src="https://cdn.diclotrans.com/sdk/v1/4189/e740a3298f9156d68d059bd1048afbc4e8b74fa0/lib.js"></script>
        <script type="text/javascript" src="https://cdn.diclotrans.com/sdk/v1/4208/771547afc51f1af278ab679446c0c3e43c477093/lib.js"></script>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1048957289759461" crossorigin="anonymous"></script>
        </>

      </Head>
      <FeaturedPosts/>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map ((post) => <PostCard post={post.node} key = {post.title}/>)}
        </div>
        
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Categories />

          </div>

        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props:{ posts }
  }
}
