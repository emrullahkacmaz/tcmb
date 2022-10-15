import React, { useEffect } from "react";
import CurrencyFlag from 'react-currency-flags';
 

const CurrencyTable = (props) => {

 const {data, searchText}=props
 

 console.log("datam",data)
  return  (

    <div>

{data &&  data.map((item, key)=> 

<div key={key} style={{flexDirection:'row', display:'flex', justifyContent:'flex-start', alignItems:'initial', backgroundColor: key%2===0 ? 'white': '#E5E5E5'}}> 

     
<div style={{flexDirection:'row', display:'flex',width:200}}> 
<CurrencyFlag currency={item.attributes.CurrencyCode} width={22}  style={{marginTop:2}}/>
<div style={{marginLeft:10,width:155,color:'#3d3d3d', fontFamily:'Roboto', fontSize:'14px', fontWeight:600}}>{ item.attributes.CurrencyCode } / TRY</div>
</div>


    <div style={{width:100,color:'#3d3d3d', fontFamily:'Roboto', fontSize:'14px', fontWeight:600}}>{item.children[0].value}</div>
    <div style={{width:350,color:'#3d3d3d', fontFamily:'Roboto', fontSize:'14px', fontWeight:600}}>{item.children[1].value}</div>
 
    <div style={{width:150,color:'#3d3d3d', fontFamily:'Roboto', fontSize:'14px', fontWeight:600}}>{item.children[3].value}</div>
    <div style={{width:150,color:'#3d3d3d', fontFamily:'Roboto', fontSize:'14px', fontWeight:600}}>{item.children[4].value}</div>
    <div style={{width:150,color:'#3d3d3d', fontFamily:'Roboto', fontSize:'14px', fontWeight:600}}>{item.children[5].value}</div>
    <div style={{width:150,color:'#3d3d3d', fontFamily:'Roboto', fontSize:'14px', fontWeight:600}}>{item.children[6].value}</div>


</div>)}

</div>
  )
  
 
};

export default CurrencyTable;
