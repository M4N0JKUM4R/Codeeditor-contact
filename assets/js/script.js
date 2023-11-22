let app = document.querySelector(".console-messages");
let contactSearch = document.querySelector(".search-field .search-text");

let customNodeCreator = function (character) {
  return document.createTextNode(character);
};

let visitors;
let details = [];

let guestValue = "guest";

let typewriter = new Typewriter(app, {
  autoStart: true,
  wrapperClassName: "console-writer",
  delay: 5,
  onCreateTextNode: customNodeCreator,
});

let typewriter2 = new Typewriter(contactSearch, {
  delay: 5,
  wrapperClassName: "search-writer",
  onCreateTextNode: customNodeCreator,
  autoStart: true,
});

typewriter2.typeString("Contact ").start();

const errorMessage = (errorText) => {
  typewriter
    .pauseFor(500)
    .typeString(`<div class="power-shell error">${errorText}</div>`)
    .start();
};

const successMessage = (successText) => {
  typewriter
    .pauseFor(500)
    .typeString(`<div class="power-shell success">${successText}</div>`)
    .start();
};

const pathAddress = () => {
  const userAddress = document.querySelector(".user-address");
  let path = `<div class="path">${
    guestValue.split(" ")[0]
  }@manojkumar.online ></div>`;
  userAddress.insertAdjacentHTML("beforeend", path);
};

const consoleMessage = (status, text) => {
  if (status == "error") {
    errorMessage(text);
    keepScrolling();
    pathAddress();
  } else if (status == "success") {
    successMessage(text);
    keepScrolling();
    pathAddress();
  }
};

const folderEl = document.querySelectorAll(".folder");

folderEl.forEach((folder) => {
  let clicked = 0;
  folder.addEventListener("click", (e) => {
    clicked++;
    if (clicked <= 3) {
      if (e.target.closest(".not-authorized")) {
        consoleMessage("error", "Not authorized");
      }
    } else if (clicked > 3) {
      setTimeout(() => {
        clicked = 0;
      }, 5000);
    }
  });
});

// Tour functions

let innerDetails = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

let tour = new Shepherd.Tour({
  defaultStepOptions: {
    cancelIcon: {
      enabled: false,
    },
    classes: "about-tour",
    scrollTo: { behavior: "smooth", block: "center" },
    tourName: "About tour",
    keyboardNavigation: true,
    exitOnEsc: true,
  },
});

tour.addStep({
  title: "",
  text: `Hey! I was missing some code. I hope it is to be filled by you. Can you help me out? Let's start with your name.`,
  attachTo: {
    element: "#contact-js .get-name",
    on: "right",
  },
  buttons: [
    {
      action() {
        let nameEl = document.querySelector(".shepherd-target");
        let nameValue = nameEl.value;
        let lastModal = document.querySelector(".shepherd-element:last-child");

        if (nameValue !== "") {
          innerDetails.name = nameValue;

          guestValue = nameValue;
          consoleMessage("success", `${guestValue.split(" ")[0]} Logged in`);
          document.querySelector(".get-email").disabled = false;
          return this.next();
        } else {
          clicked++;
          if (clicked <= 3) {
            consoleMessage("error", "Name is empty");
          } else if (clicked > 3) {
            setTimeout(() => {
              clicked = 0;
            }, 5000);
          }
          setTimeout(() => {
            lastModal
              .querySelector(".shepherd-content")
              .classList.remove("animate__animated", "animate__headShake");
          }, 500);
        }
      },
      text: "Next",
    },
  ],
  id: "creating",
});

let clicked = 0;

tour.addStep({
  title: "",
  text: `I would need your address so that I can reply back.`,
  attachTo: {
    element: "#contact-js .get-email",
    on: "right",
  },
  buttons: [
    {
      action() {
        document.querySelector(".get-email").disabled = true;
        return this.back();
      },
      classes: "shepherd-button-secondary",
      text: "Back",
    },
    {
      action() {
        let emailEl = document.querySelector(".shepherd-target");
        let emailValue = emailEl.value;
        let lastModal = document.querySelector(".shepherd-element:last-child");

        if (emailValue !== "") {
          innerDetails.email = emailValue;
          document.querySelector(".get-subject").disabled = false;
          return this.next();
        } else {
          clicked++;
          if (clicked <= 3) {
            consoleMessage("error", "Email is empty");
          } else if (clicked > 3) {
            setTimeout(() => {
              clicked = 0;
            }, 5000);
          }
          setTimeout(() => {}, 500);
        }
      },
      text: "Next",
    },
  ],
  id: "creating",
});

