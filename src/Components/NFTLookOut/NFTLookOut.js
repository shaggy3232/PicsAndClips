import "./NFTLookOut.css"
import bearx from "../../Assets/bearxlabs.gif"
const NFTLookOut = () => {
    return(
        <div className =" bgN">
            <div className = "NFTContent">
                <div className = "DisplayImage">
                    <img className = "Image"src = {bearx}/>
                </div>
                <div className = "nftContent">
                    <h1 className = "NFTLookOutTitle">
                    NFT Look Out
                    </h1>
                    <h3 className="project">
                        BearXLabs
                    </h3>
                    <div className = "NFTDescription">
                        BearX is a limited NFT collection of 3700 Genesis Bears created on Ethereum blockchain. After being banished from their own land, only some Bears survived. This led to the few remaining to rebuild, strengthen and take flight to regain dominance over their old lands. Each BearX is unique in its own way, featuring different traits from breed, eyewear and clothing to name a few.
                    </div>
                    <div className = "Links">
                        <a className = "discord" href = "https://discord.gg/bearx"><img src="https://img.icons8.com/ios/50/4a90e2/discord-logo--v1.png"/></a>
                        <a className = "discord" href = "https://bearxlabs.com/"><img src="https://img.icons8.com/ios/50/4a90e2/domain.png"/></a>
                        <a className ="twitter" href = "https://twitter.com/bearX_NFT"><img src="https://img.icons8.com/ios/50/4a90e2/twitter--v1.png"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NFTLookOut