export const getMonthDays = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    const days = [];
    for (let i = firstDay.getDate(); i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }
    return days;
  };
  
  export const getCurrentMonthYear = (date) => {
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    return { month, year };
  };
  