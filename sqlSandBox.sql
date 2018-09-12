CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  user_firstname VARCHAR(255),
  user_lastname VARCHAR(255),
  user_email VARCHAR(255),
  user_url TEXT
)

INSERT INTO users (user_firstname, user_lastname, user_email, user_url )
VALUES ('John', 'Smith', 'johnsmith879@gmail.com', 'url picture placeholder'),
      ('Vu', 'Tran', 'vutran879@gmail.com', 'url picture placeholder')


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