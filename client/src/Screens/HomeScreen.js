import React, { useEffect, useState } from "react";
import axios from "axios";
import XMLParser from 'react-xml-parser';
import CurrencyTable from "../Components/CurrencyTable";
import CurrencyTableTitle from "../Components/CurrencyTableTitle";
import CrossRateTitle from "../Components/CrossRateTitle";
import CrossRateTable from "../Components/CrossRateTable";
import SpecialDrawing from "../Components/SpecialDrawing";
import logo from '../assets/tcm.jpg'
import search from '../assets/searchVector.png'

const HomeScreen = ({ user }) => {


  const [data, setData]=useState([]);
  const [date, setDate]=useState([]);
  const [sdr, setSdr]=useState();
  const [crossData, setCrossData]=useState([]);
  const [searchText, setSearchText]=useState('');

  useEffect(()=>{
    axios
    .get("https://www.tcmb.gov.tr/kurlar/today.xml", {
      "Content-Type": "application/xml; charset=utf-8"
    })
    .then(resp=> {
      var xml = new XMLParser().parseFromString(resp.data); 
      setSdr(xml.children[22])
      console.log("asıl bilgi", xml.attributes)
      setDate(xml.attributes)
     xml.children.splice(-1)
     setData(xml.children)

     {searchText.length>0 && setData(xml.children.filter((item=> item.attributes.CurrencyCode.toLowerCase().includes(searchText.toLowerCase()) || item.children[1].value.toLowerCase().includes(searchText.toLowerCase()) )))}

     var crossdata= xml.children.filter(item => item.children[7].value.length>0 || item.children[8].value.length>0)

     setCrossData(crossdata)
     {searchText.length>0 && setCrossData(xml.children.filter((item=> item.attributes.CurrencyCode.toLowerCase().includes(searchText.toLowerCase()) || item.children[1].value.toLowerCase().includes(searchText.toLowerCase()) )))}

  
  })
  },[searchText])


 console.log("ne geliorrrr",searchText)


 const orderHigh=()=>{
 setData(
   data
      .slice()
      .sort((a, b) => b.children[4].value - a.children[4].value)
  );

  setCrossData(
    crossData
       .slice()
       .sort((a, b) => (b.children[7].value|| b.children[8].value) - (a.children[7].value|| a.children[8].value))
   );

 }

 const orderLow=()=>{

  setData(
    data
       .slice()
       .sort((a, b) => a.children[4].value - b.children[4].value)
   );
   setCrossData(
    crossData
       .slice()
       .sort((a, b) => (a.children[7].value|| a.children[8].value) - (b.children[7].value|| b.children[8].value))
   );

 }

 
  return  (

  ( user?
  <div style={{diplay:'flex'}}>
     <div  style={{ marginLeft:10,marginBottom:20, fontFamily:'Roboto', fontSize:'18px', fontWeight:'bold',borderRadius:12,color:'#3d3d3d', backgroundColor:'white', borderColor:'#E5E5E5', borderWidth:3}} >{date.Tarih} Günü Saat 15:30'da Belirlenen Gösterge Niteliğindeki Türkiye Cumhuriyet Merkez Bankası Kurları
Indicative Exchange Rates Announced at 15:30 on {date.Date} by the Central Bank of Turkey
Bülten No:{date.Bulten_No}</div>
    <div style={{marginBottom:20, justifyContent:'space-between', flexDirection:'row', width:800, display:'flex'}}>
   <div style={{flexDirection:'row'}}>
    <img src={search} alt='Canvas'  style={{ width:23, height:23,marginLeft:10}}/>

 <input style={{paddingLeft:10, borderRadius:12,marginLeft:5,  borderColor:'#E5E5E5', borderWidth:3}} type='text'   onChange={txt=> setSearchText(txt.target.value)}/>
 </div>
 <button style={{fontFamily:'Roboto', fontSize:'16px', fontWeight:'bold',borderRadius:12, color:'#3d3d3d', backgroundColor:'white', borderColor:'#E5E5E5', borderWidth:3}} onClick={orderHigh}> Yüksek Fiyata Göre Sırala</button>
 <button style={{fontFamily:'Roboto', fontSize:'16px', fontWeight:'bold',borderRadius:12,color:'#3d3d3d', backgroundColor:'white', borderColor:'#E5E5E5', borderWidth:3}} onClick={orderLow}> Düşük Fiyata Göre Sırala</button>
 </div>

    <CurrencyTableTitle/>
     <CurrencyTable data={data}  searchText={searchText}/>
    <CrossRateTitle/>
    <CrossRateTable data={crossData}/>
    <SpecialDrawing  data={sdr}  />
     
     </div> :
     <img src={logo} alt='Canvas'  style={{marginTop:15, marginLeft:'10%', display:'flex', width:'80%', height:'70%'}}/>
     )
  )
  
 
};

export default HomeScreen;
