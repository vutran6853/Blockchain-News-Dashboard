CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  user_firstname VARCHAR(255),
  user_lastname VARCHAR(255),
  user_email VARCHAR(255),
  user_password VARCHAR(255),
  user_url TEXT
)

INSERT INTO users (user_firstname, user_lastname, user_email, user_password, user_url )
VALUES ('Danial', 'Fay', 'danialfay29@gmail.com', 'sercetPassword', 'url picture placeholder'),
      ('Eric', 'Go', 'ericgo111@gmail.com', 'JavascriptIsWeild', 'url picture placeholder'),
      ('butteryfly', 'death', 'butteryfly999@gmail.com', '1234567890',  'url picture placeholder')



UPDATE users
SET user_firstname = 'Steven', 
	user_lastname = 'coby',
	user_email = 'stevencoby7264@myspace.com',
	user_password = 'oldschool',
	user_url = 'url picture placeholder'
WHERE user_id = 5;


--///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

CREATE TABLE bitcoinInfo (
  bitcoin_id SERIAL PRIMARY KEY,
  bitcoin_symbol VARCHAR(255),
  bitcoin_fullname VARCHAR(255),
  bitcoin_name VARCHAR(255),
  bitcoin_volume24hourto INTEGER
)

INSERT INTO bitcoinInfo (bitcoin_symbol, bitcoin_fullname, bitcoin_name, bitcoin_volume24hourto)
VALUES 

('ETH', 'Ethereum (ETH)', 'Ethereum', 43276.00938647688),
('BCH', 'Bitcoin Cash (BCH)', 'Bitcoin Cash', 14826.824549641702),
('ETC', 'Ethereum Classic (ETC)', 'Ethereum Classic', 9055.393325437519),
('EOS','EOS (EOS)','EOS', 9038.230514105715),
('LTC','Litecoin (LTC)','Litecoin', 8331.151530151457),
('DASH','Dash (DASH)','Dash',8180.237921356085),
('DOGE','Dogecoin (DOGE)','Dogecoin',6199.767186099567),
('XRP','XRP (XRP)','XRP',5868.355602510195),
('NEO','NEO (NEO)','NEO',4165.38102908586),
('QTUM','QTUM (QTUM)','QTUM',3937.85244473797),
('ZEC','ZCash (ZEC)','ZCash',3791.7464319885157),
('XLM','Stellar (XLM)','Stellar',3293.0749363534237),
('TRUE','True Chain (TRUE)','True Chain',2650.3906701820465),
('BIX','BiboxCoin (BIX)','BiboxCoin',2567.7512643009723),
('BTM','Bytom (BTM)','Bytom',2428.096272209708),
('XMR','Monero (XMR)','Monero',2391.533759203178),
('TRX','Tronix (TRX)','Tronix',2089.972087572705),
('XIN','Infinity Economics (XIN)','Infinity Economics', 1735.0088376514052),
('OMG','OmiseGo (OMG)','OmiseGo',1732.1856832263763),
('WAVES','Waves (WAVES)','Waves', 1677.1760849457733)

--///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

CREATE TABLE allBitcoinList (
  bitcoinlist_id SERIAL PRIMARY KEY,
  bitcoin_imageUrl VARCHAR(255),
  bitcoin_fullName VARCHAR(255),
  bitcoin_description VARCHAR(999),
  bitcoin_algorithm VARCHAR(255)
)

