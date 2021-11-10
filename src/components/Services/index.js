import React from 'react'
import Icon2 from '../../images/svg-2.svg'
import Icon1 from '../../images/svg-3.svg'
import Icon3 from '../../images/svg-7.svg'
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id="features">
            <ServicesH1>Features</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>P2P Transactions</ServicesH2>
                    <ServicesP>Transact data on a transparent and secure peer-to-peer network</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Mining and Validation</ServicesH2>
                    <ServicesP>SHA256 Cryptographic Hashing and Blockchain Validation</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Easy To Use API</ServicesH2>
                    <ServicesP>Request transaction history, mined blocks and wallet balances</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
