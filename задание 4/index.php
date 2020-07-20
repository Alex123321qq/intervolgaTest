<?php
$arr= array(1,1,3,3,4,5,6,7,8,5,5);//массив
$Count=0;//количество последовательных пар 

for ($i=1;$i<count($arr);$i++){
    if($arr[$i]==$arr[$i-1]){
        $Count++;
        $i++;       
    }
}

echo $Count;
?>