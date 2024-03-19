import React from "react";
import { useState,useEffect } from "react";
import {
  Page,
  Image,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";
import logo1 from "logo.jpeg";
import logo2 from "krlogo.jpeg";
import photo from "download.jpeg";
// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
  },
  logo1: {
    height: "50px",
    width: "150px",
    marginTop: "10px",
  },
  logo2: {
    height: "50px",
    width: "100px",
    marginTop: "5px",
    marginRight: "270px",
    marginLeft: "-20px",
  },
  logos: {
    flexDirection: "row",
    marginTop: "5x",
  },
  prin1: {
    marginTop: "30px",
    fontSize: "10px",
  },

  date: {
    fontSize: "10px",
    marginLeft: "400px",
  },
  topic: {
    marginTop: "60px",
    textAlign: "center",
    color: "blue",
    fontSize: "15px",
    fontWeight: "bold",
  },
  body: {
    marginHorizontal: "2px",
    fontSize: "14.5px",
    marginVertical: "30px",
  },
  dob: {
    fontSize: "12px",
  },
  photo: {
    height: "150px",
    width: "100px",
    position: "absolute",
    marginTop: "350px",
    marginLeft: "400px",
  },
  purpose: {
    marginTop: "150px",
    fontSize: "13px",
  },
  sign: {
    fontSize: "13px",
    marginTop: "120px",
    marginLeft: "350px",
    marginBottom: "110px",
  },
  container: {
    backgroundColor: "transparent",
    margin: "20px",
    border: "1px solid black",
    padding: "30px",
  },
});
const downloadFunction =()=>{

}
// Create Document Component
export function MyDocument({uid}){
  console.log(uid);
  const [downloadData, setDownloaddata] = useState([]);

  // Declare handleDownload before calling it
  // const handleDownload = async (uid) => {
  //   try {
  //     const response = await fetch(`http://localhost:5001/particularRow/${uid}`);
  //     const jsondata = await response.json();
  //     setDownloaddata(jsondata);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  // Call handleDownload when the component mounts
  let jsondata;
  useEffect(
    async () => {
      try {
        const response = await fetch(`http://localhost:5001/particularRow/${uid}`);
        jsondata = await response.json();
        setDownloaddata(jsondata)
        console.log(jsondata);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
  }, []); // Add uid as a dependency

 
  return (
   
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.container}>
        <View style={styles.logos}>
          <View>
            <Image style={styles.logo2} src={logo2} />
          </View>
          <View>
            <Image style={styles.logo1} src={logo1}></Image>
          </View>
        </View>

        <View style={styles.prin1}>
          <Text>Dr. B.S.Murugan, M.Tech, Ph.D Principal</Text>
        </View>
        <View style={styles.date}>
          <Text>DATE: {downloadData.fname}</Text>
        </View>
        <View style={styles.topic}>
          <Text>BONAFIDE CERTIFICATE</Text>
        </View>
        <View style={styles.body}>
          <Text>
            This is to certify that JP (Reg No : 927621BCS046, Aadhar No :
            2147483647) S/O Mr. RAM is a bonafide student of our College,
            Studying in B.E during academic year III during the academic year
            2023-2024
          </Text>
        </View>
        <View style={styles.dob}>
          <Text>Date of Birth : 2023-10-04</Text>
        </View>
        <View style={styles.dob}>
          <Text>Boarding : DAYSCHOLAR</Text>
        </View>
        <View style={styles.photo}>
          <Image src={photo} />
        </View>
        <View style={styles.purpose}>
          <Text>This certificate is issued for the purpose of BANK LOAN</Text>
        </View>
        <View style={styles.sign}>
          <Text>PRINCIPAL</Text>
        </View>
      </View>
    </Page>
  </Document>
);}