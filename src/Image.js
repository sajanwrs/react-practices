import logo from "./assets/img-logo.png";

function Image() {
  const imgUrl = "https://source.unsplash.com/random/400x200";
  //1st way to load the image
  <div>
    <img src={logo} height={200} alt="Logo" />
  </div>;
  //2nd way to load the image
  <div>
    <img height={200} src={require("./assets/img-logo.png")} alt="Logo" />
  </div>;
  //3rd way to load the image
  <div>
    <img src={imgUrl} height={200} alt="Logo" />;
  </div>;
}

export default Image;
