import React, { useEffect } from "react";
 

const CurrencyTableTitle = (props) => {

 
  return  (

    <div>

 

<div style={{flexDirection:'row', display:'flex', justifyContent:'flex-start', alignItems:'initial', backgroundColor:  '#E5E5E5', marginBottom:5}}> 

     

<div style={{width:200}}>

<div> Döviz Kodu</div>
  <div>Currency Code</div>
</div>



    <div style={{width:100}}>
    <div>Birim</div>
  <div>Unit</div>
    </div>
    <div style={{width:350}}>
    <div> Döviz Cinsi</div>
  <div>Currency</div>
    </div>
 
    <div style={{width:150}}>
    <div> Döviz Alış</div>
  <div>Forex Buying</div>
    </div>
    <div style={{width:150}}>
    <div> Döviz Satış</div>
  <div>Forex Selling</div>
    </div>
    <div style={{width:150}}>
    <div> Efektif Alış</div>
  <div>Banknote Buying</div>
    </div>
    <div style={{width:150}}>
    <div> Efektif Satış</div>
  <div>Banknote Selling</div>
    </div>


</div>

</div>
  )
  
 
};

export default CurrencyTableTitle;
