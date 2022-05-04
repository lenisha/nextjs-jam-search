import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Search.module.css'
import 'antd/dist/antd.css'
import { Input, Space } from 'antd'
import { SettingOutlined } from '@ant-design/icons'

const { Search } = Input;
const onSearch = value => console.log(value);

export default function Home() {
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
