import React, { useEffect } from "react";
 

const CrossRateTable = (props) => {
    const {data}= props
    console.log("crossing",data)

 
  return  (

    <div>

{data &&  data.map((item, key)=> 

<div key={key} style={{flexDirection:'row', display:'flex', justifyContent:'flex-start', alignItems:'initial',  backgroundColor: key%2===0 ? 'white': '#E5E5E5'}}> 

     

<div style={{marginLeft:10, width:200,color:'#3d3d3d', fontFamily:'Roboto', fontSize:'14px', fontWeight:600}}>

{item.children[7].value ? `USD / ${item.attributes.CurrencyCode}`:` ${item.attributes.CurrencyCode} / USD` }
</div>



    <div style={{width:150,color:'#3d3d3d', fontFamily:'Roboto', fontSize:'14px', fontWeight:600}}>
   { item.children[0].value}
  
    </div>
    <div style={{width:320,color:'#3d3d3d', fontFamily:'Roboto', fontSize:'14px', fontWeight:600}}>
    {item.children[7].value ? `ABD DOLARI`:` ${item.children[1].value} ` }
    </div>
 
    <div style={{width:150,color:'#3d3d3d', fontFamily:'Roboto', fontSize:'14px', fontWeight:600}}>
 {item.children[7].value || item.children[8].value}
    </div>
    <div style={{width:320,color:'#3d3d3d', fontFamily:'Roboto', fontSize:'14px', fontWeight:600}}>
    {item.children[7].value ? ` ${item.children[1].value} `:`ABD DOLARI` }
    </div>
  


</div> )}

</div>
  )
  
 
};

export default CrossRateTable;
