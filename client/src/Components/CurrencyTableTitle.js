import React, { useEffect } from "react";
 

const CurrencyTableTitle = (props) => {

 
  return  (

    <div>

 

<div style={{flexDirection:'row', display:'flex', justifyContent:'flex-start', alignItems:'initial', backgroundColor:  '#E5E5E5', marginBottom:5, borderColor:'#3d3d3d',borderStyle:'groove', borderWidth:1, borderRadius:12}}> 
 

<div style={{marginLeft:10,width:190}}>

<div style={{color:'black', fontFamily:'Roboto', fontSize:'16px', fontWeight:'bold'}}> Döviz Kodu</div>
  <div style={{color:'black', fontFamily:'Roboto', fontSize:'16px', fontWeight:'bold'}}>Currency Code</div>
</div>



    <div style={{width:110}}>
    <div style={{color:'black', fontFamily:'Roboto', fontSize:'16px', fontWeight:'bold'}}>Birim</div>
  <div style={{color:'black', fontFamily:'Roboto', fontSize:'16px', fontWeight:'bold'}}>Unit</div>
    </div>
    <div style={{width:350}}>
    <div style={{color:'black', fontFamily:'Roboto', fontSize:'16px', fontWeight:'bold'}}> Döviz Cinsi</div>
  <div style={{color:'black', fontFamily:'Roboto', fontSize:'16px', fontWeight:'bold'}}>Currency</div>
    </div>
 
    <div style={{width:150}}>
    <div style={{color:'black', fontFamily:'Roboto', fontSize:'16px', fontWeight:'bold'}}> Döviz Alış</div>
  <div style={{color:'black', fontFamily:'Roboto', fontSize:'16px', fontWeight:'bold'}}>Forex Buying</div>
    </div>
    <div style={{width:150}}>
    <div style={{color:'black', fontFamily:'Roboto', fontSize:'16px', fontWeight:'bold'}}> Döviz Satış</div>
  <div style={{color:'black', fontFamily:'Roboto', fontSize:'16px', fontWeight:'bold'}}>Forex Selling</div>
    </div>
    <div style={{width:150}}>
    <div style={{color:'black', fontFamily:'Roboto', fontSize:'16px', fontWeight:'bold'}}> Efektif Alış</div>
  <div style={{color:'black', fontFamily:'Roboto', fontSize:'16px', fontWeight:'bold'}}>Banknote Buying</div>
    </div>
    <div style={{width:150}}>
    <div style={{color:'black', fontFamily:'Roboto', fontSize:'16px', fontWeight:'bold'}}> Efektif Satış</div>
  <div style={{color:'black', fontFamily:'Roboto', fontSize:'16px', fontWeight:'bold'}}>Banknote Selling</div>
    </div>


</div>

</div>
  )
  
 
};

export default CurrencyTableTitle;
