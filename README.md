*** pyUX UI creator ***
-----
This is a sub project being developed alongside pyUX to
aide the design of the pyUXML files.
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
- Eventually the ability to create custom elements will be included in the pyUI API so this
will need to be added to the studio
- Merge into the electron project
- Publish
- Keep adding features

if you would like to help just run
```
git clone https://github.com/sam-aldis/pyUX
git clone https://github.com/sam-aldis/pyUXStudio
cd pyUX
pip install -r requirements.pip
npm install
cd ../
cd pyUXStudio
npm install
```

This should get you both projects (which are being developed at the same time)
add what you want and create a pull request.. I will review daily but any help
would be amazing!
