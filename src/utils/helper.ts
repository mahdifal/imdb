export const debounce = (func, wait) => {
  let timeout: number;

  return function executedFunction(...args: any) {
    const later = () => {
      timeout = null;

      func(...args);
    };

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);
  };
};
