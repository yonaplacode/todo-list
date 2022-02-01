import { useState } from "react"

export const useLocalStorage = (itemName, initialValue) => {
  let localStorageItem
  if (typeof window !== 'undefined') {
    localStorageItem = localStorage.getItem(itemName)
  }

  let parsedItem
  if (!localStorageItem && typeof window !== 'undefined') {
    localStorage.setItem(itemName,JSON.stringify(initialValue))
    parsedItem = initialValue
  } else {
    try{
      parsedItem = JSON.parse(localStorageItem)
    } catch(errror) {
          console.error("Not a JSON response")
    }
  }

  const [item, setItem] = useState(parsedItem)

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem)
    localStorage.setItem(itemName, stringifiedItem)
    setItem(newItem)
  }

  return [
    item,
    saveItem
  ]
}