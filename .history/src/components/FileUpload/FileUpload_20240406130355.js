import { grey } from "@material-ui/core/colors";
import { SortByAlphaRounded } from "@material-ui/icons";
import React, { useEffect } from "react";
import ImageUploading from "react-images-uploading";
import ProfileAvater from "../../assets/images/profile-icon.png";
import Icon from "../../assets/images/upload-file.png";

import "./file-upload.scss";
export function FileUpload(props) {
  const [images, setImages] = React.useState([]);
  const [img, setImg] = React.useState(null);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  useEffect(() => {
    if (!images[0]) return;
    setImg(images[0].data_url || null);
    // console.log(images[0]);
  }, [images]);
  //   function setCollectedImg(img) {
  //     let imageList = images;
  //     let newImg = { data_url: img };

  //     imageList.push(newImg);
  //     console.log(imageList);
  //     setImages(images);
  //     toggle();
  //     return () => onChange;
  //   }
  return (
    <>
      <img src={img || ProfileAvater} />
      <p
        style={{
          fontFamily: "SoraR",
          color: "#969393",
          fontSize: "11px",
          marginTop: "8px",
        }}
      >
        {props.detail}
        <span style={{ color: "#000" }}> {props.year}</span>
      </p>
      <div className="file-input-div">
        <center>
          {" "}
          <img src={Icon} />
        </center>
        <ImageUploading
          // multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            //   onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            // write your building UI
            <div className="upload__image-wrapper">
              <button
                style={isDragging ? { color: "red" } : undefined}
                onClick={onImageUpload}
                {...dragProps}
              >
                <span> Click to upload</span> or drag and drop
              </button>
              &nbsp;
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img src={image["data_url"]} alt="" width="100" />
                  <div className="image-item__btn-wrapper">
                    <button onClick={() => onImageUpdate(index)}>Update</button>
                    <button onClick={() => onImageRemove(index)}>Cancel</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
        <p>SVG, PNG, JPG or GIF (max. 800x400px)</p>
      </div>
    </>
  );
}