tour.addStep({
  title: "",
  text: `Let me know why you want to contact me. Do you have a project in mind? Do you want to recommend me movies, music or games? Do you want to meet up? Contact me even if you just want to say Hi!`,
  attachTo: {
    element: "#contact-js .get-subject",
    on: "right",
  },
  buttons: [
    {
      action() {
        document.querySelector(".get-subject").disabled = true;
        return this.back();
      },
      classes: "shepherd-button-secondary",
      text: "Back",
    },
    {
      action() {
        let subjectEl = document.querySelector(".shepherd-target");
        let subjectValue = subjectEl.value;

        if (subjectValue !== "") {
          innerDetails.subject = subjectValue;
          document.querySelector(".get-message").disabled = false;
          return this.next();
        } else {
          clicked++;
          if (clicked <= 3) {
            consoleMessage("error", "Subject is empty");
          } else if (clicked > 3) {
            setTimeout(() => {
              clicked = 0;
            }, 5000);
          }
          setTimeout(() => {}, 500);
        }
      },
      text: "Next",
    },
  ],
  id: "creating",
});

tour.addStep({
  title: "",
  text: `Now the actual message that you want to share. I am always up for chat for interesting topics, projects or even a engaging personal date my place or your place.`,
  attachTo: {
    element: "#contact-js .get-message",
    on: "right",
  },
  buttons: [
    {
      action() {
        document.querySelector(".get-message").disabled = true;
        return this.back();
      },
      classes: "shepherd-button-secondary",
      text: "Back",
    },
    {
      action() {
        let messageEl = document.querySelector(".shepherd-target");
        let messageValue = messageEl.value;

        if (messageValue !== "") {
          innerDetails.message = messageValue;
          sendText();
          return this.next();
        } else {
          clicked++;

          if (clicked <= 3) {
            consoleMessage("error", "Message field is empty");
          } else if (clicked > 3) {
            setTimeout(() => {
              clicked = 0;
            }, 5000);
          }
          setTimeout(() => {}, 500);
        }
      },
      text: "Complete & Send",
    },
  ],
  id: "creating",
});

tour.start();

const sendText = () => {
  let $ = jQuery;
  consoleMessage("success", "Processing your message...");
  $.ajax({
    type: "POST",
    url: "/wp-admin/admin-ajax.php",
    datatype: "html",
    data: {
      action: "manojsending_mail",
      name: innerDetails.name,
      message: innerDetails.message,
      subject: innerDetails.subject,
      contact: innerDetails.email,
    },
    success: function (response) {
      consoleMessage(
        "success",
        "I got your message through Telegram and Email. Please wait for my reply."
      );
    },
    error: function (response) {
      consoleMessage(
        "error",
        "I did not receive your message. Please use me@manojkumar.online."
      );
    },
  });
};

const keepScrolling = () => {
  let element = document.querySelector(".console-inner");
  element.scroll({
    top: element.scrollHeight,
    behavior: "smooth",
  });
};

// Clearing Console

const clearConsoleEl = document.querySelector(".clear-console");
clearConsoleEl.addEventListener("click", () => {
  app.querySelector(".console-writer").replaceChildren();
  let childElements = document.getElementsByClassName("path");

  for (let i = childElements.length - 1; i > 0; i--) {
    childElements[i].remove();
  }
});

// Tab Selection

let tabs = Array.from(document.getElementsByClassName("tab"));

const handleClick = (e) => {
  e.preventDefault();

  if (!e.currentTarget.closest(".contact-tab")) {
    consoleMessage("error", "Access denied");
  }
};

tabs.forEach((tab) => tab.addEventListener("click", handleClick));

// Search field

const searchField = document.querySelector(".search-field");

searchField.addEventListener("click", () => {
  consoleMessage("error", "Read only");
});
