/* VALIDACIÓN DE FORMULARIO */
const suscribeForm = document.getElementById("suscribeForm");
const nombreCompletoInput = document.getElementById("nombreCompleto");
const correoElectronicoInput = document.getElementById("correoElectronico");
const telefonoInput = document.getElementById("telefono");

// Evento submit
suscribeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  clearErrors(suscribeForm);

  validateNombreCompleto();
  validateCorreoElectronico();
  validateTelefono();

  const firstErrorInput = document.querySelector(".form__field--error");
  if (firstErrorInput) {
    firstErrorInput.parentElement.querySelector("input");
    return;
  }

  alert("¡Formulario enviado correctamente!");
});

// Eventos onBlur
nombreCompletoInput.addEventListener("blur", () => {
  validateNombreCompleto();
});
correoElectronicoInput.addEventListener("blur", () => {
  validateCorreoElectronico();
});
telefonoInput.addEventListener("blur", () => {
  validateTelefono();
});

// Validaciones

const validateNombreCompleto = () => {
  const errors = {
    empty: "errNombreVacio",
  };

  const inputElement = nombreCompletoInput;
  const value = inputElement.value.trim();

  if (value === "") {
    clearErrors(inputElement.parentElement);
    let errorMessage = "El campo de nombre no puede estar vacío.";
    displayError(errors.empty, inputElement, errorMessage);
    return;
  }

  clearErrors(inputElement.parentElement);
};

const validateCorreoElectronico = () => {
  const errors = {
    empty: "errCorreoVacio",
    invalid: "errCorreoInvalido",
  };

  const inputElement = correoElectronicoInput;
  const value = inputElement.value.trim();

  let errorMessage = "";
  if (value === "") {
    clearErrors(inputElement.parentElement);

    errorMessage = "El campo de correo electrónico no puede estar vacío.";
    displayError(errors.empty, inputElement, errorMessage); 
    return;
  } else {
    const correoRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegExp.test(value)) {
      clearErrors(inputElement.parentElement);

      errorMessage = "El formato de correo electrónico introducido es incorrecto";
      displayError(errors.invalid, inputElement, errorMessage);
      return;
    }
  }

  clearErrors(inputElement.parentElement);
};

const validateTelefono = () => {
  const errors = {
    invalid: "errTelefonoInvalido",
  };

  const inputElement = telefonoInput;
  const value = inputElement.value.trim();

  if (value !== "") {
    const correoRegExp = /^\d{9}$/;
    if (!correoRegExp.test(value)) {
      clearErrors(inputElement.parentElement);
      errorMessage = "El formato de teléfono introducido es incorrecto";
      displayError(errors.invalid, inputElement, errorMessage);
      return;
    }

    clearErrors(inputElement.parentElement);
  }
};

const displayError = (errorId, inputElement, errorMessage) => {
  // Crear elemento de error
  const errorElement = createError(errorId, errorMessage);

  // Añadir nodo de error al contenedor
  const errorContainerId = `${inputElement.id}__field`;
  const errorContainer = document.getElementById(errorContainerId);
  errorContainer.appendChild(errorElement);
  
  // Añadir id del error al input
  const currentAriaDescribedby = inputElement.getAttribute("aria-describedby");
  let newAriaDescribedby = "";
  if (currentAriaDescribedby !== null) {
    newAriaDescribedby = `${currentAriaDescribedby} ${errorId}`;
  } else {
    newAriaDescribedby = errorId;
  }
};

const createError = (errorId, errorMessage) => {
  const errorElement = document.createElement("span");
  errorElement.classList.add("form__field--error");

  // Crear el elemento de la imagen
  const errorIcon = document.createElement("img");
  errorIcon.src = "https://www.freeiconspng.com/thumbs/error-icon/error-icon-4.png";
  errorIcon.alt = "";
  errorIcon.classList.add("error-icon");

  errorElement.appendChild(errorIcon);

  const errorText = document.createElement("span");
  errorText.innerText = errorMessage;
  errorElement.appendChild(errorText);

  errorElement.id = errorId;

  return errorElement;
};

const clearErrors = (containerElement) => {
  const errorElements = containerElement.querySelectorAll(
    ".form__field--error"
  );
  errorElements.forEach((element) => {
    const inputElement = element.parentElement.querySelector("input");
    element.remove();
    if (inputElement) {
      inputElement.setAttribute("aria-describedby", `${inputElement.id}__hint`);
      inputElement.removeAttribute("aria-invalid");
    }
  });
};

