const ar = /^[٠١٢٣٤٥٦٧٨٩]+$/;
const en = /^[0-9]+$/;

const numericValidator = (value: any) => {
  const testValue = (val: any) => {
    const strValue = String(val);

    return en.test(strValue) || ar.test(strValue);
  };

  if (Array.isArray(value)) {
    return value.every(testValue);
  }

  return testValue(value);
};

export default numericValidator;
