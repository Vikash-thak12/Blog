const DateFormat = (dateString) => {
    // Check if dateString is valid
    if (!dateString) return "Invalid date"; // Return a default message if the date is invalid

    const date = new Date(dateString);

    // If date is invalid, return a default message
    if (isNaN(date.getTime())) return "Invalid date";

    // Get the day, month, year, hours, and minutes
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0'); // Ensure two digits
    const minutes = date.getMinutes().toString().padStart(2, '0'); // Ensure two digits

    // Determine the suffix for the day
    const suffix = (day) => {
        if (day > 3 && day < 21) return 'th'; // Because of 11th, 12th, 13th
        switch (day % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    };

    // Construct the final output
    return `${day}${suffix(day)} ${month} ${year} at ${hours}:${minutes}`;
};

export default DateFormat;
