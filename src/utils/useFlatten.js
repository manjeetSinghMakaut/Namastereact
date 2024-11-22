export const flattenObject = (data, parentKey = "", separator = ".") => {
    const result = {};
  
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const newKey = parentKey ? `${parentKey}${separator}${key}` : key;
  
        // Handle arrays
        if (Array.isArray(data[key])) {
          data[key].forEach((item, index) => {
            result[`${newKey}.${index}`] = item;
          });
        }
        // Handle nested objects
        else if (typeof data[key] === "object" && data[key] !== null) {
          Object.assign(result, flattenObject(data[key], newKey, separator));
        } else {
          result[newKey] = data[key];
        }
      }
    }
  
    return result;
  };
  