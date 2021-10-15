# PUINews

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Open Issues

## Major Issues
These points **need** to be addressed (A) and then verified by another user (V) before subimission:

1. Implement Detail View of article
4. Remove empty spots in grid on the main page **(A)**
5. Allow user to create article without image
   1. Currently, attempting this results in 'Error creating article'
      1. Okay this bug is more complex than it appears. It throws an error, but the article is actually created. These imageless articles are then the gaps on the main page.
   2. Fix issue that article creation without image throws an error.
6. Article image and title should forward user to detail view of the article **(A)**
7. Article removal requires the confirmation of the user before applying the removal **(A)**
8. Article removal must give some feedback to the user with the result of the operation **(A)**
9. If the username or password are incorrect, a message with this information must be shown
10. The navigation bar needs to include a text field to add some text that will be used to filter the articles shown in the main page of the newspaper
11. Page should be readable on mobile devices
12. Article body can be filled in HTML format (a WYSIWYG editor can be used).**(A)**

## Minor Issues
These points should be addressed (A) and then verified by another user (V),
but are not in the requirements:

1. Improve error messages
   1. Currently its mostly 'Error doing X'
2. Sometimes user needs to click on 'remove' twice
