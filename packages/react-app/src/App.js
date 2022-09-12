import React from "react"
import { useEthers } from '@usedapp/core';

import { usePools } from './hooks';
import styles from './styles';
import { uniswapLogo } from './assets';
import { Exchange, Loader, WalletButton } from './components';

const App = () => {
  const { account } = useEthers();

  const poolsLoading = false;

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <header className={styles.header}>
          <img 
            src={uniswapLogo}
            className="w-16 h-16 object-contain"
             alt="Uniswap logo" 
             />
             <WalletButton />
        </header>

        <div className={styles.exchangeContainer}>
          <h1 className={styles.headTitle}>Uniswap2.0</h1>
          <p className={styles.subTitle}>Exchange tokens in seconds</p>

          <div className={styles.exchangeBoxWrapper}>
            <div className={styles.exchangeBox}>
              <div className="pink-gradient"/>
              <div className={styles.exchange}>
                {account ? (
                  poolsLoading ? (
                    <Loader title="Loading pools, please wait" />
                  ) : <Exchange />
                ) : <Loader title='Please connect your wallet' />
                }

              </div>
              <div className="blue-gradient"/>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default App;