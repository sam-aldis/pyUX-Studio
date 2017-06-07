# pyUX UI creator
[![Join the chat at https://gitter.im/pyUX/Lobby](https://badges.gitter.im/pyUX/Lobby.svg)](https://gitter.im/pyUX/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


You can clone both this project and its parent project (pyUX API itself)
just by runnning
```
curl https://ukjp-design.com/pyUX.sh | sh
```
(Feel free to look at the source for this if your a bit worried about running unknown scripts)
also make sure you have the latest version of npm installed first with:
```
npm i -g npm
```
-----
This is a sub project being developed alongside pyUX to
aid the design of the pyUXML files.
----
This is a sub-project being developed
alongside https://github.com/sam-aldis/pyUX which will
provide a XML based UI creator (think android studio).
this project will allow the creation of the UI's either
by drag and drop or by editing the xml directly and seeing
the output.

## Road Map
- Get the UI angular app looking like a native app
- Finish the api for the backend (as angular cant directly load local files)
- Get the angular app talking to the backend and loading files for editing
- Real time view as you edit code and the option to drag and drop elements onto the ui
- Eventually the ability to create custom elements will be included in the pyUI API so this will need to be added to the studio
- Merge into the electron project
- Publish
- Keep adding features


This should get you both projects (which are being developed at the same time)
add what you want and create a pull request.. I will review daily but any help
would be amazing!

you will need to run the backend server as well (see src/api)
```
tsc src/api/api.ts
node src/api/api.js
```

