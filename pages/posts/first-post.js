import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/layout';

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>first post</title>
      </Head>
      <Image
        src='/images/profile.jpeg'
        height={144}
        width={144}
      />
      <h1>First Post</h1>
      <Link href="/">
        <a>Back to Home</a>
      </Link>
    </Layout>
  );
};

export default FirstPost;
