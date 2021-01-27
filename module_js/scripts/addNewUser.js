
function createFormField (config) {
  const { name, text, placeholder } = config

  const label = document.createElement('div');
  label.textContent = text;
  label.className = 'label';

  const input = document.createElement('input');
  input.name = name;
  input.placeholder = placeholder;

  const wrapper = document.createElement('div');
  wrapper.className = 'form-field';
  wrapper.appendChild(label)
  wrapper.appendChild(input)
  return wrapper
}

const FORM_CONFIG = [
  {
    name: 'name',
    text: 'Name',
    placeholder: "Enter your name"
  },
  {
    name: 'email',
    text: 'Email',
    placeholder: "Enter your email"
  },
  {
    name: 'website',
    text: 'Website',
    placeholder: "Enter your user website"
  },
]

const BUTTON_CONFIG = [
  {
    type: "button",
    text: "Cancel",
    color: "danger",
  },
  {
    type: "submit",
    text: "Save",
    color: "success",
  },
]

function validateInput () {
  isValid = true
  FORM_CONFIG.forEach(config => {
    name = config["name"]
    // console.log(name)
    const inputField = document.getElementsByName(name).item(0)
    // console.log(inputField.name)
    const labelAlreadyExists = document.getElementById(`input-error-${name}`)
    if (labelAlreadyExists) {
      labelAlreadyExists.remove()
    }
    if(inputField.value.length < 4){
      isValid= false
      const label = document.createElement('div');
      label.textContent = "-- Field must contain at least 4 characters";
      label.className = 'input-error';
      label.id = `input-error-${name}`
      form = document.getElementById('user-form')
      form.appendChild(label)
      inputField.after(label)
    }
  });
  return isValid
}

function createButton (config) {
  const { type, text, color } = config

  const button = document.createElement("button")
  button.type = type
  button.textContent = text
  button.className = `button-${color}`

  return button
}

function onSubmit (event) {
  event.preventDefault()
  if (validateInput() === true) {
    const elements = event.target.elements
    const newUser = {
      name: elements.name.value,
      email: elements.email.value,
      website: elements.website.value,
      id: Math.random(),
      company: {
        name: "some company"
      }
    }

    // console.log(newUser)
    createUserCard(newUser, true)
    form = document.getElementById('user-form')
    form.remove()
  }
}

function onButtonClick (event) {
  if(!(document.getElementById('user-form'))){
    const form = document.createElement('form')
    form.id = 'user-form'
    FORM_CONFIG.forEach(config => {
      const formField = createFormField(config)
      form.appendChild(formField)
    })

    const addUserButton = event.currentTarget
    const buttonWrapper = document.createElement('div')
    buttonWrapper.className = 'buttons-wrapper'
    BUTTON_CONFIG.forEach(config => {
      const button = createButton(config)
      if(config.type === 'button'){

        button.onclick = () => {
          form.remove()
        }
      }

      buttonWrapper.appendChild(button)
    });
    form.appendChild(buttonWrapper)
    form.onsubmit = onSubmit
    addUserButton.after(form)
  }

}


function addNewUserButtonHandler () {
  const buttonElement = document.getElementById('add-new-user');
  buttonElement.onclick = onButtonClick
}


function highlight (obj) {
  var color = obj.style.borderColor
  obj.style.borderColor = 'lightgreen';
  var width = obj.style.borderWidth
  obj.style.borderWidth = "thick";
  setTimeout(function () {
    obj.style.borderColor = color;
    obj.style.borderWidth = width;
  }, 5000);
}
