/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {
  ref, getDownloadURL, uploadBytesResumable,
} from 'firebase/storage';
import { storage } from '../Config/firebase.config';
import AdminSidebar from '../components/Sidebar/AdminSidebar';
import axios from '../Axios/Axios';

function AdminAddTrack() {
  const { register, errors, handleSubmit } = useForm();
  const [img, setImg] = useState();
  const [audio, setAudio] = useState('');
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    console.log('RESULT', data);
    if (data && img && audio) {
      try {
        await axios.post('/admin/addNewTrack', { data, img, audio }).then((response) => {
          const result = response.data;
          if (result.success) {
            console.log(result);
            navigate('/admin/tracks');
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  console.log(errors);
  const handleFile = (e) => {
    console.log(e.target.files[0]);
    setImg(e.target.files[0]);
  };
  const handleImgUpload = () => {
    if (img == null) { return; }
    const imageref = ref(storage, `/images/${img.name}`);
    console.log(imageref);
    const uploadtask = uploadBytesResumable(imageref, img);
    uploadtask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        // setProgresspercent(progress);
        console.log(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadtask.snapshot.ref).then((downloadURL) => {
          console.log(downloadURL);
          setImg(downloadURL);
        });
      },
    );
  };
  const handleAudioUpload = () => {
    if (audio == null) { return; }
    const audioref = ref(storage, `/audio/${audio.name}`);
    console.log(audioref);
    const uploadtask = uploadBytesResumable(audioref, audio);
    uploadtask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        // setProgresspercent(progress);
        console.log(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadtask.snapshot.ref).then((downloadURL) => {
          console.log(downloadURL);
          setAudio(downloadURL);
        });
      },
    );
  };
  return (
    <div className="w-screen h-screen bg-black flex relative">
      <div className="absolute m-3">
        <AdminSidebar />
      </div>
      <div className="w-100% sm:w-[80%] h-90vh absolute ml-0 sm:ml-72 my-3 bg-[#0b0b2ee3] text-white">
        <div className="flex justify-between">
          <h1 className="text-3xl m-8 font-extrabold">SONGS</h1>
          <Link to="/admin/home">
            <p className="m-12">HOME</p>
          </Link>
        </div>
        <div className="grid">
          <div className="w-[98%] flex p-3 m-3 border border-[#15157e] h-96 overflow-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="grid w-full">
              <div className="flex w-full">
                <div className="grid w-1/2">
                  <label>Song name</label>
                  <input
                    className="w-96 text-black h-10"
                    type="text"
                    placeholder="enter song name"
                    {...register('songName', { required: true, maxLength: 15 })}
                  />
                  <label>Artist name</label>
                  <input
                    className="w-96 text-black h-10"
                    placeholder="enter artist name"
                    type="text"
                    {...register('artistName', { required: true, maxLength: 15 })}
                  />
                  <label>Language</label>
                  <input
                    className="w-96 text-black h-10"
                    placeholder="enter language of the song"
                    type="text"
                    {...register('language', { required: true, maxLength: 15 })}
                  />
                  <label>Category</label>
                  <input
                    className="w-96 text-black h-10"
                    placeholder="enter the category of the song"
                    type="text"
                    {...register('category', { required: true, maxLength: 15 })}
                  />
                </div>
                <div className="w-1/2 grid bg-white h-full">
                  <div className="h-1/2 grid items-center">
                    <label className="border border-[#15157e] flex items-center justify-center h-44">
                      <div className="grid items-center justify-center">
                        <p className="text-lg text-black text-center">
                          <CloudUploadIcon />
                        </p>
                        <p className="text-black">Upload the Image file </p>
                      </div>
                      <div>
                        <input
                          type="file"
                          name="imgFile"
                          accept="image/*"
                          className="w-0 h-0"
                        // value={img}
                          onChange={handleFile}
                        />
                      </div>
                    </label>
                    <Button onClick={handleImgUpload}>Download</Button>
                  </div>
                  <div className="h-1/2 grid items-center">
                    <label className="flex items-center justify-center">
                      <div className="grid items-center justify-center">
                        <p className="text-lg text-black text-center">
                          <CloudUploadIcon />
                        </p>
                        <p className="text-black">Upload the Audio file </p>
                      </div>
                      <div>
                        <input
                          type="file"
                          name="audioFile"
                          accept="audio/*"
                          className="w-0 h-0"
                        // value={audio}
                          onChange={(e) => setAudio(e.target.files[0])}
                        />
                      </div>
                    </label>
                    <Button onClick={handleAudioUpload}>Download</Button>
                  </div>
                </div>
              </div>
              <div className="flex justify-center w-full">
                <Button type="submit">Upload</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminAddTrack;
