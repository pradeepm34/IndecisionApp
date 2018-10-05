

export const isAdult = ((age)=>age>18 ? true:false);

export const canDrink = ((age)=> age> 21 ? "can drink":"not eligible")

const isSenior=((age)=>age>65 ? 'Senior': 'Not a Senior Citizen');

export default isSenior;

// export default ((age)=>age>65 ? 'Senior': 'Not a Senior Citizen');

// export {isAdult,canDrink,isSenior as default}