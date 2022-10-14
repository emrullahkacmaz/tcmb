import React, { useEffect } from "react";
 

const CrossRateTitle = (props) => {

 
  return  (

    <div>

<div style={{  backgroundColor:  '#E5E5E5', marginTop:30}}>Çapraz Kurlar / Cross Rates</div>

<div style={{flexDirection:'row', display:'flex', justifyContent:'flex-start', alignItems:'initial', backgroundColor:  '#E5E5E5', marginBottom:5}}> 

     

<div style={{width:200}}>

<div> Döviz Kodu</div>
  <div>Currency Code</div>
</div>



    <div style={{width:150}}>
    <div>Birim</div>
  <div>Unit</div>
    </div>
    <div style={{width:320}}>
    <div> Döviz Cinsi</div>
  <div>Currency</div>
    </div>
 
    <div style={{width:150}}>
    <div> Çapraz Kur</div>
  <div>Cross Rate</div>
    </div>
    <div style={{width:320}}>
    <div> Döviz Cinsi</div>
  <div>Currency</div>
    </div>
  


</div>

</div>
  )
  
 
};

export default CrossRateTitle;
