function trim(str, size) {
    if (str.split("").length <= size) {
      return str
    }
    let result = ""
    for (let i = 0; i < size; i++){
      result += str[i]
    }
    if (result.length > 3){
      return result.slice(0,(size - 3)) + "..."
    } else if (result.length <= 3){
      return result.slice(0, size) + "..."
    }
}