import React, { ChangeEvent, FormEvent, useState } from 'react';
import axios from 'axios';
import { Spinner } from 'reactstrap';

import './fileForm.css';

type FileFormProps = {
  setRewards: React.Dispatch<React.SetStateAction<null>>;
};

export default function FileForm({ setRewards }: FileFormProps) {
  const [selectedFile, setSelectedFile] = useState<File>();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmission = async (event: FormEvent) => {
    event.preventDefault();
    setError('');
    setLoading(true);

    const formData = new FormData();
    if (selectedFile) {
      formData.append('file', selectedFile);
      try {
        const response = await axios.post(
          'https://bundle-africa-challenge.herokuapp.com/csv',
          formData
        );
        setRewards(response?.data?.rewards);
        setLoading(false);
      } catch (err: any) {
        setError(err?.message);
        setLoading(false);
      }
    } else {
      setError('Please select a CSV file');
    }
  };

  const changeHandler = (event: ChangeEvent) => {
    if (event) {
      const files = (event?.target as HTMLInputElement).files;
      setError('');
      if (files) {
        if (!files[0].type.endsWith('csv')) {
          setError('Please select a CSV file');
          setSelectedFile(undefined);
          return;
        }
        setSelectedFile(files[0]);
      }
    }
  };

  return (
    <section className='row form-container'>
      <div className='col-xs-6 col-sm-6 col-md-5 col-xl-3 mx-auto'>
        {error && (
          <div className='alert alert-danger' role='alert'>
            {error}
          </div>
        )}
        <form onSubmit={handleSubmission}>
          <div className='input-group'>
            <input
              type='file'
              className='form-control'
              name='file'
              onChange={changeHandler}
            />
          </div>
          <button
            className='submit-btn mt-4 p-2'
            disabled={loading === false && selectedFile ? false : true}
          >
            Submit
          </button>
          {loading && <Spinner color='primary' type='grow' />}
        </form>
      </div>
    </section>
  );
}
