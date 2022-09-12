import React, { useState, useEffect} from 'react'
import { shortenAddress as shortenAddress, useEthers, useLookupAddress } from '@usedapp/core';

import styles from '../styles';

const WalletButton = () => {
  const [accountAddress, setAccountAddress] = useState('');
  const { ens } = useLookupAddress();
  const { account, activateBrowserWallet, deactivate } = useEthers();

  useEffect(() => {
    if(ens) {
      setAccountAddress(ens);
    } else if(account){
      setAccountAddress(shortenAddress(account));
    } else {
      setAccountAddress('');
    }

  }, [account, ens, setAccountAddress])
  
  return (
    <button
      onclick={() => {
        if (!account) {
          activateBrowserWallet();
        } else {
          deactivate();
        }
      }}
      className={styles.button}
    >
      {accountAddress || "Connect Wallet"}
    </button>
  )
}

export default WalletButton