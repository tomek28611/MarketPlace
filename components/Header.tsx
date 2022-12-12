import React from 'react';
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";

type Props = {}

function Header({}: Props) {
    const connectWithMetamask = useMetamask();
    const disconnect = useDisconnect();
    const address = useAddress();

  return (
    <div>
        <nav>
            <div className="">
                {address ? (
                    <button onClick={disconnect} className='connectWalletBtn'>Hi, {address}</button>
                ) : (
                <button onClick={connectWithMetamask} className='connectWalletBtn'>
                    Connect your wallet
                </button>
                )}


            </div>
        </nav>
    </div>
  )
}

export default Header