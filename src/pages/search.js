import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Search.module.css'
import 'antd/dist/antd.css'
import { Input, Space, List } from 'antd'
import React, { useState } from 'react';

const { Search } = Input;

export default function Find() {  
  const [ findings, setFindings ] = useState({ "count": 0, "results": [] })
  const onSearch = async value => {
      const res = await fetch(`/api/search?q=${value}`)
      const json = await res.json();

      setFindings({ "count": json.count || 0, "results": json.results });
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <main className={styles.content}>
        <h1>Document Search</h1>
        <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
            />
        <List
          className="search-results"
          itemLayout="horizontal"
          dataSource={findings.results}
          
          renderItem={item => (
            <List.Item
              actions={[<a key="list-loadmore-more">more</a>]}
            >
              <List.Item.Meta
                avatar={<img src={item.picture} />}
                title={<a href={"/api/document/"+item.name}>{item.name}</a>}
                description={<><span><strong>Author:</strong>&nbsp;{item.author}</span>&nbsp;<span><strong>Created:</strong>&nbsp;{item.created}</span></>}
              />
                <div>content</div>
            </List.Item>
          )}
        />    
    </main>

    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </footer>
  </div>
)
}
