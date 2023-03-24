use test_mci;

-- 1
select nama, ukt
from data_fix
order by ukt desc;

-- 2
select nama, ukt
from data_fix
order by ukt desc, nama asc;

-- 3
select count(nama) as total
from data_fix
where ipk > 3.5
and semester = 8;

-- 4
select nama, ukt,
case 
	when ukt <= 1000000 then 'A'
    when ukt > 1000000 and ukt <= 2000000 then 'B'
    else  'c'
end as golongan
from data_fix
order by golongan asc, nama asc;

-- 5
SELECT nilai.nama, nilai.semester, nilai.ipk 
FROM data_fix nilai 
INNER JOIN (
  SELECT semester, MAX(ipk) AS max_ipk FROM data_fix GROUP BY semester
) nilai_max 
ON nilai.semester = nilai_max.semester AND nilai.ipk = nilai_max.max_ipk 
ORDER BY nilai.semester ASC, nilai.nama ASC;





