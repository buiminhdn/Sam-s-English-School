// src/utils/dateUtils.js

/**
 * Format a Date object to dd/mm/yyyy (zero-padded)
 * @param {Date} date
 * @returns {string}
 */
export function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

/**
 * Get start and end date of the current month
 * @returns {{ startDate: string, endDate: string }}
 */
export function getCurrentMonthRange() {
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), 1);
  const end = new Date(now.getFullYear(), now.getMonth() + 1, 0); // last day of current month

  return {
    startDate: formatDate(start),
    endDate: formatDate(end),
  };
}
