SELECT 
	t1.c1 AS data,
    t1.c2 AS id_marca,
    t1.c3 AS vendas,
    t1.c4 AS valor_do_veiculo,
    t1.c5 AS nome,
    t2.c2 AS nome_marca
FROM broken_database_1_corrigid t1
INNER JOIN broken_database_2_corrigid t2 ON t1.c2 = t2.c1;
