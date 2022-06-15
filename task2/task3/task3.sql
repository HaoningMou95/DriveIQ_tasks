SELECT b.name as 'Broker_Name', count(b.name) as 'Customer_Count'
FROM lp_wallet_card.CUSTOMER as c , lp_wallet_card.BROKER as b
where c.BROKER_ID = b.ID
group by Broker_Name
order by Customer_Count desc, Broker_Name asc;