INSERT INTO allBitcoinList (bitcoin_imageUrl, bitcoin_fullName, bitcoin_description, bitcoin_algorithm)
VALUES
('https://www.cryptocompare.com/media/19633/btc.png', 'Bitcoin (BTC)', 'Bitcoin uses peer-to-peer technology to operate with no central authority or banks; managing transactions and the issuing of bitcoins is carried out collectively by the network. Although other cryptocurrencies have come before, Bitcoin is the first decentralized cryptocurrency - Its reputation has spawned copies and evolution in the space.</p><p>With the largest variety of markets and the biggest value - having reached a peak of 18 billion USD - Bitcoin is here to stay. As with any new invention, there can be improvements or flaws in the initial model however the community and a team of dedicated developers are pushing to overcome any obstacle they come across.', 'SHA256'),
('https://www.cryptocompare.com/media/351360/zec.png', 'ZCash (ZEC)', 'ZCash is a privacy driven cryptocurrency. It uses the <strong>Equihash</strong><span> as an algorithm, which is an asymmetric memory-hard Proof of Work algorithm based on the generalized birthday problem. It relies on high RAM requirements to bottleneck the generation of proofs and making ASIC development unfeasible.', 'Equihash'),
('https://www.cryptocompare.com/media/350851/dgd.png', 'Digix DAO (DGD)', 'Digix is an asset tokenization platform that puts gold asset ownership</span><span><span> </span>on the blockchain, making digital gold transferrable.<span> </span>Digix&#39;<span> </span>ecosystem is powered by two native tokens: DGX and DGD.', 'N/A'),
('https://www.cryptocompare.com/media/19782/litecoin-logo.png', 'Litecoin (LTC)', 'Litecoin LTC - provides faster transaction confirmations (2.5 minutes on average) and uses a memory-hard, scrypt-based mining proof-of-work algorithm to target the regular computers and GPUs most people already have - which are its main differentials to Bitcoin. The Litecoin network is scheduled to produce 84 million currency units with a halving in reward every four years just like bitcoin. The coin was created by a Google employee, Charles Lee. Litecoin is in second spot to Bitcoin and has spawned numerous clones - however it has a solid base of support and dedicated development team.', 'Scrypt'),
('https://www.cryptocompare.com/media/33842920/dash.png', 'Dash (DASH)', 'Dash (DASH) uses a new chained hashing algorithm approach, with many new scientific hashing algorithms for the proof-of-work. DASH aims to be the first privacy-centric cryptographic currency with fully encrypted transactions and anonymous block transactions, this feature is called <span>PrivateSend </span>and can be found on the official D<span>ashcore </span>wallet.</p><p><span>PrivateSend </span>mixes your DASH coins with other users who are also using this feature at the time, making your transactions untraceable.', 'X11'),
('https://www.cryptocompare.com/media/12318264/7638-nty_400x400.jpg', 'DigiByte (DGB)', 'New DigiBytes are brought into circulation as each block is discovered on the network through a process called mining.</p><p><strong>Mining</strong>: Mining is how transactions are processed on the network. Anyone can become a miner by donating and using their desktop, laptop or mobile phone computing power to help process transactions on the DigiByte network.  DigiByte has made this process even easier with our 3 click mining software for beginners.', 'Multiple'),
('https://www.cryptocompare.com/media/12318177/ada.png', 'Cardano (ADA)', 'Designed and developed by <span>IOHK in conjunction with the University of Edinburgh, the University of Athens and the University of Connecticut', 'Ouroboros'),
('https://www.cryptocompare.com/media/25792624/zen.png', 'ZenCash (ZEN)', 'ZenCash aims to be a secure and useful privacy coin, offering users zero-knowledge proof shielded transactions over an end-to-end encrypted network provided by compensated secure nodes.', 'Equihash'),
('https://www.cryptocompare.com/media/19969/xmr.png', 'Monero (XMR)', 'Monero (XMR) is a cryptonight algorithm based alternative crypto currency. The coin is based on Proof of Work and has a block reward that varies smoothly. The difficulty retargets every block with a sixty second block target. </p><p>Monero uses a Ring Signature system to protect your privacy, allowing users to make untraceable transactions.', 'CryptoNight-V7'),
('https://www.cryptocompare.com/media/33752295/etc_new.png', 'Ethereum Classic (ETC)', 'Ethereum Classic is an attempt at keeping the Ethereum blockchain unaltered by the part of the community that opposed the hard fork and the return of The DAO funds.', 'Ethash'),
('https://www.cryptocompare.com/media/20646/eth_logo.png', 'Ethereum (ETH)', 'Ethereum is a decentralized platform that runs smart contracts: applications that run exactly as programmed without any possibility of downtime, censorship, fraud or third party interference. In the Ethereum protocol and blockchain there is a price for each operation. The general idea is, in order to have things transferred or executed by the network, you have to <a href=\"/coins/guides/what-is-the-gas-in-ethereum/\" target=\"_blank\">consume or burn Gas</a>.', 'Ethash'),
('https://www.cryptocompare.com/media/19684/doge.png', 'Dogecoin (DOGE)', 'A Bitcoin clone that has reached success through clever marketing. Over the past year well over a hundred new cryptocurrencies have been created but not many have instantly carved out a niche. Dogecoin has sponsored multiple high profile events such as Nascar teams and the winter olympics - even so there are few locations to use the coin - and instead it has become a de facto internet tipping currency. The coin has produced 100 billion units by the end of 2014 and is now producing roughly 5 billion units per year.', 'Scrypt'),
('https://www.cryptocompare.com/media/27010664/bix.png', 'BiboxCoin (BIX)', 'The Biboxcoin is an Ethereum-based token that allows users to receive a discount for any fees on the Bibox platform, a pure cryptocurrency exchange. Bibox is a AI enhanced encrypted digital asset exchange', 'N/A'),
('https://www.cryptocompare.com/media/1383784/xuc.png', 'Exchange Union (XUC)', 'The Exchange Union makes strategic investments in digital currency exchanges. Shortly after launch, Exchange Union will build a union chain.', 'N/A'),
('https://www.cryptocompare.com/media/1383370/bat.png', 'Basic Attention Token (BAT)', 'The Basic Attention Token is an Ethereum-based token that can be used to obtain a variety of advertising and attention-based services on the Brave platform, a new Blockchain based digital advertising system.', 'N/A'),
('https://www.cryptocompare.com/media/1383947/bnb.png', 'Binance Coin (BNB)', 'The Binance Coin is an Ethereum-based token that allows users to receive a discount for any fees on the Binance platform, a pure cryptocurrency exchange that plans to create a decentralized exchange for blockchain assets.', 'N/A'),
('https://www.cryptocompare.com/media/1383549/bnt.jpg', 'Bancor Network Token (BNT)', 'The Bancor Protocol is a blockchain-based system for <span>discovery and a liquidity mechanism supporting multiple smart contract platforms.', 'N/A'),
('https://www.cryptocompare.com/media/20705/bts.png', 'Bitshares (BTS)', 'BitShares (BTS) was first introduced in a White Paper titled “A Peer-to-Peer Polymorphic Digital Asset Exchange” by Daniel Larimer, Charles Hoskinson, and Stan Larimer. It is a brand of open-source software based on the as blockchain technology as used by Bitcoin. Unlike bitcoins, which do not produce any income for their owners, BitShare can be used to launch Decentralized Autonomous Companies (DACs) which issue shares, produce profits and distribute profits to shareholders. As such, BitShares is about making profitable companies that people want to own shares in, thus creating return for the shareholders.', 'SHA-512'),
('https://www.cryptocompare.com/media/351090/cmt.png', 'CometCoin (CMT)', 'CometCoin is a Proof of Work cryptocurrency created to provide ease-of-access to users new to the crypto community. CMT can be send anywhere in the world, for a small fee and almost instantly.', 'Scrypt'),
('https://www.cryptocompare.com/media/1383999/dcn.png', 'Dentacoin (DCN)', 'Dentacoin is the first Blockchain concept designed for the Global Dental Industry. The Dentacoin ERC20 token is configured to be used globally by all individuals.', 'N/A'),
('https://www.cryptocompare.com/media/20780600/elf.png', 'aelf (ELF)', 'Aelf is a multi-chain parallel computing network. ELF is an Ethereum-based ERC20 token that serves as a currency on aelf&#39;s ecosystem. Token holders are also able to vote on decisions related to the project&#39;s development and governance.', 'N/A'),
('https://www.cryptocompare.com/media/1383652/eos_1.png', 'EOS (EOS)', 'EOS.IO is software that introduces a blockchain architecture designed to enable vertical and horizontal scaling of decentralized applications (the “EOS.IO Software”). This is achieved through an operating system-like construct upon which applications can be built.', 'DPoS'),
('https://www.cryptocompare.com/media/1383738/fun.png', 'FunFair (FUN)', 'FunFair is an Ethereum-based casino that allows users to bet in a trustless and decentralized model, featuing <span>3D games can be built in HTML5. FunFair offers cheap fees in terms of gas costs.', 'N/A'),
('https://www.cryptocompare.com/media/1383858/neo.jpg', 'Gas (GAS)', 'There are two built-in system assets: NEO and GAS. NEO represent the ownership of the blockchain, which is used for electoral accounting, to obtain GAS dividends, etc. GAS represents the right to use the blockchain, and are used to pay fees of various systems on the chain', 'N/A'),
('https://www.cryptocompare.com/media/351995/golem_logo.png', 'Golem Network Token (GNT)', 'The Golem Network is a decentralized computation network. Using Golem users can buy or sell computational power from other users in a peer to peer environment. Golem is built using Ethereum smart contracts as a transaction system for nano-payments within the network.', 'N/A'),
('https://www.cryptocompare.com/media/30002313/hot.jpg', 'Holo (HOT*)', 'Holo is an ERC-20 token based on the Ethereum blockchain.', 'N/A'),
('https://www.cryptocompare.com/media/1383858/neo.jpg', 'NEO (NEO)', 'NEO is a platform in which users can issue and trade assets. NEO has been rebranded from the original &#39;Antshares&#39;. NEO <span>tokenizes proofs of ownership of an asset and not the asset itself, thus taking into account all of the legal complications and obligations that may come with the transfer of shares, equity and assets.', 'N/A'),
('https://www.cryptocompare.com/media/20627/nxt.png', 'Nxt (NXT)', 'Nxt is considered a 2nd generation crypto currency. With all the alt coins that alter parametes such as hashing mechanism, time between blocks, starting difficulty, and so on, Nxt brings much much more to the table and was designed this way for a number of reasons. It&#39;s proof of stake model makes it less susceptible to 51% attacks whilst it is designed to support large transaction volumes, something which the traditional Bitcoin and its clones have as a potential flaw. Nxt allows the creation and exchange of custom tokens, coloured coins and assets on the Blockchain.', 'PoS'),
('https://www.cryptocompare.com/media/1383814/omisego.png', 'OmiseGo (OMG)', 'OmiseGO is building a decentralized exchange, liquidity provider mechanism, clearinghouse messaging network, and asset-backed blockchain gateway. OmiseGO is not owned by any single one party. Instead, it is an open distributed network of validators which enforce behavior of all participants.', 'N/A'),
('https://www.cryptocompare.com/media/14913437/st.png', 'Simple Token (OST)', 'Simple Token enables any business to launch a branded cryptocurrency on open Ethereum sidechains. Simple Token, a protocol for consumer app tokenization is bringing crypto to mainstream apps, enabling them to launch branded crypto tokens without the ICO drama.', 'N/A'),
('https://www.cryptocompare.com/media/1383568/snt.png', 'Status Network Token (SNT)', 'Status is an open source messaging platform and mobile browser that allows users to interact with decentralized applications (dApps) that run on the Ethereum Network. In Status, users<span> own and control their own data, wealth and digital identity.', 'N/A'),
('https://www.cryptocompare.com/media/34477805/trx.jpg', 'Tronix (TRX)', 'Tron is a blockchain-based protocol for a free content entertainment system, allowing <span> each user to freely publish, store and own data, and in the decentralized autonomous form, decides the distribution, subscription and push of contents and enables content creators by releasing, circulating and dealing with digital assets, thus forming a decentralized content entertainment ecosystem.', 'N/A'),
('https://www.cryptocompare.com/media/12318129/ven.png', 'Vechain (VET)', 'VeChain is a blockchain decentralized for products and information, building a trust-free and distributed business ecosystem based on the blockchain technology.', 'N/A'),
('https://www.cryptocompare.com/media/34477776/xrp.png', 'XRP (XRP)', 'Ripple positions itself as a complement to, rather than a competitor with, Bitcoin - the site has a page dedicated to Ripple for bitcoiners. Ripple is a distributed network which means transactions occur immediately across the network - and as it is peer to peer - the network is resilient to systemic risk. Ripples aren&#39;t mined - unlike bitcoin and its peers - but each transaction destroys a small amount of XRP which adds a deflationary measure into the system.', 'N/A'),
('https://www.cryptocompare.com/media/1383651/xbt.png', 'Tezos (XTZ)', 'Tezos is a new decentralized blockchain that governs itself by establishing a true digital commonwealth. It facilitates formal verification, a technique which mathematically proves the correctness of the code governing transactions and boosts the security of the most sensitive or financially weighted smart contracts.', 'N/A'),
('https://www.cryptocompare.com/media/27010464/zil.png', 'Zilliqa (ZIL)', 'Zilliqa is an ERC-20 token based on the Ethereum blockchain.', 'N/A'),
('https://www.cryptocompare.com/media/1383799/zrx.png', '0x (ZRX)', '0x is an open protocol that facilitates the decentralized exchange of Ethereum-based tokens and assets. Developers can use 0x to build their own custom exchange apps with a <span>wide variety of user-facing applications i.e. 0x OTC, a decentralized application that facilitates trustless over-the-counter trading of Ethereum-based tokens.', 'N/A'),
('https://www.cryptocompare.com/media/1383919/12-bitcoin-cash-square-crop-small-grn.png', 'Bitcoin Cash (BCH)', 'Bitcoin Cash (BCH) is a hard forked version of the original Bitcoin. It is similar to bitcoin with regards to its protocol; Proof of Work SHA-256 hashing, 21,000,000 supply, same block times and reward system. However two main differences are the the blocksize limits, as of August 2017 Bitcoin has a 1MB blocksize limit whereas BCH proposes 8MB blocks.', 'SHA256'),
('https://www.cryptocompare.com/media/351408/kmd.png', 'Komodo (KMD)', 'Komodo is a privacy-centric cryptocurrency that combines the anonymity of ZCash with the security of Bitcoin. Using a new consensus mechanism developed by the Komodo team, delayed Proof of Work, Komodo blocks can be notarized using the Bitcoin blockchain.', 'Equihash'),
('https://www.cryptocompare.com/media/11417632/cnx.png', 'Cryptonex (CNX)', 'Cryptonex platform is developed as international acquiring and is based on blockсhain technology. Safe system based on blockchain technology is protected against unauthorized access. Users can convert fiat money to any cryptocurrencies and tokens, as well as spend cryptocurrency with the help of bank cards and mobile applications with contactless payments.', 'N/A'),
('https://www.cryptocompare.com/media/12318032/xvg.png', 'Verge (XVG)', 'Verge is a scrypt based alternative crypto currency trying to take the popularity of both Dogecoin and Bitcoin and combine it with the anonymous features of DASH. The block time is 30 seconds and the coin operates through Proof of Work.', 'Multiple'),
('https://www.cryptocompare.com/media/12318404/bcn.png', 'ByteCoin (BCN)', 'Bytecoin (BCN) is the first currency based on the CryptoNote technology and launched back in July, 2012. BCN protects your privacy with completely untraceable and anonymous transactions so it is deservedly called the next generation anonymous cryptocurrency.', 'CryptoNight'),
('https://www.cryptocompare.com/media/1382607/decred.png', 'Decred (DCR)', 'Decred is an open, progressive, and self-funding cryptocurrency with a system of community-based governance integrated into its blockchain. At its core is a hybridized proof-of-work proof-of-stake (PoW/PoS) consensus system that aims to strike a balance between PoW miners and PoS voters to create a more robust notion of consensus.', 'BLAKE256'),
('https://www.cryptocompare.com/media/16404872/bcd.png', 'Bitcoin Diamond (BCD)', 'Bitcoin Diamond (BCD) is a fork of Bitcoin that will occur at the predetermined height of block 495866. It is a PoW/PoS cryptocurrency based on X13 algorithm.', 'X13'),
('https://www.cryptocompare.com/media/1383996/btm.png', 'Bytom (BTM*)', 'Bytom is an interactive protocol of multiple byte assets. BTM is currently an Ethereum-based token.', 'N/A'),
('https://www.cryptocompare.com/media/1382387/nexus.jpg', 'Nexus (NXS)', 'Nexus is an innovative crypto currency - the coin runs off its own algorithm and has a well though through infrastructure that takes it beyond bitcoin and other 1 st generation crypto currencies - it has a checks and balances system for sending coins - where transactions can be retrieved if sent to a wrong address.', 'SHA3'),
('https://www.cryptocompare.com/media/12318137/hsr.png', 'Hshare (HSR)', 'Hshare is a dual network blockchain comprised both of a blockchain-based network and a DAG-based network. It allows for anonymous transactions through the use of zero proof technology. The blockchain-based side of Hshare features a PoW/PoS cryptocurrency.', 'N/A'),
('https://www.cryptocompare.com/media/1382780/xzc1.png', 'ZCoin (XZC)', 'ZCoin is a Proof of Work cryptocurrency using the Lyra2 hashing algorithm.', 'Lyra2Z'),
('https://www.cryptocompare.com/media/27011062/btg.png', 'Bitcoin Gold (BTG)', 'Bitcoin Gold is a fork of the Bitcoin blockchain that occurred at block 491407. It implements a new PoW algorithm, Equihash, which makes it ASIC-resistant and can only be mined by GPUs rigs.', 'Equihash'),
('https://www.cryptocompare.com/media/14913433/aidcoin.png', 'AidCoin (AID)', 'AidCoin is the ERC20 token that aims to become the preferred method to donate transparently through the Ethereum blockchain. The AID token will power AIDChain, a platform that provides an ecosystem of services through an easy-to-use interface, connecting the non-profit community while allowing full transparency and traceability of donations.', 'N/A'),
('https://www.cryptocompare.com/media/1383743/mtl.png', 'Metal (MTL)', 'Metal is a blockchain-based system utilizing Proof-of-Processed-Payments to identify users, rewarding them for converting legacy fiat currency into cryptocurrency', 'N/A'),
('https://www.cryptocompare.com/media/14913634/gvt.png', 'Genesis Vision (GVT)', 'Genesis Vision is a private trust fund management. GVT is an Ethereum-based ERC20 token that serves as currency in Genesis Vision&#39;s ecosystem.', 'N/A'),
('https://www.cryptocompare.com/media/34478301/logo_132_132_chat.png', 'OpenChat (CHAT)', 'OpenChat is an blockchain-based payment platform. It allows users to trade (buy/sell), store and monitor their digital assets as well as to access the platform blockchain-based chat protocol named BIMP, which will provide users with the features to communicate between them in a tokenized ecosystem.', 'Scrypt'),
('https://www.cryptocompare.com/media/12318118/mtn.png', 'TrackNetToken (MTN)', 'Mytracknet is a global lost and found network that uses blockchain technology to incentivize paritipants for their contribution, while implementing a <span>unified solution for every Bluetooth tracker in the market. MTN is a Waves-based asset used to reward those who help others recover lost items.', 'N/A'),
('https://www.cryptocompare.com/media/16404850/knc.png', 'KingN Coin (KNC**)', 'KingN Coin is a PoW/PoS cryptocurrency based on Scrypt algorithm.', 'Scrypt'),
('https://www.cryptocompare.com/media/34478152/zipper.png', 'Zipper (ZIP)', 'Zipper is a blockchain-based value switching network platform developing a Point-to-Point Message Communication, Transaction Switching and Transaction Settlement systems.', 'DPoS'),
('https://www.cryptocompare.com/media/27010852/dadi.png', 'DADI (DADI)', 'DADI is a blockchain-based cloud platform focused on the provision of webservices. The platform will allow the users to build, scale and grow their digital products.', 'N/A'),
('https://www.cryptocompare.com/media/12318287/eng.png', 'Enigma (ENG)', 'Enigma is a decentralized data marketplace, that guarantees the privacy of their users&#39; shared data cryptographically. <span>Enigma’s computational model is based on an optimized version of secure multi-party computation, backed by a verifiable secret-sharing scheme.', 'N/A'),
('https://www.cryptocompare.com/media/20780783/hpb.png', 'High Performance Blockchain (HPB)', 'High Performance Blockchain is a DPoS cryptocurrency.', 'DPoS'),
('https://www.cryptocompare.com/media/20180/2015.png','2015 c+oin (2015)','Twenty15 Coin was conceived to be an asset backed &#39;sweat equity&#39; currency.  The main emphasis will be on creating assets that will generate revenue, and will also be available for purchase by other Crypto enthusiasts.  These assets will be available for public demonstration or full usage, but also sold to interested parties for 2015 Coins', 'X11'),
('https://www.cryptocompare.com/media/19630/btcd_1.png', 'BitcoinDark (BTCD)', 'Bitcoin Dark (BTCD) is a PoW and PoS hybrid alternatve crypto currency based on the same algorithm as Bitcoin itself - SHA256 - the difference is in the intent behind development - where Bitcoin is moving towards regulatory approval with increased transparency, BitcoinDark tries to push further of the belief of decentralisation and anonymity. The block time is 60 seconds - there was a 1.5 premine and a total of 22 million coins are scheduled to be produced.</p><p>Following the announcement of the Komodo Platform by the SuperNet team, BitcoinDark could be swapped for KMD coins and will be so until 2018. BTCD technology will be further advanced in the KMD platform.', 'SHA256'),
('https://www.cryptocompare.com/media/19864/peercoin-logo.png', 'PeerCoin (PPC)', 'A peer-to-peer crypto-currency design derived from Satoshi Nakamoto&#39;s Bitcoin. Proof-of-Stake replaces Proof-of-Work to provide most of the network security. Under this hybrid design proof-of-work mainly provides initial minting and is largely non-essential in the long run. Security level of the network is not highly enery dependent thus providing an energy efficient and more cost-competitive peer-to-peer crypto-currency. Proof-of-Stake is based on coin age and generated by each node via a hashing scheme bearing similarity to Bitcoins but over limited search space. Block chain history and transaction settlement are further protected by a centrally broadcasted checkpoint mechanism.', 'N/A'),
('https://www.cryptocompare.com/media/20022/craig.png', 'CraigsCoin (CRAIG)', 'CraigCoin (CRAIG) is a 100% pure PoS or Proof of Stake alternative Crypto currency - the first 30,000,000 coins were issued through a presale. The block time is 30 seconds and the PoS interest rate is set to 2% per annum.', 'X11'),
('https://www.cryptocompare.com/media/351060/xbs_1.png', 'Bitstake (XBS)', 'To create the infrastructure necessary to implement an inclusive digital economy that encourage affordable digital transactions and services. Bitstake’s vision is to make digital currencies more accessible to people unreached by traditional banking as well as drive down the costs of money transfers. Bitstake is a hybrid proof of work and proof of stake with a 5% annualised interest rate.', 'X11'),
('https://www.cryptocompare.com/media/20076/xpy_1.png', 'PayCoin (XPY)', 'Paycoin is an SHA256 cryptocurrency that switched from Proof of Work to Proof of Stake. XPY can be sent internationally almost instantly and with low fees.', 'SHA256'),
('https://www.cryptocompare.com/media/20393/prc.png', 'ProsperCoin (PRC)', 'ProsperCoin is a PoW cryptocurrency with a modified Scrypt algorithm. Created to bring to bring prosperity to its users, PRC can be sent to anyone for a small fee and almost instantly.', 'Scrypt'),
('https://www.cryptocompare.com/media/19975/ybc.png', 'YbCoin (YBC)', 'YB coin is a Chinese clone of YACcoin. It uses scrypt N+1 and ChaCha. The coin has a relatively low block time at 60 seconds but being a clone hasnt really brought much to the table in terms of innovation. Again like Yacoin there is a dynamically adjusted economic model related to the network power that balances the incentivisation to mine and use it depending on its popularity. An inverse relationship.', 'Multiple'),
('https://www.cryptocompare.com/media/20247/dank.png', 'DarkKush (DANK)', 'DarkKush is a cryptocurrency built for the marijuana community, it&#39;s a PoW/PoS hybrid coin.', 'X13'),
('https://www.cryptocompare.com/media/20297/give.png', 'GiveCoin (GIVE)', 'GiveCoin is a CryptoCurrency with a charitable angle - the idea being to emPoWer charities and encourage giving. The coin is based on DarkCoins ASIC resistant X11 algorithm, has a block time of 60 seconds - block reward of 1000 coins per block - halving every six months - a total supply of 500 million and a Kimoto gravity well difficulty retargetting. There was a premine of 5%, 2% will be donated to charities on a most voted basis each month, 1% for disaster relief, 1% for bugs and bounties and 1% for development and marketing.', 'X11'),
('https://www.cryptocompare.com/media/20329/kobo.png', 'KoboCoin (KOBO)', 'Kobocoin is a digital currency and payment system similar to Bitcoin, with an African heritage. All nodes verify transactions in a public distributed ledger calledthe blockchain. The ledger uses its own unit of account, also called KoboCoin(s). KOBO can be sent to anyone in the world for small fees and almost instantly and can also be used for Micropayments.', 'X15'),
('https://www.cryptocompare.com/media/20031/dt.png', 'DarkToken (DT)', 'DarkToken aims to offer a refreshing new take on what a crypto-currency should be by detailing every aspect of the coin, from start to finish. DarkToken takes the next step in coin development by fixing it from the start. Rigorous, energy intensive mining over long periods of time, or even worse, short PoW flash-mines, are extremely detrimental to not only the environment, but the crypto community as a whole. Networks can be maintained perfectly using Proof of Stake.', 'NIST5'),
('https://www.cryptocompare.com/media/19935/trust.png', 'TrustPlus (TRUST)', 'TrustPlus (TRUST) is an X11 algorithm based crypto currency that has a short PoW phase of just under seven days. The PoS rate is 18% per annum and there was a premine for roughly 10% of the PoW mined coins.', 'X11'),
('https://www.cryptocompare.com/media/20282/fcn.png', 'FantomCoin  (FCN)', 'FantomNightCoin (FCN) is a CryptoNight algorithm based coin which is a 64-bit CPU only mineable coin. There is a block time of sixty seconds and the block reward is controlled by a formula that decreases depending on the supply mined to date. The coin retargets every block.', 'CryptoNight'),
('https://www.cryptocompare.com/media/20483/xcn.png', 'Cryptonite (XCN)', 'Cryptonite was developed by the Mini-blockchain Project over a period of almost four months. Cryptonite is a fork of the Bitcoin core but the code has been extensively modified and expanded upon.', 'M7 POW'),
('https://www.cryptocompare.com/media/1383812/cure.png', 'Curecoin (CURE)', 'Curecoin is a PoW PoS hybrid altcoin that allows both ASIC mining and CPU &amp; GPU mining to play a part in creating coins - as they call it mining and folding. The added benefit behind the coin is that computer power is used to test protein folding and create a valuable scientific knowledge base. Block halving occurs every million blocks and the block time is 60 seconds.', 'Scrypt'),
('https://www.cryptocompare.com/media/20299/gmc.png', 'Gridmaster (GMC)', 'Gridmaster Coin (GMC) is a peer to peer crypto currency that is built with the latest technologies in crypto currency such as Dynamic Proof of Stake, Anonymous transactions, Masternodes and Encrypted Messaging. Further developments will focus on building platforms and utilities that bridge the merchant-consumer gap whilst enabling the wider audience to use the digital currency in their everyday lives.', 'Scrypt'),
('https://www.cryptocompare.com/media/19795/mmc.png', 'MemoryCoin (MMC)', 'MemoryCoin (MEM) is a POW is a modified momentum based algorithm and decentralizes currency mining. Each hash requires 1GB of Memory to perform and encrypts 50GB of data. By contrast, the verification only requires 128K and less than one 10th of a second. The coin is inflationary with a rate of 2% after the first two years of mining 10000000 coins.', 'Multiple'),
('https://www.cryptocompare.com/media/20488/xbc.png', 'BitcoinPlus (XBC)', 'Bitcoin Plus is a Bitcoin advance adding features such as proof of stake with a 10% annnualised interest rate.', 'Scrypt'),
('https://www.cryptocompare.com/media/19671/cyc.png', 'ConSpiracy Coin  (CYC)', 'There is no longer a functional website for this crypto currency - although the coin has 33 million total units to be mined by proof of work and X11.', 'X11'),
('https://www.cryptocompare.com/media/19983/888.png', 'OctoCoin (OCTO)', 'OCTO is a Counterparty asset with focus on decentralized website payments for Counterparty assets and Token Control Access Marketing. OCTO will create and fairly distribute a total of 88.8 million coins to be used for early access and testing of the OCTO projects. Distribution includes an alt coin burn, merged mining with FoldingCoin and a future crowd sale.', 'N/A'),
('https://www.cryptocompare.com/media/19814/mst.png', 'MasterCoin (MSC)', 'Mastercoin is both a new type of currency (MSC) and a platform. It is a new protocol layer running on top of bitcoin like HTTP runs on top of TCP/IP. Its purpose is to build upon the core Bitcoin protocol and add new features, with a focus on a straight-forward easy to understand implementation which allow for protocol and analysis and its rapid development.', 'Scrypt'),
('https://www.cryptocompare.com/media/20269/egg.png', 'EggCoin (EGG)', 'EggCoin is a scrypt based alternative crypto currency.', 'Scrypt'),
('https://www.cryptocompare.com/media/19640/c2.png', 'Coin.2 (C2)', 'Coin 2.0 is a pure proof of stake coin with 60000000 total coins and an annual variable interest rate that decreases from 30% in y1 to 2% in y5.', 'Scrypt'),
('https://www.cryptocompare.com/media/20314/gsxjpeg.png', 'GlowShares (GSX)', 'Anonymous, decentralized voting on the blockchain makes it easy for the community to form a consensus on important issues regarding the future of GSX. Secure, transparent, tamper-proof, and viewable 24 hours a day. Predefined rules govern and enforce the voting process, putting the coin in the hands of the holders. GSX brings together its community with voting on the blockchain.', 'N/A'),
('https://www.cryptocompare.com/media/20220/cam.png', 'Camcoin (CAM)', 'CamCoin has an open libertarian philosophy on sharing photography and art. It is a PoW PoS hybrid X11 based alternative crypto currency with a block time of 60 seconds and difficulty retargetting every 20 blocks. There was  a small premine of 10,000 CAM on a total supply of 10 million - The PoS rate is 9%.', 'X11'),
('https://www.cryptocompare.com/media/20408/rbr.png', 'Ribbit Rewards (RBR)', 'RibbitRewards is the world’s first rewards program supported by block chain technology. Buyers and sellers transacting in goods and services or giving charitable donations in any currency earn RibbitRewards. No matter what currency you are transacting in, the more you buy, sell, or donate on Marketplace.Life or other participating merchant sites, the more RibbitRewards you can earn.', 'Multiple'),
('https://www.cryptocompare.com/media/12318067/xqn.png', 'Quotient (XQN)', 'Quotient is a high-interest proof-of-stake crypto currency that offers 1,618% annual returns on your stake, with a max stake reward cap of 618 coins.', 'Scrypt'),
('https://www.cryptocompare.com/media/20319/icash.png', 'ICASH (ICASH)', 'iCash P2P Cryptocurrency - iCash is Anonymous and instant.', 'X11'),
('https://www.cryptocompare.com/media/20373/node.png', 'Node (NODE)', 'Node is a second generation crypto currency built in node.js. it operates through proof of activity and can be seen as a hybrid between a crypto currency and a payments processing system. It can run efficiently on mobile clients and as the network become s more secure the more users there are - each time someone spends - the network becomes harder to break.', 'Curve25519'),
('https://www.cryptocompare.com/media/20436/soon.png', 'SoonCoin (SOON)', 'Soon Coin is an SHA-256 Bitcoin clone - the number of coins is 21 million to be mined by proof of work.', 'SHA256'),
('https://www.cryptocompare.com/media/20213/btmi.png', 'BitMiles (BTMI)', 'BitMiles (BTMi) - the official cryptogenic equivalence of frequent-flyer miles (which is known to be more valuable than money). BitMiles can be used as a means of exchange and a store of value (very much the same as your traditional flyer miles).', 'Scrypt'),
('https://www.cryptocompare.com/media/20277/event.png', 'Event Token (EVENT)', 'EventToken is a multi layer crypto currency aimed at the multi billion dollar events industry, and specifically the festivals market and aimed at solving the specific issues around people using cash at food and merchandise vendors. At many events people go there for several days and the majority of vendors are not set up or able to accept card payments, but carrying large amounts of cash around is risky for many reasons.', 'Scrypt'),
('https://www.cryptocompare.com/media/20175/1cr.png', '1Credit (1CR)', '1CRedit was created to be the 4th coin in the game \"The Crypto Void\" by 1BillionHex.  Although a game coin in the sense of that being the driver for its creation, it is a fully functional cyber coin that can stand alone.</p><p> </p><p>The genesis of the coin is to be something as stable as the current Bitcoin/Litecoin codebase will allow.  Kimoto Gravity Well is used to stabilize block times as of block 5000.</p><p> </p><p>Long block times and high confirmation requirements should minimize fork opportunities.', 'Scrypt'),
('https://www.cryptocompare.com/media/20469/viorjpeg.png', 'ViorCoin (VIOR)', 'ViorCoin includes encrypted messageing but is also a scrypt alternative crypto currency.', 'Scrypt'),
('https://www.cryptocompare.com/media/20486/xco.png', 'XCoin (XCO)', 'XCO is an ultra hybrid crypto currencies that was compiled from best altcoins, and bitcoin, allowing the ultra fast transactions to anyone anywhere in the world.', 'SHA256'),
('https://www.cryptocompare.com/media/19943/vmc.png', 'VirtualMining Coin (VMC)', 'VirtualMiningCoin (VMC) is a scrypt-n adaptive altcoin that has a maximum coin supply of 100 million VMC. The block reward is fixed at 171VMC and the block time at sixty seconds. The difficulty retargets every five minutes and 2% of the coin supply is dedicated to maintenace and development, whilst the larger 8% is distributed amonsgt those involved in the book build or IPO.', 'Scrypt-n'),
('https://www.cryptocompare.com/media/19808/mrs.png', 'MarsCoin (MRS)', 'MarsCoin (MRS) is out there with its charitable foundation plan to initiate colonisation of Mars. The premine was a donation towards the foundation. The block reward is set to half every year on a block time of two minutes and a total hard coin cap of 33 million', 'X11'),
('https://www.cryptocompare.com/media/20472/viral.png', 'Viral Coin (VIRAL)', 'ViralCoin (VIRAL) is a crypto currency operating by proof of work but with a twist. The idea is to use native social advertising to generate revenue for holders of the crypto currency. This is then used to buy the VIRAL coin on exchanges which are then burnt - reducing total supply. Difficulty retargets every block and there is a 5% PoS rate.', 'Scrypt'),
('https://www.cryptocompare.com/media/20404/qslv.png', 'Quicksilver coin (QSLV)', 'The goal of QuickSilver is to decentralize the process of acquiring and paying for a cab.  A robust driver and customer matching system includes everyone from independent cab drivers to fleet owners allowing everyone to compete in the market.  There are no hidden fees when using QuickSilver which will translate into lower prices for customers and a better bottom line for drivers.  </p><p>Quicksilver is a proof of stake crypto currency with an annualised interest staking rate of 6%.', 'X11'),
('https://www.cryptocompare.com/media/27010496/bsty.png', 'GlobalBoost (BSTY)', 'BSTY brings a completely new algorithm to the digital currency scene, and combines it with our real products, real company, and visible &amp; accountable leadership. They aim to improve the acceptance of digital money, providing a safe &amp; attractive investment using Yescrypt as POW - which is ASIC and FGPA resistant..', 'Yescript'),
('https://www.cryptocompare.com/media/12318167/ufo1.png', 'UFO Coin (UFO)', 'UFO Coin or \"Uniform Fiscal Object\" is a PoW cryptocurrency based on the Neoscrypt algorithm.', 'NeoScrypt'),
('https://www.cryptocompare.com/media/12318379/women.png', 'WomenCoin (WOMEN)', 'WomenCoin is a PoW/PoS hybrid cryptocurrency based on the Scrypt algorithm.', 'Scrypt'),
('https://www.cryptocompare.com/media/16746538/aion.png', 'Aion (AION)', 'Aion network aims to provide a multi-tier blockchain system to improve the scalability, privacy, and interoperability of the blockchain. The Aion Network is designed to support custom blockchain architectures while providing a mechanism for cross-chain interoperability.</p><p>The AION token is the fuel used to create new blockchains and to monetize inter-chain bridges.', 'N/A'),
('https://www.cryptocompare.com/media/350879/bitb.png', 'BitBean (BITB)', 'BitBean is another alternative crypto currency. Its Proof of Stake is different from other coins. In addition to only giving all coins that have over 6 hours age only 6 hours of age in the PoS calculations, the blocks which are found are static blocks similar to PoW. Each PoS block is 1000 coins.', 'SHA256'),
('https://www.cryptocompare.com/media/351795/blk.png', 'BlackCoin (BLK)', 'BlackCoin has seen initial success due to its innovative features. The coin has incorporated bitcoin upgrades to reduce transaction risk. The coin initially uses proof of work as well as proof of stake, with the proof of work being dropped after the 10000th block.', 'Scrypt'),
('https://www.cryptocompare.com/media/1383265/red.png', 'Redcoin (RED)', 'Redcoin is a Proof of Work cryptocurrency based on the Scrypt algorithm.', 'Scrypt'),
('https://www.cryptocompare.com/media/27010480/garlic.png', 'Garlicoin (GRLC)', 'Garlicoin was formed on a few simple fundamentals - cheap and fast transactions, low barrier to entry and total focus on the community. These fundamentals have been put into practice, resulting in: 40 second block times allowing blazingly fast confirmations, our ASIC resistant proof-of-work algorithm means anyone with a GPU can contribute to mining, and many important decisions have been made by the rapidly growing Garlicoin community.', 'N/A'),
('https://www.cryptocompare.com/media/20079/acoin.png', 'ACoin (ACOIN)', 'Acoin is an SHA-256 Bitcoin clone. The block reward varies with a block reward of 2-10x normal roughly every 1 in ten blocks. The block reward initially starts at 1 and reduces by 50% every 6 months.', 'SHA256')

