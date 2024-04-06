import React from "react";
import ImageUploading from "react-images-uploading";
import ProfileAvater from "../../assets/images/profile-icon.png";

import "./file-upload.scss";
export function FileUpload() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <>
      <img src={ProfileAvater} />
      <p>
        {" "}
        Joined in <span style={{ color: "#000" }}>2024</span>
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
