import { Burn } from "../TokensComponents/Burn"
import { Mint } from "../TokensComponents/Mint"
import { LocalBalanceToken } from "../TokensComponents/MyBalanceToken"
import { NameFungibleToken } from "../TokensComponents/NameFungibleToken"




const Labs = () => {
  return (
    <div className="flex flex-col justify-center items-center">
        <h1 className='text-3xl text-black'>Mi token</h1>
        <div className="flex items-center flex-col" >
            <img className="w-96 h-96" src="/LogoGaia.svg" alt="" />
            <h2 className="text-black text-3xl">Gaia Token</h2>
            <h2 className="text-black">Saldo:</h2>
            <Mint/>
            <Burn/>
        </div>
    </div>
  )
}

export default Labs