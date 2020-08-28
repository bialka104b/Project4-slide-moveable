import "../sass/style.scss";

document.addEventListener("DOMContentLoaded", () => {
  const imagesContainerElement = document.querySelector(".slider__images-container");
  const img1Element = document.querySelector(".slider__image-container--first img");
  const img2Element = document.querySelector(".slider__image-container--second img");
  let drugging = false; //przechowa nam dane że właśnie w tym momencie jak przysicne myszke ma sie przesuwać
  const imagesContainerLeftOfset = imagesContainerElement.offsetLeft; //odsunięcie lewe krawędź slideraod ekranu
  const img1ContainerE = document.querySelector(".slider__image-container--first");
  const img2ContainerE = document.querySelector(".slider__image-container--second");
  const handleElement = document.querySelector(".slider__handle"); //to do przeciągania sliders
  const dividerElement = document.querySelector(".slider__divider");
  let imagesContainerWidth; //po uruchomieniu strony sie to uzupełni

  function getOffset(clientX) {
    //funkcja potrzebna do funkcji move
    const ofset = clientX - imagesContainerLeftOfset; //od pozycji clientX odejmujemy ofset lewy kontenera
    if (ofset < 0) {
      //jeżeli ofset <0  to zwracamy 0
      return 0;
    } else if (ofset > imagesContainerWidth) {
      //jeżeli oset jest większy niż szerokośc slidera to wykonaj
      return imagesContainerWidth; //zwróć szerokośc slajdera
    } else return ofset; //w pozostałych przypadkach zwróć ofset
  }
  function move(clientX) {
    //funkcja do obsłużenia kierunku przesuwania
    const offSet = getOffset(clientX); //jak daleko mamy przesunąć i w którym kierunku
    const procentage = (offSet / imagesContainerWidth) * 100; //zamieniam na wartość procentową
    dividerElement.style.left = `${procentage}%`;
    img2ContainerE.style.width = `${procentage}%`; //kontener drugiego naszego obrazka
  }

  function imitEvent() {
    handleElement.addEventListener("mousedown", () => {
      //zdarzenie mouse down na przyciśnięcia Prawego przycisku myszy
      drugging = true; //ustawiamy drugging na true, aby mozna było przesuwać
    });
    handleElement.addEventListener("mouseup", () => {
      //zdarzenie mouseup na podniesienia Prawego przycisku myszy
      drugging = false; //ustawiamy drugging na falese, aby nie mozna było przesuwać
    });
    window.addEventListener("mousemove", (event) => {
      //tutaj przesuwanie jest na całym okienku, jeśli chcesz na przycisku to zamień window na handleElement
      //zdarzenie mousemove reaguje na przesuwanie myszy
      if (drugging) {
        //jeśli wogóle zdarzenie przesuwania ma miejsce to wykonaj
        move(event.clientX);
      } //sprawdzamy w którym kierunku sie mysz przesuwa
    });
  }
  function adjustImagesSize() {
    imagesContainerWidth = imagesContainerElement.offsetWidth; //zmienna dostęna globalnie
    img1Element.style.width = imagesContainerWidth + "px";
    img2Element.style.width = imagesContainerWidth + "px";
  }

  window.addEventListener("resize", adjustImagesSize());

  adjustImagesSize();
  imitEvent();
});
