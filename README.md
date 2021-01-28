# EmployeeData

This React app is used to search and filter a static employee database by name, department, and age.

## Usage

Begin typing in an employee's name to dynamically search. Filtering by department and age range is also dynamically available in the drop down menus.

## Requirements

- Node 6.13.0

## Commentary

This app utilizes styled components in order to eliminate stylesheets. This decision was made to better separate the different components of the app and allow small changes to one section to be made without concern about impacting the whole app. Additionally, the decision eliminates any concerns about gitignore with respect to stylesheets.

Styling of the app was performed after all functionality was achieved and the code base was streamlined and simplified. Additional styling is always an option however with a time boxed exercise some decisions were prioritized:
- Clear emphasis on search function by name followed by filtering criteria
- Easy legibility of employee entries and separation of each entry
- Focus on employee name followed by department and age
- Color scheme to match corporate branding and emphasize the employee data
- Font family to match corporate branding

The search functionality was performed without case sensitivity so searches can be performed in any combination of capital and lowercase letters.

The filter by age was done based on age range rather than single years. With ranges it is easier to simplify the search while eliminating any concern for not having the exact age. With a larger dataset this may be adjusted but with a limited number of sample employees the range functionality works well.

The filter by department was chosen as a drop down menu due to the limited number of departments and the desire to eliminate any misspelling issues.

### Installing Dependencies

From within the root directory:

- npm install -g webpack
- npm install
- npm run build
- npm run start