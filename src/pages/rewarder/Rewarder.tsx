import React from 'react';

import FileForm from './fileForm/FileForm';

import './rewarder.css';
import sampleCSV from '../../assets/sampleCSV.png';

type RewarderProps = {
  setRewards: React.Dispatch<React.SetStateAction<null>>;
};

export default function Rewarder({ setRewards }: RewarderProps) {
  return (
    <>
      <header className='jumbotron row p-3 rewarder-header'>
        <div className='col-12'>
          <h1 className='display-4'>Welcome to the rewarder application</h1>
          <p className='lead'>Upload a csv file to generate vouchers</p>
          <figure>
            <img src={sampleCSV} alt='sample CSV' className='img-fluid' />
            <figcaption>A sample CSV file</figcaption>
          </figure>
        </div>
      </header>
      <FileForm setRewards={setRewards} />
    </>
  );
}