--////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

CREATE TABLE favorite (
  bitcoinlist_id INTEGER REFERENCES allBitcoinList ,
  user_id INTEGER REFERENCES users(user_id)
)

INSERT INTO favorite (bitcoinlist_id, user_id)
VALUES ($1, $2);

--///////////////////////////////////////////////////////////////////

CREATE TABLE btchistoryinfo (
  btchistory_id SERIAL PRIMARY KEY,
  btchistory_average VARCHAR(255),
  btchistory_high VARCHAR(255),
  btchistory_low VARCHAR(255),
  btchistory_open VARCHAR(255),
  btchistory_time VARCHAR(255),
  btchistory_volume VARCHAR(255)
)

INSERT INTO btchistoryinfo (btchistory_average, btchistory_high, btchistory_low, btchistory_open, btchistory_time, btchistory_volume)
VALUES ($1, $2, $3, $4, $5, $6);

('14577.7', '14577.7', '13868.25', '13868.25', 'Jan 13 2018', '68536.33573'),
('14115.12',  '14115.12', '13321.39', '13321.39', 'Jan 12 2018', '98341.84455'),
('14952.82', '14952.82', '14905.57', '14905.57', 'Jan 11 2018', '166997.9932'),
('14905.57', '14905.57', '14491.24', '14491.24', 'Jan 10 2018', '140168.3006'),
('15369.16', '15369.16', '15024.4', '15024.4', 'Jan 9 2018', '101224.8475'),
('16245.09', '16245.09', '16193.55', '16193.55', 'Jan 8 2018', '141451.7588'),
('17159.99', '17159.99', '17159.99', '17159.99', 'Jan 7 2018', '76574.32451'),
('17242.87', '17242.87', '17012.63', '17012.63', 'Jan 6 2018', '78372.97836'),
('17185.73', '17185.73', '15271.27', '15271.27', 'Jan 5 2018', '82388.03896'),
('15446.58', '15446.58', '15238.3', '15238.3', 'Jan 4 2018', '78367.72064'),
('15444.79', '15444.79', '14778.08', '14778.08', 'Jan 3 2018', '56517.19474'),
('15275.07', '15275.07', '13509.7', '13509.7', 'Jan 2 2018', '127897.8032'),
('13965.22', '13965.22', '13948.3', '13948.3', 'Jan 1 2018', '70157.86219'),
('14532.11', '14532.11', '14485.37', '14485.37', 'Dec 30 2017', '169479.4308'),
('15115.53', '15115.53', '14455.82', '14455.82', 'Dec 29 2017', '111219.2071'),
('15580.16', '15580.16', '15498.39', '15498.39', 'Dec 28 2017', '165916.3318'),
('16485.01', '16485.01', '15754.38', '15754.38', 'Dec 27 2017', '79159.13527'),
('16137.47', '16137.47', '13883.69', '13883.69', 'Dec 26 2017', '135821.4028'),
('14741.26', '14741.26', '14235.35', '14235.35', 'Dec 25 2017', '96994.77356'),
('14686.91', '14686.91', '14574.35', '14574.35', 'Dec 24 2017', '87112.37426'),
('16088.01', '16088.01', '14195.6', '14195.6', 'Dec 23 2017', '153401.7484'),
('15797.43', '15797.43', '15617.78', '15617.78', 'Dec 22 2017', '298566.5285'),
('17339.4', '17339.4', '16479.94', '16479.94', 'Dec 21 2017', '164880.1033'),
('17842.31', '17842.31', '17614.62', '17614.62', 'Dec 20 2017', '229858.1633'),
('19422.87', '19422.87', '18958.88', '18958.88', 'Dec 19 2017', '168380.285'),
('19195.61', '19195.61', '19043.99', '19043.99', 'Dec 18 2017', '138543.0563'),
('19843.02', '19843.02', '19336.4', '19336.4', 'Dec 17 2017', '119990.5995'),
('19570.17', '19570.17', '17628.71', '17628.71', 'Dec 16 2017', '119589.9848'),
('17992.17', '17992.17', '16500.79', '16500.79', 'Dec 15 2017', '159005.9502'),
('17001.56', '17001.56', '16345.28', '16345.28', 'Dec 14 2017', '109075.5421'),
('17312.1', '17312.1', '17151.02', '17151.02', 'Dec 13 2017', '164127.3734'),
('17573.84', '17573.84', '16702.87', '16702.87', 'Dec 12 2017', '145753.4998'),
('17352.23', '17352.23', '15060.73', '15060.73', 'Dec 11 2017', '194953.1294'),
('15762.72', '15762.72', '14886.27', '14886.27', 'Dec 10 2017', '249654.8885'),
('16261.35', '16261.35', '16045.84', '16045.84', 'Dec 9 2017', '185713.9532'),
('17252.17', '17252.17', '16815.66', '16815.66', 'Dec 8 2017', '314611.9333'),
('16843.55', '16843.55', '13779.24', '13779.24', 'Dec 7 2017', '363469.0249'),
('13919.73', '13919.73', '11728.55', '11728.55', 'Dec 6 2017', '235324.2405'),
('11930.68', '11930.68', '11640.97', '11640.97', 'Dec 5 2017', '120759.3186'),
('11640.97', '11640.97', '11242.21', '11242.21', 'Dec 4 2017', '142927.3841'),
('11826.77', '11826.77', '10939.29', '10939.29', 'Dec 3 2017', '196642.4332'),
('11196.59', '11196.59', '10893.06', '10893.06', 'Dec 2 2017', '116815.955'),
('10965.43', '10965.43', '9999.86', '9999.86', 'Dec 1 2017', '200809.7128'),
('10698.63', '10698.63', '9861.37', '9861.37', 'Nov 30 2017', '298602.6993'),
('11412.58', '11412.58', '9962.86', '9962.86', 'Nov 29 2017', '423519.7238'),
('10036.15', '10036.15', '9733.11', '9733.11', 'Nov 28 2017', '123611.7325'),
('9757.87', '9757.87', '9327.8', '9327.8', 'Nov 27 2017', '158515.789'),
('9481.91', '9481.91', '8767.53', '8767.53', 'Nov 26 2017', '156998.9776'),
('8772.38', '8772.38', '8221.88', '8221.88', 'Nov 25 2017', '104836.8243'),
('8351.31', '8351.31', '8036.51', '8036.51', 'Nov 24 2017', '103881.1072'),
('8281.45', '8281.45', '8251.9', '8251.9', 'Nov 23 2017', '82274.15496'),
('8316.8', '8316.8', '8117.39', '8117.39', 'Nov 22 2017', '80345.66457'),
('8371.73', '8371.73', '8242.04', '8242.04', 'Nov 21 2017', '170237.573'),
('8290.34', '8290.34', '8035.52', '8035.52', 'Nov 20 2017', '101046.026'),
('8088.88', '8088.88', '7780.9', '7780.9', 'Nov 19 2017', '92073.1282'),
('7854.52', '7854.52', '7701.56', '7701.56', 'Nov 18 2017', '91227.86935'),
('7995.41', '7995.41', '7849.34', '7849.34', 'Nov 17 2017', '174525.8556'),
('7964.47', '7964.47', '7296.23', '7296.23', 'Nov 16 2017', '200467.198'),
('7334.2', '7334.2', '6625.34', '6625.34', 'Nov 15 2017', '180508.4553'),
('6731.05', '6731.05', '6529.6', '6529.6', 'Nov 14 2017', '121413.2151'),
('6762.86', '6762.86', '5869.68', '5869.68', 'Nov 13 2017', '260239.6973'),
('6464.62', '6464.62', '6339.1', '6339.1', 'Nov 12 2017', '389409.1624'),
('6831.23', '6831.23', '6586.9', '6586.9', 'Nov 11 2017', '178260.4441'),
('7331.54', '7331.54', '7158.04', '7158.04', 'Nov 10 2017', '249647.5196'),
('7474.41', '7474.41', '7462.26', '7462.26', 'Nov 9 2017', '128869.4959'),
('7828.3', '7828.3', '7139.02', '7139.02', 'Nov 8 2017', '152665.8004'),
('7250.72', '7250.72', '6993.97', '6993.97', 'Nov 7 2017', '64218.80873'),
('7446.07', '7446.07', '7411.72', '7411.72', 'Nov 6 2017', '107977.3012'),
('7609.27', '7609.27', '7379.4', '7379.4', 'Nov 5 2017', '60019.28751'),
('7499.34', '7499.34', '7215.64', '7215.64', 'Nov 4 2017', '107161.5543'),
('7454.44', '7454.44', '7043.37', '7043.37', 'Nov 3 2017', '165812.7165'),
('7354.8', '7354.8', '6762.35', '6762.35', 'Nov 2 2017', '257129.8641')

--////////////////////////////////////////////////////////////////////////////////////////////////////////