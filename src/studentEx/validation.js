


  export default function validateInput({ value, name },loginData,setLoginData){
    const newErrors = [];
    const { validations } = loginData[name];

    if (validations.required) {
      if (
        !value ||
        (name == "course" && value == "Choose Course") ||
        value === null
      ) {
        newErrors.push(`${name} is required`);
      }
    }

    if (name == "username") {
      if (!value || value.length <= 1) {
        newErrors.push(`${name} should be no less than 2 characters`);
      }
    }

    if (validations.pattern && !validations.pattern.test(value)) {
      if (name == "address") {
        if (value.length <= 9) {
          newErrors.push(`${name} should be no less than 10 characters`);
        }
      } else {
        newErrors.push(`Invalid ${name} value`);
      }
    }

    
    setLoginData((loginData)=>
      ({...loginData,
      [name]: {
        ...loginData[name],
        value:value,
        errors: newErrors,
        classes: newErrors.length ? "redInput" : ""}})
    );
    
    
  };