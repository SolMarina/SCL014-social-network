export const contentHome = () => {
  const home = `
  <header class="header headerHome">
  <div id="logoAndToggle">
    <div id="logoHeader">
      <img class="logoImg" src="img/logo.png" alt="logo">
    </div>
    <div id="buttonsHeader">
      <div class="paw">
        <a href="#/LikedDogs" id="pawIconHeader"><img class="iconsFooter" src="./img/iconPawHeader.png" alt="paw"></a>
      </div>
      <div class="home">
        <a href="#/Home" id="homeIconHeader"><img class="iconsFooter" src="./img/homeIconLiked.png" alt="home"></a>
      </div>
      <div class="profile">
        <a href="#/myProfile" id="myProfileIconHeader"><img class="iconsFooter"  src="./img/iconProfileHeader.png" alt="profile"></a>
      </div>
    </div>
    </div>
  </div>
</header>    
<div id='menuBar'>
    <div><p id='emailLogOut'>${JSON.parse(sessionStorage.userBarkify).email}</p></div>
    <br>
    <div>
      <a href=" " class="btnLogOut" id="cerrarbtn">Cerrar sesión</a></div>
  </div>
  <main>
    <div id="contentHome">
    </div>    
  </main>
  <footer>
    <div class="paw">
      <a href="#/LikedDogs" id="PawIcon"><img class="iconsFooter" src="./img/iconPaw.png" alt="paw"></a>
    </div>
    <div class="home">
      <a href="#/Home" id="HomeIcon"><img class="iconsFooter" src="./img/homeIconLiked.png" alt="home"></a>
    </div>
    <div class="profile">
     <a href="#/myProfile" id="myProfileIcon"><img class="iconsFooter"  src="./img/iconProfile.png" alt="profile"></a>
    </div>
  </footer>
    `;
  return home;

};
