import EthrDID from 'ethr-did'
import { Issuer } from 'did-jwt-vc'


const issuer: Issuer = new EthrDID({
    identifier: 'did:ethr:0x8adfb8543cc14b83c3a104ed8aeb1aaaaaaaaaaaa',        
    rpcUrl: 'https://rinkeby.infura.io/v3/8a581af7416b4e7681d1f871b6945281',
    chainNameOrId: 'rinkeby'      
})

console.log(issuer);