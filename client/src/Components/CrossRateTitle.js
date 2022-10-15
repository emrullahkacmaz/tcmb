import React, { useEffect } from "react";
 

const CrossRateTitle = (props) => {

 
  return  (

    <div>

<div style={{  backgroundColor:  '#E5E5E5', marginTop:30, borderColor:'#3d3d3d',borderStyle:'groove', borderWidth:1, borderTopRightRadius:12, borderTopLeftRadius:12,color:'black', fontFamily:'Roboto', fontSize:'18px', fontWeight:'bold'}}><div style={{marginLeft:10}}>Çapraz Kurlar / Cross Rates</div> </div>

<div style={{flexDirection:'row', display:'flex', justifyContent:'flex-start', alignItems:'initial', backgroundColor:  '#E5E5E5', marginBottom:5, borderColor:'#3d3d3d',borderStyle:'groove', borderWidth:1,borderBottomLeftRadius:12, borderBottomRightRadius:12}}> 

     

<div style={{width:200, marginLeft:10}}>

<div style={{color:'black', fontFamily:'Roboto', fontSize:'16px', fontWeight:'bold'}}> Döviz Kodu</div>
  <div style={{color:'black', fontFamily:'Roboto', fontSize:'16px', fontWeight:'bold'}}>Currency Code</div>
</div>



    <div style={{width:150}}>
    <div style={{color:'black', fontFamily:'Roboto', fontSize:'16px', fontWeight:'bold'}}>Birim</div>
  <div style={{color:'black', fontFamily:'Roboto', fontSize:'16px', fontWeight:'bold'}}>Unit</div>
    </div>
    <div style={{width:320}}>
    <div style={{color:'black', fontFamily:'Roboto', fontSize:'16px', fontWeight:'bold'}}> Döviz Cinsi</div>
  <div style={{color:'black', fontFamily:'Roboto', fontSize:'16px', fontWeight:'bold'}}>Currency</div>
    </div>
 
    <div style={{width:150}}>
    <div style={{color:'black', fontFamily:'Roboto', fontSize:'16px', fontWeight:'bold'}}> Çapraz Kur</div>
  <div style={{color:'black', fontFamily:'Roboto', fontSize:'16px', fontWeight:'bold'}}>Cross Rate</div>
    </div>
    <div style={{width:320}}>
    <div style={{color:'black', fontFamily:'Roboto', fontSize:'16px', fontWeight:'bold'}}> Döviz Cinsi</div>
  <div style={{color:'black', fontFamily:'Roboto', fontSize:'16px', fontWeight:'bold'}}>Currency</div>
    </div>
  


</div>

</div>
  )
  
 
};

export default CrossRateTitle;
