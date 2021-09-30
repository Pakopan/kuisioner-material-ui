import {Typography } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'
import Form from './components/Form';
import CstmButton from './components/CstmButton';
import React, {useState} from "react";
import CstmTable from './components/CstmTable';
import './App.css';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';

const styles = makeStyles (
  {
    table: {
      minWidth: 650,
    },

    App : {
      backgroundColor : "#2C4C57",
      color : "#1B2527"
    },
    Body : {
      backgroundColor : "#EFE1BA",
      minHeight : "100vh",
      marginLeft : "20%",
      marginRight : "20%",
      paddingTop : "2rem",
      display : "flex",
      flexDirection : "column",
      alignItems : "center"
    },

    Body2: {
      display : "flex",
      flexDirection : "row",
      alignItems :"center",
      paddingTop : "2rem"
    },
    Title : {
      paddingTop : "1rem",
      textAlign : "center",
      letterSpacing : "0.3rem"
    },
    formku : {
      display : "flex",
      flexDirection : "column",
      paddingRight : "1rem",
      paddingLeft : "1rem",
    },
    tableCont :{
      paddingTop: "2rem",
    }
  }
)

function App() {
  const kelas = styles();

  const [nama, setNama] = useState('');
  const [kota, setKota] = useState('');
  const [umur, setUmur] = useState('');
  const [hobi, setHobi] = useState('');
  const [hp, setHp] = useState('');
  const [gender, setGender] = useState('');


  const [users, setUsers] = useState([
    {
        nama : "Ervan Andi Wijaya",
        kota : "Tulungagung",
        umur : "22",
        hobi : "makan",
        hp : "085784234931",
        gender : "Pria"
    },
  ])

  const updateNama = e => {
    setNama(e.target.value);
  }
  
  const updateKota = e => {
    setKota(e.target.value);
  }
  
  const updateUmur = e => {
    setUmur(e.target.value);
  }
  
  const updateHobi = e => {
    setHobi(e.target.value);
  }
  
  const updateHp = e => {
    setHp(e.target.value);
  }
  
  const updateGender = e => {
    setGender(e.target.value);
  }

  const kirim = e =>{
    e.preventDefault();
    setUsers(prevUsers => [...prevUsers, {nama: nama, kota: kota, umur: umur, hobi: hobi, hp: hp, gender: gender}])
  };

  return (
    <div className={kelas.App}>
      <div className={kelas.Body}>
        <Typography className={kelas.Title} variant="h3">
          KUISIONER
        </Typography>
            <div className={kelas.Body2}> 
                <div className={kelas.formku}>
                  <Form name="Nama" value={nama} onChange={updateNama}/>
                  <Form name="Kota Asal" value={kota} onChange={updateKota}/>
                  <Form name="Umur" value={umur} onChange={updateUmur}/>
                </div>
                <div className={kelas.formku}>
                  <Form name="Hobi" value={hobi} onChange={updateHobi}/>
                  <Form name="Nomor HP" value={hp} onChange={updateHp}/>
                  <Form name="Jenis Kelamin" value={gender} onChange={updateGender}/>
                </div>
            </div>
            <CstmButton txt="Kirim" fungsi={kirim} />
        <div className={kelas.tableCont}>
        <TableContainer  component={Paper}>
          <Table stickyHeader aria-label="simple table">
            <TableHead>
              <CstmTable nama="Nama" kota="Kota Asal" umur="Umur" hobi="Hobi" hp="Nomor HP" gender="Jenis"/>
            </TableHead>
            <TableBody>
                {users.map(user => (
                  <CstmTable nama={user.nama} kota={user.kota} umur={user.umur} hobi={user.hobi} hp={user.hp} gender={user.gender}/>
                ))}
            </TableBody>
          </Table>
        </TableContainer>  
        </div>
        
      </div>
    </div>
  );
}

export default App;
