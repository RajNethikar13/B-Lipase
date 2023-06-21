const express = require('express');
const { MongoClient } = require ('mongodb');
const path = require('path');


const app = express();


app.set('views', path.join(__dirname, 'views')); // Set the views directory
app.set('view engine', 'ejs'); // Set the default view engine



const port = 3000;
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);



async function connectToDatabase(){
  try{
    await client.connect();
    console.log("Connected to database!");

    const dbName = "CepA";
    const collectionName = "CepA_01";

    const db = client.db(dbName);
    const collection = db.collection(collectionName);


    const pdbData = [
      {
        atom_serial: 1,
        atom_name: 'N1',
        residue_name: 'AMP',
        chain_identifier: 'A',
        residue_sequence_number: 1,
        x: 34.464,
        y: 39.67,
        z: 32.559,
        occupancy: 0.0,
        temperature_factor: 0.0,
        element_symbol: 'N'
      },
      {
        atom_serial: 2,
        atom_name: 'N2',
        residue_name: 'AMP',
        chain_identifier: 'A',
        residue_sequence_number: 1,
        x: 32.444,
        y: 38.5,
        z: 34.533,
        occupancy: 0.0,
        temperature_factor: 0.0,
        element_symbol: 'N'
      },
      {
        atom_serial: 3,
        atom_name: 'N3',
        residue_name: 'AMP',
        chain_identifier: 'A',
        residue_sequence_number: 1,
        x: 30.229,
        y: 36.774,
        z: 36.914,
        occupancy: 0.0,
        temperature_factor: 0.0,
        element_symbol: 'N'
      },
      {
        atom_serial: 4,
        atom_name: 'C4',
        residue_name: 'AMP',
        chain_identifier: 'A',
        residue_sequence_number: 1,
        x: 33.852,
        y: 38.728,
        z: 34.226,
        occupancy: 0.0,
        temperature_factor: 0.0,
        element_symbol: 'C'
      },
      {
        atom_serial: 5,
        atom_name: 'C5',
        residue_name: 'AMP',
        chain_identifier: 'A',
        residue_sequence_number: 1,
        x: 34.083,
        y: 40.17,
        z: 33.75,
        occupancy: 0.0,
        temperature_factor: 0.0,
        element_symbol: 'C'
      },
      {
        atom_serial: 6,
        atom_name: 'C6',
        residue_name: 'AMP',
        chain_identifier: 'A',
        residue_sequence_number: 1,
        x: 34.33,
        y: 38.245,
        z: 32.776,
        occupancy: 0.0,
        temperature_factor: 0.0,
        element_symbol: 'C'
      },
      {
        atom_serial: 7,
        atom_name: 'C7',
        residue_name: 'AMP',
        chain_identifier: 'A',
        residue_sequence_number: 1,
        x: 34.552,
        y: 40.296,
        z: 31.263,
        occupancy: 0.0,
        temperature_factor: 0.0,
        element_symbol: 'C'
      },
      {
        atom_serial: 8,
        atom_name: 'C8',
        residue_name: 'AMP',
        chain_identifier: 'A',
        residue_sequence_number: 1,
        x: 33.938,
        y: 39.224,
        z: 30.322,
        occupancy: 0.0,
        temperature_factor: 0.0,
        element_symbol: 'C'
      },
      {
        atom_serial: 9,
        atom_name: 'C9',
        residue_name: 'AMP',
        chain_identifier: 'A',
        residue_sequence_number: 1,
        x: 34.999,
        y: 38.462,
        z: 29.506,
        occupancy: 0.0,
        temperature_factor: 0.0,
        element_symbol: 'C'
      },
      {
        atom_serial: 10,
        atom_name: 'C10',
        residue_name: 'AMP',
        chain_identifier: 'A',
        residue_sequence_number: 1,
        x: 32.894,
        y: 39.842,
        z: 29.375,
        occupancy: 0.0,
        temperature_factor: 0.0,
        element_symbol: 'C'
      },
      {
        atom_serial: 11,
        atom_name: 'C11',
        residue_name: 'AMP',
        chain_identifier: 'A',
        residue_sequence_number: 1,
        x: 35.977,
        y: 40.726,
        z: 30.945,
        occupancy: 0.0,
        temperature_factor: 0.0,
        element_symbol: 'C'
      },
      {
        atom_serial: 12,
        atom_name: 'C12',
        residue_name: 'AMP',
        chain_identifier: 'A',
        residue_sequence_number: 1,
        x: 32.05,
        y: 37.722,
        z: 35.584,
        occupancy: 0.0,
        temperature_factor: 0.0,
        element_symbol: 'C'
      },
      {
        atom_serial: 13,
        atom_name: 'C13',
        residue_name: 'AMP',
        chain_identifier: 'A',
        residue_sequence_number: 1,
        x: 30.545,
        y: 37.569,
        z: 35.719,
        occupancy: 0.0,
        temperature_factor: 0.0,
        element_symbol: 'C'
      },
      {
        atom_serial: 14,
        atom_name: 'C14',
        residue_name: 'AMP',
        chain_identifier: 'A',
        residue_sequence_number: 1,
        x: 28.549,
        y: 37.029,
        z: 32.617,
        occupancy: 0.0,
        temperature_factor: 0.0,
        element_symbol: 'C'
      },
      {
        atom_serial: 15,
        atom_name: 'C15',
        residue_name: 'AMP',
        chain_identifier: 'A',
        residue_sequence_number: 1,
        x: 29.123,
        y: 37.611,
        z: 33.682,
        occupancy: 0.0,
        temperature_factor: 0.0,
        element_symbol: 'C'
      },
      {
        atom_serial: 16,
        atom_name: 'C16',
        residue_name: 'AMP',
        chain_identifier: 'A',
        residue_sequence_number: 1,
        x: 29.951,
        y: 36.92,
        z: 34.487,
        occupancy: 0.0,
        temperature_factor: 0.0,
        element_symbol: 'C'
      },
      {
        atom_serial: 17,
        atom_name: 'C17',
        residue_name: 'AMP',
        chain_identifier: 'A',
        residue_sequence_number: 1,
        x: 30.18,
        y: 35.625,
        z: 34.209,
        occupancy: 0.0,
        temperature_factor: 0.0,
        element_symbol: 'C'
      },
      {
        atom_serial: 18,
        atom_name: 'C18',
        residue_name: 'AMP',
        chain_identifier: 'A',
        residue_sequence_number: 1,
        x: 29.612,
        y: 35.037,
        z: 33.145,
        occupancy: 0.0,
        temperature_factor: 0.0,
        element_symbol: 'C'
      },
      {
        atom_serial: 19,
        atom_name: 'C19',
        residue_name: 'AMP',
        chain_identifier: 'A',
        residue_sequence_number: 1,
        x: 28.795,
        y: 35.739,
        z: 32.346,
        occupancy: 0.0,
        temperature_factor: 0.0,
        element_symbol: 'C'
      },
      {
        atom_serial: 20,
        atom_name: 'O20',
        residue_name: 'AMP',
        chain_identifier: 'A',
        residue_sequence_number: 1,
        x: 32.839,
        y: 37.204,
        z: 36.335,
        occupancy: 0.0,
        temperature_factor: 0.0,
        element_symbol: 'O'
      },
      {
        atom_serial: 21,
        atom_name: 'O21',
        residue_name: 'AMP',
        chain_identifier: 'A',
        residue_sequence_number: 1,
        x: 36.017,
        y: 41.593,
        z: 29.916,
        occupancy: 0.0,
        temperature_factor: 0.0,
        element_symbol: 'O'
      },
      {
        atom_serial: 22,
        atom_name: 'O22',
        residue_name: 'AMP',
        chain_identifier: 'A',
        residue_sequence_number: 1,
        x: 36.975,
        y: 40.357,
        z: 31.516,
        occupancy: 0.0,
        temperature_factor: 0.0,
        element_symbol: 'O'
      },
      {
        atom_serial: 23,
        atom_name: 'O23',
        residue_name: 'AMP',
        chain_identifier: 'A',
        residue_sequence_number: 1,
        x: 33.956,
        y: 41.302,
        z: 34.125,
        occupancy: 0.0,
        temperature_factor: 0.0,
        element_symbol: 'O'
      },
      {
        atom_serial: 24,
        atom_name: 'S24',
        residue_name: 'AMP',
        chain_identifier: 'A',
        residue_sequence_number: 1,
        x: 33.1,
        y: 38.022,
        z: 31.456,
        occupancy: 0.0,
        temperature_factor: 0.0,
        element_symbol: 'S'
      },
      {
        atom_serial: 25,
        atom_name: 'N',
        residue_name: 'LEU',
        chain_identifier: 'A',
        residue_sequence_number: 27,
        x: 51.78,
        y: 22.89,
        z: 52.64,
        occupancy: 1.0,
        temperature_factor: 0.0,
        element_symbol: 'N'
      },
      {
        atom_serial: 26,
        atom_name: 'CA',
        residue_name: 'LEU',
        chain_identifier: 'A',
        residue_sequence_number: 27,
        x: 50.94,
        y: 22.67,
        z: 51.41,
        occupancy: 1.0,
        temperature_factor: 0.0,
        element_symbol: 'C'
      },
      {
        atom_serial: 27,
        atom_name: 'C',
        residue_name: 'LEU',
        chain_identifier: 'A',
        residue_sequence_number: 27,
        x: 49.48,
        y: 22.82,
        z: 51.67,
        occupancy: 1.0,
        temperature_factor: 0.0,
        element_symbol: 'C'
      },
      {
        atom_serial: 28,
        atom_name: 'O',
        residue_name: 'LEU',
        chain_identifier: 'A',
        residue_sequence_number: 27,
        x: 48.9,
        y: 23.87,
        z: 51.35,
        occupancy: 1.0,
        temperature_factor: 0.0,
        element_symbol: 'O'
      },
      {
        atom_serial: 29,
        atom_name: 'CB',
        residue_name: 'LEU',
        chain_identifier: 'A',
        residue_sequence_number: 27,
        x: 51.28,
        y: 21.44,
        z: 50.65,
        occupancy: 1.0,
        temperature_factor: 0.0,
        element_symbol: 'C'
      },
      {
        atom_serial: 30,
        atom_name: 'CG',
        residue_name: 'LEU',
        chain_identifier: 'A',
        residue_sequence_number: 27,
        x: 50.67,
        y: 21.1,
        z: 49.26,
        occupancy: 1.0,
        temperature_factor: 0.0,
        element_symbol: 'C'
      },
      {
        atom_serial: 31,
        atom_name: 'CD1',
        residue_name: 'LEU',
        chain_identifier: 'A',
        residue_sequence_number: 27,
        x: 49.79,
        y: 19.85,
        z: 49.38,
        occupancy: 1.0,
        temperature_factor: 0.0,
        element_symbol: 'C'
      },
      {
        atom_serial: 32,
        atom_name: 'CD2',
        residue_name: 'LEU',
        chain_identifier: 'A',
        residue_sequence_number: 27,
        x: 50.14,
        y: 22.18,
        z: 48.08,
        occupancy: 1.0,
        temperature_factor: 0.0,
        element_symbol: 'C'
      }
    ];



      collection.insertMany(pdbData, function(err, result) {
        if (err) {
          console.log('Error inserting pdbData:', err);
          client.close();
          return;
        }
    
        console.log('pdbData inserted successfully');
        client.close();
      });
    } 
    catch (error) {
      console.error("Error connecting to the database:", error);
    }
  }

  async function getCollectionData(collectionName) {
    try {
      const database = client.db('CepA');
      const collection = database.collection('CepA_01');
      const data = await collection.find().toArray();
      return data;
    } catch (error) {
      console.error(`Failed to retrieve data from collection "${collectionName}"`, error);
      return [];
    }
  }



  
  async function startServer() {


  
    app.get('/data', async (req, res) => {
      const data = await getCollectionData('CepA_01');
         
    res.render('views', { data });
    });
    
  
    app.listen(port, () => {
      console.log('Server is running on port 3000');
    });
  }
  
  async function main() {
    await connectToDatabase();
    await startServer();
  }
  
  main().catch((error) => {
    console.error('An error occurred:', error);
  });
 
 




