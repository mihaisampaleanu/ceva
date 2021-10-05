import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './page.module.css'

const Page = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Page - New Project6</title>
        <meta property="og:title" content="Page - New Project6" />
      </Helmet>
      <div className={styles['container1']}></div>
    </div>
  )
}

export default Page
