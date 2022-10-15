import React, { useEffect } from "react";
 

const SpecialDrawing = (props) => {
    const {data}= props
    

 
  return  (

    <div>

 <div style={{marginTop:30, backgroundColor:  '#E5E5E5', borderColor:'#3d3d3d',borderStyle:'groove', borderWidth:1,borderRadius:12, marginBottom:5}}><div style={{marginLeft:10, color:'black', fontFamily:'Roboto', fontSize:'16px', fontWeight:'bold' }}> Bilgi İçin / For Information</div> </div>

<div style={{flexDirection:'row', display:'flex', justifyContent:'flex-start', alignItems:'initial',  backgroundColor:  'white'}}> 

     

<div style={{marginLeft:10, width:200,color:'#3d3d3d', fontFamily:'Roboto', fontSize:'14px', fontWeight:600}}>
SDR / TRY

</div>



    <div style={{width:150,color:'#3d3d3d', fontFamily:'Roboto', fontSize:'14px', fontWeight:600}}>
 
    1
    </div>
    <div style={{width:320,color:'#3d3d3d', fontFamily:'Roboto', fontSize:'14px', fontWeight:600}}>
ÖZEL ÇEKME HAKKI (SDR)
    </div>
 
    <div style={{width:150,color:'#3d3d3d', fontFamily:'Roboto', fontSize:'14px', fontWeight:600}}>
{data && data.children[3].value}
    </div>
    <div style={{width:320,color:'#3d3d3d', fontFamily:'Roboto', fontSize:'14px', fontWeight:600}}>
	TÜRK LİRASI
    </div>
  


</div>  
<div style={{flexDirection:'row', display:'flex', justifyContent:'flex-start', alignItems:'initial',  backgroundColor:  '#E5E5E5'}}> 

     

<div style={{marginLeft:10, width:200,color:'#3d3d3d', fontFamily:'Roboto', fontSize:'14px', fontWeight:600}}>
SDR / USD

</div>



    <div style={{width:150,color:'#3d3d3d', fontFamily:'Roboto', fontSize:'14px', fontWeight:600}}>
 
    1
    </div>
    <div style={{width:320,color:'#3d3d3d', fontFamily:'Roboto', fontSize:'14px', fontWeight:600}}>
    ÖZEL ÇEKME HAKKI (SDR)
    </div>
 
    <div style={{width:150,color:'#3d3d3d', fontFamily:'Roboto', fontSize:'14px', fontWeight:600}}>
    {data && data.children[8].value}
    </div>
    <div style={{width:320,color:'#3d3d3d', fontFamily:'Roboto', fontSize:'14px', fontWeight:600}}>
 ABD DOLARI
    </div>
  


</div>  

</div>
  )
  
 
};

export default SpecialDrawing;
