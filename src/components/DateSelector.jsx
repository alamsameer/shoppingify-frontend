
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";


function DateSelector({ date, setDate,placeholder}) {
    const handleDateChange = (selectedDates) => {
          setDate(selectedDates[0]);
      };
    return (
        <div>
            <span className="text-base font-light block">{placeholder}</span>
            <Flatpickr
                data-enable-time={false}
                // placeholder={placeholder}
                className="text-base m-2 shadow-md"
                value={[date]}
                onChange={handleDateChange}
                options={{
                    dateFormat: 'Y-m-d',
                    locale: {
                      firstDayOfWeek: 1, // Start with Monday
                    },
                    // You can add other options here as needed
                  }}
                  placeholder={placeholder}
            />
        </div>
    )
}

export default DateSelector