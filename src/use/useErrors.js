import { ref } from 'vue'
export default function () {
  const errors = ref({})
  // GET ERRRO
  const get = (field) => {
    // IF IS AN ARRAY ERROR
    if (field.includes('.')) {
      const splitString = field.split('.')

      // IT IS AN ARRAY FORM  -> FORM.IMAGE_GALLERY.0.IMAGES
      if (splitString.length === 4) {
        // LARAVEL FORM ERROR
        const errorOne = errors.value[splitString[0]][splitString[1]][splitString[2] + '.' + splitString[3]]
        if (errorOne) {
          return errorOne
        }

        if (errors.value[splitString[0]][splitString[1]][splitString[2]][splitString[3]]) {
          return errors.value[splitString[0]][splitString[1]][splitString[2]][splitString[3]][0]
        }
      }

      // IT IS AN ARRAY FORM  -> FORM.IMAGE_GALLERY.IMAGES
      if (splitString.length === 3) {
        // LARAVEL FORM ERROR
        const errorOne = errors.value[splitString[0]][splitString[1] + '.' + splitString[2]]
        if (errorOne) {
          return errorOne
        }

        if (errors.value[splitString[0]][splitString[1]][splitString[2]]) {
          return errors.value[splitString[0]][splitString[1]][splitString[2]][0]
        }
      }

      // ADD ERROR INSIDE ARRAY LIST -> FORM.TITLE
      if (errors.value[splitString[0]][splitString[1]]) {
        return errors.value[splitString[0]][splitString[1]][0]
      }

      return false
    }

    // VALIDATE WITH NO FORM REFRENCE -> TITLE
    if (errors.value[field]) {
      return errors.value[field][0]
    }
  }

  const record = (errorData, list = null) => {
    clear()
    if (list) {
      errors.value = [list]
      errors.value[list] = errorData
      return
    }

    errors.value = errorData
  }

  // RESET RECORDS
  const reset = () => {
    errors.value = {}
  }

  // ANY
  const any = () => {
    return Object.keys(errors.value).length > 0
  }

  // HAS
  const has = (field) => {
    // IF IS AN ARRAY ERROR
    if (field.includes('.')) {
      const splitString = field.split('.')

      if ({}.hasOwnProperty.call(errors.value, splitString[0])) {
        // IT IS AN ARRAY FORM  -> FORM.IMAGE_GALLERY.0.IMAGES
        if (splitString.length === 4) {
          if ({}.hasOwnProperty.call(errors.value[splitString[0]][splitString[1]], splitString[2])) {
            // LARAVEL FORM ERROR
            const errorOne = errors.value[splitString[0]][splitString[1]][splitString[2] + '.' + splitString[3]]
            if (errorOne) {
              return errorOne
            }

            // MY FORM ERROR
            return {}.hasOwnProperty.call(errors.value[splitString[0]][splitString[1]][splitString[2]], splitString[3])
          }
          return false
        }

        // IT IS AN ARRAY FORM  -> FORM.IMAGE_GALLERY.IMAGES
        if (splitString.length === 3) {
          // LARAVEL FORM ERROR
          const errorOne = errors.value[splitString[0]][splitString[1] + '.' + splitString[2]]
          console.log('errorOne', errorOne)
          if (errorOne) {
            return errorOne
          }
          // MY FORM ERROR

          // IT HAS FORM REFERENCE  -> FORM.TITLE
          const data = {}.hasOwnProperty.call(errors.value[splitString[0]], splitString[1])
          if (!data) {
            return false
          }
          return {}.hasOwnProperty.call(errors.value[splitString[0]][splitString[1]], splitString[2])
        }

        // IT HAS FORM REFERENCE  -> FORM.TITLE
        return {}.hasOwnProperty.call(errors.value[splitString[0]], splitString[1])
      }

      return false
    }

    // DOES NOT HAVA FORM REFERENCE  -> TITLE
    return {}.hasOwnProperty.call(errors.value, field)
  }

  // CLEAR
  const clear = (field) => {
    if (field) delete errors.value[field]

    errors.value = {}
  }

  // VERIFY ERROR AND CLEAR
  const verifyErrorAndClear = (field) => {
    if (has(field)) {
      clearField(field)
    }
  }

  // CLEAR FIELD
  const clearField = (field) => {
    // HAS ARRAY ERROR
    if (field.includes('.')) {
      const splitString = field.split('.')
      const listName = splitString[0]
      const fieldName = splitString[1]

      delete errors.value[listName][fieldName]
      return
    }

    delete errors.value[field]
  }
  return {
    errors,
    get,
    record,
    reset,
    any,
    has,
    clear,
    verifyErrorAndClear,
    clearField
  }
}
