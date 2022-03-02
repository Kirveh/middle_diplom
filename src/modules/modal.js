import { animate } from "./helper";

const modal = () => {
  const modalHeader = document.querySelector(".header-modal--opened");
  const modalService = document.querySelector(".services-modal--opened");
  const overlay = document.querySelector(".overlay");

  const certificate = () => {
    const modalCertificate = document.createElement('div');
    modalCertificate.classList.add('certificate-modal', 'certificate-modal--opened');
    modalCertificate.style.cssText='max-width: 42%;'
    document.body.append(modalCertificate);

    const btnClose = document.createElement('span');
    btnClose.innerHTML = "x"
    btnClose.classList.add('certificate-modal__close');
    modalCertificate.append(btnClose);

    const documentImg = document.querySelector('.sertificate-document .img-responsive').cloneNode(true);
    documentImg.src = "images/documents/original/document4.jpg"
    modalCertificate.append(documentImg)

    document.querySelectorAll(".sertificate-document").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
      });
    });

    btnClose.addEventListener('mouseenter', (e) => { 
      e.target.style.transition = '1s';
      e.target.style.background = '#5d5d5d'; // Выставляем цвет
    });
    
    btnClose.addEventListener('mouseleave', (e) => {
      e.target.style.transition = '1s';
      e.target.style.background = '#4f686e'; 
    });
  };

  certificate();

  const modalCertificate = document.querySelector(".certificate-modal--opened")

  const modalOpen = (modal) => {
    if (window.outerWidth > 768) {
      modal.style.display = "block";
      overlay.style.display = "block";
      animate({
        duration: 500,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          modal.style.opacity = progress;
          modal.style.top = 50 * progress + "%";
        },
      });
    } else {
      modal.style.display = "block";
    }
  }

  const modalClose = (modal) => {
    modal.style.display = "none";
    overlay.style.display = "none";
  }


  const btnFun = (modal, btnOpen, btn) => {
    const btns = document.querySelectorAll(btnOpen);
    const btnClose = document.querySelector(btn);

    btns.forEach(btn => {
      btn.addEventListener('click', (e) => {
          modalOpen(modal);
      });
    });

    btnClose.addEventListener("click", () => {
      modalClose(modal)
    });

    overlay.addEventListener("click", () => {
      modalClose(modal)
  });

  };

  btnFun(modalHeader, "a[href^='#callback']", ".header-modal__close");
  btnFun(modalService, "a[href^='#application']", ".services-modal__close");
  btnFun(modalCertificate, ".sertificate-document", ".certificate-modal__close");
};

export default modal;



